import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: { version: "18.3" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    extends: [
      // Подключаем рекомендованные настройки import
      "plugin:import/recommended",
    ],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Дополнительные правила для импортов:
      "import/no-unresolved": "error", // Предупреждать о несуществующих пакетах
      "import/no-duplicates": "warn", // Предупреждать о дублирующихся импортов
      "import/order": [
        "warn",
        {
          // Настройка порядка импортов
          groups: ["builtin", "external", "internal"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];
