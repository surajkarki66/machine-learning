(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1756:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return m}));var r,s=n(3),i=n(1),a=n.n(i),o=n(0),l=n(30),c=n(9),p=a.a.div.withConfig({displayName:"ContentBox_Title",componentId:"sc-6fbrxj"})(r||(r=Object(s.__makeTemplateObject)(["\n  flex: 1 1 auto;\n  align-self: center;\n\n  overflow: hidden;\n\n  text-align: left;\n  max-width: 100%;\n\n  ",";\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n"],["\n  flex: 1 1 auto;\n  align-self: center;\n\n  overflow: hidden;\n\n  text-align: left;\n  max-width: 100%;\n\n  ",";\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),c.c.Inter,c.b.TextLight,c.d.FontWeightMedium,c.d.FontSizeM),h=function(e){function t(t){var n=e.call(this,t)||this;return n.changeTab=function(e,t){return function(r){r.preventDefault(),n.setState({activeTabIndex:e},t.action&&t.action)}},n.state={activeTabIndex:t.activeTabIndex||0},n}return Object(s.__extends)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.children,r=t.panes,i=t.tabs,a=t.tabsRightSide,l=Object(s.__rest)(t,["children","panes","tabs","tabsRightSide"]),c=this.state.activeTabIndex;return o.createElement("div",{className:"content-box__tabbed"},o.createElement("div",{className:"content-box__tabs"},i.map((function(t,n){return o.createElement("div",{className:"content-box__tab"+(n===c?"--active":""),key:"content-box-tab-"+n,onClick:e.changeTab(n,t),title:t.title?t.title:t.label.toString()},t.label)})),o.createElement("div",{className:"content-box__tabs-right"},a)),o.createElement(u,Object(s.__assign)({},l,{className:"content-box__tabbed-content"}),r?r[c]:n))},t}(o.Component),d=function(e){function t(t){var n=e.call(this,t)||this;return n.toggleCollapsed=function(){n.setState({isCollapsed:!n.state.isCollapsed})},n.state={isCollapsed:n.props.initiallyCollapsed},n.collapsedClass="fa fa-"+(n.props.collapsedIconFontAwesomeClass||"plus-square-o"),n.expandedClass="fa fa-"+(n.props.expandedIconFontAwesomeClassedIcon||"minus-square-o"),n.props.titleHref&&console.warn("titleHref not supported in CollapsibleContentBox"),n.props.title||console.warn("Untitled CollapsibleContentBox not supported"),n}return Object(s.__extends)(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.setState({isCollapsed:e.initiallyCollapsed})},t.prototype.render=function(){var e="content-box__expand-toggle "+(this.state.isCollapsed?this.collapsedClass:this.expandedClass);return o.createElement("div",{className:l("content-box",this.props.className)},this.props.showLoader?o.createElement("div",{className:"content-box__loader-overlay"},o.createElement("div",{className:"content-box__loader-icon fa fa-refresh fa-spin fa-3x fa-fw margin-bottom"}),o.createElement("div",{className:"content-box__loader-message"},this.props.loaderMessage||"Please wait...")):"",o.createElement("div",{className:"content-box__title-bar--collapsible",onClick:this.props.onToggleCollapse?this.props.onToggleCollapse:this.toggleCollapsed},o.createElement("div",{className:e}),o.createElement(p,null,this.props.title),this.props.titleBarRightSide?o.createElement("div",{className:"content-box__right-side"},this.props.titleBarRightSide):null),this.state.isCollapsed?null:o.createElement("div",{className:l("content-box__content-section",this.props.contentClassName)},this.props.subTitleBar?o.createElement("div",{className:"content-box__subtitle-bar"},this.props.subTitleBar):null,this.props.children))},t}(o.Component),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s.__extends)(t,e),t.prototype.render=function(){var e=o.createElement("div",{className:"content-box__title-bar"},o.createElement(p,{style:{lineHeight:(this.props.titleHeight?this.props.titleHeight:t.titleHeight)+"px"}},this.props.title),this.props.titleBarRightSide?o.createElement("div",{className:"content-box__right-side"},this.props.titleBarRightSide):null);return this.props.title?o.createElement("div",{className:l("content-box",{"content-box--grow":this.props.growVertically},this.props.className)},this.props.showLoader?o.createElement("div",{className:"content-box__loader-overlay"},o.createElement("div",{className:"content-box__loader-icon fa fa-refresh fa-spin fa-3x fa-fw margin-bottom"}),o.createElement("div",{className:"content-box__loader-message"},this.props.loaderMessage||"Please wait...")):"",this.props.titleHref?o.createElement("a",{className:"content-box__title-bar--link",href:this.props.titleHref},e):this.props.onTitleClick?o.createElement("div",{className:"content-box__title-bar--link",onClick:this.props.onTitleClick},e):o.createElement("div",null,e),o.createElement("div",{className:l("content-box__content-section",this.props.contentClassName,{"content-box__content-section--no-border":this.props.borderless})},this.props.subTitleBar?o.createElement("div",{className:"content-box__subtitle-bar"},this.props.subTitleBar):null,this.props.children)):o.createElement("div",{className:l("content-box","content-box--no-title",{"content-box--grow":this.props.growVertically},this.props.className)},o.createElement("div",{className:l("content-box__content-section content-box__content-section--no-title",this.props.borderless?"content-box__content-section--no-border":null,this.props.contentClassName)},o.createElement("div",{className:"content-box__simple-content-box"},o.createElement("div",{className:"content-box__simple-content"},this.props.children))))},t.titleHeight=46,t.subTitleHeight=15,t.margin=24,t}(o.Component),m=function(e){function t(t){var n=e.call(this,t)||this;return n.updateHeightWidth=function(){n.setState({screenHeight:window.innerHeight,screenWidth:window.innerWidth})},n.state={screenHeight:window.innerHeight,screenWidth:window.innerWidth},n}return Object(s.__extends)(t,e),t.prototype.componentDidMount=function(){window.addEventListener("resize",this.updateHeightWidth)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateHeightWidth)},t.prototype.render=function(){var e=document.querySelector(".site-layout__header"),t=document.querySelector(".site-layout__footer"),n=e&&e.clientHeight||0,r=t&&t.clientHeight||0,i=this.props.title?this.props.titleHeight?this.props.titleHeight:u.titleHeight:0,a=this.props.subTitleBar?u.subTitleHeight:0,l=this.state.screenHeight-n-r-(this.state.screenWidth>=768?2*u.margin:0)-i-a-2,c=(this.props.className||"")+" content-box--fullscreen";return o.createElement(u,Object(s.__assign)({},this.props,{className:c,growVertically:!0}),o.createElement("div",{style:{height:l,minHeight:this.props.minHeight||0}},this.props.children))},t}(o.Component)},1765:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(3),s=n(0),i=n(17),a={mobileMax:480+i.b,tabletMin:481+i.b,tabletMax:768+i.b,desktopMin:769+i.b,desktopMax:1024+i.b,desktopLargeMin:1025+i.b},o=function(e){function t(t){var n=e.call(this,t)||this;return n.onResize=function(){n.setState({windowWidth:window.innerWidth})},n.state={windowWidth:window.innerWidth},n}return Object(r.__extends)(t,e),t.prototype.UNSAFE_componentWillMount=function(){window.addEventListener("resize",this.onResize,!1)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize,!1)},t.prototype.componentDidMount=function(){this.onResize()},t.prototype.render=function(){var e=this.state.windowWidth;return(this.props.maxWidth?e>=this.props.minWidth&&e<=this.props.maxWidth:e>=this.props.minWidth)?this.props.children:null},t}(s.Component)},1766:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(83),s=n(17),i=n(164);class a{constructor(e,t={}){this.callback=e,this.root=null,this.rootMargin="",this.thresholds=[],this.observers=new Map,this.threshold=0,this.requestAnimationFrameId=0,this.checkForIntersection=()=>{for(const[e,t]of this.observers){const n=this.getIntersectionObserverEntry(e);t.isIntersecting!==n.isIntersecting&&this.callback([n],this),this.observers.set(e,n)}this.requestAnimationFrameId=window.requestAnimationFrame(this.checkForIntersection)},this.root=t.root||null,this.rootMargin=t.rootMargin||"";const n=Array.isArray(t.threshold)?t.threshold[0]:t.threshold;this.threshold=n||0,this.checkForIntersection=Object(i.f)(this.checkForIntersection,500)}isWithinKaggleContentSection(e){return!(!e||!e.parentElement)&&("site-content"===e.id||this.isWithinKaggleContentSection(e.parentElement))}getRootRect(){return this.root?this.root.getBoundingClientRect():Object(r.c)()}getIntersectionObserverEntry(e){const t=this.isWithinKaggleContentSection(e)&&!this.root?s.k:0,n=this.getRootRect(),i=Object.assign(Object.assign({},n),{top:t,height:n.height-t,y:t}),a=e.getBoundingClientRect(),o=Object(r.b)(a,i),l=a.width*a.height;let c=0;if(l){if(o.height>0&&o.width>0){const e=o.width*o.height;c=e<0?0:e/l}}else c=Object(r.a)(a,i)?1:0;return{boundingClientRect:a,intersectionRatio:c,isIntersecting:1===c||c>this.threshold,intersectionRect:o,rootBounds:i,target:e,time:window.performance&&performance.now&&performance.now()}}startWatching(){this.stopWatching(),this.checkForIntersection()}stopWatching(){window.cancelAnimationFrame(this.requestAnimationFrameId)}observe(e){if(!e||this.observers.has(e))return;const t=this.getIntersectionObserverEntry(e);this.observers.set(e,t),t.isIntersecting&&this.callback([t],this),this.startWatching()}disconnect(){this.observers=new Map,this.stopWatching()}unobserve(e){this.observers.delete(e),this.observers.size||this.stopWatching()}takeRecords(){return Array.from(this.observers).map(([e,t])=>t)}}function o(e,t){return window.IntersectionObserver?new IntersectionObserver(e,t):new a(e,t)}},1774:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(3),s=n(0);function i(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){return s.createElement("span",null,i(this.props.number))},t}(s.Component)},1788:function(e,t,n){"use strict";n.d(t,"h",(function(){return g})),n.d(t,"a",(function(){return _})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return k})),n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return C}));var r=n(3),s=n(83),i=n(546),a=n(1990),o=n(30),l=n(0),c=n(1774),p=n(1989),h=n(1765),d=n(1532),u=n(1955),m=n(1825),f=n(2130);var g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.renderIcon=function(){return this.props.faIcon&&l.createElement("i",{key:this.props.faIcon,className:"pageheader__page-message-icon fa "+this.props.faIcon})},t.prototype.render=function(){var e=this.props,t=e.dangerousHtmlMessage,n=e.faIcon,r=e.message,i=e.type,a=null;if(r&&""!==r)a=l.createElement("span",{key:i,className:o("pageheader__pagemessagecontent","pageheader__pagemessagecontent--"+i,{"pageheader__pagemessagecontent--custom-icon":!!n})},this.renderIcon(),l.createElement("span",null,r));else{if(!t||""===t)return null;a=l.createElement("span",{key:i,className:o("pageheader__pagemessagecontent","pageheader__pagemessagecontent--"+i,{"pageheader__pagemessagecontent--custom-icon":!!n})},this.renderIcon(),Object(s.g)(l.createElement("span",null),t))}return l.createElement("div",{className:o("pageheader__pagemessage","pageheader__pagemessage--"+this.props.type)},a)},t}(l.Component),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){return l.createElement("div",{className:o("pageheader",this.props.dontRestrictWidth?"pageheader--full-width":"")},l.createElement("div",{className:o("pageheader__container",this.props.backgroundClass)},this.props.children))},t}(l.Component),b=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(r.__extends)(t,e),t.prototype.render=function(){return l.createElement("div",{className:"pageheader__fork-section"},l.createElement("div",{className:"pageheader__forked-symbol"},"L"),l.createElement("span",null,"forked from"," ",l.createElement("span",{className:"pageheader__subtitle-link"},this.props.forkParentUrl?l.createElement("a",{href:this.props.forkParentUrl},this.props.forkParentTitle):l.createElement("span",{className:"pageheader__subtitle-nolink"},this.props.forkParentTitle)),!this.props.forkParentIsRedacted&&l.createElement("span",null," ","by"," ",l.createElement("span",{className:"pageheader__subtitle-link"},l.createElement("a",{href:this.props.forkParentAuthorUrl},this.props.forkParentAuthorDisplayName)," "),l.createElement(u.a,{inserts:this.props.forkDiffLinesInserted+this.props.forkDiffLinesChanged,deletes:this.props.forkDiffLinesDeleted+this.props.forkDiffLinesChanged,href:this.props.forkDiffUrl}))))}}(l.Component),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(r.__extends)(t,e),t.prototype.render=function(){var e=l.createElement("a",{href:this.props.userUrl,className:"pageheader__author-name"},this.props.userName),t=null,n=null;this.props.versionLink&&(t=l.createElement("span",null," · ",this.props.versionLink),n=l.createElement("span",null,this.props.versionLink," · "));var r=null;return this.props.dateUpdated&&(r=l.createElement("time",{dateTime:this.props.dateUpdated.toString(),title:this.props.dateUpdated.toString()},"last ",this.props.runTimeVerb," ",l.createElement(i.a,{time:this.props.dateUpdated}))),this.props.showUserName&&this.props.showDateUpdated&&this.props.dateUpdated?l.createElement("span",null,"by ",e,t," · ",r):this.props.showUserName?l.createElement("span",null,"by ",e,t):this.props.showDateUpdated&&this.props.dateUpdated?l.createElement("span",null,n,r):null}}(l.Component),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props.nodeId||null;return l.createElement("div",{className:"pageheader__top--safe",id:e},this.props.children)},t}(l.Component)),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props.nodeId||null;return l.createElement("div",{className:Object(m.b)("pageheader__top",this.props.modifier),id:e},l.createElement("a",{href:this.props.titleUrl,className:Object(m.b)("pageheader__top-overlay",this.props.modifier)}),this.props.coverImageUrl&&l.createElement("div",{className:Object(m.b)("pageheader__top-image",this.props.modifier)},l.createElement("a",{href:this.props.coverImageClickUrl,target:"_blank"},l.createElement("img",{src:this.props.coverImageUrl}))),this.props.title||this.props.subtitle?l.createElement(f.a,{isEditingHeaderInfo:this.props.isEditingHeaderInfo,subtitle:this.props.subtitle,title:this.props.title,titleUrl:this.props.titleUrl,modifier:this.props.modifier,onTitleClick:this.props.onTitleClick,forkInfo:this.props.forkInfo,editHeaderButton:this.props.editHeaderButton,canEdit:this.props.canEdit}):void 0,this.props.children)},t}(l.Component),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.classNameElement,n=e.classNameModifier;return l.createElement("div",{className:Object(m.b)("pageheader__"+t,n,!1)},l.createElement("a",{href:this.props.targetUrl,onClick:this.props.onClick||void 0},l.createElement("img",{src:this.props.imageUrl})),this.props.thumbnailOverlay?this.props.thumbnailOverlay:null)},t}(l.Component),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lockOverflowDropdown:!1,showOverflowDropdown:!1},t.handleNavClick=function(e,n){e.ctrlKey||e.shiftKey||e.metaKey||e.button&&1==e.button||t.props.changeActiveTab&&(e.preventDefault(),t.props.changeActiveTab(n))},t.renderLinkText=function(e){return l.createElement("span",null,l.createElement("span",null,e.text),e.count&&"0"!==e.count?l.createElement("span",{className:"pageheader__link-count"},"(",l.createElement(c.a,{number:e.count}),")"):e.showZeroCountExplicitly?l.createElement("span",{className:"pageheader__link-count"},"(0)"):"")},t.renderRightLink=function(e,n){return l.createElement("a",{key:"pageheader__right-link--"+n,href:e.href,title:e.title,className:o("pageheader__right-links","pageheader__right-links--with-onclick",e.text.toUpperCase()==t.props.activeTab.toUpperCase()?"pageheader__right-links--selected":"",e.tab&&e.tab.toUpperCase()==t.props.activeTab.toUpperCase()?"pageheader__right-links--selected":"",e.additionalClassName||""),onClick:e.actionCallback?function(t){return e.actionCallback(t,e)}:e.tab?function(n){return t.handleNavClick(n,e.tab)}:!e.href&&e.text?function(n){return t.handleNavClick(n,e.text)}:null,id:"pageheader-nav-item--"+Object(p.a)(e.title)},t.renderLinkText(e))},t}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this;return l.createElement("nav",{className:Object(m.b)("pageheader__nav",this.props.classNameModifier)+" "+(this.props.fullWidth?"pageheader__nav--full-width":"")},l.createElement(h.b,{minWidth:0,maxWidth:h.a.tabletMax},l.createElement("div",{className:"pageheader__nav-wrapper"},this.props.menuLinks||this.props.overflowMenuLinks?(this.props.menuLinks?this.props.menuLinks:[]).concat(this.props.overflowMenuLinks).filter((function(e){return null!=e})).map((function(t,n){return l.createElement("a",{key:"pageheader__left-link--"+n,href:t.href||t.tab,title:t.title,className:o("pageheader__left-links","pageheader__left-links--with-onclick",(t.text||"").toUpperCase()===(e.props.activeTab||"").toUpperCase()?"pageheader__left-links--selected":""),onClick:function(n){return t.actionCallback?t.actionCallback(n,t):t.tab?e.handleNavClick(n,t.text):""},id:"pageheader-nav-item--"+Object(p.a)(t.title)},e.renderLinkText(t))})):null,l.createElement("div",{className:"pageheader__right-links-wrapper"},this.props.rightMenuLinks?this.props.rightMenuLinks.map((function(t,n){return l.createElement("a",{key:"pageheader__right-link--"+n,href:t.href,title:t.title,className:o("pageheader__right-links","pageheader__right-links--with-onclick",t.text.toUpperCase()==e.props.activeTab.toUpperCase()?"pageheader__right-links--selected":"",t.tab&&t.tab.toUpperCase()==e.props.activeTab.toUpperCase()?"pageheader__right-links--selected":""),onClick:t.actionCallback?function(e){return t.actionCallback(e,t)}:t.tab?function(n){return e.handleNavClick(n,t.tab)}:!t.href&&t.text?function(n){return e.handleNavClick(n,t.text)}:null,id:"pageheader-nav-item--"+Object(p.a)(t.title)},t.text)})):null))),l.createElement(h.b,{minWidth:h.a.desktopMin},l.createElement("div",{className:"pageheader__nav-wrapper"},this.props.menuLinks&&this.props.menuLinks.filter((function(e){return null!=e})).map((function(t,n){return l.createElement("a",{key:"pageheader__left-link--"+n,href:t.href||t.tab,title:t.title,className:o("pageheader__left-links","pageheader__left-links--with-onclick",(t.text||"").toUpperCase()===(e.props.activeTab||"").toUpperCase()?"pageheader__left-links--selected":""),onClick:function(n){return t.actionCallback?t.actionCallback(n,t):t.tab?e.handleNavClick(n,t.text):""},id:"pageheader-nav-item--"+Object(p.a)(t.title)},e.renderLinkText(t))})),this.props.overflowMenuLinks&&this.props.overflowMenuLinks.length?l.createElement("div",{className:"pageheader__more-links",onMouseEnter:function(){e.state.lockOverflowDropdown||e.setState({showOverflowDropdown:!0})},onMouseLeave:function(){e.state.lockOverflowDropdown||e.setState({showOverflowDropdown:!1})}},l.createElement("a",{key:"pageheader__left-link--"+(this.props.menuLinks?this.props.menuLinks.length:0),title:"More",className:o("pageheader__left-links","pageheader__left-links--with-onclick","pageheader__more-link",this.state.lockOverflowDropdown?"pageheader__left-links--selected":"")},l.createElement("p",{className:"pageheader__more-link-wrapper"},l.createElement("svg",{className:"pageheader__more-ellipsis",width:"18px",height:"4px",viewBox:"0 0 18 4"},l.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 Z M9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 Z M2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 Z",fill:"#444"})))),this.state.showOverflowDropdown?l.createElement("div",{className:"pageheader__nav-overflow"},this.props.overflowMenuLinks.map((function(t,n){return l.createElement("span",{key:"pageheader__overflow-link--"+n,className:"pageheader__overflow-link-wrapper"},l.createElement("a",{href:t.href||t.tab,title:t.title,className:o("pageheader__left-links","pageheader__overflow-links",(t.text||"").toUpperCase()===(e.props.activeTab||"").toUpperCase()?"pageheader__left-links--selected":""),onClick:function(n){return t.actionCallback?t.actionCallback(n,t):t.tab?e.handleNavClick(n,t.tab):""},id:"pageheader-nav-item--"+Object(p.a)(t.title)},e.renderLinkText(t)))}))):null)):null,l.createElement("div",{className:"pageheader__right-links-wrapper"},this.props.rightMenuLinks?this.props.rightMenuLinks.map((function(t,n){return e.renderRightLink(t,n)})):null))))},t}(l.Component),w=function(e){function t(t){var n=e.call(this,t)||this;return n.onPageMessagesUpdated=function(e){n.setState({pageMessages:e})},n.state={pageMessages:[]},n}return Object(r.__extends)(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){JSON.stringify(this.props.pageMessages)!==JSON.stringify(e.pageMessages)&&(d.a.clear(),d.a.add(e.pageMessages))},t.prototype.componentDidMount=function(){d.a.addListener(this.onPageMessagesUpdated),d.a.add(this.props.pageMessages)},t.prototype.componentWillUnmount=function(){d.a.removeListener(this.onPageMessagesUpdated)},t.prototype.hasPageMessages=function(){return Boolean(this.state.pageMessages&&this.state.pageMessages.length>0)},t.prototype.render=function(){return this.hasPageMessages()||this.props.children?l.createElement(a.a,{elevate:!0},l.createElement("div",{className:"pageheader__bottom pageheader__bottom"+(this.hasPageMessages()?"--with-pagemessages":"")},this.props.children),l.createElement("div",null,this.hasPageMessages()?this.state.pageMessages.map((function(e,t){return l.createElement(g,Object(r.__assign)({key:"pageheader__pagemessage--"+t},e))})):""),l.createElement("div",{className:"pageheader__transition"})):null},t}(l.Component),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this;return l.createElement("a",{className:"pageheader__calltoaction "+(this.props.isActive?"pageheader__calltoaction--active":this.props.isMuted?"pageheader__calltoaction--muted":this.props.isSelected&&"pageheader__calltoaction--selected"),href:this.props.href?this.props.href:null,onClick:function(t){return e.props.onClick&&e.props.onClick(t)},title:this.props.title},this.props.text)},t}(l.Component)},1825:function(e,t,n){"use strict";function r(e){var t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}function s(e,t,n){return void 0===n&&(n=!0),""+e+(t&&n?" "+e+"--"+t:t?"--"+t:"")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))},1955:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),s=n(0),i=n(543),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.getMessage=function(e,t){var n=function(e){return i("line",e,!0)};return n(e)+" inserted / "+n(t)+" deleted"},t.prototype.render=function(){var e=this.props.spaced?" ":"";return s.createElement("span",{title:""+t.getMessage(this.props.inserts,this.props.deletes)},this.props.noParens?"":"(",this.props.includeForkIcon?s.createElement("span",{className:"fa fa-code-fork"}):null,s.createElement("a",{className:"diff-summary__link",href:this.props.href,onClick:this.props.onClick},s.createElement("span",{className:"diff-summary__inserted"},"+",this.props.inserts),e,"/",e,s.createElement("span",{className:"diff-summary__deleted"},"–",this.props.deletes)),this.props.noParens?"":")")},t}(s.Component)},1989:function(e,t,n){"use strict";function r(e){return e.toString().toLowerCase().trim().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-")}n.d(t,"a",(function(){return r}))},1990:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(1),s=n.n(r),i=n(0),a=n(1766),o=n(17);const l=s.a.div`
  position: relative;
`,c=s.a.div`
  height: 1px;
  width: 1px;
  top: -1px;
  position: absolute;
`,p=s.a.div`
  box-shadow: ${e=>e.elevate&&e.theme.material.elevation[2]};
`,h=({children:e,elevate:t=!1,offset:n=o.k,onStick:r=(()=>void 0),onUnstick:s=(()=>void 0)})=>{const[h,d]=i.useState(!1),u=i.useRef(document.createElement("div")),m=i.useRef(document.createElement("div")),f=i.useRef(document.createElement("div")),g=()=>{f.current.style.position="fixed",f.current.style.top=n+"px",f.current.style.zIndex="999"},_=()=>{f.current.style.position="",f.current.style.top=n+"",f.current.style.zIndex=""};return i.useEffect(()=>{const e=()=>{_(),f.current.style.height="",f.current.style.width="",m.current.style.height="",m.current.style.width="";const e=f.current.getBoundingClientRect();m.current.style.height=e.height+"px",m.current.style.width=e.width+"px",f.current.style.height=e.height+"px",f.current.style.width=e.width+"px",h&&g()};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),i.useEffect(()=>{const e=Object(a.a)(([e])=>{const t=u.current.getBoundingClientRect().top;e.intersectionRatio<1&&t<window.innerHeight?h||(d(!0),g(),r()):h&&(d(!1),_(),s())},{threshold:1});return e.observe(u.current),()=>{e.unobserve(u.current)}}),i.createElement(l,{ref:m},i.createElement(c,{offset:n,ref:u}),i.createElement(p,{elevate:t&&h,ref:f},e))}},2130:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n(1825),s=function(t){var n=t.title,s=t.subtitle,i=t.titleUrl,a=t.isEditingHeaderInfo,o=t.modifier,l=t.onTitleClick,c=t.forkInfo,p=t.editHeaderButton,h=t.canEdit;return e.createElement(e.Fragment,null,function(t,n,s,i,a){return n?t:s?e.createElement("a",{href:s,className:Object(r.b)("pageheader__title",a)},t):e.createElement("div",{className:Object(r.b)("pageheader__title",a),onClick:i},t)}(n,a,i,l,o),p&&h?p:void 0,function(t,n,s,i,a){return n?t:e.createElement("a",{href:s,className:Object(r.b)("pageheader__subtitle",a)},e.createElement("p",null,t),i)}(s,a,i,c,o))}}).call(this,n(0))}}]);