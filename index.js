'use strict';
/**
 * created by Piotr Dajlido,
 * pdajlido@gmail.com
 * under Apache 2.0 licence,
 * see LICENCE for more details.
 */
module.exports = function(_template,_base, _fullByte){
    var UUIDTemplate = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var base = 16, range = 16, hexAlt = 0x8, bin = false, fullByte = _fullByte || false;
    if(_base) base = _base < 2 ? -1 : (_base > 36 ? -1 : (_base % 1 != 0 ? -1 : _base));
    if(base == 2) {
        range  = fullByte ? 128  : 8;
        hexAlt = fullByte ? 0x80 : 0x8;
        bin = true;
    }
    if(_template) UUIDTemplate = _template;
    return UUIDTemplate.replace(/[xy]/g, function(char){
        var r = Math.random()*range|0x0,
            v = char =='x' ? r : (r&0x3|hexAlt);
            v = v.toString(base);
            if(bin) v = fullByte ? '00000000'.substr(v.length)+v : '0000'.substr(v.length)+v;
        return v;
    }).toUpperCase();
};