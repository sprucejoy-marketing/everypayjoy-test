(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{380:function(t,e,r){"use strict";r(11),r(16),r(251),r(13),r(252),r(38),r(24),r(25),r(12),r(14);var n=r(4),o=(r(384),r(185)),c=r(419),l=r(143),d=r(23);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},381:function(t,e,r){"use strict";r(32);var n=r(383),o={name:"LSearch",props:{iconProps:{type:Object,default:function(){return{color:"#a1a1a1",size:24}}}},data:function(){return{icons:{mdiMagnify:n.f},form:{keyword:""}}},computed:{isFormValid:function(){return!!this.form.keyword}},methods:{handleSearch:function(){this.hideKeyboard(),this.isFormValid&&window.open("".concat(this.$config.googleSearchURL,"?q=").concat(this.form.keyword),"_blank")},hideKeyboard:function(t){t&&t.target&&t.target.blur()}}},c=r(72),l=r(118),d=r.n(l),v=r(177),h=r(438),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-3 d-inline-flex"},[r("v-text-field",{staticClass:"rounded-lg",attrs:{label:"Find stores..",placeholder:"Find stores...",outlined:"","single-line":"","hide-details":"",dense:"",clearable:"",color:"#a1a1a1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-icon",t._b({},"v-icon",t.iconProps,!1),[t._v(t._s(t.icons.mdiMagnify))])]},proxy:!0}]),model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1)}),[],!1,null,null,null),f=component.exports;d()(component,{VIcon:v.a,VTextField:h.a});var m={name:"LHeader",components:{LSearch:f},props:{logoImg:{type:String,default:"https://lapro.sfo2.digitaloceanspaces.com/app/everypayjoy-logo.png"},appBarProps:{type:Object,default:function(){return{height:56,color:"white",app:!0}}}},data:function(){return{drawer:!1}}},x=r(376),_=r(777),y=r(364),w=r(530),k=r(470),O=r(531),C=r(378),j=r(778),P=r(375),S=r(120),V=Object(c.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",t._b({},"v-app-bar",t.appBarProps,!1),[r("v-toolbar-title",{staticClass:" d-flex align-center flex-shrink-0"},[t._t("title",[r("img",{staticClass:"l-image-contain",attrs:{src:t.logoImg,alt:"logo",width:"110",height:"20"},on:{click:function(e){return t.$router.push("/")}}})])],2),t._v(" "),r("v-toolbar-items",{staticClass:"pl-4 hidden-xs-only"},[t._t("default",[r("v-btn",{staticClass:"text-none",attrs:{to:"/b",nuxt:"",text:""}},[r("span",{staticClass:"l-subheadline text--text text--lighten-1 font-weight-bold"},[t._v("\n          Coupons\n        ")])]),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{to:"/k",nuxt:"",text:""}},[r("span",{staticClass:"l-subheadline text--text text--lighten-1 font-weight-bold"},[t._v("\n          Tips\n        ")])]),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{to:"/stores",nuxt:"",text:""}},[r("span",{staticClass:"l-subheadline text--text text--lighten-1 font-weight-bold"},[t._v("\n          All Stores\n        ")])]),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{to:"/weeklyads",nuxt:"",text:""}},[r("span",{staticClass:"l-subheadline text--text text--lighten-1 font-weight-bold"},[t._v("\n          Weekly Ads\n        ")])]),t._v(" "),r("v-btn",{staticClass:"text-none",attrs:{to:"/sweepstakes",nuxt:"",text:""}},[r("span",{staticClass:"l-subheadline text--text text--lighten-1 font-weight-bold"},[t._v("\n          Sweepstakes\n        ")])])])],2),t._v(" "),r("v-spacer"),t._v(" "),r("LSearch"),t._v(" "),t._t("actions"),t._v(" "),r("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",attrs:{color:"#a1a1a1"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-navigation-drawer",{attrs:{temporary:"",absolute:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"primary--text"}},[r("v-list-item",{attrs:{to:"/b",nuxt:""}},[r("v-list-item-title",[t._v("Coupons")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/k",nuxt:""}},[r("v-list-item-title",[t._v("Tips")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/stores",nuxt:""}},[r("v-list-item-title",[t._v("All Stores")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/weeklyads",nuxt:""}},[r("v-list-item-title",[t._v("Weekly Ads")])],1),t._v(" "),r("v-list-item",{attrs:{to:"/sweepstakes",nuxt:""}},[r("v-list-item-title",[t._v("Sweepstakes")])],1)],1)],1)],1)],2)}),[],!1,null,null,null);e.a=V.exports;d()(V,{VAppBar:x.a,VAppBarNavIcon:_.a,VBtn:y.a,VList:w.a,VListItem:k.a,VListItemGroup:O.a,VListItemTitle:C.c,VNavigationDrawer:j.a,VSpacer:P.a,VToolbarItems:S.a,VToolbarTitle:S.b})},384:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},385:function(t,e,r){(e=r(21)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},388:function(t,e,r){"use strict";r(11),r(16),r(13),r(24),r(25),r(12),r(14);var n=r(4),o=(r(398),r(58));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},398:function(t,e,r){var content=r(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("7132a15d",content,!0,{sourceMap:!1})},399:function(t,e,r){(e=r(21)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=e},498:function(t,e,r){var content=r(690);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("cf9783e6",content,!0,{sourceMap:!1})},689:function(t,e,r){"use strict";var n=r(498);r.n(n).a},690:function(t,e,r){(e=r(21)(!1)).push([t.i,".lightbox[data-v-bbb4dea6]{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.8))}",""]),t.exports=e},799:function(t,e,r){"use strict";r.r(e);r(11),r(66),r(32),r(7),r(53),r(54);var n=r(17),o=(r(68),r(6)),c=r(184),l=r(381),d={name:"ContactUsPage",components:{LFooter:c.a,LHeader:l.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.route,c=t.$sentry,e.prev=1,e.next=4,Promise.all([r.$get("v2/seocontent-search",{params:{q:o.path}})]);case 4:return l=e.sent,d=Object(n.a)(l,1),v=d[0],e.abrupt("return",{seocontent:v.data});case 10:e.prev=10,e.t0=e.catch(1),c.captureException(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},data:function(){return{seocontent:null,loading:{},show:{},form:{}}},computed:{},methods:{hideKeyboard:function(t){t&&t.target&&t.target.blur()}},head:function(){var title=this.seocontent&&this.seocontent.title||"EveryPayJoy",t=this.seocontent&&this.seocontent.description||"EveryPayJoy";return{title:title,meta:[{hid:"fb_app_id",property:"fb:app_id",content:this.$config.fbId},{hid:"og_url",property:"og:url",content:"".concat(this.$config.originURL).concat(this.$route.fullPath)},{hid:"og_type",property:"og:type",content:"website"},{hid:"og_title",property:"og:title",content:title},{hid:"og_description",property:"og:description",content:t},{hid:"description",name:"description",content:t},{hid:"og_image",property:"og:image",content:this.seocontent&&this.seocontent.hero_image||"https://lapro.sfo2.digitaloceanspaces.com/app/sweepstakes-og.png"}]}}},v=(r(689),r(72)),h=r(118),f=r.n(h),m=r(370),x=r(380),_=r(371),y=r(377),w=r(388),k=r(372),O=r(374),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("LHeader"),t._v(" "),r("v-main",{staticClass:"text lighten-4"},[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("div",{staticClass:"l-bg cover",staticStyle:{height:"168px","background-image":"url('https://www.sprucejoy.com/images/business-hero-small.jpg')"}},[r("v-row",{staticClass:"lightbox white--text pa-4 fill-height",attrs:{justify:"center",align:"center"}},[r("v-col",[r("h1",{staticClass:"text-center"},[t._v("\n              "+t._s(t.seocontent&&t.seocontent.title||"Contact Us")+"\n            ")])])],1)],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[r("v-col",{staticClass:"max-width-1200 px-5",attrs:{cols:"12",md:"10",lg:"10",xl:"10"}},[r("v-card",{staticClass:"mt-5 pa-4 l-title-3"},[r("h4",{staticClass:"mb-2 l-title-3"},[t._v("\n              If you have any suggestions to EveryPayJoy, share your feedback:\n            ")]),t._v(" "),r("iframe",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px","min-height":"900px"},attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSeOcpxHBtmhE5wfdzVZL8SU-jzPH_va_tMOnWJfn_I3Z6NriQ/viewform?embedded=true",width:"100%",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v("\n              Loading…\n            ")]),t._v(" "),r("p",[t._v("\n              Your privacy is important to us. Any information you provide to\n              us via this website may be placed by us on servers located in\n              countries outside of the EU. If you do not agree to such\n              placement, do not provide the information.\n            ")]),t._v(" "),r("v-divider"),t._v(" "),r("h5",[t._v("Mailing Address:")]),t._v(" "),r("p",[t._v("11900 Jollyville Rd #200524"),r("br"),t._v("Austin, TX 78720.")])],1),t._v(" "),r("LFooter")],1)],1)],1)],1)],1)}),[],!1,null,"bbb4dea6",null);e.default=component.exports;f()(component,{VApp:m.a,VCard:x.a,VCol:_.a,VContainer:y.a,VDivider:w.a,VMain:k.a,VRow:O.a})}}]);