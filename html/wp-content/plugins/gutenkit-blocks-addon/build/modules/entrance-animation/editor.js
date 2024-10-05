(()=>{var t={6942:(t,e)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=r(t,o(n)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)i.call(t,n)&&t[n]&&(e=r(e,n));return e}function r(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.wp.hooks,e=window.wp.compose,i=window.wp.element;var a=n(6942),o=n.n(a);const r=t=>{if(t?.target?.hasAttribute("data-motion-effects")){let e=JSON.parse(t.target.getAttribute("data-motion-effects"));t.target.classList.forEach((n=>{"animate__animated"!==n&&n.includes("animate__")&&e?.className!==n&&t.target.classList.remove(n)}));let n="infinite"===e?.loop||!0===e?.loop?"infinite":"1";t.target.classList.add(e?.className),t.target.style.animationDuration=`${e?.speed}ms`,t.target.style.animationDelay=`${e?.delay}ms`,t.target.style.animationIterationCount=n,t.target.style.animationDirection=e?.direction}},s=window.wp.i18n,l=window.ReactJSXRuntime,c=(0,e.createHigherOrderComponent)((t=>e=>{const{useDeviceType:n,onScrollAnimateIframe:a}=window?.gutenkit?.helpers,o=n(),{entranceAnimation:s,AnimationDirection:c,loopAnimation:u}=e?.attributes;return e?.name?.includes("gutenkit")&&(0,i.useEffect)((()=>{e?.attributes?.entranceAnimation&&a(".gkit-motion-effects",r)}),[s,c,u,o]),(0,l.jsx)(t,{...e})}),"EntranceAnimationEdit");(0,t.addFilter)("blocks.registerBlockType","gutenkit/entranceAnimation/attributes",((t,e)=>(e.includes("gutenkit")&&(t.attributes={...t.attributes,entranceAnimation:{type:"object"},loopAnimation:{type:"boolean",default:!1},AnimationDirection:{type:"string",default:"normal"}}),t)),10),(0,t.addFilter)("gutenkit.motionEffects.after-tab","gutenkit/entranceAnimation/controls",(t=>e=>{const{GkitAnimation:n,GkitSwitcher:i,GkitSelect:a}=window.gutenkit.components,{attributes:o,setAttributes:r}=e;return(0,l.jsxs)(t,{...e,children:[(0,l.jsx)(n,{label:(0,s.__)("Entrance Animation","gutenkit-blocks-addon"),value:o?.entranceAnimation,onChange:t=>{r({entranceAnimation:{effect:t?.effect,speed:t?.speed,delay:t?.delay}})}}),null!==o?.entranceAnimation?.effect&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{label:(0,s.__)("Loop Animation","gutenkit-blocks-addon"),value:o?.loopAnimation,onChange:t=>{r({loopAnimation:t})}}),(0,l.jsx)(a,{label:(0,s.__)("Animation Direction","gutenkit-blocks-addon"),value:o?.AnimationDirection,options:[{label:(0,s.__)("Default","gutenkit-blocks-addon"),value:"normal"},{label:(0,s.__)("Reverse ","gutenkit-blocks-addon"),value:"reverse "},{label:(0,s.__)("Alternate","gutenkit-blocks-addon"),value:"alternate"}],onChange:t=>{r({AnimationDirection:t})}})]}),e.children]})}),10),(0,t.addFilter)("gutenkit.blockWrapper.attributes","gutenkit/entranceAnimation/blockWrapper",((t,e)=>{const n={...t,className:o()(t.className,{"gkit-motion-effects animate__animated":e?.entranceAnimation?.effect})};return e?.entranceAnimation?.effect&&(n["data-motion-effects"]=JSON.stringify({className:`animate__${e?.entranceAnimation?.effect?.value}`,speed:e?.entranceAnimation?.speed,delay:e?.entranceAnimation?.delay,loop:e?.loopAnimation,direction:e?.AnimationDirection})),n}),10),(0,t.addFilter)("editor.BlockEdit","gutenkit/entranceAnimation/edit",c,10)})()})();