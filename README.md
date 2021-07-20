# @webmuds/development

This package includes common development packages, types, and/or configuration defaults used by other projects:

* `mocha`
* `chai`
* `sinon`
* `c8`
* `standardx`
* `babel`
* `release-it` (configuration only - package not included)

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i --save-dev -E github:webmuds/development#X.Y.Z
```

## Configuration Defaults

Some libraries can use default configurations provided by this library. Add them to the project's `package.json` as follows:

```json
{
  ...,
  "babel": {
    "extends": "@webmuds/development/config/babel"
  },
  "eslingConfig" : {
    "extends": "@webmuds/development/config/eslint"
  }
}
```

Alongside `extends`, you can add extra configuration if you need settings to differ from defaults.

StandardX, Mocha, C8, and packages not mentioned above do not properly support `extends` or custom configuration files and must be manually configured.

## Usage

In your test files, import and use dependencies from the library directly:

```javascript
import { expect, sinon } from '@webmuds/development'

describe('Your Class', function () {
  // ...
})
```
