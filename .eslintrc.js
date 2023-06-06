const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'babel'],
  extends: [
    'airbnb', // airbnb style guide ����
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['stories/', 'node_modules/', 'src/module/'], // lint ���� ���ܰ��
  settings: {
    'import/resolver': {
      // import path ����
      node: {
        extensions: ['js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'import/extensions': [
      'error',
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'react/jsx-filename-extension': [
      // tsx �ν�
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      // dependencies ����
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'react-hooks/exhaustive-deps': 0, // useEffect�� dependency list�� [] ��� ����
    'prettier/prettier': [
      'error',
      {
        // ���ڿ��� ����ǥ�� formatting
        singleQuote: true,
        // �ڵ� �������� �����ݸ��� �ְ� formatting
        semi: true,
        // ���� ����� ���ϰ� �����̽��� ������� ��ü�ϰ� formatting
        useTabs: false,
        // �鿩���� �ʺ�� 2ĭ
        tabWidth: 2,
        // �ڼ��� ������ ���۸��� ¯�̱��ϳ� ��ü�� �迭 Ű:�� �ڿ� �׻� �޸��� �������� formatting
        trailingComma: 'es5',
        // �ڵ� ������ maximum 100ĭ
        printWidth: 100,
        // ȭ��ǥ �Լ��� �ϳ��� �Ű������� ���� �� ��ȣ�� �����ϰ� formatting
        arrowParens: 'avoid',
        // "parser": 'typescript',
        // platform�� ���� line ending sequence ���� ����
        endOfLine: 'auto',
      },
    ],
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'class-methods-use-this': 'off', // class method ���� this �ʼ� ���� ����
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }], // ...args: any[] �� ����
    // eslint/no-shadow ��� ts eslint ���
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // eslint/no-use-before-define ��� ts eslint ���
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
};