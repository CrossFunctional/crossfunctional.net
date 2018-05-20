$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 /*
 * Based on easing equations by Robert Penner. Adapted from jqueryt easing plugin by George McGinley Smith. See below for copyright notice of equations
 *
*/

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutTurbo',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
  easeInTurbo: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutTurbo: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInTurbo2: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutTurbo2: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInTurbo3: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutTurbo3: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOvershoot: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutOvershoot: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOvershootTurbo: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*t*((s+1)*t - s) + b;
  },
  easeOutOvershootTurbo: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*t*((s+1)*t + s) + 1) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
$(function() {
  $("#block-views-tweets-block .views-admin-links,#block-views-tweets-block2 .views-admin-links").remove(); // Remove views administration links, they mess up the cycle pager
  $('.tweets ul').after('<div id="nav">').cycle({
  fx:     'scrollLeft,scrollDown,scrollRight,scrollUp', 
  speed:       700,
  timeout:     5000,
  pager:      '#nav',
  pagerEvent: 'mouseover',
  pauseOnPagerHover: true,
  cleartypeNoBg:  true
  }).height($('.tweets ul li').height());
});;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 /****
* Sooperthemes equalHeights invocation:
***/

$(function(){ $('.preblocks').equalHeights(1,'.preblocks .content'); });
$(function(){ $('.postblocks').equalHeights(1,'.postblocks .content'); });
$(function(){ $('#slidedown').equalHeights(1,'#slidedown .content'); });

/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights" & "EqualWidths"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 * Modified by Jurriaan Roelofs for sooperthemes.com. Added a parameter to set target element to measure and set height on. Always target the inner-most wrapper of your boxes.
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 * Version: 2.0, 07.24.2008
--------------------------------------------------------------------*/

