// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * 多产物配置
 * @type { import('rollup').RollupOptions }
 */
const resolve = require("path").resolve;

const buildOptions = {
  input: ["src/index.js"],
  output: [
    {
      format: "esm",
      file: resolve(`dist/index.es.js`),
    },
    {
      format: "cjs",
      file: resolve(`dist/index.cjs.js`),
    },
    {
      format: "umd",
      file: resolve(`dist/index.umd.js`),
    },
  ],
};

export default buildOptions;
