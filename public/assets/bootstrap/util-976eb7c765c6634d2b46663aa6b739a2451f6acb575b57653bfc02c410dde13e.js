!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):(t=t||self).Util=e(t.jQuery)}(this,function(i){"use strict";function u(t){return{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()}function t(){return{bindType:r,delegateType:r,handle:function e(t){return i(t.target).is(this)?t.handleObj.handler.apply(this,arguments):undefined}}}function e(t){var e=this,n=!1;return i(this).one(f.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||f.triggerTransitionEnd(e)},t),this}function n(){i.fn.emulateTransitionEnd=e,i.event.special[f.TRANSITION_END]=t()}i=i&&i.hasOwnProperty("default")?i["default"]:i;var r="transitionend",o=1e6,a=1e3,f={TRANSITION_END:"bsTransitionEnd",getUID:function d(t){for(;t+=~~(Math.random()*o),document.getElementById(t););return t},getSelectorFromElement:function s(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(r){return null}},getTransitionDurationFromElement:function l(t){if(!t)return 0;var e=i(t).css("transition-duration"),n=i(t).css("transition-delay"),r=parseFloat(e),o=parseFloat(n);return r||o?(e=e.split(",")[0],n=n.split(",")[0],(parseFloat(e)+parseFloat(n))*a):0},reflow:function c(t){return t.offsetHeight},triggerTransitionEnd:function p(t){i(t).trigger(r)},supportsTransitionEnd:function h(){return Boolean(r)},isElement:function g(t){return(t[0]||t).nodeType},typeCheckConfig:function m(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],i=e[r],a=i&&f.isElement(i)?"element":u(i);if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}},findShadowRoot:function y(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?f.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};return n(),f});