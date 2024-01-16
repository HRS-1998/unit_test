//获取所有测试脚本  *.spec.ts
//执行所有脚本

import { glob } from "glob";
import fs from "fs/promises";
import { build } from "esbuild";

const files = glob.sync("*.spec.js");

// const esbuildMoudle = async (fileContent) => {
//   const result = await build({
//     stdin: {
//       contents: fileContent,
//       resolveDir: process.cwd(),
//     },
//     write: false,
//     bundle: true,
//     target: "esnext",
//   });
//   new Function(result.outputFiles[0].text)();
// };
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  await esbuildMoudle(fileContent + ";import {run} from './core.js';run();");
}

async function esbuildMoudle(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false,
    bundle: true,
    target: "esnext",
  });
  // console.log(result.outputFiles[0].text);
  new Function(result.outputFiles[0].text)();
}
