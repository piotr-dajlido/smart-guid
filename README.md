smart-guid
=========

Small and smart GUID / UUID generator.

> Note that by design JavaScript can not generate full 128-bit GUIDs.

## Installation

  `npm install smart-guid --save`

## Usage

### Require:

```js

    var SUID = require('smart-guid');

```

### Args:

*By default  `SUID()` returns GUID  in pattern  `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` for e.g.:  `87B793D7-EDE3-4B2C-9CBE-72A436E08E1B`*

* `SUID( pattern )`
    * *pattern* `string` specifies the pattern in which all lowercase `x` and `y` will be replaced by generated `char`.
    * All `-` will be treated as delimiters, and returned intacted.
    * `y` chars are a result of `x & 0x3 | 0x8` bitwise operation.


* `SUID( pattern, base )`
    * *base*`int` in range: 2-36 specifies the `string.base`.
    * *base* = 2 will return binary format ( half byte )


* `SUID( pattern, base, fullByte )`
    * *fullByte* `boolean` have effect only in binary mode `base = 2` and returns full byte numbers ( 8 digits ).


* `Default`
    * `pattern : xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
    * `base : 16`
    * `fullByte : false`


### Example:

```js

  var GUID = SUID(),                    // GUID = 87B793D7-EDE3-4B2C-9CBE-72A436E08E1B
      UUID = SUID('xxx-5xx-Kyy'),       // UUID = 369-57D-K98

      bUID = SUID('x-x-y-b', 2);        // BINARY = 0101-0100-1011-b
      BUID = SUID('x-x-y-B', 2, true);  // BINARY_FULLBYTE = 01100011-01110000-10000011-B
      OUID = SUID('x-x-y-O', 8);        // OCTAL = 2-7-11-O
      HUID = SUID('x-x-y-H', 16);       // HEX = 0-2-A-H

```

## Tests

  `npm test`

## Release History

* 0.1.0 Initial release