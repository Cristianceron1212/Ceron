import{s as i}from"./p-188a42bd.js";import{a as o}from"./p-18e45a13.js";import{a as d}from"./p-1c2e2695.js";import{g as t}from"./p-4d73f82a.js";const e="surecart/v1/checkouts/",a=["line_items","line_item.price","line_item.fees","line_item.variant","variant.image","price.product","product.featured_product_media","product.product_collections","product_media.media","customer","customer.shipping_address","payment_intent","discount","discount.promotion","recommended_bumps","bump.price","current_upsell","product.variants","discount.coupon","shipping_address","tax_identifier","manual_payment_method","shipping_choices","shipping_choice.shipping_method"],n=(d={})=>{var a,o,e,t,n,l;return{live_mode:"test"!==i.mode,group_key:i.groupId,abandoned_checkout_enabled:i.abandonedCheckoutEnabled,metadata:{...(null==d?void 0:d.metadata)||{},...(null===(a=null===window||void 0===window?void 0:window.scData)||void 0===a?void 0:a.page_id)&&{page_id:null===(o=null===window||void 0===window?void 0:window.scData)||void 0===o?void 0:o.page_id},...(null===(e=null==i?void 0:i.product)||void 0===e?void 0:e.id)&&{buy_page_product_id:null===(t=null==i?void 0:i.product)||void 0===t?void 0:t.id},page_url:window.location.href},...(null===(n=null==i?void 0:i.checkout)||void 0===n?void 0:n.email)&&{email:null===(l=null==i?void 0:i.checkout)||void 0===l?void 0:l.email},...d}},l=(d={})=>{var a,o;return{...!!(null==i?void 0:i.formId)&&{form_id:null==i?void 0:i.formId},...!!(null===(a=null==i?void 0:i.product)||void 0===a?void 0:a.id)&&{product_id:null===(o=null==i?void 0:i.product)||void 0===o?void 0:o.id},...d}},u=()=>{var d,a;return t(window.location.href,"checkout_id")||((null===(d=null==i?void 0:i.checkout)||void 0===d?void 0:d.id)?null===(a=null==i?void 0:i.checkout)||void 0===a?void 0:a.id:null)},r=(i,o="")=>{let t=i?`${e}${i}`:e;return t=`${t}${o}`,d(t,{expand:a})},v=async({id:i,query:a={}})=>await o({path:d(r(i),l(a))}),s=async({id:i=null,data:a={},query:e={}})=>(i=i||u(),await o({method:i?"PATCH":"POST",path:d(r(i),l(e)),data:n(a)})),c=async({id:i,data:a={},query:e={}})=>await o({method:"PATCH",path:d(r(i),l(e)),data:n(a)}),p=async({id:i,data:a={},query:e={},processor:t})=>await o({method:"POST",path:d(r(i,"/finalize"),l({...(null==t?void 0:t.manual)?{manual_payment:!0,manual_payment_method_id:null==t?void 0:t.id}:{processor_type:null==t?void 0:t.id},...e})),data:n(a)}),m=async({checkout:i,data:e,live_mode:t=!1})=>{var n;const l=((null===(n=null==i?void 0:i.line_items)||void 0===n?void 0:n.data)||[]).find((i=>{var d;return(null===(d=null==i?void 0:i.variant)||void 0===d?void 0:d.id)?i.variant.id===e.variant&&i.price.id===e.price:i.price.id===e.price}));if(!(null==i?void 0:i.id))return await o({method:"POST",path:d(r(null)),data:{line_items:[e],live_mode:t}});if(l)return await h({id:null==l?void 0:l.id,data:{...e,quantity:(null==l?void 0:l.quantity)+(null==e?void 0:e.quantity)}});const u=await o({path:d(`surecart/v1/line_items/${(null==l?void 0:l.id)?null==l?void 0:l.id:""}`,{consolidate:!0,expand:[...(a||[]).map((i=>i.includes(".")?i:`checkout.${i}`)),"checkout"]}),method:"POST",data:{...e,checkout:i.id}});return null==u?void 0:u.checkout},_=async({checkoutId:i,itemId:d})=>{const{deleted:a}=await o({path:`surecart/v1/line_items/${d}`,method:"DELETE"});if(!a)throw{code:"error",message:wp.i18n.__("Failed to delete","surecart")};return await v({id:i})},h=async({id:i,data:e})=>{const t=await o({path:d(`surecart/v1/line_items/${i}`,{expand:[...(a||[]).map((i=>i.includes(".")?i:`checkout.${i}`)),"checkout"]}),method:"PATCH",data:e});return null==t?void 0:t.checkout};export{m as a,e as b,s as c,c as d,a as e,p as f,v as g,_ as r,h as u};