"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[5163],{5163:function(a,r,i){i.r(r),i.d(r,{sc_avatar:function(){return n}});var e=i(5671),t=i(3144),s=i(8860),n=function(){function a(r){(0,e.Z)(this,a),(0,s.r)(this,r),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}return(0,t.Z)(a,[{key:"handleImageChange",value:function(){this.hasError=!1}},{key:"render",value:function(){var a=this;return(0,s.h)("div",{part:"base",class:{avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape},role:"img","aria-label":this.label},this.initials?(0,s.h)("div",{part:"initials",class:"avatar__initials"},this.initials):(0,s.h)("div",{part:"icon",class:"avatar__icon","aria-hidden":"true"},(0,s.h)("slot",{name:"icon"},(0,s.h)("sl-icon",{name:"person-fill",library:"system"}))),this.image&&!this.hasError&&(0,s.h)("img",{part:"image",class:"avatar__image",src:this.image,loading:this.loading,alt:"",onError:function(){return a.hasError=!0}}))}}],[{key:"watchers",get:function(){return{image:["handleImageChange"]}}}]),a}();n.style=":host{display:inline-block;--sc-avatar-size:3rem}.avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--sc-avatar-size);height:var(--sc-avatar-size);background-color:var(--sc-color-gray-400);font-family:var(--sc-font-sans);font-size:calc(var(--sc-avatar-size) * 0.5);font-weight:var(--sc-font-weight-normal);color:var(--sc-color-white);user-select:none;vertical-align:middle}.avatar--circle,.avatar--circle .avatar__image{border-radius:var(--sc-border-radius-circle)}.avatar--rounded,.avatar--rounded .avatar__image{border-radius:var(--sc-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;overflow:hidden}"}}]);