import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // ESLint 配置文件，主要用于配置 TypeScript 和 React 项目的代码风格和质量检查
    // 配置忽略 dist 目录
    // 使用推荐的 JavaScript 和 TypeScript 配置
    // 适用于所有 TypeScript 文件
    // 设置 ECMAScript 版本为 2020
    // 使用浏览器全局变量
    // 启用 React Hooks 和 React Refresh 插件
    // 应用 React Hooks 推荐规则
    // 仅导出组件的规则，允许常量导出
    // 设置代码风格规则，使用单引号，不使用分号
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
    },
  },
)
