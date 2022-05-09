// rollup.config.js
/**
 * 多入口配置，导出多个模块
 * @type { import('rollup').RollupOptions }
 */
const buildIndexOptions = {
  input: ["src/index.js"],
  output: [
    {
      dir: "dist/esm",
      format: "esm",
    },
  ],
};

/**
 * @type { import('rollup').RollupOptions }
 */
const buildUtilOptions = {
  input: ["src/util.js"],
  output: [
    {
      dir: "dist/esm",
      format: "esm",
    },
  ],
};

export default [buildIndexOptions, buildUtilOptions];