$.fn.equalHeights = function(px, element) {
	$(this).each(function(){
		var currentTallest = 0;
		$(element).each(function(i){
			if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
		});
		if (!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if ($.browser.msie && $.browser.version == 6.0) { $(element).css({'height': currentTallest}); }
		$(element).css({'min-height': currentTallest}); 
	});
	return this;
};


/*-------------------------------------------------------------------- 
   Scott Jehl (scott@filamentgroup.com) 
   Maggie Wachs (maggie@filamentgroup.com)
   http://www.filamentgroup.com
 * Copyright (c) 2008 Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Version: 2.0, 08.01.2008 
--------------------------------------------------------------------*/

Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && $.browser.msie && (parseFloat($('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat($('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};;
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09i
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 /*!
 * The following copyright notice may not be removed under any circumstances.
 * 
 * Copyright:
 * A font for Linguists, designed by Eric Schiller, 1991.
 */
Cufon.registerFont({"w":574,"face":{"font-family":"Sapir","font-weight":400,"font-stretch":"normal","units-per-em":"1000","panose-1":"0 0 0 0 0 0 0 0 0 0","ascent":"800","descent":"-200","x-height":"12","bbox":"-533 -765.478 929 250.95","underline-thickness":"50","underline-position":"-100","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":287},"!":{"d":"179,-188r-63,0r-17,-216r0,-331r97,0r0,331xm149,12v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64","w":296},"\"":{"d":"109,-735v38,0,45,43,41,81r-25,222v-3,16,-26,18,-29,2r-29,-249v1,-31,9,-56,42,-56xm259,-735v38,0,45,43,41,81r-25,222v-3,16,-26,18,-29,2r-29,-249v1,-31,9,-56,42,-56","w":370},"#":{"d":"507,-284r0,58r-108,0r-31,226r-59,0r31,-226r-134,0r-32,226r-59,0r32,-226r-106,0r0,-58r116,0r20,-146r-109,0r0,-58r118,0r30,-212r59,0r-30,212r132,0r30,-212r59,0r-30,212r96,0r0,58r-104,0r-20,146r99,0xm369,-430r-133,0r-20,146r133,0"},"$":{"d":"327,-67v60,-16,100,-106,54,-167v-13,-19,-31,-38,-54,-57r0,224xm267,-634v-51,14,-96,78,-52,130v12,16,29,32,52,50r0,-180xm498,-171v0,97,-83,163,-171,177r0,60r-70,0r0,-55v-75,-1,-141,-33,-181,-74r44,-57v49,33,68,57,137,59r0,-284v-59,-41,-99,-74,-121,-101v-22,-27,-33,-60,-33,-101v1,-89,79,-147,164,-159r0,-34r70,0r0,31v65,0,115,31,147,69r-47,48v-30,-22,-59,-42,-100,-48r0,243r97,83v43,44,64,92,64,143"},"%":{"d":"272,0r-71,0r452,-700r70,0xm123,-502v0,95,18,174,94,174v73,0,93,-82,93,-174v1,-85,-23,-160,-93,-160v-69,0,-95,76,-94,160xm616,-212v0,95,18,174,94,174v73,0,93,-82,93,-174v1,-85,-23,-160,-93,-160v-69,0,-95,76,-94,160xm395,-503v0,124,-65,225,-178,225v-113,0,-179,-102,-179,-224v0,-108,64,-210,179,-210v111,0,178,104,178,209xm888,-213v0,124,-65,225,-178,225v-113,0,-179,-102,-179,-224v0,-108,64,-210,179,-210v111,0,178,104,178,209","w":926},"&":{"d":"177,-206v0,79,66,152,156,152v73,0,140,-41,170,-85r-236,-212v-52,28,-90,75,-90,145xm602,-430v43,64,39,198,0,266r153,131r-89,45r-114,-105v-50,58,-129,103,-230,105v-136,2,-250,-81,-249,-209v1,-99,75,-168,150,-202v-47,-49,-91,-77,-91,-157v0,-91,87,-156,187,-156v51,0,99,16,143,48r-35,56v-27,-16,-58,-34,-99,-34v-84,0,-127,79,-76,142v79,98,204,197,296,288v30,-68,10,-166,-29,-218r-98,0r30,-62r300,0r-31,62r-118,0","w":815},"'":{"d":"101,-735v38,0,45,43,41,81r-25,222v-3,16,-26,18,-29,2r-29,-249v1,-31,9,-56,42,-56","w":204},"(":{"d":"298,207v-144,-97,-247,-243,-249,-461v-2,-230,106,-378,243,-481r44,44v-110,90,-195,249,-197,436v-2,173,94,354,198,423","w":352},")":{"d":"54,-735v144,97,247,243,249,461v2,230,-106,378,-243,481r-44,-44v110,-90,195,-249,197,-436v2,-173,-94,-354,-198,-423","w":352},"*":{"d":"254,-700r-9,130r121,-48r26,77r-127,32r84,101r-66,48r-70,-111r-70,111r-66,-48r84,-101r-127,-32r26,-77r121,48r-9,-130r82,0","w":426},"+":{"d":"254,-286r0,-220r66,0r0,220r219,0r0,66r-219,0r0,220r-66,0r0,-220r-219,0r0,-66r219,0"},",":{"d":"116,-98v22,-31,88,-20,85,25v-1,23,-11,43,-22,62r-109,187r-55,-22r66,-176v14,-39,26,-64,35,-76","w":287},"-":{"d":"291,-197r-249,0r0,-82r249,0r0,82","w":333},".":{"d":"144,12v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64","w":287},"\/":{"d":"92,108r-66,0r271,-843r65,0","w":389},"0":{"d":"530,-364v0,195,-76,376,-243,376v-162,0,-243,-184,-243,-374v0,-166,79,-350,243,-350v164,0,243,183,243,348xm185,-136v48,102,159,104,204,1v58,-132,67,-508,-102,-507v-43,0,-74,25,-101,72v-51,90,-43,345,-1,434"},"1":{"d":"342,-712r0,712r-97,0r0,-633r-137,56r-24,-59r191,-76r67,0"},"2":{"d":"306,-712v112,0,204,73,203,182v0,41,-11,80,-34,118v-53,88,-215,244,-301,336r339,0r0,76r-469,0r0,-53r149,-154v91,-95,146,-164,173,-203v64,-92,39,-229,-76,-229v-69,0,-105,28,-153,72r-47,-43v45,-56,116,-102,216,-102"},"3":{"d":"399,-197v0,-115,-103,-149,-225,-142r0,-58v100,1,188,-47,188,-145v0,-130,-179,-113,-245,-57r-29,-59v116,-80,372,-85,372,106v0,82,-74,145,-127,169v101,26,170,72,170,184v0,120,-112,211,-249,211v-74,0,-121,-16,-171,-40r28,-61v35,19,85,31,141,31v85,0,147,-56,147,-139"},"4":{"d":"437,-700r0,429r85,0r0,70r-85,0r0,201r-94,0r0,-201r-323,0r0,-45r359,-454r58,0xm127,-271r216,0r0,-274"},"5":{"d":"391,-214v0,-126,-131,-197,-285,-192r87,-294r275,0r-26,76r-187,0r-44,153v169,14,279,105,285,250v6,167,-185,277,-368,219v-33,-10,-64,-26,-91,-49r34,-63v42,28,96,54,160,56v97,3,160,-69,160,-156"},"6":{"d":"294,12v-145,0,-239,-102,-239,-249v0,-245,202,-458,426,-475r0,66v-145,21,-261,123,-301,247v36,-21,84,-37,138,-37v126,0,210,87,210,222v0,119,-113,226,-234,226xm159,-206v0,85,54,150,132,150v86,1,133,-74,133,-162v0,-81,-46,-149,-127,-148v-95,1,-138,60,-138,160"},"7":{"d":"526,-700r0,75r-352,635r-90,-20r346,-614r-329,0r0,-76r425,0"},"8":{"d":"151,-185v-1,75,58,129,136,129v121,0,185,-152,91,-220v-30,-23,-67,-44,-109,-63v-63,34,-116,70,-118,154xm523,-190v5,124,-109,202,-238,202v-125,0,-234,-73,-234,-189v0,-102,69,-164,137,-202v-62,-27,-112,-78,-112,-161v0,-109,98,-172,217,-172v108,0,199,65,199,163v0,89,-66,123,-128,171v91,34,155,88,159,188xm392,-550v0,-60,-39,-102,-103,-102v-106,0,-149,120,-79,182v23,21,50,38,82,52v50,-32,100,-64,100,-132"},"9":{"d":"289,-712v145,0,230,100,230,249v0,245,-202,458,-426,475r0,-66v150,-23,263,-126,309,-254r-2,-2v-43,29,-92,44,-146,44v-127,0,-208,-99,-208,-219v0,-123,115,-227,243,-227xm415,-499v1,-94,-39,-144,-127,-145v-87,-1,-138,75,-138,164v0,80,47,148,128,146v100,-2,137,-54,137,-165"},":":{"d":"144,12v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64xm144,-352v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64","w":287},";":{"d":"112,-99v22,-31,88,-20,85,25v-1,23,-11,43,-22,62r-109,187r-55,-22r66,-176v14,-39,26,-64,35,-76xm144,-354v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64","w":287},"<":{"d":"542,-56r0,64r-509,-234r0,-54r509,-234r0,64r-424,197"},"=":{"d":"539,-383r0,66r-504,0r0,-66r504,0xm539,-189r0,66r-504,0r0,-66r504,0"},">":{"d":"33,-56r424,-197r-424,-197r0,-64r509,234r0,54r-509,234r0,-64"},"?":{"d":"222,-735v115,-1,205,51,200,161v-7,154,-169,221,-191,372r-75,0v-7,-165,152,-218,157,-369v2,-54,-45,-96,-97,-94v-61,2,-91,25,-130,66r-45,-45v37,-48,105,-90,181,-91xm197,12v-34,0,-65,-29,-65,-64v0,-34,30,-64,64,-64v34,0,64,30,64,64v0,31,-31,64,-63,64","w":463},"@":{"d":"435,-474v-63,0,-118,95,-118,173v0,47,15,75,53,75v65,0,122,-83,118,-171v-2,-41,-14,-77,-53,-77xm428,-534v48,0,71,23,88,55r11,-42r75,0r-69,271v-6,28,19,56,56,54v68,-3,115,-128,112,-208v-5,-137,-111,-248,-281,-248v-170,0,-312,140,-312,322v0,167,128,285,301,285v87,0,142,-18,200,-47r28,48v-69,27,-144,52,-229,56v-222,9,-385,-156,-389,-344v-5,-224,180,-381,406,-381v200,0,351,120,351,309v0,136,-84,251,-205,258v-55,3,-121,-49,-111,-83r2,2v-32,27,-70,71,-124,70v-68,-1,-105,-64,-105,-139v0,-109,84,-238,195,-238","w":796},"A":{"d":"281,-700r74,0r261,700r-112,0r-72,-206r-267,0r-75,206r-94,0xm192,-276r217,0v-21,-57,-39,-110,-55,-158v-16,-48,-32,-102,-49,-162v-15,51,-31,97,-45,138v-14,41,-37,102,-68,182","w":612},"B":{"d":"422,-197v0,-118,-114,-142,-241,-133r0,260r94,0v80,0,147,-46,147,-127xm526,-203v0,123,-113,203,-245,203r-197,0r0,-700r217,0v100,-1,182,49,182,143v0,96,-71,163,-143,178v97,2,186,72,186,176xm181,-400v111,12,205,-40,205,-133v0,-65,-41,-97,-123,-97r-82,0r0,230"},"C":{"d":"48,-352v-2,-239,248,-428,511,-340v36,12,67,30,94,51r-40,60v-35,-28,-117,-61,-183,-61v-167,0,-275,123,-275,288v0,164,117,296,275,296v76,0,130,-21,177,-52r38,58v-50,35,-136,64,-220,64v-226,0,-375,-152,-377,-364","w":684},"D":{"d":"688,-371v4,234,-156,374,-396,371r-208,0r0,-700r224,0v239,-6,377,119,380,329xm581,-373v-1,-166,-98,-259,-271,-257r-129,0r0,560r108,0v201,-1,292,-99,292,-303","w":736},"E":{"d":"429,-700r0,70r-248,0r0,226r243,0r0,70r-243,0r0,264r291,0r0,70r-388,0r0,-700r345,0","w":497},"F":{"d":"429,-700r0,70r-248,0r0,266r243,0r0,70r-243,0r0,294r-97,0r0,-700r345,0","w":481},"G":{"d":"428,-58v63,0,101,-5,142,-25r0,-237r97,0r0,285v-67,24,-156,47,-242,47v-225,0,-376,-154,-377,-364v-2,-243,251,-427,520,-340v40,13,71,29,94,48r-40,58v-46,-32,-107,-56,-183,-56v-173,0,-284,119,-284,288v0,164,116,298,273,296","w":739},"H":{"d":"620,-700r0,700r-97,0r0,-348r-342,0r0,348r-97,0r0,-700r97,0r0,282r342,0r0,-282r97,0","w":704},"I":{"d":"181,0r-97,0r0,-700r97,0r0,700","w":265},"J":{"d":"18,131v62,-7,73,-81,73,-150r0,-681r97,0r0,694v3,124,-59,193,-170,196r0,-59","w":272},"K":{"d":"181,-700r0,313r303,-323r66,43r-271,285r307,355r-95,37r-308,-373r-2,363r-97,0r0,-700r97,0","w":593},"L":{"d":"84,0r0,-700r97,0r0,630r291,0r0,70r-388,0","w":481},"M":{"d":"844,-700r0,700r-97,0r0,-570v-78,183,-192,391,-283,570r-39,0r-209,-442v-25,-56,-41,-98,-50,-128r-2,570r-80,0r0,-700r104,0r175,365r94,205r296,-570r91,0","w":928},"N":{"d":"697,-700r0,700r-76,0r-341,-412v-64,-78,-101,-126,-114,-145r-2,557r-80,0r0,-700r72,0r364,436v48,59,80,99,95,122r2,-558r80,0","w":781},"O":{"d":"748,-362v0,208,-141,374,-350,374v-210,0,-350,-165,-350,-374v0,-194,155,-350,350,-350v196,0,350,155,350,350xm155,-362v1,158,77,304,243,304v165,0,242,-147,243,-304v0,-149,-86,-280,-243,-280v-156,0,-243,133,-243,280","w":796},"P":{"d":"395,-497v-1,-87,-53,-135,-147,-133r-67,0r0,630r-97,0r0,-700r176,0v143,-1,240,63,239,202v-1,139,-127,239,-289,225r0,-64v117,6,187,-46,185,-160","w":537},"Q":{"d":"748,-362v0,180,-97,293,-214,341r256,122r-44,65r-309,-154v-250,14,-389,-135,-389,-374v0,-194,155,-350,350,-350v196,0,350,155,350,350xm155,-362v1,158,77,304,243,304v165,0,242,-147,243,-304v0,-149,-86,-280,-243,-280v-156,0,-243,133,-243,280","w":796},"R":{"d":"383,-511v4,-111,-88,-127,-202,-119r0,270r55,0v102,4,144,-62,147,-151xm487,-520v-1,106,-49,159,-117,204r174,298r-98,30r-162,-302r-103,0r0,290r-97,0r0,-700r200,0v117,0,205,62,203,180","w":556},"S":{"d":"85,-547v-2,-96,99,-165,200,-165v74,0,132,23,173,70r-46,50v-31,-23,-74,-49,-121,-50v-64,-1,-109,36,-109,95v0,37,36,82,106,133v70,51,117,93,142,127v25,34,37,73,37,116v0,145,-176,221,-323,165v-35,-14,-66,-31,-91,-55r43,-58v50,32,81,60,152,61v73,1,123,-40,122,-115v0,-38,-11,-66,-30,-85v-34,-33,-197,-148,-226,-188v-18,-25,-29,-58,-29,-101","w":520},"T":{"d":"326,0r-97,0r0,-630r-224,0r0,-70r546,0r0,70r-225,0r0,630","w":556},"U":{"d":"350,12v-191,0,-276,-96,-276,-284r0,-428r97,0r0,424v0,139,47,218,179,221v119,2,174,-91,175,-204r0,-441r91,0r0,443v1,160,-103,269,-266,269","w":690},"V":{"d":"319,0r-65,0r-259,-692r99,-18r138,400r64,198r66,-192r149,-406r87,12","w":593},"W":{"d":"427,-700r80,0r89,300r81,291r104,-368r70,-233r78,14r-217,696r-86,0r-86,-292r-80,-286r-170,578r-86,0r-206,-690r92,-20r84,299v29,105,56,205,80,302r82,-287","w":927},"X":{"d":"617,-10r-105,20r-207,-326r-188,326r-89,-18r228,-373r-208,-307r103,-22r163,254r149,-254r90,12r-192,307","w":645},"Y":{"d":"305,0r-97,0r0,-303r-211,-387r105,-20r169,332r184,-332r86,12r-236,395r0,303","w":538},"Z":{"d":"568,-700r0,27r-405,609r414,0r0,64r-542,0r0,-34r407,-602r-340,0r0,-64r466,0","w":612},"[":{"d":"78,-735r225,0r0,53r-135,0r0,814r135,0r0,61r-225,0r0,-928","w":333},"\\":{"d":"26,-735r65,0r271,843r-66,0","w":389},"]":{"d":"30,-735r225,0r0,928r-225,0r0,-61r135,0r0,-814r-135,0r0,-53","w":333},"^":{"d":"-286,-639r-99,97r-88,0r155,-152r65,0r155,152r-89,0","w":0},"_":{"d":"500,150r-500,0r0,-50r500,0r0,50","w":500},"`":{"d":"-125,-630r-31,37r-150,-94v-17,-13,-42,-22,-42,-44v0,-60,63,-28,90,-6","w":0},"a":{"d":"429,-342v0,117,-17,258,22,342r-98,0v-11,-18,-14,-55,-14,-85v-43,40,-84,92,-157,97v-133,9,-188,-177,-94,-260v58,-51,165,-76,251,-105v2,-56,-47,-101,-100,-100v-66,1,-89,20,-131,54r-35,-45v92,-107,356,-98,356,102xm133,-143v0,46,31,85,72,85v90,0,138,-118,134,-235r-86,25v-80,24,-120,66,-120,125","w":500},"b":{"d":"162,-240v0,104,50,188,156,188v101,0,140,-112,140,-212v1,-93,-47,-186,-139,-184v-110,1,-158,88,-157,208xm318,12v-71,-2,-120,-34,-154,-78r-2,66r-90,0r0,-735r90,0r0,313v30,-50,96,-90,166,-90v85,0,142,29,177,82v115,173,20,447,-187,442","w":595},"c":{"d":"311,-54v53,-1,86,-12,122,-36r25,50v-38,28,-93,52,-151,52v-103,0,-171,-30,-211,-87v-129,-184,-20,-437,215,-437v53,0,98,14,134,41r-30,51v-125,-67,-278,7,-278,164v0,112,60,205,174,202","w":481},"d":{"d":"137,-260v-1,105,43,207,141,208v108,1,155,-103,155,-214v0,-96,-53,-182,-149,-182v-103,0,-147,82,-147,188xm271,-512v72,2,132,28,160,74r2,-297r90,0r0,735r-90,0r0,-79v-39,51,-87,91,-172,91v-140,0,-221,-119,-221,-268v0,-131,100,-259,231,-256","w":595},"e":{"d":"40,-260v0,-149,104,-250,237,-252v144,-3,192,125,193,268r-337,0v-3,97,73,194,169,192v53,-1,105,-19,137,-43r26,49v-55,39,-110,58,-166,58v-162,0,-259,-105,-259,-272xm388,-304v0,-80,-33,-144,-112,-144v-83,0,-137,69,-137,144r249,0","w":507},"f":{"d":"284,-668v-63,-21,-115,6,-115,78r0,90r120,0r0,52r-120,0r0,448r-90,0r0,-448r-80,0r0,-52r80,0r0,-61v-10,-133,115,-213,225,-153","w":296},"g":{"d":"137,-260v-1,105,43,207,141,208v108,1,155,-103,155,-214v0,-96,-53,-182,-149,-182v-103,0,-147,82,-147,188xm279,-512v67,2,128,34,152,81r2,-69r90,0r0,482v10,210,-162,303,-366,256v-34,-8,-65,-20,-94,-38r25,-59v50,29,107,44,179,45v137,1,177,-112,166,-265v-40,50,-86,90,-169,91v-143,1,-224,-118,-224,-268v0,-132,104,-259,239,-256","w":595},"h":{"d":"300,-446v-81,0,-136,58,-136,145r0,301r-90,0r0,-735r89,0r0,297v37,-41,101,-74,171,-74v119,0,178,67,177,190r0,322r-90,0r0,-303v0,-95,-40,-143,-121,-143","w":585},"i":{"d":"74,-500r90,0r0,500r-90,0r0,-500xm176,-665v-1,33,-20,61,-57,61v-38,0,-57,-26,-57,-61v0,-28,25,-53,57,-53v32,0,57,25,57,53","w":238},"j":{"d":"6,206v68,-16,68,-83,68,-166r0,-540r90,0r0,536v2,134,-47,209,-158,214r0,-44xm176,-665v-1,33,-20,61,-57,61v-38,0,-57,-26,-57,-61v0,-28,25,-53,57,-53v32,0,57,25,57,53","w":238},"k":{"d":"74,0r0,-735r90,0r0,437r15,0r196,-212r67,38r-178,186r211,255r-89,41r-220,-283r-2,273r-90,0","w":477},"l":{"d":"164,0r-90,0r0,-735r90,0r0,735","w":238},"m":{"d":"289,-442v-82,1,-125,57,-125,145r0,297r-90,0r0,-500r89,0r0,62v35,-42,88,-73,156,-74v77,-1,125,29,159,74v38,-36,107,-73,172,-74v109,-1,171,70,170,178r0,334r-90,0r0,-298v-1,-84,-24,-145,-110,-144v-85,1,-128,49,-128,141r0,301r-90,0r0,-298v0,-96,-38,-144,-113,-144","w":894},"n":{"d":"300,-446v-81,0,-136,58,-136,145r0,301r-90,0r0,-500r89,0r0,62v37,-41,101,-74,171,-74v119,0,178,67,177,190r0,322r-90,0r0,-303v0,-95,-40,-143,-121,-143","w":585},"o":{"d":"533,-256v0,150,-100,268,-247,268v-146,0,-246,-119,-246,-268v0,-147,108,-256,246,-256v137,0,247,110,247,256xm436,-256v0,-102,-44,-192,-150,-192v-104,0,-149,92,-149,192v0,108,38,204,149,204v111,0,150,-96,150,-204","w":573},"p":{"d":"164,-240v0,104,50,188,156,188v101,0,140,-112,140,-212v1,-93,-47,-186,-139,-184v-110,1,-158,88,-157,208xm320,12v-71,-2,-120,-34,-154,-78r-2,316r-90,0r0,-750r90,0r0,78v30,-50,96,-90,166,-90v85,0,142,29,177,82v115,173,20,447,-187,442","w":597},"q":{"d":"434,-266v0,-96,-53,-182,-149,-182v-104,0,-148,81,-148,188v-1,103,45,208,142,208v108,0,155,-103,155,-214xm271,-512v72,2,132,28,160,74r2,-62r90,0r0,750r-90,0r0,-329v-39,51,-87,91,-172,91v-140,0,-221,-119,-221,-268v0,-131,100,-259,231,-256","w":597},"r":{"d":"248,-426v-65,0,-85,72,-84,157r0,269r-90,0r0,-500r88,0r0,62v29,-30,58,-74,111,-74v27,0,55,16,83,49r-41,58v-26,-12,-36,-21,-67,-21","w":348},"s":{"d":"74,-318v-69,-124,80,-236,216,-182v22,8,40,20,54,34r-35,46v-29,-20,-52,-32,-92,-32v-37,0,-76,18,-73,57v4,54,80,86,116,117v47,40,92,72,93,149v1,113,-149,173,-261,124v-28,-12,-51,-27,-68,-46r44,-51v26,25,64,49,108,50v44,0,87,-25,85,-71v0,-25,-6,-42,-19,-55v-22,-21,-152,-110,-168,-140","w":389},"t":{"d":"243,12v-100,0,-148,-58,-148,-160r0,-300r-70,0r0,-52r70,0r0,-120r90,-30r0,150r131,0r0,52r-131,0r0,283v2,68,7,110,69,112v31,0,48,-6,69,-17r22,50v-33,21,-67,32,-102,32","w":345},"u":{"d":"281,-54v78,-1,126,-67,126,-154r0,-292r90,0r0,500r-89,0r0,-58v-47,39,-87,70,-161,70v-119,0,-178,-67,-177,-190r0,-322r90,0r0,302v0,96,40,144,121,144","w":571},"v":{"d":"268,0r-56,0r-207,-486r90,-24r79,200v27,71,51,140,73,206r74,-196r85,-210r79,18","w":490},"w":{"d":"364,-500r59,0r75,188v26,66,50,131,71,194v20,-73,42,-146,66,-220r56,-172r83,14r-176,496r-63,0r-101,-256r-49,-134r-61,168r-87,222r-59,0r-173,-488r88,-22r74,224v15,45,31,101,49,168v24,-69,51,-139,80,-212","w":779},"x":{"d":"494,-30r-86,40r-157,-220r-155,220r-71,-42r184,-235r-156,-203r86,-40r128,183r132,-183r70,31r-160,208","w":519},"y":{"d":"9,-485r90,-25r105,270v17,46,33,91,48,136r74,-196r85,-210r79,19r-257,579v-47,102,-96,172,-240,162r0,-64v58,3,93,-4,126,-38v25,-25,53,-84,86,-176","w":495},"z":{"d":"430,-500r0,39r-295,402r295,0r0,59r-420,0r0,-29r310,-413r-252,0r0,-58r362,0","w":450},"{":{"d":"72,-287v59,-24,76,-49,77,-128v1,-105,-10,-226,46,-275v32,-28,73,-45,127,-45r0,53v-47,6,-83,53,-83,110r0,141v-2,95,-19,122,-81,165v60,41,80,73,80,165r0,141v-1,59,34,102,83,110r0,53v-113,-1,-173,-64,-173,-185r0,-135v-1,-79,-16,-104,-76,-128r0,-42","w":352},"|":{"d":"96,0r0,-735r66,0r0,735r-66,0","w":259},"}":{"d":"113,-572v1,-59,-34,-102,-83,-110r0,-53v113,1,173,64,173,185r0,135v1,81,16,103,77,128r0,42v-59,23,-75,50,-76,128v-1,105,10,226,-46,275v-32,28,-73,45,-127,45r0,-53v47,-6,83,-53,83,-110r0,-141v2,-93,19,-124,79,-165v-60,-41,-80,-73,-80,-165r0,-141","w":352},"~":{"d":"-186,-633v49,0,62,-28,87,-63r42,35v-36,49,-56,91,-127,91v-83,0,-127,-64,-214,-61v-53,2,-66,34,-94,70r-41,-37v36,-51,63,-96,137,-96v78,0,138,61,210,61","w":3},"\u00a0":{"w":287}}});
;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
$(document).ready(function() {
  Cufon.replace('h1#sitename a, h1.nodetitle a, .book-block-menu ul li, .book-navigation ul li, ul.xxl-menu li, .pulldown-title', {
      hover: true
  });
  Cufon.replace('h1, h2, h3, h4, h5, h6, dt, p.mission, p.slogan, .views-field-title, #slidedown label, legend:not(.collapse-processed)');

  Cufon.replace('#header > div > ul > li a:not(.active)', {
    textShadow: '1px 1px rgba(0, 0, 0, 0.9)',
    hover: true
  });
  Cufon.replace('#header > div > ul > li a.active, .cufon', {
    textShadow: '1px 1px rgba(0, 0, 0, 0.2)',
    hover: true
  });
  Cufon.replace('.preblockscolor h1,.preblockscolor h2,.postblockscolor h1,.postblockscolor h2,.slideshow h1, .slideshow h3', {
    textShadow: '1px 1px rgba(0, 0, 0, 0.5)'
  });
  Cufon.replace('.preblocks h1,.preblocks h2,.postblocks h1,.postblocks h2', {
    textShadow: '1px 1px rgba(0, 0, 0, 0.9)'
  });
});;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 /*
 * SooperFish 0.1
 * (c) 2010 Jurriaan Roelofs - SooperThemes.com
 * Inspired by Suckerfish, Superfish and Droppy
 * Licensed GPL: http://www.gnu.org/licenses/gpl.html
 */
$.fn.sooperfish = function(op) {

  var sf = $.fn.sooperfish;
  sf.o = [];
  sf.op = {};
  sf.c = {
    menuClass   : 'sf-js-enabled',
    isParent : 'sf-parent',
    arrowClass  : 'sf-arrow'
  };
  sf.defaults = {
    sooperfishWidth : 150, //match with the width you gave submenu list items in CSS (including margin and padding applied to these list items)
    multiColumn  : true,
    dualColumn  : 6, //if a submenu has at least this many items it will be divided in 2 columns
    tripleColumn  : 12, //if a submenu has at least this many items it will be divided in 3 columns
    hoverClass  : 'sfHover',
    delay    : 500, //make sure menus only disappear when intended, 500ms is advised by Jacob Nielsen
    animationShow  : {height:'show'},
    speedShow    : 600,
    easingShow      : 'easeOutBounce',
    animationHide  : {height:'hide',opacity:'hide'},
    speedHide    : 200,
    easingHide      : 'easeInTurbo',
    autoArrows  : true, //Adds span elements to parent li elements, projecting arrow images on these items to indicate submenus. I added an alternative image file with white arrows.
    onShow    : function(){}, //callback after showing menu
    onHide    : function(){} //callback after hiding menu
  };
  

  //Merge default settings with o function parameter
  var o = $.extend({},sf.defaults,op);
  if (!o.sooperfishWidth) {
  o.sooperfishWidth = $('ul:first li:first', this).width();
  alert(o.sooperfishWidth);
  }

  this.each(function() {
    
    //Check dom for submenus
    var parentLi = $('li:has(ul)', this);
    parentLi.each(function(){
      if (o.autoArrows) { //Add autoArrows if requested
      $('>a',this).append('<span class="'+sf.c.arrowClass+'"></span>');
      }
      $(this).addClass(sf.c.isParent);
    });

    //Divide menu in columns
    //Set width override
    if (o.multiColumn) {
    var uls = $('ul',this);
    uls.each(function(){
      var ulsize = $('>li:not(.backLava)',this).length; //Skip list items added by Lavalamp plugin
      if (ulsize >= o.dualColumn) {
        if (ulsize >= o.tripleColumn) {
          $(this).width(3*o.sooperfishWidth);
        } else {
          $(this).width(2*o.sooperfishWidth);
        }
      }
    });
    }

    var root = this, zIndex = 1000;

    function getSubmenu(ele) {
      if (ele.nodeName.toLowerCase() == 'li') {
        var submenu = $('> ul', ele);
        return submenu.length ? submenu[0] : null;
      } else {
        return ele;
      }
    }

    function getActuator(ele) {
      if (ele.nodeName.toLowerCase() == 'ul') {
        return $(ele).parents('li')[0];
      } else {
        return ele;
      }
    }

    function hideSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', false);
      setTimeout(function() {
        if (!$.data(submenu, 'cancelHide')) {
          $(submenu).animate(o.animationHide,o.speedHide,o.easingHide,function(){ o.onHide.call(submenu); });
        }
      }, o.delay);
    }

    function showSooperfishUl() {
      var submenu = getSubmenu(this);
      if (!submenu) return;
      $.data(submenu, 'cancelHide', true);
      $(submenu).css({zIndex: zIndex++}).animate(o.animationShow,o.speedShow,o.easingShow,function(){ o.onShow.call(submenu); });
      if (this.nodeName.toLowerCase() == 'ul') {
        var li = getActuator(this);
        $(li).addClass('hover');
        $('> a', li).addClass('hover');
      }
    }
    
    // Bind Events. Yes it's that simple!
    $('li', this).hover(showSooperfishUl, hideSooperfishUl);

  });

};
;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 $(document).ready(function() {

  $(Drupal.settings.sooperfish.invoke+' ul').hide().css('left','6px'); //Remove the default CSS behaviour of hiding menu outside the viewport, so that we can have a slideUp animation in a visible position
  $(Drupal.settings.sooperfish.invoke).sooperfish({
    sooperfishWidth: Drupal.settings.sooperfish.sooperfishWidth,
    hoverClass:  'over',           // hover class
    delay:     Drupal.settings.sooperfish.delay,                // 500ms delay on mouseout as per Jacob Nielsen advice
    dualColumn:     Drupal.settings.sooperfish.dualColumn,
    tripleColumn:     Drupal.settings.sooperfish.tripleColumn,
    animationShow:   Drupal.settings.sooperfish.animationShow,
    speedShow:     parseInt(Drupal.settings.sooperfish.speedShow),
    easingShow:    Drupal.settings.sooperfish.easingShow,
    animationHide:   Drupal.settings.sooperfish.animationHide,
    speedHide:     parseInt(Drupal.settings.sooperfish.speedHide),
    easingHide:    Drupal.settings.sooperfish.easingHide,
    autoArrows:  false,              // generation of arrow mark-up
    dropShadows: false               // drop shadows
  });
});;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 /*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.71 (11-AUG-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 */
;(function($){var ver="2.71";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}if(opts2.timeout||opts2.continuous){this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts2.rev);},opts2.continuous?10:opts2.timeout+(opts2.delay||0));}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"stop":cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;if(arg2===true){options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,1);}return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.rev);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=0;opts.startingSlide=opts.randomMap[0];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth;}if(!h){h=e.offsetHeight;}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:$el.height();this.cycleW=(opts.fit&&opts.width)?opts.width:$el.width();if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}while((opts.timeout-opts.speed)<250){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){opts.nextSlide=opts.currSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}log("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){$(els).stop(true,true);opts.busy=false;}if(opts.busy){return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}if(manual||!p.cyclePause){var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};if(opts.nextSlide!=opts.currSlide){opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after);}else{$.fn.cycle.custom(curr,next,opts,after,manual&&opts.fastOnEvent);}}}opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}if(opts.pager){$.fn.cycle.updateActivePagerLink(opts.pager,opts.currSlide);}}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(curr,next,opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide){$(pager).find("a").removeClass("activeSlide").filter("a:eq("+currSlide+")").addClass("activeSlide");};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn(curr,next,opts,fwd);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}if($.isFunction(opts.prevNextClick)){opts.prevNextClick(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){;var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});$.fn.cycle.updateActivePagerLink(opts.pager,opts.startingSlide);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone);});$a=$(arr);}else{$a.appendTo($p);}}$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if($.isFunction(opts.pagerClick)){opts.pagerClick(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);return false;});if(opts.pagerEvent!="click"){$a.click(function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,prevNextEvent:"click",pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.52
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});opts.speed=opts.speed/2;opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);
;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 $(function() {
    $('div').has(Drupal.settings.slideshowKit.invoke).find('.contextual-links-wrapper').remove(); // Remove views administration links, they mess up the cycle pager
    var pagerCounter = 1; //CSS nth-child pseudo selectors start counting at 1, not 0;
    $('div.slideshow div > ul').find('.pager').each(function () {
      $(this).hide();
    });
    $(Drupal.settings.slideshowKit.invoke).cycle({ //The invocation on div>ul ensures that only the actual slides container ul is chosen and not bulleted lists inside the slides. This method is still comptaible with views-based slideshows.
        fx:                   Drupal.settings.slideshowKit.fx,
        timeout:              parseInt(Drupal.settings.slideshowKit.timeout),
        continuous:           parseInt(Drupal.settings.slideshowKit.continuous),
        speed:                parseInt(Drupal.settings.slideshowKit.speed),
        pagerEvent:           Drupal.settings.slideshowKit.pagerEvent,
        easing:               Drupal.settings.slideshowKit.easing,
        random:               parseInt(Drupal.settings.slideshowKit.random),
        pause:                parseInt(Drupal.settings.slideshowKit.pause),
        pauseOnPagerHover:    parseInt(Drupal.settings.slideshowKit.pauseOnPagerHover),
        delay:                parseInt(Drupal.settings.slideshowKit.delay),
        cleartypeNoBg:        true,
        pager:                '#cycle-pager'
    }).find('.pager').each(function () { //find all pager texts that are embedded in the slides
        currPager = $(this).html();
        $('#cycle-pager a:nth-child('+pagerCounter+')').html(currPager); //inject embedded pager code into cycle pager
        $(this).hide();
        pagerCounter++; //set pointer to the next pager
      });
    if (pagerCounter < 2) { pagerCounter =  $('div.slideshow div > ul > li').size()+1};
    $('#cycle-pager a').css({'display' : 'block', 'float' : 'left', 'width' : 100/(pagerCounter-1)+'%'}).append('<div class="cornerstone sn-cs1"></div><div class="cornerstone sn-cs2"></div><div class="cornerstone sn-cs3"></div><div class="cornerstone sn-cs4"></div>');
    $('.slideshow').addClass('cycle-active');
    if (window.Cufon) {
      Cufon.replace('#cycle-pager a');
    }

});;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 $(function() {
  $("#slidedown").css('position','absolute');
  $("#slidedown .block").each(function(){
    var blockHeight = $(this).height()+20;
    $(this).css('top',-blockHeight);
    $(this).find(".pulldown-title").toggle(function() {
      $(this).parent(".block").animate({'top': 0},500,'easeInTurbo2');
      $(this).css('background-position','101.5% -592px');
    }, function() {
      $(this).parent(".block").animate({'top': -blockHeight},500,'easeOutTurbo');
      $(this).css('background-position','101.5% -642px');
    });
  });
});;
$ = jQuery.noConflict().noConflict(); // Make sure jQuery owns $ here
 $(function() {
  var imgurl = Drupal.settings.theme_path+'images/sprite.png';
  $('#header > .inner > ul.menu > li:not(.active-trail) > a').hover(function() {
      var lumiWidth = $(this).width()-5+'px';
      $(this).prepend('<span class="lumi"></span>');
      $(this).find('span.tab').css({'background' : 'none'}); //get rid of original background
      $(this).find('span.lumi').css({'width' : lumiWidth}).fadeTo(500,1);
    }, function() {
      $(this).find('span.lumi').fadeOut(500,function() {
        $(this).remove(); //Delete extra span
      });
    });
});;
// Image Node Auto-Format with Auto Image Grouping.
// Original version by Steve McKenzie.
// Altered by Stella Power for jQuery version.

