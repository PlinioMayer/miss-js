import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "node:fs";
import { RollupOptions } from "rollup";
import { replaceTscAliasPaths } from "tsc-alias";
// import alias from "@rollup/plugin-alias";
// import { resolve } from "node:path";

const rootPkgJson = JSON.parse(readFileSync("./package.json", "utf-8"));

const buildConfig = (pkg?: string): RollupOptions[] => {
  const prefix = pkg ? `./${pkg}` : ".";
  const pkgJson = JSON.parse(readFileSync(`${prefix}/package.json`, "utf-8"));
  const outDir = `${prefix}/dist`;

  return [
    {
      input: `${prefix}/src/index.ts`,
      output: [
        {
          file: `${prefix}/${pkgJson.main}`,
          format: "cjs",
        },
        {
          file: `${prefix}/${pkgJson.module}`,
          format: "esm",
        },
      ],
      plugins: [
        typescript({
          include: [`${prefix}/src/**/*`],
          compilerOptions: {
            declaration: true,
            module: "ESNext",
            outDir,
          },
        }),
        {
          name: "tsc-alias",
          writeBundle: () => {
            replaceTscAliasPaths({ outDir });
          },
        },
      ],
    },
  ];
};

export default rootPkgJson.workspaces
  .flatMap((pkg: string) => buildConfig(pkg))
  .concat(...buildConfig());
