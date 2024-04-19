# eslint-plugin

Share eslint configs

# Installation

`yarn add --dev @giapnv/eslint-plugin`

# Configuration

```javascript
// eslint.config.js
export default [
  {
    plugins: ["@giapnv"],
    overrides: [
      {
        "files": ["*.ts", "*.tsx"],
        "extends": ["plugin:@giapnv/typescript"],
        "rules": {}
      },
      {
        "files": ["*.js", "*.jsx"],
        "extends": ["plugin:@giapnv/javascript"],
        "rules": {}
      },
      // Angular
      {
        "files": ["*.ts"],
        "extends": [
          "plugin:@giapnv/angular",
          "plugin:@angular-eslint/template/process-inline-templates"
        ],
        "rules": {
        }
      },
      {
        "files": ["*.html"],
        "extends": ["plugin:@giapnv/angular-template"],
        "rules": {}
      },
      // React
      {
        "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
        "extends": ["plugin:@nx/react"],
        "rules": {}
      },
    ],
    rules: {}
  }
];
```