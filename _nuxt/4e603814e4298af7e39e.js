(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1118:function(r,e,t){"use strict";const n="logger/5.7.0";let o=!1,E=!1;const l={debug:1,default:2,info:2,warning:3,error:4,off:5};let c=l.default,N=null;const h=function(){try{const r=[];if(["NFD","NFC","NFKD","NFKC"].forEach(form=>{try{if("test"!=="test".normalize(form))throw new Error("bad normalize")}catch(e){r.push(form)}}),r.length)throw new Error("missing "+r.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(r){return r.message}return null}();var f,R;!function(r){r.DEBUG="DEBUG",r.INFO="INFO",r.WARNING="WARNING",r.ERROR="ERROR",r.OFF="OFF"}(f||(f={})),function(r){r.UNKNOWN_ERROR="UNKNOWN_ERROR",r.NOT_IMPLEMENTED="NOT_IMPLEMENTED",r.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",r.NETWORK_ERROR="NETWORK_ERROR",r.SERVER_ERROR="SERVER_ERROR",r.TIMEOUT="TIMEOUT",r.BUFFER_OVERRUN="BUFFER_OVERRUN",r.NUMERIC_FAULT="NUMERIC_FAULT",r.MISSING_NEW="MISSING_NEW",r.INVALID_ARGUMENT="INVALID_ARGUMENT",r.MISSING_ARGUMENT="MISSING_ARGUMENT",r.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",r.CALL_EXCEPTION="CALL_EXCEPTION",r.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",r.NONCE_EXPIRED="NONCE_EXPIRED",r.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",r.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",r.TRANSACTION_REPLACED="TRANSACTION_REPLACED",r.ACTION_REJECTED="ACTION_REJECTED"}(R||(R={}));const I="0123456789abcdef";class A{constructor(r){Object.defineProperty(this,"version",{enumerable:!0,value:r,writable:!1})}_log(r,e){const t=r.toLowerCase();null==l[t]&&this.throwArgumentError("invalid log level name","logLevel",r),c>l[t]||console.log.apply(console,e)}debug(...r){this._log(A.levels.DEBUG,r)}info(...r){this._log(A.levels.INFO,r)}warn(...r){this._log(A.levels.WARNING,r)}makeError(r,code,e){if(E)return this.makeError("censored error",code,{});code||(code=A.errors.UNKNOWN_ERROR),e||(e={});const t=[];Object.keys(e).forEach(r=>{const n=e[r];try{if(n instanceof Uint8Array){let e="";for(let i=0;i<n.length;i++)e+=I[n[i]>>4],e+=I[15&n[i]];t.push(r+"=Uint8Array(0x"+e+")")}else t.push(r+"="+JSON.stringify(n))}catch(n){t.push(r+"="+JSON.stringify(e[r].toString()))}}),t.push(`code=${code}`),t.push(`version=${this.version}`);const n=r;let o="";switch(code){case R.NUMERIC_FAULT:{o="NUMERIC_FAULT";const e=r;switch(e){case"overflow":case"underflow":case"division-by-zero":o+="-"+e;break;case"negative-power":case"negative-width":o+="-unsupported";break;case"unbound-bitwise-result":o+="-unbound-result"}break}case R.CALL_EXCEPTION:case R.INSUFFICIENT_FUNDS:case R.MISSING_NEW:case R.NONCE_EXPIRED:case R.REPLACEMENT_UNDERPRICED:case R.TRANSACTION_REPLACED:case R.UNPREDICTABLE_GAS_LIMIT:o=code}o&&(r+=" [ See: https://links.ethers.org/v5-errors-"+o+" ]"),t.length&&(r+=" ("+t.join(", ")+")");const l=new Error(r);return l.reason=n,l.code=code,Object.keys(e).forEach((function(r){l[r]=e[r]})),l}throwError(r,code,e){throw this.makeError(r,code,e)}throwArgumentError(r,e,t){return this.throwError(r,A.errors.INVALID_ARGUMENT,{argument:e,value:t})}assert(r,e,code,t){r||this.throwError(e,code,t)}assertArgument(r,e,t,n){r||this.throwArgumentError(e,t,n)}checkNormalize(r){null==r&&(r="platform missing String.prototype.normalize"),h&&this.throwError("platform missing String.prototype.normalize",A.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:h})}checkSafeUint53(r,e){"number"==typeof r&&(null==e&&(e="value not safe"),(r<0||r>=9007199254740991)&&this.throwError(e,A.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:r}),r%1&&this.throwError(e,A.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:r}))}checkArgumentCount(r,e,t){t=t?": "+t:"",r<e&&this.throwError("missing argument"+t,A.errors.MISSING_ARGUMENT,{count:r,expectedCount:e}),r>e&&this.throwError("too many arguments"+t,A.errors.UNEXPECTED_ARGUMENT,{count:r,expectedCount:e})}checkNew(r,e){r!==Object&&null!=r||this.throwError("missing new",A.errors.MISSING_NEW,{name:e.name})}checkAbstract(r,e){r===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",A.errors.UNSUPPORTED_OPERATION,{name:r.name,operation:"new"}):r!==Object&&null!=r||this.throwError("missing new",A.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return N||(N=new A(n)),N}static setCensorship(r,e){if(!r&&e&&this.globalLogger().throwError("cannot permanently disable censorship",A.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),o){if(!r)return;this.globalLogger().throwError("error censorship permanent",A.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}E=!!r,o=!!e}static setLogLevel(r){const e=l[r.toLowerCase()];null!=e?c=e:A.globalLogger().warn("invalid log level - "+r)}static from(r){return new A(r)}}A.errors=R,A.levels=f;const O=new A("bytes/5.7.0");function U(r){return!!r.toHexString}function T(r){return r.slice?r:(r.slice=function(){const e=Array.prototype.slice.call(arguments);return T(new Uint8Array(Array.prototype.slice.apply(r,e)))},r)}function _(r){return"number"==typeof r&&r==r&&r%1==0}function m(r){if(null==r)return!1;if(r.constructor===Uint8Array)return!0;if("string"==typeof r)return!1;if(!_(r.length)||r.length<0)return!1;for(let i=0;i<r.length;i++){const e=r[i];if(!_(e)||e<0||e>=256)return!1}return!0}function w(r,e){if(e||(e={}),"number"==typeof r){O.checkSafeUint53(r,"invalid arrayify value");const e=[];for(;r;)e.unshift(255&r),r=parseInt(String(r/256));return 0===e.length&&e.push(0),T(new Uint8Array(e))}if(e.allowMissingPrefix&&"string"==typeof r&&"0x"!==r.substring(0,2)&&(r="0x"+r),U(r)&&(r=r.toHexString()),C(r)){let t=r.substring(2);t.length%2&&("left"===e.hexPad?t="0"+t:"right"===e.hexPad?t+="0":O.throwArgumentError("hex data is odd-length","value",r));const n=[];for(let i=0;i<t.length;i+=2)n.push(parseInt(t.substring(i,i+2),16));return T(new Uint8Array(n))}return m(r)?T(new Uint8Array(r)):O.throwArgumentError("invalid arrayify value","value",r)}function C(r,e){return!("string"!=typeof r||!r.match(/^0x[0-9A-Fa-f]*$/))&&(!e||r.length===2+2*e)}const S="0123456789abcdef";function y(r,e){if(e||(e={}),"number"==typeof r){O.checkSafeUint53(r,"invalid hexlify value");let e="";for(;r;)e=S[15&r]+e,r=Math.floor(r/16);return e.length?(e.length%2&&(e="0"+e),"0x"+e):"0x00"}if("bigint"==typeof r)return(r=r.toString(16)).length%2?"0x0"+r:"0x"+r;if(e.allowMissingPrefix&&"string"==typeof r&&"0x"!==r.substring(0,2)&&(r="0x"+r),U(r))return r.toHexString();if(C(r))return r.length%2&&("left"===e.hexPad?r="0x0"+r.substring(2):"right"===e.hexPad?r+="0":O.throwArgumentError("hex data is odd-length","value",r)),r.toLowerCase();if(m(r)){let e="0x";for(let i=0;i<r.length;i++){let t=r[i];e+=S[(240&t)>>4]+S[15&t]}return e}return O.throwArgumentError("invalid hexlify value","value",r)}var P=t(1150);function d(r,e,t,n,o){let E;r=w(r),e=w(e);let l=1;const c=new Uint8Array(n),N=new Uint8Array(e.length+4);let h,f;N.set(e);for(let i=1;i<=l;i++){N[e.length]=i>>24&255,N[e.length+1]=i>>16&255,N[e.length+2]=i>>8&255,N[e.length+3]=255&i;let R=w(Object(P.a)(o,r,N));E||(E=R.length,f=new Uint8Array(E),h=n-((l=Math.ceil(n/E))-1)*E),f.set(R);for(let e=1;e<t;e++){R=w(Object(P.a)(o,r,R));for(let r=0;r<E;r++)f[r]^=R[r]}const I=(i-1)*E,A=i===l?h:E;c.set(w(f).slice(0,A),I)}return y(c)}t.d(e,"a",(function(){return d}))},24:function(r,e,t){"use strict";const n="logger/5.5.0";t.d(e,"a",(function(){return A}));let o=!1,E=!1;const l={debug:1,default:2,info:2,warning:3,error:4,off:5};let c=l.default,N=null;const h=function(){try{const r=[];if(["NFD","NFC","NFKD","NFKC"].forEach(form=>{try{if("test"!=="test".normalize(form))throw new Error("bad normalize")}catch(e){r.push(form)}}),r.length)throw new Error("missing "+r.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(r){return r.message}return null}();var f,R;!function(r){r.DEBUG="DEBUG",r.INFO="INFO",r.WARNING="WARNING",r.ERROR="ERROR",r.OFF="OFF"}(f||(f={})),function(r){r.UNKNOWN_ERROR="UNKNOWN_ERROR",r.NOT_IMPLEMENTED="NOT_IMPLEMENTED",r.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",r.NETWORK_ERROR="NETWORK_ERROR",r.SERVER_ERROR="SERVER_ERROR",r.TIMEOUT="TIMEOUT",r.BUFFER_OVERRUN="BUFFER_OVERRUN",r.NUMERIC_FAULT="NUMERIC_FAULT",r.MISSING_NEW="MISSING_NEW",r.INVALID_ARGUMENT="INVALID_ARGUMENT",r.MISSING_ARGUMENT="MISSING_ARGUMENT",r.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",r.CALL_EXCEPTION="CALL_EXCEPTION",r.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",r.NONCE_EXPIRED="NONCE_EXPIRED",r.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",r.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",r.TRANSACTION_REPLACED="TRANSACTION_REPLACED"}(R||(R={}));const I="0123456789abcdef";class A{constructor(r){Object.defineProperty(this,"version",{enumerable:!0,value:r,writable:!1})}_log(r,e){const t=r.toLowerCase();null==l[t]&&this.throwArgumentError("invalid log level name","logLevel",r),c>l[t]||console.log.apply(console,e)}debug(...r){this._log(A.levels.DEBUG,r)}info(...r){this._log(A.levels.INFO,r)}warn(...r){this._log(A.levels.WARNING,r)}makeError(r,code,e){if(E)return this.makeError("censored error",code,{});code||(code=A.errors.UNKNOWN_ERROR),e||(e={});const t=[];Object.keys(e).forEach(r=>{const n=e[r];try{if(n instanceof Uint8Array){let e="";for(let i=0;i<n.length;i++)e+=I[n[i]>>4],e+=I[15&n[i]];t.push(r+"=Uint8Array(0x"+e+")")}else t.push(r+"="+JSON.stringify(n))}catch(n){t.push(r+"="+JSON.stringify(e[r].toString()))}}),t.push(`code=${code}`),t.push(`version=${this.version}`);const n=r;t.length&&(r+=" ("+t.join(", ")+")");const o=new Error(r);return o.reason=n,o.code=code,Object.keys(e).forEach((function(r){o[r]=e[r]})),o}throwError(r,code,e){throw this.makeError(r,code,e)}throwArgumentError(r,e,t){return this.throwError(r,A.errors.INVALID_ARGUMENT,{argument:e,value:t})}assert(r,e,code,t){r||this.throwError(e,code,t)}assertArgument(r,e,t,n){r||this.throwArgumentError(e,t,n)}checkNormalize(r){null==r&&(r="platform missing String.prototype.normalize"),h&&this.throwError("platform missing String.prototype.normalize",A.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:h})}checkSafeUint53(r,e){"number"==typeof r&&(null==e&&(e="value not safe"),(r<0||r>=9007199254740991)&&this.throwError(e,A.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:r}),r%1&&this.throwError(e,A.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:r}))}checkArgumentCount(r,e,t){t=t?": "+t:"",r<e&&this.throwError("missing argument"+t,A.errors.MISSING_ARGUMENT,{count:r,expectedCount:e}),r>e&&this.throwError("too many arguments"+t,A.errors.UNEXPECTED_ARGUMENT,{count:r,expectedCount:e})}checkNew(r,e){r!==Object&&null!=r||this.throwError("missing new",A.errors.MISSING_NEW,{name:e.name})}checkAbstract(r,e){r===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",A.errors.UNSUPPORTED_OPERATION,{name:r.name,operation:"new"}):r!==Object&&null!=r||this.throwError("missing new",A.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return N||(N=new A(n)),N}static setCensorship(r,e){if(!r&&e&&this.globalLogger().throwError("cannot permanently disable censorship",A.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),o){if(!r)return;this.globalLogger().throwError("error censorship permanent",A.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}E=!!r,o=!!e}static setLogLevel(r){const e=l[r.toLowerCase()];null!=e?c=e:A.globalLogger().warn("invalid log level - "+r)}static from(r){return new A(r)}}A.errors=R,A.levels=f},43:function(r,e,t){"use strict";var n=t(24);t.d(e,"c",(function(){return E})),t.d(e,"d",(function(){return l})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return R}));const o=new n.a("properties/5.5.0");function E(object,r,e){Object.defineProperty(object,r,{enumerable:!0,value:e,writable:!1})}function l(r,e){for(let i=0;i<32;i++){if(r[e])return r[e];if(!r.prototype||"object"!=typeof r.prototype)break;r=Object.getPrototypeOf(r.prototype).constructor}return null}function c(object,r){object&&"object"==typeof object||o.throwArgumentError("invalid object","object",object),Object.keys(object).forEach(e=>{r[e]||o.throwArgumentError("invalid object key - "+e,"transaction:"+e,object)})}const N={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function h(object){if(function r(object){if(null==object||N[typeof object])return!0;if(Array.isArray(object)||"object"==typeof object){if(!Object.isFrozen(object))return!1;const e=Object.keys(object);for(let i=0;i<e.length;i++){let t=null;try{t=object[e[i]]}catch(r){continue}if(!r(t))return!1}return!0}return o.throwArgumentError(`Cannot deepCopy ${typeof object}`,"object",object)}(object))return object;if(Array.isArray(object))return Object.freeze(object.map(r=>f(r)));if("object"==typeof object){const r={};for(const e in object){const t=object[e];void 0!==t&&E(r,e,f(t))}return r}return o.throwArgumentError(`Cannot deepCopy ${typeof object}`,"object",object)}function f(object){return h(object)}class R{constructor(r){for(const e in r)this[e]=f(r[e])}}}}]);