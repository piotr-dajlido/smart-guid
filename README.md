smart-guid
=========

Small and smart GUID / UUID generator.

> Note that by design JavaScript can not generate full 128-bit GUIDs.

## Installation

  npm install smart-guid --save

## Usage

### Require:
```
    var SUID = require('smart-guid');
```

### Args:

    * By default `SUID()` returns GUID  in pattern `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` for e.g.: `87B793D7-EDE3-4B2C-9CBE-72A436E08E1B`

    *'SUID( pattern )'
        * First param `string` specifies the pattern in which all lowercase `x` and `y` will be replaced by generated `char`.
        * All `-` will be treated as delimiters, and returned intacted.
        * `y` chars are a result of `x & 0x3 | 0x8` bitwise operation.

    *'SUID( pattern, base )'
        * Second param `int` in range: 2-36 specifies the `string.base`.
        * Base = 2 will return binary numbers ( halfByte )

    *'SUID( pattern, base, fullByte )'
        * Third param `boolean` have effect only in binary mode `base = 2` and returns full byte numbers ( 8 digits ).

    *Default
        *`pattern : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
        *`base : 16`
        *`fullByte : false`

### Example:

```
  var GUID = SUID(),                    // = 87B793D7-EDE3-4B2C-9CBE-72A436E08E1B   - GUID
      UUID = SUID('xxx-5xx-Kyy'),       // = 369-57D-K98                            - UUID

      bUID = SUID('x-x-y-b', 2);        // = 0101-0100-1011-b                       - BINARY
      BUID = SUID('x-x-y-B', 2, true);  // = 01100011-01110000-10000011-B           - BINARY_FULLBYTE
      OUID = SUID('x-x-y-O', 8);        // = 2-7-11-O                               - OCTAL
      HUID = SUID('x-x-y-H', 16);       // = 0-2-A-H                                - HEX
```

## Tests

  npm test

## Release History

* 0.1.0 Initial release