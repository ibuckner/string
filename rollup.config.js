import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) {
			if (warning.code !== "CIRCULAR_DEPENDENCY") {
				rollupWarn(warning);
			}
		},
	  output: [
			{
				file: "./dist/cjs/string.js",
				format: "cjs",
				esModule: false,
				name: "strUtility"
			}
	  ],
	  plugins: [
			typescript(),
			resolve(),
			commonjs()
		]
	},
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) {
			if (warning.code !== "CIRCULAR_DEPENDENCY") {
				rollupWarn(warning);
			}
		},
	  output: [
			{
				file: "./dist/esm/string.mjs",
				format: "esm",
			}
	  ],
	  plugins: [
			resolve(),
			commonjs(),
			typescript()
		]
	},
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) {
			if (warning.code !== "CIRCULAR_DEPENDENCY") {
				rollupWarn(warning);
			}
		},
	  output: [
			{
				file: "./dist/umd/string.js",
				format: "umd",
				name: "strUtility",
				esModule: false
			}
	  ],
	  plugins: [
			resolve(),
			commonjs(),
			typescript(),
			terser()
		] 
	}
];