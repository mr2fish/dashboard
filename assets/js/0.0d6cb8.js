/*! Copyright (c) WEDN.NET */
webpackJsonp([0,9],{43:function(t,e,r){var o,n;r(60),o=r(50);var s=r(67);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=o},50:function(t,e,r){"use strict";e.default={name:"proxy",data:function(){return{top250:{},error:!1}},mounted:function(){var t=this;this.$http.get("/v2/movie/top250").then(function(e){t.top250=e.data}).catch(function(e){console.log(e),t.error=e})}}},54:function(t,e,r){e=t.exports=r(35)(),e.push([t.i,"",""])},60:function(t,e,r){var o=r(54);"string"==typeof o&&(o=[[t.i,o,""]]);r(36)(o,{});o.locals&&(t.exports=o.locals)},67:function(t,e){t.exports={render:function(){var t=this;return t._h("div",[t._h("h1",{staticClass:"page-title"},["HTTP Proxy - "+t._s(t.top250.title)])," ",t.error?t._h("div",[t._h("h2",[t._s(t.error.status)+" - "+t._s(t.error.statusText)])," ",t._h("p",[t._s(t.error.body)])]):t._e()," ",t.error?t._e():t._h("ul",[t._l(t.top250.subjects,function(e){return t._h("li",[t._h("span",[t._s(e.title)])])})])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.0d6cb8.js.map