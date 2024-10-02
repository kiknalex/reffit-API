import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import checkFile from "eslint-plugin-check-file";
import nodePlugin from "eslint-plugin-n";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginSecurity from "eslint-plugin-security"
export default tseslint.config(
	{ ignores: ["node_modules", "dist"] },
	{
		files: ["src/*.{js,mjs,cjs,ts}"],
		languageOptions: { globals: globals.browser },
		extends: [
			pluginJs.configs.recommended,
			...tseslint.configs.recommended,
			sonarjs.configs.recommended,
			eslintPluginUnicorn.configs["flat/recommended"],
			nodePlugin.configs["flat/recommended-script"],
      pluginSecurity.configs.recommended
		],
		languageOptions: {
			parserOptions: {
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
		plugins: {
			"check-file": checkFile,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"check-file/filename-naming-convention": [
				"error",
				{
					"**/*.{ts,tsx}": "KEBAB_CASE",
				},
				{
					// ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
					ignoreMiddleExtensions: true,
				},
			],
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	}
);
