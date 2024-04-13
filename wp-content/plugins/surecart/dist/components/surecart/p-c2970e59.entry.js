import{r as i,c as t,h as e,H as o,a as s}from"./p-cc7ce8c7.js";import{s as n,o as r,r as d}from"./p-188a42bd.js";import{d as l,e as a,f as c,g as u,c as h}from"./p-996fde25.js";import{c as v}from"./p-a27e9b70.js";import{s as p}from"./p-ba41a302.js";import{v as f,c as m,s as g}from"./p-c27fae79.js";import{u as w}from"./p-f47b68d0.js";import{a as y}from"./p-18e45a13.js";import{s as _}from"./p-09484d0e.js";import{c as b,r as C,a as E}from"./p-05fc1ee0.js";import{c as k}from"./p-98057158.js";import{a as S,g as x}from"./p-1c2e2695.js";import{s as I}from"./p-d93fa5d8.js";import"./p-38c649f1.js";import{s as P}from"./p-15d5ce30.js";import{p as j}from"./p-8617d8eb.js";import{g as L}from"./p-4d73f82a.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-67d61723.js";import"./p-7ef0f71c.js";import"./p-23d4aa39.js";import"./p-c06b2e12.js";const T=":host{display:block}sc-table{height:auto}h4{display:block;margin:0;font-weight:var(--sc-font-weight-bold);font-size:var(--sc-font-size-medium)}.stock-alert{--body-spacing:var(--sc-spacing-x-large);--width:500px}.stock-alert__image{width:50px;height:50px;object-fit:cover;margin-right:10px;display:block}.stock-alert__quantity{color:var(--sc-color-gray-500);font-weight:var(--sc-font-weight-bold);display:flex;align-items:center;justify-content:flex-end;gap:var(--sc-spacing-xx-small)}";const A=class{constructor(e){i(this,e);this.scUpdateLineItem=t(this,"scUpdateLineItem",7);this.stockErrors=[];this.busy=undefined;this.error=undefined}getOutOfStockLineItems(){var i,t;return(((t=(i=n.checkout)===null||i===void 0?void 0:i.line_items)===null||t===void 0?void 0:t.data)||[]).filter((i=>{var t,e,o;const s=(t=i.price)===null||t===void 0?void 0:t.product;if(!(s===null||s===void 0?void 0:s.stock_enabled)||(s===null||s===void 0?void 0:s.allow_out_of_stock_purchases))return;if((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id){return((o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.available_stock)<i.quantity}return(s===null||s===void 0?void 0:s.available_stock)<i.quantity}))}async onSubmit(){const i=this.getOutOfStockLineItems().map((i=>{var t,e,o;const s=(t=i.price)===null||t===void 0?void 0:t.product;if((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id){return{...i,quantity:Math.max(((o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.available_stock)||0,0)}}return{...i,quantity:Math.max((s===null||s===void 0?void 0:s.available_stock)||0,0)}}));try{this.busy=true;n.checkout=await l({id:n.checkout.id,data:{line_items:(i||[]).filter((i=>!!i.quantity)).map((i=>{var t,e;return{id:i.id,price_id:(t=i.price)===null||t===void 0?void 0:t.id,quantity:i.quantity,...((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.id)?{variant:i.variant.id}:{}}}))}})}catch(i){const t=((i===null||i===void 0?void 0:i.additional_errors)||[]).map((i=>i===null||i===void 0?void 0:i.message)).filter((i=>i));this.error=`${(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong.","surecart")} ${(t===null||t===void 0?void 0:t.length)&&` ${t.join(". ")}`}`}finally{this.busy=false}}render(){const i=(this.getOutOfStockLineItems()||[]).map((i=>{var t,e,o,s,n,r;const d=(t=i.price)===null||t===void 0?void 0:t.product;const l=typeof((e=i===null||i===void 0?void 0:i.variant)===null||e===void 0?void 0:e.image)!=="string"?(s=(o=i===null||i===void 0?void 0:i.variant)===null||o===void 0?void 0:o.image)===null||s===void 0?void 0:s.url:null;const a=((n=i===null||i===void 0?void 0:i.variant)===null||n===void 0?void 0:n.id)?(r=i===null||i===void 0?void 0:i.variant)===null||r===void 0?void 0:r.available_stock:d===null||d===void 0?void 0:d.available_stock;return{name:d===null||d===void 0?void 0:d.name,image_url:l||(d===null||d===void 0?void 0:d.image_url),quantity:i.quantity,available_stock:a}}));const t=i===null||i===void 0?void 0:i.some((i=>(i===null||i===void 0?void 0:i.available_stock)<1));return e(o,null,e("sc-dialog",{open:!!i.length&&v()==="draft",noHeader:true,onScRequestClose:i=>i.preventDefault(),class:"stock-alert"},e("sc-dashboard-module",{class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},e("sc-flex",{slot:"heading","align-items":"center","justify-content":"flex-start"},e("sc-icon",{name:"alert-circle",style:{color:"var(--sc-color-primary-500"}}),t?wp.i18n.__("Out of Stock","surecart"):wp.i18n.__("Quantity Update","surecart")),e("span",{slot:"description"},t?wp.i18n.__("Some items are no longer available. Your cart will be updated.","surecart"):wp.i18n.__("Available quantities for these items have changed. Your cart will be updated.","surecart")),e("sc-card",{"no-padding":true},e("sc-table",null,e("sc-table-cell",{slot:"head"},wp.i18n.__("Description","surecart")),e("sc-table-cell",{slot:"head",style:{width:"100px",textAlign:"right"}},wp.i18n.__("Quantity","surecart")),i.map(((t,o)=>{const s=o===i.length-1;return e("sc-table-row",{style:{"--columns":"2",...s?{border:"none"}:{}}},e("sc-table-cell",null,e("sc-flex",{justifyContent:"flex-start",alignItems:"center"},e("img",{class:"stock-alert__image",src:`https://surecart.com/cdn-cgi/image/fit=scale-down,format=auto,width=100/${t===null||t===void 0?void 0:t.image_url}`}),e("h4",null,t.name))),e("sc-table-cell",{style:{width:"100px",textAlign:"right"}},e("span",{class:"stock-alert__quantity"},e("span",null,t===null||t===void 0?void 0:t.quantity)," ",e("sc-icon",{name:"arrow-right"})," ",e("span",null,Math.max(t===null||t===void 0?void 0:t.available_stock,0)))))}))))),e("sc-button",{slot:"footer",type:"primary",loading:this.busy,onClick:()=>this.onSubmit()},wp.i18n.__("Continue","surecart"),e("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&e("sc-block-ui",{spinner:true})))}};A.style=T;const R=class{constructor(t){i(this,t);this.state=undefined}componentDidLoad(){window.addEventListener("beforeunload",(i=>this.warnIfUnsavedChanges(i)),{capture:true})}warnIfUnsavedChanges(i){if(["updating","finalizing","confirming"].includes(this.state)){console.log({e:i});i.preventDefault();i.returnValue=wp.i18n.__("Your payment is processing. Exiting this page could cause an error in your order. Please do not navigate away from this page.","surecart");return i.returnValue}}};const O=class{constructor(t){i(this,t);this.disabled=undefined;this.taxProtocol=undefined;this.hasAddress=undefined;this.hasTaxIDField=undefined;this.hasBumpsField=undefined;this.hasTaxLine=undefined;this.hasBumpLine=undefined;this.hasShippingChoices=undefined;this.hasShippingAmount=undefined}handleOrderChange(){var i,t,e,o,s,r,d;if(this.disabled)return;if(p()){this.addAddressField()}if((e=(t=(i=n.checkout)===null||i===void 0?void 0:i.recommended_bumps)===null||t===void 0?void 0:t.data)===null||e===void 0?void 0:e.length){this.addBumps()}if(!!((o=n.checkout)===null||o===void 0?void 0:o.tax_amount)){this.addTaxLine()}if(((s=n.checkout)===null||s===void 0?void 0:s.shipping_enabled)&&((r=n.checkout)===null||r===void 0?void 0:r.selected_shipping_choice_required)){this.addShippingChoices()}if(!!((d=n.checkout)===null||d===void 0?void 0:d.shipping_amount)){this.addShippingAmount()}}handleHasAddressChange(){if(!this.hasAddress)return;this.handleShippingAddressRequired()}componentWillLoad(){var i,t;this.hasAddress=!!this.el.querySelector("sc-order-shipping-address");this.hasTaxIDField=!!this.el.querySelector("sc-order-tax-id-input");this.hasBumpsField=!!this.el.querySelector("sc-order-bumps");this.hasTaxLine=!!this.el.querySelector("sc-line-item-tax");this.hasShippingChoices=!!this.el.querySelector("sc-shipping-choices");this.hasShippingAmount=!!this.el.querySelector("sc-line-item-shipping");if((i=this.taxProtocol)===null||i===void 0?void 0:i.tax_enabled){this.addAddressField();if((t=this.taxProtocol)===null||t===void 0?void 0:t.eu_vat_required){this.addTaxIDField()}}this.removeCheckoutListener=r("checkout",(()=>this.handleOrderChange()))}disconnectedCallback(){this.removeCheckoutListener()}handleShippingAddressRequired(){var i;if(!((i=n.checkout)===null||i===void 0?void 0:i.shipping_address_required))return;const t=this.el.querySelector("sc-order-shipping-address");if(!t)return;t.required=true;const e=this.el.querySelector("sc-customer-name");if(!!e){e.required=true;return}t.requireName=true;t.showName=true}addAddressField(){if(this.hasAddress){return}const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-order-shipping-address");t.label=wp.i18n.__("Address","surecart");i.parentNode.insertBefore(t,i);this.hasAddress=true}addTaxIDField(){if(this.hasTaxIDField)return;const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-order-tax-id-input");i.parentNode.insertBefore(t,i);this.hasTaxIDField=true}addBumps(){if(this.hasBumpsField)return;const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-order-bumps");i.parentNode.insertBefore(t,i.nextSibling);this.hasBumpsField=true}addTaxLine(){var i;if(this.hasTaxLine)return;const t=this.el.querySelector("sc-line-item-total[total=total]");const e=document.createElement("sc-line-item-tax");if(!t)return;if(((i=t===null||t===void 0?void 0:t.previousElementSibling)===null||i===void 0?void 0:i.tagName)==="SC-DIVIDER"){t.parentNode.insertBefore(e,t.previousElementSibling)}else{t.parentNode.insertBefore(e,t)}this.hasTaxLine=true}addShippingChoices(){if(this.hasShippingChoices)return;const i=this.el.querySelector("sc-payment");const t=document.createElement("sc-shipping-choices");i.parentNode.insertBefore(t,i);this.hasShippingChoices=true}addShippingAmount(){var i;if(this.hasShippingAmount)return;let t=this.el.querySelector("sc-line-item-tax");const e=this.el.querySelector("sc-line-item-total[total=total]");if(!e)return;if(!t){t=((i=e===null||e===void 0?void 0:e.previousElementSibling)===null||i===void 0?void 0:i.tagName)==="SC-DIVIDER"?e.previousElementSibling:e}const o=document.createElement("sc-line-item-shipping");t.parentNode.insertBefore(o,t);this.hasShippingAmount=true}render(){return e("slot",null)}get el(){return s(this)}static get watchers(){return{hasAddress:["handleHasAddressChange"]}}};const q=class{constructor(t){i(this,t)}componentWillLoad(){this.maybeAddErrorsComponent()}maybeAddErrorsComponent(){var i,t;if(!!this.el.querySelector("sc-checkout-form-errors"))return;const e=document.createElement("sc-checkout-form-errors");(t=(i=this.el.querySelector("sc-form"))===null||i===void 0?void 0:i.prepend)===null||t===void 0?void 0:t.call(i,e)}render(){return e("slot",null)}get el(){return s(this)}};const F=class{constructor(e){i(this,e);this.scSetCheckoutFormState=t(this,"scSetCheckoutFormState",7);this._stateService=f(m);this.checkoutState=m.initialState}setState(i){const{send:t}=this._stateService;w(i);return t(i)}handleCheckoutStateChange(i){this.scSetCheckoutFormState.emit(i.value)}componentWillLoad(){this._stateService.subscribe((i=>this.checkoutState=i));this._stateService.start()}disconnectedCallback(){this._stateService.stop()}handleSetStateEvent(i){this.setState(i.detail)}async handlePaid(){this.setState("PAID")}render(){if(this.checkoutState.value==="expired"){return e("sc-block-ui",null,e("div",null,wp.i18n.__("Please refresh the page.","surecart")))}return e("slot",null)}static get watchers(){return{checkoutState:["handleCheckoutStateChange"]}}};const D=":host{display:block}";const H=class{constructor(e){i(this,e);this.scSetLoggedIn=t(this,"scSetLoggedIn",7);this.scSetCustomer=t(this,"scSetCustomer",7);this.loggedIn=undefined;this.order=undefined;this.notice=undefined;this.open=undefined;this.loading=undefined;this.error=undefined}handleLoginPrompt(){this.open=true}handleLoginDialogChange(i){if(i){setTimeout((()=>{this.loginForm.querySelector("sc-input").triggerFocus()}),100)}}handleLoggedInChange(i,t){if(t===false&&i){this.notice=true}}handleOrderChange(i,t){if((i===null||i===void 0?void 0:i.updated_at)!==(t===null||t===void 0?void 0:t.updated_at)){this.notice=false}}async handleFormSubmit(i){i.preventDefault();i.stopImmediatePropagation();this.error=null;const{login:t,password:e}=await i.target.getFormJson();try{this.loading=true;const{name:i,email:o}=await y({method:"POST",path:"surecart/v1/login",data:{login:t,password:e}});this.scSetLoggedIn.emit(true);this.scSetCustomer.emit({name:i,email:o});this.open=false}catch(i){console.error(i);this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=false}}render(){return e(o,null,!!this.notice&&e("sc-alert",{type:"success",open:true,style:{marginBottom:"var(--sc-form-row-spacing)"},closable:true},e("span",{slot:"title"},wp.i18n.__("Welcome back!","surecart")),wp.i18n.__("You have logged in successfully.","surecart")),e("slot",null),!this.loggedIn&&e("sc-dialog",{label:wp.i18n.__("Login to your account","surecart"),open:this.open,onScRequestClose:()=>this.open=false},e("sc-form",{ref:i=>this.loginForm=i,onScFormSubmit:i=>{i.preventDefault();i.stopImmediatePropagation()},onScSubmit:i=>this.handleFormSubmit(i)},!!this.error&&e("sc-alert",{type:"danger",open:!!this.error},this.error),e("sc-input",{label:wp.i18n.__("Email or Username","surecart"),type:"text",name:"login",required:true,autofocus:this.open}),e("sc-input",{label:wp.i18n.__("Password","surecart"),type:"password",name:"password",required:true}),e("sc-button",{type:"primary",full:true,loading:this.loading,submit:true},wp.i18n.__("Login","surecart")))))}static get watchers(){return{open:["handleLoginDialogChange"],loggedIn:["handleLoggedInChange"],order:["handleOrderChange"]}}};H.style=D;const U=".confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}sc-dialog::part(overlay){backdrop-filter:blur(4px)}";const M=class{constructor(e){i(this,e);this.scOrderPaid=t(this,"scOrderPaid",7);this.scSetState=t(this,"scSetState",7);this.showSuccessModal=false;this.checkoutStatus=undefined;this.successUrl=undefined}handleConfirmOrderEvent(){if(this.checkoutStatus==="confirming"){this.confirmOrder()}else if(this.checkoutStatus==="confirmed"){_(wp.i18n.__("Order has been confirmed. Please select continue to go to the next step.","surecart"))}}async confirmOrder(){var i,t,e,o,s;try{n.checkout=await y({method:"PATCH",path:S(`surecart/v1/checkouts/${(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id}/confirm`,{expand:a})});this.scSetState.emit("CONFIRMED")}catch(i){console.error(i);b(i)}finally{if(!!((e=(t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.current_upsell)===null||e===void 0?void 0:e.permalink)){setTimeout((()=>{var i,t,e;return window.location.assign(S((t=(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.current_upsell)===null||t===void 0?void 0:t.permalink,{sc_checkout_id:(e=n.checkout)===null||e===void 0?void 0:e.id,sc_form_id:n.formId}))}),50);k();return}const i=((s=(o=n.checkout)===null||o===void 0?void 0:o.metadata)===null||s===void 0?void 0:s.success_url)||this.successUrl;if(i){this.scSetState.emit("REDIRECT");setTimeout((()=>{var t;return window.location.assign(S(i,{sc_order:(t=n.checkout)===null||t===void 0?void 0:t.id}))}),50)}else{this.showSuccessModal=true}k()}}getSuccessUrl(){var i,t,e,o,s;const r=((t=(i=n.checkout)===null||i===void 0?void 0:i.metadata)===null||t===void 0?void 0:t.success_url)||this.successUrl;return r?S(r,{sc_order:(e=n.checkout)===null||e===void 0?void 0:e.id}):(s=(o=window===null||window===void 0?void 0:window.scData)===null||o===void 0?void 0:o.pages)===null||s===void 0?void 0:s.dashboard}handleSuccessModal(){if(this.showSuccessModal){setTimeout((()=>{var i;(i=this.continueButton)===null||i===void 0?void 0:i.focus()}),50)}}render(){var i,t,s,r,d,l,a;const c=(i=n.checkout)===null||i===void 0?void 0:i.manual_payment_method;return e(o,null,e("slot",null),e("sc-dialog",{open:!!this.showSuccessModal,style:{"--body-spacing":"var(--sc-spacing-xxx-large)"},noHeader:true,onScRequestClose:i=>i.preventDefault()},e("div",{class:"confirm__icon"},e("div",{class:"confirm__icon-container"},e("sc-icon",{name:"check"}))),e("sc-dashboard-module",{heading:((s=(t=g===null||g===void 0?void 0:g.text)===null||t===void 0?void 0:t.success)===null||s===void 0?void 0:s.title)||wp.i18n.__("Thanks for your order!","surecart"),style:{"--sc-dashboard-module-spacing":"var(--sc-spacing-x-large)",textAlign:"center"}},e("span",{slot:"description"},((d=(r=g===null||g===void 0?void 0:g.text)===null||r===void 0?void 0:r.success)===null||d===void 0?void 0:d.description)||wp.i18n.__("Your payment was successful. A receipt is on its way to your inbox.","surecart")),!!(c===null||c===void 0?void 0:c.name)&&!!(c===null||c===void 0?void 0:c.instructions)&&e("sc-alert",{type:"info",open:true,style:{"text-align":"left"}},e("span",{slot:"title"},c===null||c===void 0?void 0:c.name),e("div",{innerHTML:c===null||c===void 0?void 0:c.instructions})),e("sc-button",{href:this.getSuccessUrl(),size:"large",type:"primary",ref:i=>this.continueButton=i},((a=(l=g===null||g===void 0?void 0:g.text)===null||l===void 0?void 0:l.success)===null||a===void 0?void 0:a.button)||wp.i18n.__("Continue","surecart"),e("sc-icon",{name:"arrow-right",slot:"suffix"})))))}get el(){return s(this)}static get watchers(){return{checkoutStatus:["handleConfirmOrderEvent"],showSuccessModal:["handleSuccessModal"]}}};M.style=U;const N=class{constructor(e){i(this,e);this.scUpdateOrderState=t(this,"scUpdateOrderState",7);this.scUpdateDraftState=t(this,"scUpdateDraftState",7);this.scPaid=t(this,"scPaid",7);this.scSetState=t(this,"scSetState",7);this.prices=[];this.persist=true}handlePricesChange(){let i=this.addInitialPrices()||[];if(!(i===null||i===void 0?void 0:i.length)){return}return this.loadUpdate({line_items:i})}async finalize(){return await this.handleFormSubmit()}async getFormData(){let i={};const t=this.el.querySelector("sc-form");if(t){const e=await t.getFormJson();i=j(e)}return i}async handleFormSubmit(){var i,t,e,o,s,r,d,l,a,u,h,v;C();w("FINALIZE");if(((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.payment_method_required)&&(I===null||I===void 0?void 0:I.id)==="stripe"&&P.config.stripe.paymentElement){if(typeof((t=P===null||P===void 0?void 0:P.instances)===null||t===void 0?void 0:t.stripeElements)===undefined){w("REJECT");this.handleErrorResponse({message:"Stripe Elements not found.",code:"stripe_elements_not_found"});return new Error("Stripe Elements not found.")}const{error:i}=await((e=P===null||P===void 0?void 0:P.instances)===null||e===void 0?void 0:e.stripeElements.submit());if(i){console.error({error:i});w("REJECT");b(i);return}}let p=await this.getFormData();if(((o=window===null||window===void 0?void 0:window.scData)===null||o===void 0?void 0:o.recaptcha_site_key)&&(window===null||window===void 0?void 0:window.grecaptcha)){try{p["grecaptcha"]=await window.grecaptcha.execute(window.scData.recaptcha_site_key,{action:"surecart_checkout_submit"})}catch(i){console.error(i);w("REJECT");this.handleErrorResponse(i);return new Error(i===null||i===void 0?void 0:i.message)}}try{await this.update(p)}catch(i){console.error(i);w("REJECT");this.handleErrorResponse(i)}try{n.checkout=await c({id:(s=n===null||n===void 0?void 0:n.checkout)===null||s===void 0?void 0:s.id,query:{...(I===null||I===void 0?void 0:I.method)?{payment_method_type:I===null||I===void 0?void 0:I.method}:{},return_url:S(window.location.href,{...((r=n===null||n===void 0?void 0:n.checkout)===null||r===void 0?void 0:r.id)?{checkout_id:(d=n===null||n===void 0?void 0:n.checkout)===null||d===void 0?void 0:d.id}:{},is_surecart_payment_redirect:true})},data:p,processor:{id:I.id,manual:I.manual}});if(["paid","processing"].includes((l=n.checkout)===null||l===void 0?void 0:l.status)){this.scPaid.emit()}if((v=(h=(u=(a=n.checkout)===null||a===void 0?void 0:a.payment_intent)===null||u===void 0?void 0:u.processor_data)===null||h===void 0?void 0:h.mollie)===null||v===void 0?void 0:v.checkout_url){w("PAYING");return setTimeout((()=>{var i,t,e,o;return window.location.assign((o=(e=(t=(i=n.checkout)===null||i===void 0?void 0:i.payment_intent)===null||t===void 0?void 0:t.processor_data)===null||e===void 0?void 0:e.mollie)===null||o===void 0?void 0:o.checkout_url)}),50)}setTimeout((()=>{w("PAYING")}),50);return n.checkout}catch(i){console.error(i);this.handleErrorResponse(i);return new Error(i===null||i===void 0?void 0:i.message)}}async handlePaid(){w("PAID")}async handleAbandonedCartUpdate(i){const t=i.detail;this.loadUpdate({abandoned_checkout_enabled:t})}async handleCouponApply(i){const t=i.detail;C();this.loadUpdate({discount:{...t?{promotion_code:t}:{}}})}componentDidLoad(){this.findOrCreateOrder()}async findOrCreateOrder(){var i;const{redirect_status:t,checkout_id:e,line_items:o,coupon:s,is_surecart_payment_redirect:r}=x(window.location.href);window.history.replaceState({},document.title,d(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id","no_cart"));if(!!r&&!!e){w("FINALIZE");w("PAYING");return this.handleCheckoutIdFromUrl(e,s)}if(!!t){return this.handleRedirectStatus(t,e)}if(!!e){return this.handleCheckoutIdFromUrl(e,s)}if(!!o){return this.handleInitialLineItems(o,s)}const l=(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id;if(l&&this.persist){return this.handleExistingCheckout(l,s)}return this.handleNewCheckout(s)}async handleRedirectStatus(i,t){var e,o;console.info("Handling payment redirect.");if(i==="failed"){b(wp.i18n.__("Payment unsuccessful. Please try again.","surecart"));return}if(!t){b(wp.i18n.__("Could not find checkout. Please contact us before attempting to purchase again.","surecart"));return}try{w("FINALIZE");w("PAID");n.checkout=await u({id:t,query:{refresh_status:true}});if(((e=n.checkout)===null||e===void 0?void 0:e.status)&&["paid","processing"].includes((o=n.checkout)===null||o===void 0?void 0:o.status)){setTimeout((()=>{this.scPaid.emit()}),100)}}catch(i){this.handleErrorResponse(i)}}async handleCheckoutIdFromUrl(i,t=""){var e,o;console.info("Handling existing checkout from url.",t,i);if(t){return this.loadUpdate({id:i,discount:{promotion_code:t},refresh_line_items:true})}try{w("FETCH");n.checkout=await u({id:i,query:{refresh_status:true}});const o=n.mode!==(((e=n.checkout)===null||e===void 0?void 0:e.live_mode)?"live":"test");if(o){console.info("Mode mismatch, creating new checkout.");k();n.checkout=null;await this.handleNewCheckout(t);return}w("RESOLVE")}catch(i){this.handleErrorResponse(i)}switch((o=n.checkout)===null||o===void 0?void 0:o.status){case"paid":case"processing":return setTimeout((()=>{w("FINALIZE");w("PAID");this.scPaid.emit()}),100);case"payment_failed":k();b({message:wp.i18n.__("Payment unsuccessful. Please try again.","surecart")});return;case"payment_intent_canceled":case"canceled":k();b({message:wp.i18n.__("Payment canceled. Please try again.","surecart")});return;case"finalized":b({message:wp.i18n.__("Payment unsuccessful. Please try again.","surecart")});w("REJECT");return}}async handleInitialLineItems(i,t){console.info("Handling initial line items.");const e=this.el.querySelector("sc-order-shipping-address");k();return this.loadUpdate({line_items:i,refresh_line_items:true,...t?{discount:{promotion_code:t}}:{},...(e===null||e===void 0?void 0:e.defaultCountry)?{shipping_address:{country:e===null||e===void 0?void 0:e.defaultCountry}}:{}})}async handleNewCheckout(i){var t;const e=this.getFormData();let o=n.initialLineItems||[];const s=this.el.querySelector("sc-order-shipping-address");try{w("FETCH");n.checkout=await h({data:{...e,...i?{discount:{promotion_code:i}}:{},...(s===null||s===void 0?void 0:s.defaultCountry)?{shipping_address:{country:s===null||s===void 0?void 0:s.defaultCountry}}:{},line_items:o,...((t=n.taxProtocol)===null||t===void 0?void 0:t.eu_vat_required)?{tax_identifier:{number_type:"eu_vat"}}:{}}});w("RESOLVE")}catch(i){console.error(i);this.handleErrorResponse(i)}}async handleExistingCheckout(i,t){var e;if(!i)return this.handleNewCheckout(t);console.info("Handling existing checkout.");try{w("FETCH");n.checkout=await h({id:i,data:{...t?{discount:{promotion_code:t}}:{},...((e=n.taxProtocol)===null||e===void 0?void 0:e.eu_vat_required)?{tax_identifier:{number_type:"eu_vat"}}:{},refresh_line_items:true}});w("RESOLVE")}catch(i){console.error(i);this.handleErrorResponse(i)}}async handleErrorResponse(i){var t,e,o,s,r,l;if(["checkout.not_found"].includes(i===null||i===void 0?void 0:i.code)){window.history.replaceState({},document.title,d(window.location.href,"checkout_id"));k();return this.handleNewCheckout(false)}const a=((i===null||i===void 0?void 0:i.additional_errors)||[]).some((i=>{var t,e;const o=((e=(t=i===null||i===void 0?void 0:i.data)===null||t===void 0?void 0:t.options)===null||e===void 0?void 0:e.purchasable_statuses)||[];return["price_old_version","variant_old_version"].some((i=>o.includes(i)))}));if(a){await this.loadUpdate({id:(t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.id,refresh_line_items:true,status:"draft"});E(((o=(e=i===null||i===void 0?void 0:i.additional_errors)===null||e===void 0?void 0:e[0])===null||o===void 0?void 0:o.message)||wp.i18n.__("Some products in your order were outdated and have been updated. Please review your order summary before proceeding to payment.","surecart"));w("REJECT");return}if(((r=(s=i===null||i===void 0?void 0:i.additional_errors)===null||s===void 0?void 0:s[0])===null||r===void 0?void 0:r.code)==="checkout.product.out_of_stock"){this.fetch();w("REJECT");return}if(["order.invalid_status_transition"].includes(i===null||i===void 0?void 0:i.code)){await this.loadUpdate({id:(l=n===null||n===void 0?void 0:n.checkout)===null||l===void 0?void 0:l.id,status:"draft"});this.handleFormSubmit();return}if((i===null||i===void 0?void 0:i.code)==="rest_cookie_invalid_nonce"){w("EXPIRE");return}if((i===null||i===void 0?void 0:i.code)==="readonly"){k();window.location.assign(d(window.location.href,"order"));return}b(i);w("REJECT")}async initialize(i={}){let t=n.initialLineItems||[];return this.loadUpdate({...(t===null||t===void 0?void 0:t.length)?{line_items:t}:{},...i})}addInitialPrices(){var i;if(!((i=this===null||this===void 0?void 0:this.prices)===null||i===void 0?void 0:i.length))return[];if(this.prices.some((i=>!(i===null||i===void 0?void 0:i.id)))){return}return this.prices.map((i=>({price_id:i.id,quantity:i.quantity,variant:i.variant})))}getSessionId(){var i,t;const e=L(window.location.href,"checkout_id");if(!!e){return e}if((i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.id){return(t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.id}return null}async fetchCheckout(i,{query:t={},data:e={}}={}){try{w("FETCH");const o=await h({id:i,query:t,data:e});w("RESOLVE");return o}catch(i){this.handleErrorResponse(i)}}async fetch(i={}){try{w("FETCH");n.checkout=await u({id:this.getSessionId(),query:i});w("RESOLVE")}catch(i){this.handleErrorResponse(i)}}async update(i={},t={}){try{n.checkout=await h({id:(i===null||i===void 0?void 0:i.id)?i.id:this.getSessionId(),data:i,query:t})}catch(i){if(["checkout.not_found"].includes(i===null||i===void 0?void 0:i.code)){k();return this.initialize()}console.error(i);throw i}}async loadUpdate(i={}){try{w("FETCH");await this.update(i);w("RESOLVE")}catch(i){this.handleErrorResponse(i)}}render(){return e("sc-line-items-provider",{order:n===null||n===void 0?void 0:n.checkout,onScUpdateLineItems:i=>this.loadUpdate({line_items:i.detail})},e("slot",null))}get el(){return s(this)}static get watchers(){return{prices:["handlePricesChange"]}}};export{A as sc_checkout_stock_alert,R as sc_checkout_unsaved_changes_warning,O as sc_form_components_validator,q as sc_form_error_provider,F as sc_form_state_provider,H as sc_login_provider,M as sc_order_confirm_provider,N as sc_session_provider};
//# sourceMappingURL=p-c2970e59.entry.js.map