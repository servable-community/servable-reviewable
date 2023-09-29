# Reviewable Protocol

![logo](/static/img/polar-bear-4.png)

[![npm Package](https://img.shields.io/npm/v/servable-reviewable.svg?style=flat-square)](https://www.npmjs.org/package/servable-reviewable)
[![NPM Downloads](https://img.shields.io/npm/dm/servable-reviewable.svg)](https://npmjs.org/package/servable-reviewable)
[![Build Status](https://github.com/yelounak/servable-reviewable/actions/workflows/release.yml/badge.svg)](https://github.com/yelounak/servable-reviewable/actions/tests.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The reviewable protocol handles the complete publication state of an object.

## Install
```bash
yarn add servable-reviewable
```

## Auxiliary packages

### Shared library
[servable-reviewable-shared](https://github.com/yelounak/servable-reviewable-shared)
```bash
yarn add servable-reviewable-shared
```

### React library
[servable-reviewable-react](https://github.com/yelounak/servable-reviewable-react)
```bash
yarn add servable-reviewable-react
```

## Protocol
### Configuration
#### Payload sample
```json
 {
    "id": "reviewable",
    "name": "reviewable",
    "slug": "ps",
    "module": {
        "servable-reviewable": "*"
    },
    "version": "*",
    "params": {
        "liveClasses": ["reviewable"],
        "schema": {
            "restrictSecurity": true
        }
    }
}
```
#### Reference


### Capacities
#### Schema
**Classes**
TODO

**Class level permissions**
TODO

**Indexes**
```json
{
    "_reviewableStatus": {
        "reviewableStatus": 1
    }
}
```

**Fields**
```json
{
    "reviewableStatus": {
        "type": "String"
    }
}
```

#### Protocol class
TODO
#### Classes
TODO
#### Triggers
TODO
#### Before init
TODO
#### After init
TODO
#### Seed
TODO
#### Config
TODO
#### Functions
TODO
#### Jobs
TODO
#### Live classes
TODO

### Security
TODO

### Performance
TODO

## Servable Documentation
You can find here the complete [servable documentation](https://documentation.servable.app/) with guides and api reference.

## License

MIT © [yelounak](https://github.com/yelounak)
