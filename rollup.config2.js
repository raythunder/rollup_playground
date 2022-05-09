// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * 多入口配置
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],
  // input: {
  //   index: "src/index.js",
  //   util: "src/util.js",
  // },
  output: [
    {
      dir: "dist/esm",
      format: "esm",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    }
  ],
};

export default buildOptions;
