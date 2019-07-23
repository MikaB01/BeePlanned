!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],e):(t=t||self).ScrollSpy=e(t.jQuery,t.Util)}(this,function(_,g){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}_=_&&_.hasOwnProperty("default")?_["default"]:_,g=g&&g.hasOwnProperty("default")?g["default"]:g;var m="scrollspy",T="4.3.1",O="bs.scrollspy",E="."+O,t=".data-api",e=_.fn[m],y={offset:10,method:"auto",target:""},I={offset:"number",method:"string",target:"(string|element)"},S={ACTIVATE:"activate"+E,SCROLL:"scroll"+E,LOAD_DATA_API:"load"+E+t},v={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},A={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},D={OFFSET:"offset",POSITION:"position"},o=function(){function r(t,e){var r=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+A.NAV_LINKS+","+this._config.target+" "+A.LIST_ITEMS+","+this._config.target+" "+A.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,_(this._scrollElement).on(S.SCROLL,function(t){return r._process(t)}),this.refresh(),this._process()}var t=r.prototype;return t.refresh=function n(){var e=this,t=this._scrollElement===this._scrollElement.window?D.OFFSET:D.POSITION,i="auto"===this._config.method?t:this._config.method,o=i===D.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,r=g.getSelectorFromElement(t);if(r&&(e=document.querySelector(r)),e){var n=e.getBoundingClientRect();if(n.width||n.height)return[_(e)[i]().top+o,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function e(){_.removeData(this._element,O),_(this._scrollElement).off(E),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function i(t){if("string"!=typeof(t=p({},y,"object"==typeof t&&t?t:{})).target){var e=_(t.target).attr("id");e||(e=g.getUID(m),_(t.target).attr("id",e)),t.target="#"+e}return g.typeCheckConfig(m,t,I),t},t._getScrollTop=function o(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function s(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function l(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function c(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),r=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),r<=t){var n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&t>=this._offsets[i]&&("undefined"==typeof this._offsets[i+1]||t<this._offsets[i+1])&&this._activate(this._targets[i])}}},t._activate=function a(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),r=_([].slice.call(document.querySelectorAll(t.join(","))));r.hasClass(v.DROPDOWN_ITEM)?(r.closest(A.DROPDOWN).find(A.DROPDOWN_TOGGLE).addClass(v.ACTIVE),r.addClass(v.ACTIVE)):(r.addClass(v.ACTIVE),r.parents(A.NAV_LIST_GROUP).prev(A.NAV_LINKS+", "+A.LIST_ITEMS).addClass(v.ACTIVE),r.parents(A.NAV_LIST_GROUP).prev(A.NAV_ITEMS).children(A.NAV_LINKS).addClass(v.ACTIVE)),_(this._scrollElement).trigger(S.ACTIVATE,{relatedTarget:e})},t._clear=function f(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(v.ACTIVE)}).forEach(function(t){return t.classList.remove(v.ACTIVE)})},r._jQueryInterface=function u(e){return this.each(function(){var t=_(this).data(O);if(t||(t=new r(this,"object"==typeof e&&e),_(this).data(O,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},d(r,null,[{key:"VERSION",get:function h(){return T}},{key:"Default",get:function h(){return y}}]),r}();return _(window).on(S.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(A.DATA_SPY)),e=t.length;e--;){var r=_(t[e]);o._jQueryInterface.call(r,r.data())}}),_.fn[m]=o._jQueryInterface,_.fn[m].Constructor=o,_.fn[m].noConflict=function(){return _.fn[m]=e,o._jQueryInterface},o});