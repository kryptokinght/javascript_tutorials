/*
* vendorPrefix.js - Copyright(c) Addy Osmani 2011.
* http://github.com/addyosmani
* Tests for native support of a browser property in a specific context
* If supported, a value will be returned.
*/

function getPrefix(prop, context) {
    var vendorPrefixes = ['moz', 'webkit', 'khtml', 'o', 'ms'],
        upper = prop.charAt(0).toUpperCase() + prop.slice(1),
        pref, len = vendorPrefixes.length,
        q = null;
    //***what does this loop do****
    while (len--) {
        q = vendorPrefixes[len];
        if (context.toString().indexOf('style')) {
            q = q.charAt(0).toUpperCase() + q.slice(1);
        }
        if ((q + upper) in context) {
            pref = (q);
        }
    }
    //***looks for the property in the context****
    if (prop in context) {
        pref = prop;
    }

    if (pref) {
        return '-' + pref.toLowerCase() + '-';
    }
    return '';
}

//LocalStorage test
console.log(getPrefix('localStorage', window));
//Page Visibility API
console.log(getPrefix('hidden', document));
//CSS3 transforms
console.log(getPrefix('transform', document.createElement('div').style));
//CSS3 transitions
console.log(getPrefix('transition', document.createElement('div').style));
//File API test (very basic test, ideally check against 'File' too)
console.log(getPrefix('FileReader', window));