(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{372:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,c=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,i=l&&l(Object);e.exports=function e(t,a,u){if("string"!==typeof a){if(i){var p=l(a);p&&p!==i&&e(t,p,u)}var f=c(a);o&&(f=f.concat(o(a)));for(var d=0;d<f.length;++d){var _=f[d];if(!n[_]&&!r[_]&&(!u||!u[_])){var y=m(a,_);try{s(t,_,y)}catch(v){}}}return t}return t}},579:function(e,t,a){e.exports={container:"style_container__3FZwK",langing:"style_langing__2FxVN",articleInfo:"style_articleInfo__1d5v-",articleCategory:"style_articleCategory__35I8s",articleLabel:"style_articleLabel__26rCk",issueCommentsContainer:"style_issueCommentsContainer__3eK_x",issueComment:"style_issueComment__2oN0w",commentorAvatar:"style_commentorAvatar__BkYRh",issueCommentHeader:"style_issueCommentHeader__1lxXR",issueCommentContent:"style_issueCommentContent__2bwiX",createCommentContainer:"style_createCommentContainer__mllTZ",createComment:"style_createComment__3rcPo",createCommentAvatar:"style_createCommentAvatar__1v_t3",createCommentHeader:"style_createCommentHeader__3opNa",commentSwitch:"style_commentSwitch__2d5YM",active:"style_active__6_-G8",commentorLogin:"style_commentorLogin__2fsAa",createCommentInputContainer:"style_createCommentInputContainer__2VtH6",createCommentTextarea:"style_createCommentTextarea__mjrW_",createCommentOperator:"style_createCommentOperator__2pW3w",articleBody:"style_articleBody__2JILV"}},581:function(e,t,a){e.exports=a.p+"static/media/github.c9e82c1f.svg"},583:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(2),c=a.n(s),o=a(372),m=a.n(o),l=a(90),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};var u=function(e){var t=function(t){var a=t.wrappedComponentRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["wrappedComponentRef"]);return r.a.createElement(l.a,{children:function(t){return r.a.createElement(e,i({},n,t,{ref:a}))}})};return t.displayName="withRouter("+(e.displayName||e.name)+")",t.WrappedComponent=e,t.propTypes={wrappedComponentRef:c.a.func},m()(t,e)};t.a=u},584:function(e,t,a){"use strict";a.r(t);var n=a(365),r=a(366),s=a(368),c=a(367),o=a(369),m=a(0),l=a.n(m),i=a(89),u=a(583),p=a(370),f=a(371),d=a.n(f),_=a(373),y=a.n(_),v=a(88),h=a(13),C=a(579),g=a.n(C),E=a(581),b=a.n(E),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),m=0;m<r;m++)o[m]=arguments[m];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleInput=function(e){e.preventDefault();var t=e.currentTarget;t.style.height="auto",t.style.height=t.scrollTop+t.scrollHeight+"px"},a.handleSubmitComment=function(e){e.preventDefault();var t=a.comment.value;if(t){var n=a.props,r=n.dispatch,s=n.currentIssue;r.user.addComment({id:s.id,content:t,callback:function(){a.comment.value=""}})}},a.handleBack=function(){a.props.history.push("/")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.match.params.number;t.user.getAuthToken(),t.repository.getSingleIssue(a)}},{key:"componentWillUnmount",value:function(){this.props.dispatch.repository.closeCurrentIssue()}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.labelsMap,r=t.commentsMap,s=t.currentIssue,c=t.milestonesMap,o=t.viewer,m=t.isUserLoading;return l.a.createElement(v.a,{loading:a},l.a.createElement("div",{className:g.a.container},l.a.createElement("header",null,l.a.createElement("div",{className:g.a.langing},l.a.createElement("i",{onClick:this.handleBack,className:"fa fa-chevron-left"}),l.a.createElement("p",null,"\u6587\u7ae0\u8be6\u60c5")),l.a.createElement("h1",null,s.title),l.a.createElement("p",{className:g.a.articleInfo},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),y()(s.createdAt).format("YYYY-MM-DD")),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),l.a.createElement("span",{className:g.a.articleCategory},s.milestone&&c[s.milestone].title)),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),s.labels&&s.labels.nodes.map(function(e){var t=n[e];return l.a.createElement("span",{key:t.id,className:g.a.articleLabel,style:{background:"#".concat(t.color)}},t.name)})))),l.a.createElement("main",null,l.a.createElement("article",{className:d()(g.a.articleBody,"markdown-body"),dangerouslySetInnerHTML:{__html:s.bodyHTML}}),l.a.createElement("div",{className:g.a.issueCommentsContainer},s.comments&&s.comments.nodes.map(function(e){var t=r[e];if(t){var a=t.author;return l.a.createElement("section",{key:t.id,className:g.a.issueComment},l.a.createElement("a",{className:g.a.commentorAvatar,href:a.url},l.a.createElement("img",{src:a.avatarUrl,alt:"This is commentor's avatar"})),l.a.createElement("p",{className:g.a.issueCommentHeader},l.a.createElement("a",{href:a.url},l.a.createElement("em",null,a.login)),l.a.createElement("span",null,y()(t.createdAt).format("YYYY-MM-DD HH:mm:ss"))),l.a.createElement("article",{className:d()(g.a.issueCommentContent,"markdown-body"),dangerouslySetInnerHTML:{__html:t.bodyHTML}}))}return null}),l.a.createElement("section",{className:g.a.createCommentContainer},l.a.createElement("div",{className:g.a.createComment},o.id?l.a.createElement("div",{className:g.a.createCommentAvatar},l.a.createElement("img",{src:o.avatarUrl,alt:"This is commentor's avatar"})):l.a.createElement("a",{className:g.a.createCommentAvatar,href:Object(h.e)()},m?l.a.createElement("i",{className:"fa fa-refresh fa-spin fa-3x fa-fw"}):l.a.createElement("img",{src:b.a,alt:"This is commentor's avatar"})),l.a.createElement("div",{className:g.a.createCommentHeader},l.a.createElement("span",{className:d()(g.a.commentSwitch,g.a.active)},"\u7f16\u8f91"),l.a.createElement("span",{className:g.a.commentSwitch},"\u9884\u89c8"),!o.id&&!m&&l.a.createElement("span",{className:g.a.commentorLogin},l.a.createElement("a",{href:Object(h.e)()},"\u767b\u9646"))),l.a.createElement("div",{className:g.a.createCommentInputContainer},l.a.createElement("textarea",{ref:function(t){return e.comment=t},onInput:this.handleInput,className:g.a.createCommentTextarea,placeholder:"\u8bf7\u7f16\u8f91\u60a8\u7684\u8bc4\u8bba"})),l.a.createElement("div",{className:g.a.createCommentOperator},l.a.createElement("button",{onClick:this.handleSubmitComment},"\u8bc4\u8bba"))))))))}}]),t}(m.Component),w=Object(p.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels},function(e){return e.entities.comments},function(e){return e.user.viewer},function(e){return e.user.loading}],function(e,t,a,n,r,s,c,o,m){var l,i={},u=a[e];return u&&(l=u.issue),l&&(i=n[l]),{loading:t,currentIssue:i,milestonesMap:r,labelsMap:s,commentsMap:c,viewer:o,isUserLoading:m}});t.default=Object(i.b)(w)(Object(u.a)(N))}}]);
//# sourceMappingURL=5.ac7a705d.chunk.js.map