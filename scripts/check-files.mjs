import { execFileSync } from "node:child_process";
import path from "node:path";

const staged = process.argv.includes("--staged");
const args = staged
  ? ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"]
  : ["ls-files", "-z"];
const files = execFileSync("git", args, { encoding: "utf8" })
  .split("\0")
  .filter(Boolean);
const errors = [];
for (const file of files) {
  const name = path.posix.basename(file);
  if (
    (/^\.env(?:$|[.~])/.test(name) && name !== ".env.example") ||
    /\.(?:pem|key|p12|pfx|jks)$/i.test(name) ||
    /^(?:credentials|service-account.*)\.json$/i.test(name)
  ) {
    errors.push(`${file}: archivo de credenciales prohibido`);
  }
  if (name === ".env.example") {
    const content = execFileSync("git", ["show", `:${file}`], {
      encoding: "utf8",
    });
    if (
      content.split("\n").some((line) => {
        const clean = line.trim();
        return (
          clean && !clean.startsWith("#") && !/^[A-Z_][A-Z0-9_]*=$/.test(clean)
        );
      })
    )
      errors.push(`${file}: la plantilla debe contener solo valores vacíos`);
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log("Archivos revisados: sin archivos de credenciales versionados.");
