function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("1GAPJ");function r(e,t){return new Promise(((i,n)=>{setTimeout((()=>{Math.random()>.3?i({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const i=parseInt(this.elements.delay.value),n=parseInt(this.elements.step.value),o=parseInt(this.elements.amount.value);if(isNaN(i)||isNaN(n)||isNaN(o))return void e(l).Notify.failure("Please fill in all fields with valid numbers");let s=i;for(let t=1;t<=o;t++)r(t,s).then((({position:t,delay:i})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${i}ms`)})).catch((({position:t,delay:i})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${i}ms`)})),s+=n}));
//# sourceMappingURL=03-promises.e11ce095.js.map