import { writeFileSync, copyFileSync, existsSync } from "fs";
import { join } from "path";

const distDir = "dist";

// Create .nojekyll file
writeFileSync(join(distDir, ".nojekyll"), "");

// Copy CNAME if it exists
const cnamePath = "CNAME";
if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, join(distDir, "CNAME"));
  console.log("✓ Copied CNAME to dist");
}

console.log("✓ Created .nojekyll file");
