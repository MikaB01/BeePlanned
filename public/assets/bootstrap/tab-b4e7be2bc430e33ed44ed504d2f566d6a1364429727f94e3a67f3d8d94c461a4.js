!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e=e||self).Tab=t(e.jQuery,e.Util)}(this,function(u,f){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}u=u&&u.hasOwnProperty("default")?u["default"]:u,f=f&&f.hasOwnProperty("default")?f["default"]:f;var e="tab",l="4.3.1",c="bs.tab",t="."+c,n=".data-api",a=u.fn[e],_={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,CLICK_DATA_API:"click"+t+n},E={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},D={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function r(e){this._element=e}var e=r.prototype;return e.show=function d(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&u(this._element).hasClass(E.ACTIVE)||u(this._element).hasClass(E.DISABLED))){var e,r,t=u(this._element).closest(D.NAV_LIST_GROUP)[0],a=f.getSelectorFromElement(this._element);if(t){var i="UL"===t.nodeName||"OL"===t.nodeName?D.ACTIVE_UL:D.ACTIVE;r=(r=u.makeArray(u(t).find(i)))[r.length-1]}var o=u.Event(_.HIDE,{relatedTarget:this._element}),l=u.Event(_.SHOW,{relatedTarget:r});if(r&&u(r).trigger(o),u(this._element).trigger(l),!l.isDefaultPrevented()&&!o.isDefaultPrevented()){a&&(e=document.querySelector(a)),this._activate(this._element,t);var s=function s(){var e=u.Event(_.HIDDEN,{relatedTarget:n._element}),t=u.Event(_.SHOWN,{relatedTarget:r});u(r).trigger(e),u(n._element).trigger(t)};e?this._activate(e,e.parentNode,s):s()}}},e.dispose=function t(){u.removeData(this._element,c),this._element=null},e._activate=function s(e,t,n){var r=this,a=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?u(t).children(D.ACTIVE):u(t).find(D.ACTIVE_UL))[0],i=n&&a&&u(a).hasClass(E.FADE),o=function o(){return r._transitionComplete(e,a,n)};if(a&&i){var l=f.getTransitionDurationFromElement(a);u(a).removeClass(E.SHOW).one(f.TRANSITION_END,o).emulateTransitionEnd(l)}else o()},e._transitionComplete=function o(e,t,n){if(t){u(t).removeClass(E.ACTIVE);var r=u(t.parentNode).find(D.DROPDOWN_ACTIVE_CHILD)[0];r&&u(r).removeClass(E.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(u(e).addClass(E.ACTIVE),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f.reflow(e),e.classList.contains(E.FADE)&&e.classList.add(E.SHOW),e.parentNode&&u(e.parentNode).hasClass(E.DROPDOWN_MENU)){var a=u(e).closest(D.DROPDOWN)[0];if(a){var i=[].slice.call(a.querySelectorAll(D.DROPDOWN_TOGGLE));u(i).addClass(E.ACTIVE)}e.setAttribute("aria-expanded",!0)}n&&n()},r._jQueryInterface=function a(n){return this.each(function(){var e=u(this),t=e.data(c);if(t||(t=new r(this),e.data(c,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},i(r,null,[{key:"VERSION",get:function n(){return l}}]),r}();return u(document).on(_.CLICK_DATA_API,D.DATA_TOGGLE,function(e){e.preventDefault(),o._jQueryInterface.call(u(this),"show")}),u.fn[e]=o._jQueryInterface,u.fn[e].Constructor=o,u.fn[e].noConflict=function(){return u.fn[e]=a,o._jQueryInterface},o});