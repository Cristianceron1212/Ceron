import{sortByArray}from"../../functions/util";import state from"./store";import{state as checkoutState}from"@store/checkout";export const availableProcessors=()=>sortByArray(state.processors,"processor_type",state.sortOrder.processors).filter((e=>(null==e?void 0:e.live_mode)===("live"===(null==checkoutState?void 0:checkoutState.mode)))).filter((e=>!(state.disabled.processors||[]).includes(e.processor_type))).filter((e=>{var t;return!(null===(t=null==checkoutState?void 0:checkoutState.checkout)||void 0===t?void 0:t.reusable_payment_method_required)||!!(null==e?void 0:e.recurring_enabled)})).filter(((e,t,o)=>!o.some((e=>"mollie"===e.processor_type))||"mollie"===e.processor_type));export const getProcessorByType=e=>availableProcessors().find((({processor_type:t})=>t===e));export const getAvailableProcessor=e=>availableProcessors().find((({processor_type:t})=>t===e));export const hasOtherAvailableCreditCardProcessor=e=>availableProcessors().some((({processor_type:t})=>t!==e&&"paypal"!==t));export const availableManualPaymentMethods=()=>{var e;return(null===(e=null==checkoutState?void 0:checkoutState.checkout)||void 0===e?void 0:e.reusable_payment_method_required)?[]:sortByArray(state.manualPaymentMethods,"id",state.sortOrder.manualPaymentMethods).filter((e=>!(state.disabled.processors||[]).includes(null==e?void 0:e.id)))};export const availableMethodTypes=()=>sortByArray(state.methods,"id",state.sortOrder.paymentMethods.mollie);export const availableProcessorChoices=()=>[...availableProcessors(),...availableManualPaymentMethods()];export const hasMultipleProcessorChoices=()=>{var e;return(null===(e=[...availableProcessors(),...availableManualPaymentMethods()])||void 0===e?void 0:e.length)>1};export const availableMethodChoices=()=>[...sortByArray(state.methods,"id",state.sortOrder.paymentMethods.mollie),...availableManualPaymentMethods()];export const hasMultipleMethodChoices=()=>{var e;return(null===(e=[...sortByArray(state.methods,"id",state.sortOrder.paymentMethods.mollie),...availableManualPaymentMethods()])||void 0===e?void 0:e.length)>1};