import typescript from "@rollup/plugin-typescript";
import { readFileSync } from "node:fs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const rootPkgJson = JSON.parse(readFileSync("./package.json", "utf-8"));

const buildConfig = (pkg?: string) => {
  const prefix = pkg ? `./${pkg}` : ".";
  const pkgJson = JSON.parse(readFileSync(`${prefix}/package.json`, "utf-8"));
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
        nodeResolve(),
        typescript({
          include: [`${prefix}/src/**/*`],
          compilerOptions: {
            declaration: true,
            outDir: `${prefix}/dist`,
            module: "ESNext",
          },
        }),
      ],
    },
  ];
};

export default rootPkgJson.workspaces
  .flatMap((pkg: string) => buildConfig(pkg))
  .concat(...buildConfig());
