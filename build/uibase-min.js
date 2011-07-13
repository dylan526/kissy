/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Jul 13 20:58
*/
KISSY.add("uibase/align",function(f,l,d,h){function k(a){if(l.ie)return a.offsetParent;var c=a.ownerDocument,j=d.css(a,"position"),m=j=="fixed"||j=="absolute";for(a=a.parentNode;a&&a!=c;a=a.parentNode){j=d.css(a,"position");m=m&&j=="static"&&a!=c.documentElement&&a!=c.body;if(!m&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||j=="fixed"||j=="absolute"))return a}return null}function b(a){for(var c in a)if(f.indexOf("fail")==0)return true;return false}function g(a){var c=a.offset,j=a.node,
m=a.points,n,e=this.get("el");c=c||[0,0];n=e.offset();j=i(j,m[0]);m=i(e,m[1]);m=[m.left-j.left,m.top-j.top];n={left:n.left-m[0]+ +c[0],top:n.top-m[1]+ +c[1]};a:{c=n;n=this.get("el");e={};m={width:n[0].offsetWidth,height:n[0].offsetHeight};j=f.clone(m);if(a.overflow){e={left:0,right:Infinity,top:0,bottom:Infinity};var r=n.ownerDocument,s=r.body;r=!l.webkit?r.documentElement:s;for(var o,t=n;t=k(t);)if((!l.ie||t.clientWidth!=0)&&(!l.webkit||t.clientHeight!=0||t!=s)&&(t.scrollWidth!=t.clientWidth||t.scrollHeight!=
t.clientHeight)&&d.css(t,"overflow")!="visible"){var u=d.offset(t),v={left:t.clientLeft,top:t.clientTop};u.left+=v.left;u.top+=v.top;e.top=Math.max(e.top,u.top);e.right=Math.min(e.right,u.left+t.clientWidth);e.bottom=Math.min(e.bottom,u.top+t.clientHeight);e.left=Math.max(e.left,u.left);o=o||t!=r}s=r.scrollLeft;r=r.scrollTop;if(l.webkit){e.left+=s;e.top+=r}else{e.left=Math.max(e.left,s);e.top=Math.max(e.top,r)}if(!o||l.webkit){e.right+=s;e.bottom+=r}e.right=Math.min(e.right,s+d.viewportWidth());e.bottom=
Math.min(e.bottom,r+d.viewportHeight());o=e.top>=0&&e.left>=0&&e.bottom>e.top&&e.right>e.left?e:null;a=a.overflow||{};e={};if(c.left<o.left&&a.adjustX){c.left=o.left;e.adjustX=1}if(c.left<o.left&&c.left+j.width>o.right&&a.resizeWidth){j.width-=c.left+j.width-o.right;e.resizeWidth=1}if(c.left+j.width>o.right&&a.adjustX){c.left=Math.max(o.right-j.width,o.left);e.adjustX=1}if(a.failX)e.failX=c.left<o.left||c.left+j.width>o.right;if(c.top<o.top&&a.adjustY){c.top=o.top;e.adjustY=1}if(c.top>=o.top&&c.top+
j.height>o.bottom&&a.resizeHeight){j.height-=c.top+j.height-o.bottom;e.resizeHeight=1}if(c.top+j.height>o.bottom&&a.adjustY){c.top=Math.max(o.bottom-j.height,o.top);e.adjustY=1}if(a.failY)e.failY=c.top<o.top||c.top+j.height>o.bottom;e=e;if(b(e)){a=e;break a}}this.set("x",c.left);this.set("y",c.top);if(j.width!=m.width||j.height!=m.height){n.width(j.width);n.height(j.height)}a=e}return a}function p(a,c,j){var m=[];f.each(a,function(n){m.push(n.replace(c,function(e){return j(e)}))});return m}function q(){}
function i(a,c){var j=c.charAt(0),m=c.charAt(1),n,e,r,s;if(a){a=h.one(a);n=a.offset();e=a[0].offsetWidth;r=a[0].offsetHeight}else{n={left:d.scrollLeft(),top:d.scrollTop()};e=d.viewportWidth();r=d.viewportHeight()}s=n.left;n=n.top;if(j==="c")n+=r/2;else if(j==="b")n+=r;if(m==="c")s+=e/2;else if(m==="r")s+=e;return{left:s,top:n}}f.mix(q,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});q.ATTRS={align:{}};q.prototype={_uiSetAlign:function(a){f.isPlainObject(a)&&this.align(a.node,
a.points,a.offset,a.overflow)},align:function(a,c,j,m){var n={};if(m.failX)n.failX=1;if(m.failY)n.failY=1;var e=g.call(this,{node:a,points:c,offset:j,overflow:n});if(b(e)){if(e.failX)c=p(c,/lr/ig,{l:"r",r:"l"});if(e.failY)c=p(c,/tb/ig,{t:"b",b:"t"})}e=g.call(this,{node:a,points:c,offset:j,overflow:n});if(b(e)){delete m.failX;delete m.failY;g.call(this,{node:a,points:c,offset:j,overflow:m})}},center:function(a){this.set("align",{node:a,points:[q.CC,q.CC],offset:[0,0]})}};return q},{requires:["ua",
"dom","node"]});
KISSY.add("uibase/base",function(f,l,d,h){function k(i){i+="";return i.charAt(0).toUpperCase()+i.substring(1)}function b(i){l.apply(this,arguments);for(var a=this.constructor;a;){if(i&&i[q]&&a.HTML_PARSER)if(i[q]=h.one(i[q])){var c=i[q],j=a.HTML_PARSER,m=void 0,n=void 0;for(m in j)if(j.hasOwnProperty(m)){n=j[m];if(f.isFunction(n))this.__set(m,n.call(this,c));else if(f.isString(n))this.__set(m,c.one(n));else f.isArray(n)&&n[0]&&this.__set(m,c.all(n[0]))}}a=a.superclass&&a.superclass.constructor}g(this,"initializer",
"constructor");i&&i.autoRender&&this.render()}function g(i,a,c){for(var j=i.constructor,m=[],n,e,r,s;j;){s=[];if(r=j.__ks_exts)for(var o=0;o<r.length;o++)if(n=r[o]){if(c!="constructor")n=n.prototype.hasOwnProperty(c)?n.prototype[c]:null;n&&s.push(n)}if(j.prototype.hasOwnProperty(a)&&(e=j.prototype[a]))s.push(e);s.length&&m.push.apply(m,s.reverse());j=j.superclass&&j.superclass.constructor}for(o=m.length-1;o>=0;o--)m[o]&&m[o].call(i)}function p(i,a){if(!a)return i;for(var c in a)if(f.isObject(a[c])&&
f.isObject(i[c]))p(i[c],a[c]);else c in i||(i[c]=a[c])}var q="srcNode";d=function(){};b.HTML_PARSER={};b.ATTRS={rendered:{value:false},created:{value:false},render:{view:true,valueFn:function(){return h.one(document.body)},setter:function(i){if(f.isString(i))return h.one(i)}}};f.extend(b,l,{create:function(){if(!this.get("created")){this._createDom();this.fire("createDom");g(this,"createDom","__createDom");this.fire("afterCreateDom");this.set("created",true)}},render:function(){if(!this.get("rendered")){this.create();
this._renderUI();this.fire("renderUI");g(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");g(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();this.fire("syncUI");g(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_createDom:d,_renderUI:d,renderUI:d,_bindUI:function(){var i=this,a=i.__attrs,c,j;for(c in a)if(a.hasOwnProperty(c)){j="_uiSet"+k(c);i[j]&&function(m,n){i.on("after"+k(m)+"Change",function(e){i[n](e.newVal,
e)})}(c,j)}},bindUI:d,_syncUI:function(){var i=this.__attrs,a;for(a in i)if(i.hasOwnProperty(a)){var c="_uiSet"+k(a);this[c]&&this.get(a)!==undefined&&this[c](this.get(a))}},syncUI:d,destroy:function(){for(var i=this.constructor,a,c,j;i;){i.prototype.hasOwnProperty("destructor")&&i.prototype.destructor.apply(this);if(a=i.__ks_exts)for(j=a.length-1;j>=0;j--)(c=a[j]&&a[j].prototype.__destructor)&&c.apply(this);i=i.superclass&&i.superclass.constructor}this.fire("destroy");this.detach()}});b.create=function(i,
a,c,j){function m(){b.apply(this,arguments)}if(f.isArray(i)){j=c;c=a;a=i;i=b}i=i||b;if(f.isObject(a)){j=c;c=a;a=[]}f.extend(m,i,c,j);if(a){m.__ks_exts=a;f.each(a,function(n){if(n){f.each(["ATTRS","HTML_PARSER"],function(e){if(n[e]){m[e]=m[e]||{};p(m[e],n[e])}});f.augment(m,n,false)}})}return m};return b},{requires:["base","dom","node"]});
KISSY.add("uibase/box",function(){function f(){}f.ATTRS={html:{view:true},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elBefore:{view:true},el:{getter:function(){return this.get("view")&&this.get("view").get("el")}},visibleMode:{value:"visibility",view:true},visible:{}};f.prototype={_uiSetVisible:function(l){this.get("view").set("visible",l);this.fire(l?"show":"hide")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",
false)}};return f});
KISSY.add("uibase/boxrender",function(f,l){function d(){}function h(k,b,g,p,q,i){b=b||{};if(g)b.width=g;if(p)b.height=p;g="";for(var a in b)if(b.hasOwnProperty(a))g+=a+":"+b[a]+";";b="";for(var c in i)if(i.hasOwnProperty(c))b+=" "+c+"='"+i[c]+"' ";return"<"+q+(g?" style='"+g+"' ":"")+b+(k?" class='"+k+"' ":"")+"></"+q+">"}d.ATTRS={el:{setter:function(k){if(f.isString(k))return l.one(k)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elBefore:{value:null},html:{},visible:{},
visibleMode:{}};d.construct=h;d.HTML_PARSER={el:function(k){return k}};d.prototype={__renderUI:function(){if(this.__boxRenderNew){var k=this.get("render"),b=this.get("el"),g=this.get("elBefore");g=g&&g[0];k[0].insertBefore(b[0],g||null)}},__createDom:function(){var k=this.get("el");if(!k){this.__boxRenderNew=true;k=new l(h(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.set("el",k)}},_uiSetElAttrs:function(k){this.get("el").attr(k)},
_uiSetElCls:function(k){this.get("el").addClass(k)},_uiSetElStyle:function(k){this.get("el").css(k)},_uiSetWidth:function(k){this.get("el").width(k)},_uiSetHeight:function(k){this.get("el").height(k)},_uiSetHtml:function(k){this.get("el").html(k)},_uiSetVisible:function(k){var b=this.get("el");this.get("visibleMode")=="visibility"?b.css("visibility",k?"visible":"hidden"):b.css("display",k?"":"none")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)},
__destructor:function(){var k=this.get("el");if(k){k.detach();k.remove()}}};return d},{requires:["node"]});KISSY.add("uibase/close",function(){function f(){}f.ATTRS={closable:{value:true,view:true},closeAction:{value:"hide"}};var l={hide:"hide",destroy:"destroy"};f.prototype={__bindUI:function(){var d=this,h=d.get("view").get("closeBtn");h&&h.on("click",function(k){d[l[d.get("closeAction")]||"hide"]();k.halt()})}};return f});
KISSY.add("uibase/closerender",function(f,l){function d(){}d.ATTRS={closable:{value:true},closeBtn:{}};d.HTML_PARSER={closeBtn:function(h){return h.one("."+this.get("prefixCls")+"ext-close")}};d.prototype={_uiSetClosable:function(h){var k=this.get("closeBtn");if(k)h?k.css("display",""):k.css("display","none")},__renderUI:function(){var h=this.get("closeBtn"),k=this.get("contentEl");if(!h&&k){h=(new l("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(k);this.set("closeBtn",h)}},__destructor:function(){var h=this.get("closeBtn");h&&h.detach()}};return d},{requires:["node"]});
KISSY.add("uibase/constrain",function(f,l,d){function h(){}function k(b){var g;if(!b)return g;var p=this.get("view").get("el");if(b!==true){b=d.one(b);g=b.offset();f.mix(g,{maxLeft:g.left+b[0].offsetWidth-p[0].offsetWidth,maxTop:g.top+b[0].offsetHeight-p[0].offsetHeight})}else{b=document.documentElement.clientWidth;g={left:l.scrollLeft(),top:l.scrollTop()};f.mix(g,{maxLeft:g.left+b-p[0].offsetWidth,maxTop:g.top+l.viewportHeight()-p[0].offsetHeight})}return g}h.ATTRS={constrain:{value:false}};h.prototype=
{__renderUI:function(){var b=this,g=b.__getDefAttrs(),p=g.x;g=g.y;var q=p.setter,i=g.setter;p.setter=function(a){var c=q&&q(a);if(c===undefined)c=a;if(!b.get("constrain"))return c;a=k.call(b,b.get("constrain"));return Math.min(Math.max(c,a.left),a.maxLeft)};g.setter=function(a){var c=i&&i(a);if(c===undefined)c=a;if(!b.get("constrain"))return c;a=k.call(b,b.get("constrain"));return Math.min(Math.max(c,a.top),a.maxTop)};b.addAttr("x",p);b.addAttr("y",g)}};return h},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function f(){}f.ATTRS={content:{view:true},contentEl:{getter:function(){return this.get("view")&&this.get("view").get("contentEl")}},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};f.prototype={};return f});
KISSY.add("uibase/contentboxrender",function(f,l,d){function h(){}h.ATTRS={contentEl:{},contentElAttrs:{},contentElStyle:{},contentTagName:{value:"div"},content:{}};h.HTML_PARSER={contentEl:function(b){return b.one("."+this.get("prefixCls")+"contentbox")}};var k=d.construct;h.prototype={__renderUI:function(){},__createDom:function(){var b=this.get("contentEl"),g=this.get("el");if(!b){var p=f.makeArray(g[0].childNodes);b=(new l(k(this.get("prefixCls")+"contentbox",this.get("contentElStyle"),undefined,
undefined,this.get("contentTagName"),this.get("contentElAttrs")))).appendTo(g);for(g=0;g<p.length;g++)b.append(p[g]);this.set("contentEl",b)}},_uiSetContentElAttrs:function(b){b&&this.get("contentEl").attr(b)},_uiSetContentElStyle:function(b){b&&this.get("contentEl").css(b)},_uiSetContent:function(b){if(f.isString(b))this.get("contentEl").html(b);else if(b!==undefined){this.get("contentEl").html("");this.get("contentEl").append(b)}}};return h},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(f){function l(){}l.ATTRS={handlers:{value:[]},draggable:{value:true}};l.prototype={_uiSetHandlers:function(d){d&&d.length>0&&this.__drag&&this.__drag.set("handlers",d)},__bindUI:function(){var d=f.require("dd/draggable"),h=this.get("view").get("el");if(this.get("draggable")&&d)this.__drag=new d({node:h,handlers:this.get("handlers")})},_uiSetDraggable:function(d){var h=this.__drag;if(h)if(d){h.detach("drag");h.on("drag",this._dragExtAction,this)}else h.detach("drag")},
_dragExtAction:function(d){this.set("xy",[d.left,d.top])},__destructor:function(){var d=this.__drag;d&&d.destroy()}};return l});KISSY.add("uibase/loading",function(){function f(){}f.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return f});
KISSY.add("uibase/loadingrender",function(f,l){function d(){}d.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new l("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var h=this._loadingExtEl;h&&h.hide()}};return d},{requires:["node"]});
KISSY.add("uibase/mask",function(){function f(){}f.ATTRS={mask:{value:false}};f.prototype={_uiSetMask:function(l){if(l){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return f},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(f,l,d,h){function k(){g=(new h("<div class='"+this.get("prefixCls")+"ext-mask'/>")).prependTo(document.body);g.css({position:"absolute",left:0,top:0,width:l.ie==6?d.docWidth():"100%",height:d.docHeight()});if(l.ie==6)p=(new h("<iframe style='position:absolute;left:0;top:0;background:red;width:"+d.docWidth()+"px;height:"+d.docHeight()+"px;filter:alpha(opacity=0);z-index:-1;'/>")).insertBefore(g);f.Event.on(window,"resize",function(){var i={width:l.ie==6?d.docWidth():
"100%",height:d.docHeight()};p&&p.css(i);g.css(i)});g.unselectable();g.on("mousedown click",function(i){i.halt()})}function b(){}var g,p,q=0;b.prototype={_maskExtShow:function(){g||k.call(this);var i=this.get("zIndex")-1;g.css("z-index",i);p&&p.css("z-index",i);q++;g.css("display","");p&&p.css("display","")},_maskExtHide:function(){q--;if(q<=0)q=0;if(!q){g&&g.css("display","none");p&&p.css("display","none")}},__destructor:function(){this._maskExtHide()}};return b},{requires:["ua","dom","node"]});
KISSY.add("uibase/position",function(f){function l(){}l.ATTRS={x:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("x")}},y:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("y")}},xy:{setter:function(d){var h=f.makeArray(d);if(h.length){h[0]&&this.set("x",h[0]);h[1]&&this.set("y",h[1])}return d},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true}};l.prototype={move:function(d,h){if(f.isArray(d)){h=d[1];d=d[0]}this.set("xy",
[d,h])}};return l});
KISSY.add("uibase/positionrender",function(){function f(){}f.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999}};f.prototype={__renderUI:function(){var l=this.get("el");l.addClass(this.get("prefixCls")+"ext-position");l.css({visibility:"visible",display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(l){this.get("el").css("z-index",l)},_uiSetX:function(l){this.get("el").offset({left:l})},
_uiSetY:function(l){this.get("el").offset({top:l})}};return f});KISSY.add("uibase/resize",function(f){function l(){}l.ATTRS={resize:{value:{}}};l.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(d){var h=f.require("resizable");if(h){this.resizer&&this.resizer.destroy();d.node=this.get("view").get("el");d.autoRender=true;if(d.handlers)this.resizer=new h(d)}}};return l});
KISSY.add("uibase/shimrender",function(f,l){function d(){}d.ATTRS={shim:{value:true}};d.prototype={_uiSetShim:function(h){var k=this.get("el");if(h&&!this.__shimEl){this.__shimEl=new l("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>");k.prepend(this.__shimEl)}else if(!h&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};return d},
{requires:["node"]});KISSY.add("uibase/stdmod",function(){function f(){}f.ATTRS={header:{getter:function(){return this.get("view")&&this.get("view").get("header")}},body:{getter:function(){return this.get("view")&&this.get("view").get("body")}},footer:{getter:function(){return this.get("view")&&this.get("view").get("footer")}},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};f.prototype={};return f});
KISSY.add("uibase/stdmodrender",function(f,l){function d(){}function h(b,g){var p=b.get("contentEl"),q=b.get(g);if(!q){q=(new l("<div class='"+b.get("prefixCls")+k+g+"'/>")).appendTo(p);b.set(g,q)}}var k="stdmod-";d.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};d.HTML_PARSER={header:function(b){return b.one("."+this.get("prefixCls")+k+"header")},body:function(b){return b.one("."+this.get("prefixCls")+k+"body")},footer:function(b){return b.one("."+
this.get("prefixCls")+k+"footer")}};d.prototype={_setStdModContent:function(b,g){if(f.isString(g))this.get(b).html(g);else{this.get(b).html("");this.get(b).append(g)}},_uiSetBodyStyle:function(b){this.get("body").css(b)},_uiSetHeaderStyle:function(b){this.get("header").css(b)},_uiSetFooterStyle:function(b){this.get("footer").css(b)},_uiSetBodyContent:function(b){this._setStdModContent("body",b)},_uiSetHeaderContent:function(b){this._setStdModContent("header",b)},_uiSetFooterContent:function(b){this._setStdModContent("footer",
b)},__renderUI:function(){h(this,"header");h(this,"body");h(this,"footer")}};return d},{requires:["node"]});
KISSY.add("uibase",function(f,l,d,h,k,b,g,p,q,i,a,c,j,m,n,e,r,s,o,t,u){b.Render=g;c.Render=j;m.Render=n;e.Render=r;t.Render=u;h.Render=k;q.Render=i;f.mix(l,{Align:d,Box:h,Close:b,Contrain:p,Contentbox:q,Drag:a,Loading:c,Mask:m,Position:e,Shim:{Render:s},Resize:o,StdMod:t});return f.UIBase=l},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});