(function ($) {

function parse_url(url, param) {
  param = param.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  url = url.replace(/&amp;/, "&");
  var regexS = "[\\?&]"+param+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  if (results === null) {
    return "";
  }
  else {
    return results[1];
  }
}


function lightbox2_init_triggers(classes, rel_type, custom_class) {
  if (classes == '' || rel_type == 0) {
    return;
  }
  var settings = Drupal.settings.lightbox2;

  var link_target  = "";
  if (settings.node_link_target !== 0) {
    link_target = 'target="'+ settings.node_link_target +'"';
  }

  $("a:has("+classes+")").each(function(i) {
    if ((!settings.disable_for_gallery_lists && !settings.disable_for_acidfree_gallery_lists) || (!$(this).parents("td.giAlbumCell").attr("class") && !$(this).parents(".galleries").length && !$(this).parents(".acidfree-folder").length && !$(this).parents(".acidfree-list").length) || ($(this).parents(".galleries").length && !settings.disable_for_gallery_lists) || (($(this).parents(".acidfree-folder").length || $(this).parents(".acidfree-list").length) && !settings.disable_for_acidfree_gallery_lists)) {
      var child = $(this).find(classes);
      // Ensure the child has a class attribute we can work with.
      if ($(child).attr("class")) {
        // Set the alt text.
        var alt = $(child).attr("alt");
        if (!alt) {
          alt = "";
        }

        // Set the image node link text.
        var link_text = settings.node_link_text;
        var download_link_text = settings.download_link_text;
        var rewrite = 1;

        // Set the rel attribute.
        var rel = "lightbox";
        var lightframe = false;
        if (rel_type == "lightframe_ungrouped") {
          rel = "lightframe[]";
          lightframe = true;
        }
        else if (rel_type == "lightframe") {
          lightframe = true;
        }
        else if (rel_type == "lightbox_ungrouped") {
          rel = "lightbox[]";
        }
        if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
          rel = rel_type + "[" + $(child).attr("class") + "]";
        }

        // Set the basic href attribute - need to ensure there's no language
        // string (e.g. /en) prepended to the URL.
        var id = null;
        var href = $(child).attr("src");
        var download = null;
        var orig_href = $(this).attr("href");
        var pattern = new RegExp(settings.file_path);
        if (orig_href.match(pattern)) {
          var lang_pattern = new RegExp(Drupal.settings.basePath + "\\w\\w\\/");
          orig_href = orig_href.replace(lang_pattern, Drupal.settings.basePath);
        }
        var frame_href = orig_href;
        // Handle flickr images.
        if ($(child).attr("class").match("flickr-photo-img") ||
          $(child).attr("class").match("flickr-photoset-img")) {
          href = $(child).attr("src").replace("_s.", ".").replace("_t.", ".").replace("_m.", ".").replace("_b.", ".");
          if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
            rel = rel_type + "[flickr]";
            if ($(child).parents("div.block-flickr").attr("class")) {
              id = $(child).parents("div.block-flickr").attr("id");
              rel = rel_type + "["+ id +"]";
            }
          }
          download = href;
        }

        // Handle "image-img_assist_custom" images.
        else if ($(child).filter("img[class*=img_assist_custom]").size()) {
          // Image assist uses "+" signs for spaces which doesn't work for
          // normal links.
          if (settings.display_image_size != "original") {
            orig_href = orig_href.replace(/\+/, " ");
            href = $(child).attr("src").replace(new RegExp("\\.img_assist_custom-[0-9]+x[0-9]+"), ((settings.display_image_size === "")?settings.display_image_size:"."+ settings.display_image_size));
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[node_images]";
            }
            if (lightframe) {
              frame_href = orig_href + "/lightbox2";
            }
          }
          else {
            rewrite = 0;
          }
        }

        // Handle "inline" images.
        else if ($(child).attr("class").match("inline")) {
          href = orig_href;
        }

        // Handle gallery2 block images.
        else if ($(child).attr("class").match("ImageFrame_image") || $(child).attr("class").match("ImageFrame_none")) {
          var thumb_id = parse_url(href, "g2_itemId");
          var new_id = parse_url(orig_href, "g2_itemId");
          if (new_id && thumb_id) {
            var g2pattern = new RegExp("g2_itemId="+thumb_id);
            var replacement = "g2_itemId="+ new_id;
            href = href.replace(g2pattern, replacement);
          }
          rel = rel_type + "[gallery2]";
          if ($(child).parents("div.block-gallery").attr("class")) {
            id = $(child).parents("div.block-gallery").attr("id");
            rel = rel_type + "["+ id +"]";
          }
          download = href;
        }


        // Set the href attribute.
        else if (settings.image_node_sizes != '()' && !custom_class) {
          if (settings.display_image_size != "original") {
            href = $(child).attr("src").replace(new RegExp(settings.image_node_sizes), ((settings.display_image_size === "")?settings.display_image_size:"."+ settings.display_image_size)).replace(/(image\/view\/\d+)(\/[\w\-]*)/, ((settings.display_image_size === "")?"$1/_original":"$1/"+ settings.display_image_size));
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[node_images]";
              if ($(child).parents("div.block-multiblock,div.block-image").attr("class")) {
                id = $(child).parents("div.block-multiblock,div.block-image").attr("id");
                rel = rel_type + "["+ id +"]";
              }
            }
            download = $(child).attr("src").replace(new RegExp(settings.image_node_sizes), "").replace(/(image\/view\/\d+)(\/[\w\-]*)/, "$1/_original");
            if (lightframe) {
              frame_href = orig_href + "/lightbox2";
            }
          }
          else {
            rewrite = 0;
          }
        }
        // Modify the image url.
        var img_title = $(child).attr("title");
        if (!img_title) {
          img_title = $(this).attr("title");
          if (!img_title) {
            img_title = $(child).attr("alt");
          }
          $(child).attr({title: img_title});
        }
        if (lightframe) {
          href = frame_href;
        }
        if (rewrite) {
          if (!custom_class) {
            var title_link = "";
            if (link_text.length) {
              title_link = "<br /><br /><a href=\"" + orig_href + "\" id=\"lightbox2-node-link-text\" "+ link_target +" >"+ link_text + "</a>";
            }
            if (download_link_text.length && download) {
              title_link = title_link + " - <a href=\"" + download + "\" id=\"lightbox2-download-link-text\" target=\"_blank\">" + download_link_text + "</a>";
            }
            rel = rel + "[" + img_title + title_link + "]";
            $(this).attr({
              rel: rel,
              href: href
            });
          }
          else {
            if (rel_type != "lightbox_ungrouped" && rel_type != "lightframe_ungrouped") {
              rel = rel_type + "[" + $(child).attr("class") + "]";
              if ($(child).parents("div.block-image").attr("class")) {
                id = $(child).parents("div.block-image").attr("id");
                rel = rel_type + "["+ id +"]";
              }
            }
            rel = rel + "[" + img_title + "]";
            $(this).attr({
              rel: rel,
              href: orig_href
            });
          }
        }
      }
    }

  });
}

function lightbox2_image_nodes() {
  var settings = Drupal.settings.lightbox2;

  // Don't do it on the image assist popup selection screen.
  var img_assist = document.getElementById("img_assist_thumbs");
  if (!img_assist) {

    // Select the enabled image types.
    lightbox2_init_triggers(settings.trigger_lightbox_classes, "lightbox_ungrouped");
    lightbox2_init_triggers(settings.custom_trigger_classes, settings.custom_class_handler, true);
    lightbox2_init_triggers(settings.trigger_lightbox_group_classes, "lightbox");
    lightbox2_init_triggers(settings.trigger_slideshow_classes, "lightshow");
    lightbox2_init_triggers(settings.trigger_lightframe_classes, "lightframe_ungrouped");
    lightbox2_init_triggers(settings.trigger_lightframe_group_classes, "lightframe");
  }
}

Drupal.behaviors.initAutoLightbox = {
  attach: function(context, settings) {
    lightbox2_image_nodes();
  }
};

//End jQuery block
}(jQuery));
;
