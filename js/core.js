/**
 * Created by dingrf on 2015-11-18.
 */


var polyfill = true;
var _addClass = function(element,value){
    var classes, cur, clazz, i, finalValue,rclass = /[\t\r\n\f]/g,
        proceed = typeof value === "string" && value,rnotwhite = (/\S+/g);

    if ( proceed ) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = ( value || "" ).match( rnotwhite ) || [];

        cur = element.nodeType === 1 && ( element.className ?
                ( " " + element.className + " " ).replace( rclass, " " ) : " ");
        if ( cur ) {
            i = 0;
            while ( (clazz = classes[i++]) ) {
                if ( cur.indexOf( " " + clazz + " " ) < 0 ) {cur += clazz + " ";}
            }
            // only assign if different to avoid unneeded rendering.
            finalValue = (cur + "").trim();
            if ( element.className !== finalValue ) {
                element.className = finalValue;
            }
        }
    }
    return this;
};

var _removeClass = function(element, value) {
    var classes, cur, clazz, j, finalValue,rnotwhite = (/\S+/g),rclass = /[\t\r\n\f]/g,
        proceed = arguments.length === 0 || typeof value === "string" && value;

    if ( proceed ) {
        classes = ( value || "" ).match( rnotwhite ) || [];

        // This expression is here for better compressibility (see addClass)
        cur = element.nodeType === 1 && ( element.className ?
                ( " " + element.className + " " ).replace( rclass, " " ) :"");
        if ( cur ) {
            j = 0;
            while ( (clazz = classes[j++]) ) {
                // Remove *all* instances
                while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
                    cur = cur.replace( " " + clazz + " ", " " );
                }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = value ? (cur + "").trim() : "";
            if ( element.className !== finalValue ) {
                element.className = finalValue;
            }
        }
    }
    return this;
};

var _hasClass = function(element,value){
    var rclass = /[\t\r\n\f]/g;
    if ( element.nodeType === 1 && (" " + element.className + " ").replace(rclass, " ").indexOf( value ) >= 0 ) {
        return true;
    }
    return false;
};

var _toggleClass = function(element, value){
    if ( _hasClass(element, value) ) {
        _removeClass(element, value);
    } else {
        _addClass(element, value);
    }
};

var ex = {
    polyfill: polyfill,
    _addClass: _addClass,
    _removeClass: _removeClass,
    _hasClass: _hasClass,
    _toggleClass: _toggleClass
};

extend(ex,window.u || {});
window.u = ex;

export {ex};

