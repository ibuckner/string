import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

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
				file: "./dist/esm/index.js",
				format: "es",
				esModule: true
			},
			{
				file: "./dist/cjs/index.js",
				format: "cjs",
				esModule: false
			}
	  ],
	  plugins: [
			resolve(),
			commonjs(),
			typescript()
		]
	}
];