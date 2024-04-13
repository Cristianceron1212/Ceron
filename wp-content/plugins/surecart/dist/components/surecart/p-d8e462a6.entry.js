import{r as t,c as e,h as r,a}from"./p-cc7ce8c7.js";import{s}from"./p-188a42bd.js";import{d as o}from"./p-996fde25.js";import{r as i,c as n,s as d}from"./p-05fc1ee0.js";import{u as l}from"./p-f47b68d0.js";import{c}from"./p-98057158.js";import{g as h,a as p,s as f,b as u}from"./p-b8e5d313.js";import{g as m}from"./p-06cf0854.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-09484d0e.js";import"./p-67d61723.js";import"./p-7ef0f71c.js";import"./p-23d4aa39.js";import"./p-18e45a13.js";import"./p-c27fae79.js";const w=class{constructor(r){t(this,r);this.scSetState=e(this,"scSetState",7)}handleUpdateSession(t){const{data:e,options:r}=t.detail;if(r===null||r===void 0?void 0:r.silent){this.update(e)}else{this.loadUpdate(e)}}async handleCouponApply(t){const e=t.detail;i();this.loadUpdate({discount:{...e?{promotion_code:e}:{}}})}handleErrorResponse(t){var e,r;if((t===null||t===void 0?void 0:t.code)==="readonly"||((r=(e=t===null||t===void 0?void 0:t.additional_errors)===null||e===void 0?void 0:e[0])===null||r===void 0?void 0:r.code)==="checkout.customer.account_mismatch"){c()}if((t===null||t===void 0?void 0:t.code)==="rest_cookie_invalid_nonce"){l("EXPIRE");return}if(t===null||t===void 0?void 0:t.message){n(t)}if((t===null||t===void 0?void 0:t.code)==="http_request_failed"){n(wp.i18n.__("Something went wrong. Please reload the page and try again.","surecart"))}}async fetch(t={}){this.loadUpdate({status:"draft",...t})}async update(t={},e={}){var r;try{s.checkout=await o({id:(r=s.checkout)===null||r===void 0?void 0:r.id,data:{...t},query:{...e}})}catch(t){console.error(t);throw t}}async loadUpdate(t={}){try{l("FETCH");await this.update(t);l("RESOLVE")}catch(t){l("REJECT");this.handleErrorResponse(t)}}render(){return r("sc-line-items-provider",{order:s.checkout,onScUpdateLineItems:t=>this.loadUpdate({line_items:t.detail})},r("slot",null))}get el(){return a(this)}};const y=":host{display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;font-family:var(--sc-font-sans);font-weight:var(--sc-font-weight-normal)}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--sc-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--sc-panel-background-color);box-shadow:var(--sc-shadow-x-large);transition:var(--sc-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--end .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:100%;max-width:var(--sc-drawer-size, 400px);height:100%}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--start .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--sc-drawer-size, 400px);height:100%}.header__sticky{position:sticky;top:0;z-index:10;background:#fff}.drawer__header{display:flex;align-items:center;padding:var(--sc-drawer-header-spacing);border-bottom:var(--sc-drawer-border)}.drawer__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);margin:0}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);color:var(--sc-color-gray-500);cursor:pointer}.drawer__body{flex:1 1 auto}.drawer--has-footer .drawer__footer{border-top:var(--sc-drawer-border);padding:var(--sc-drawer-footer-spacing)}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color);pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}";const v=class{constructor(r){t(this,r);this.scInitialFocus=e(this,"scInitialFocus",7);this.scRequestClose=e(this,"scRequestClose",7);this.scShow=e(this,"scShow",7);this.scHide=e(this,"scHide",7);this.scAfterShow=e(this,"scAfterShow",7);this.scAfterHide=e(this,"scAfterHide",7);this.open=false;this.label="";this.placement="end";this.contained=false;this.noHeader=false;this.stickyHeader=false}componentDidLoad(){this.drawer.hidden=!this.open;if(this.open&&!this.contained){this.lockBodyScrolling()}this.handleOpenChange()}disconnectedCallback(){this.unLockBodyScrolling()}lockBodyScrolling(){document.body.classList.add("sc-scroll-lock")}unLockBodyScrolling(){document.body.classList.remove("sc-scroll-lock")}async show(){if(this.open){return undefined}this.open=true}async hide(){if(!this.open){return undefined}this.open=false}async requestClose(t="method"){const e=this.scRequestClose.emit(t);if(e.defaultPrevented){const t=h(this.el,"drawer.denyClose");p(this.panel,t.keyframes,t.options);return}this.hide()}handleKeyDown(t){if(t.key==="Escape"){t.stopPropagation();this.requestClose("keyboard")}}async handleOpenChange(){if(this.open){this.scShow.emit();this.originalTrigger=document.activeElement;if(!this.contained){this.lockBodyScrolling()}const t=this.el.querySelector("[autofocus]");if(t){t.removeAttribute("autofocus")}await Promise.all([f(this.drawer),f(this.overlay)]);this.drawer.hidden=false;requestAnimationFrame((()=>{const e=this.scInitialFocus.emit();if(!e.defaultPrevented){if(t){t.focus({preventScroll:true})}else{this.panel.focus({preventScroll:true})}}if(t){t.setAttribute("autofocus","")}}));const e=h(this.el,`drawer.show${this.placement.charAt(0).toUpperCase()+this.placement.slice(1)}`);const r=h(this.el,"drawer.overlay.show");await Promise.all([p(this.panel,e.keyframes,e.options),p(this.overlay,r.keyframes,r.options)]);this.scAfterShow.emit()}else{this.scHide.emit();this.unLockBodyScrolling();await Promise.all([f(this.drawer),f(this.overlay)]);const t=h(this.el,`drawer.hide${this.placement.charAt(0).toUpperCase()+this.placement.slice(1)}`);const e=h(this.el,"drawer.overlay.hide");await Promise.all([p(this.panel,t.keyframes,t.options),p(this.overlay,e.keyframes,e.options)]);this.drawer.hidden=true;const r=this.originalTrigger;if(typeof(r===null||r===void 0?void 0:r.focus)==="function"){setTimeout((()=>r.focus()))}this.scAfterHide.emit()}}render(){return r("div",{part:"base",class:{drawer:true,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-footer":this.el.querySelector('[slot="footer"]')!==null},ref:t=>this.drawer=t,onKeyDown:t=>this.handleKeyDown(t)},r("div",{part:"overlay",class:"drawer__overlay",onClick:()=>this.requestClose("overlay"),tabindex:"-1",ref:t=>this.overlay=t}),r("div",{part:"panel",class:"drawer__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader?this.label:undefined,"aria-labelledby":!this.noHeader?"title":undefined,tabindex:"0",ref:t=>this.panel=t},!this.noHeader&&r("header",{part:"header",class:this.stickyHeader?"header__sticky":""},r("slot",{name:"header"},r("div",{class:"drawer__header"},r("h2",{part:"title",class:"drawer__title",id:"title"},r("slot",{name:"label"},this.label.length>0?this.label:" "," ")),r("sc-icon",{part:"close-button",exportparts:"base:close-button__base",class:"drawer__close",name:"x",label:wp.i18n.__("Close","surecart"),onClick:()=>this.requestClose("close-button")})))),r("footer",{part:"header-suffix",class:"drawer__header-suffix"},r("slot",{name:"header-suffix"})),r("div",{part:"body",class:"drawer__body"},r("slot",null)),r("footer",{part:"footer",class:"drawer__footer"},r("slot",{name:"footer"}))))}get el(){return a(this)}static get watchers(){return{open:["handleOpenChange"]}}};u("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});u("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});u("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});u("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});u("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});u("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});u("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});u("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});u("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});u("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250,easing:"ease"}});u("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250,easing:"ease"}});v.style=y;const _=class{constructor(r){t(this,r);this.scUpdateError=e(this,"scUpdateError",7);this.error=undefined}handleErrorUpdate(t){this.scUpdateError.emit(t)}render(){return!!(d===null||d===void 0?void 0:d.message)?r("sc-alert",{exportparts:"base, icon, text, title, message, close",type:"danger",scrollOnOpen:true,open:!!(d===null||d===void 0?void 0:d.message),closable:!!(d===null||d===void 0?void 0:d.dismissible)},(d===null||d===void 0?void 0:d.message)&&r("span",{slot:"title",innerHTML:d.message}),(m()||[]).map(((t,e)=>r("div",{innerHTML:t,key:e})))):null}static get watchers(){return{error:["handleErrorUpdate"]}}};export{w as sc_cart_session_provider,v as sc_drawer,_ as sc_error};
//# sourceMappingURL=p-d8e462a6.entry.js.map