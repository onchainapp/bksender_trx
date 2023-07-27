(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{111:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n="abi/5.7.0"},1145:function(t,e,r){"use strict";r.d(e,"c",(function(){return O})),r.d(e,"d",(function(){return v})),r.d(e,"a",(function(){return _})),r.d(e,"b",(function(){return T}));var n=r(209),o=r(75),c=r(17),l=r(283),h=r(122),m=r(46),d=r(531),f=r(82),y=r(26),w=r(111);const E=new y.a(w.a);class O extends m.a{}class v extends m.a{}class j extends m.a{}class _ extends m.a{static isIndexed(t){return!(!t||!t._isIndexed)}}const A={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:!0},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"]}};function S(t,e){const r=new Error(`deferred error during ABI decoding triggered accessing ${t}`);return r.error=e,r}class T{constructor(t){let e=[];e="string"==typeof t?JSON.parse(t):t,Object(m.b)(this,"fragments",e.map(t=>f.e.from(t)).filter(t=>null!=t)),Object(m.b)(this,"_abiCoder",Object(m.c)(new.target,"getAbiCoder")()),Object(m.b)(this,"functions",{}),Object(m.b)(this,"errors",{}),Object(m.b)(this,"events",{}),Object(m.b)(this,"structs",{}),this.fragments.forEach(t=>{let e=null;switch(t.type){case"constructor":return this.deploy?void E.warn("duplicate definition - constructor"):void Object(m.b)(this,"deploy",t);case"function":e=this.functions;break;case"event":e=this.events;break;case"error":e=this.errors;break;default:return}let r=t.format();e[r]?E.warn("duplicate definition - "+r):e[r]=t}),this.deploy||Object(m.b)(this,"deploy",f.a.from({payable:!1,type:"constructor"})),Object(m.b)(this,"_isInterface",!0)}format(t){t||(t=f.d.full),t===f.d.sighash&&E.throwArgumentError("interface does not support formatting sighash","format",t);const e=this.fragments.map(e=>e.format(t));return t===f.d.json?JSON.stringify(e.map(t=>JSON.parse(t))):e}static getAbiCoder(){return d.b}static getAddress(address){return Object(n.a)(address)}static getSighash(t){return Object(c.e)(Object(l.a)(t.format()),0,4)}static getEventTopic(t){return Object(l.a)(t.format())}getFunction(t){if(Object(c.j)(t)){for(const e in this.functions)if(t===this.getSighash(e))return this.functions[e];E.throwArgumentError("no matching function","sighash",t)}if(-1===t.indexOf("(")){const e=t.trim(),r=Object.keys(this.functions).filter(t=>t.split("(")[0]===e);return 0===r.length?E.throwArgumentError("no matching function","name",e):r.length>1&&E.throwArgumentError("multiple matching functions","name",e),this.functions[r[0]]}const e=this.functions[f.f.fromString(t).format()];return e||E.throwArgumentError("no matching function","signature",t),e}getEvent(t){if(Object(c.j)(t)){const e=t.toLowerCase();for(const t in this.events)if(e===this.getEventTopic(t))return this.events[t];E.throwArgumentError("no matching event","topichash",e)}if(-1===t.indexOf("(")){const e=t.trim(),r=Object.keys(this.events).filter(t=>t.split("(")[0]===e);return 0===r.length?E.throwArgumentError("no matching event","name",e):r.length>1&&E.throwArgumentError("multiple matching events","name",e),this.events[r[0]]}const e=this.events[f.c.fromString(t).format()];return e||E.throwArgumentError("no matching event","signature",t),e}getError(t){if(Object(c.j)(t)){const e=Object(m.c)(this.constructor,"getSighash");for(const r in this.errors){if(t===e(this.errors[r]))return this.errors[r]}E.throwArgumentError("no matching error","sighash",t)}if(-1===t.indexOf("(")){const e=t.trim(),r=Object.keys(this.errors).filter(t=>t.split("(")[0]===e);return 0===r.length?E.throwArgumentError("no matching error","name",e):r.length>1&&E.throwArgumentError("multiple matching errors","name",e),this.errors[r[0]]}const e=this.errors[f.f.fromString(t).format()];return e||E.throwArgumentError("no matching error","signature",t),e}getSighash(t){if("string"==typeof t)try{t=this.getFunction(t)}catch(e){try{t=this.getError(t)}catch(t){throw e}}return Object(m.c)(this.constructor,"getSighash")(t)}getEventTopic(t){return"string"==typeof t&&(t=this.getEvent(t)),Object(m.c)(this.constructor,"getEventTopic")(t)}_decodeParams(t,data){return this._abiCoder.decode(t,data)}_encodeParams(t,e){return this._abiCoder.encode(t,e)}encodeDeploy(t){return this._encodeParams(this.deploy.inputs,t||[])}decodeErrorResult(t,data){"string"==typeof t&&(t=this.getError(t));const e=Object(c.a)(data);return Object(c.g)(e.slice(0,4))!==this.getSighash(t)&&E.throwArgumentError(`data signature does not match error ${t.name}.`,"data",Object(c.g)(e)),this._decodeParams(t.inputs,e.slice(4))}encodeErrorResult(t,e){return"string"==typeof t&&(t=this.getError(t)),Object(c.g)(Object(c.b)([this.getSighash(t),this._encodeParams(t.inputs,e||[])]))}decodeFunctionData(t,data){"string"==typeof t&&(t=this.getFunction(t));const e=Object(c.a)(data);return Object(c.g)(e.slice(0,4))!==this.getSighash(t)&&E.throwArgumentError(`data signature does not match function ${t.name}.`,"data",Object(c.g)(e)),this._decodeParams(t.inputs,e.slice(4))}encodeFunctionData(t,e){return"string"==typeof t&&(t=this.getFunction(t)),Object(c.g)(Object(c.b)([this.getSighash(t),this._encodeParams(t.inputs,e||[])]))}decodeFunctionResult(t,data){"string"==typeof t&&(t=this.getFunction(t));let e=Object(c.a)(data),r=null,n="",o=null,l=null,h=null;switch(e.length%this._abiCoder._getWordSize()){case 0:try{return this._abiCoder.decode(t.outputs,e)}catch(t){}break;case 4:{const t=Object(c.g)(e.slice(0,4)),m=A[t];if(m)o=this._abiCoder.decode(m.inputs,e.slice(4)),l=m.name,h=m.signature,m.reason&&(r=o[0]),"Error"===l?n=`; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(o[0])}`:"Panic"===l&&(n=`; VM Exception while processing transaction: reverted with panic code ${o[0]}`);else try{const r=this.getError(t);o=this._abiCoder.decode(r.inputs,e.slice(4)),l=r.name,h=r.format()}catch(t){}break}}return E.throwError("call revert exception"+n,y.a.errors.CALL_EXCEPTION,{method:t.format(),data:Object(c.g)(data),errorArgs:o,errorName:l,errorSignature:h,reason:r})}encodeFunctionResult(t,e){return"string"==typeof t&&(t=this.getFunction(t)),Object(c.g)(this._abiCoder.encode(t.outputs,e||[]))}encodeFilterTopics(t,e){"string"==typeof t&&(t=this.getEvent(t)),e.length>t.inputs.length&&E.throwError("too many arguments for "+t.format(),y.a.errors.UNEXPECTED_ARGUMENT,{argument:"values",value:e});let r=[];t.anonymous||r.push(this.getEventTopic(t));const n=(param,t)=>"string"===param.type?Object(l.a)(t):"bytes"===param.type?Object(h.a)(Object(c.g)(t)):("bool"===param.type&&"boolean"==typeof t&&(t=t?"0x01":"0x00"),param.type.match(/^u?int/)&&(t=o.a.from(t).toHexString()),"address"===param.type&&this._abiCoder.encode(["address"],[t]),Object(c.f)(Object(c.g)(t),32));for(e.forEach((e,o)=>{let param=t.inputs[o];param.indexed?null==e?r.push(null):"array"===param.baseType||"tuple"===param.baseType?E.throwArgumentError("filtering with tuples or arrays not supported","contract."+param.name,e):Array.isArray(e)?r.push(e.map(t=>n(param,t))):r.push(n(param,e)):null!=e&&E.throwArgumentError("cannot filter non-indexed parameters; must be null","contract."+param.name,e)});r.length&&null===r[r.length-1];)r.pop();return r}encodeEventLog(t,e){"string"==typeof t&&(t=this.getEvent(t));const r=[],n=[],o=[];return t.anonymous||r.push(this.getEventTopic(t)),e.length!==t.inputs.length&&E.throwArgumentError("event arguments/values mismatch","values",e),t.inputs.forEach((param,t)=>{const c=e[t];if(param.indexed)if("string"===param.type)r.push(Object(l.a)(c));else if("bytes"===param.type)r.push(Object(h.a)(c));else{if("tuple"===param.baseType||"array"===param.baseType)throw new Error("not implemented");r.push(this._abiCoder.encode([param.type],[c]))}else n.push(param),o.push(c)}),{data:this._abiCoder.encode(n,o),topics:r}}decodeEventLog(t,data,e){if("string"==typeof t&&(t=this.getEvent(t)),null!=e&&!t.anonymous){let r=this.getEventTopic(t);Object(c.j)(e[0],32)&&e[0].toLowerCase()===r||E.throwError("fragment/topic mismatch",y.a.errors.INVALID_ARGUMENT,{argument:"topics[0]",expected:r,value:e[0]}),e=e.slice(1)}let r=[],n=[],o=[];t.inputs.forEach((param,t)=>{param.indexed?"string"===param.type||"bytes"===param.type||"tuple"===param.baseType||"array"===param.baseType?(r.push(f.g.fromObject({type:"bytes32",name:param.name})),o.push(!0)):(r.push(param),o.push(!1)):(n.push(param),o.push(!1))});let l=null!=e?this._abiCoder.decode(r,Object(c.b)(e)):null,h=this._abiCoder.decode(n,data,!0),m=[],d=0,w=0;t.inputs.forEach((param,t)=>{if(param.indexed)if(null==l)m[t]=new _({_isIndexed:!0,hash:null});else if(o[t])m[t]=new _({_isIndexed:!0,hash:l[w++]});else try{m[t]=l[w++]}catch(e){m[t]=e}else try{m[t]=h[d++]}catch(e){m[t]=e}if(param.name&&null==m[param.name]){const e=m[t];e instanceof Error?Object.defineProperty(m,param.name,{enumerable:!0,get:()=>{throw S(`property ${JSON.stringify(param.name)}`,e)}}):m[param.name]=e}});for(let i=0;i<m.length;i++){const t=m[i];t instanceof Error&&Object.defineProperty(m,i,{enumerable:!0,get:()=>{throw S(`index ${i}`,t)}})}return Object.freeze(m)}parseTransaction(t){let e=this.getFunction(t.data.substring(0,10).toLowerCase());return e?new v({args:this._abiCoder.decode(e.inputs,"0x"+t.data.substring(10)),functionFragment:e,name:e.name,signature:e.format(),sighash:this.getSighash(e),value:o.a.from(t.value||"0")}):null}parseLog(t){let e=this.getEvent(t.topics[0]);return!e||e.anonymous?null:new O({eventFragment:e,name:e.name,signature:e.format(),topic:this.getEventTopic(e),args:this.decodeEventLog(e,t.data,t.topics)})}parseError(data){const t=Object(c.g)(data);let e=this.getError(t.substring(0,10).toLowerCase());return e?new j({args:this._abiCoder.decode(e.inputs,"0x"+t.substring(10)),errorFragment:e,name:e.name,signature:e.format(),sighash:this.getSighash(e)}):null}static isInterface(t){return!(!t||!t._isInterface)}}},158:function(t,e,r){"use strict";e.a={netId1:{bulksenderContract:"TKE9WRCPJzRyMoVUNK9tNY9mpvKosXKjFQ",tokenQueryContract:"THV1qeBo8RDrTvrqe48cF5KhcdMjqpNwWB",energySwapContract:"TBZNb9LXCR6UoPXtbBQ4ifey1zXvAcQweT",rpcCallRetryAttempt:10,currencyName:"TRX",explorerUrl:{tx:"https://tronscan.org/#/transaction/",address:"https://tronscan.org/#/contract/"},networkName:"Mainnet",rpcUrl:"https://mainnet.infura.io/v3/dd21fd023db248d9bd13c46d13786257",gasPrice:{fast:1e-4,slow:1,standard:5,instant:20},gasOracleUrls:["https://gasprice.poa.network/","https://www.etherchain.org/api/gasPriceOracle"],tokenOracleUrls:["https://apilist.tronscan.org/api/account?address=","https://api.tronscan.org/api/account?address="],trc10TokenListOracleUrls:["https://apilist.tronscan.org/api/tokens/overview?limit=1000&filter=trc10&start="],trc10TokenInfoOracleUrls:["https://apilist.tronscan.org/api/token?id="],trc10StaticTokenDataOracleUrls:["https://raw.githubusercontent.com/howeguo/Tron_token_list/master/trc10Tokens.json"],smartContractPollTime:15,smartContractShortPollTime:3,specialTokenList:["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4","TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8","TMz2SWatiAtZVVcH2ebpsbVtYwUPT9EdjH","TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn"],whiteAccountList:[],specialAccountList:[],supportsNFT:!1,supportExtraFee:!0,extraFeeOracle:{coinPriceUrl:"https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd",coinId:"tron",tokenPriceUrl:"https://api.coingecko.com/api/v3/simple/token_price/tron?contract_addresses=$tokenAddress&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false",feeRate:2,coinBackups:["https://api.coincap.io/v2/assets/tron"]},energySwapEnable:!0},netId2:{bulksenderContract:"TSgLTsFQA1NA1JyzFZ88B17BXnCAnhDj9U",tokenQueryContract:"TKkhoR9JfWBPXWbuqEsfsVQj38hufHajnE",rpcCallRetryAttempt:10,currencyName:"sTRX",explorerUrl:{tx:"https://shasta.tronscan.org/#/transaction/",address:"https://shasta.tronscan.org/#/contract/"},networkName:"Shasta",rpcUrl:"https://ropsten.infura.io/v3/dd21fd023db248d9bd13c46d13786257",gasPrice:{fast:1e-4,slow:1,standard:5,instant:20},tokenOracleUrls:["https://api.shasta.tronscan.org/api/account?address="],trc10TokenListOracleUrls:["https://api.shasta.tronscan.org/api/tokens/overview?limit=1000&filter=trc10&start="],trc10TokenInfoOracleUrls:["https://api.shasta.tronscan.org/api/token?id="],trc10StaticTokenDataOracleUrls:["https://raw.githubusercontent.com/howeguo/Tron_token_list/master/trc10Tokens_shasta.json"],smartContractPollTime:15,smartContractShortPollTime:3,specialTokenList:["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4"],whiteAccountList:[],specialAccountList:[],supportsNFT:!1,supportExtraFee:!1,extraFeeOracle:{coinPriceUrl:"https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd",coinId:"tron",tokenPriceUrl:"https://api.coingecko.com/api/v3/simple/token_price/tron?contract_addresses=$tokenAddress&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false",feeRate:3}}}},48:function(t,e,r){"use strict";r.d(e,"d",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return y})),r.d(e,"b",(function(){return w}));var n=r(17),o=r(75),c=r(46),l=r(26),h=r(111);const m=new l.a(h.a);function d(t){const e=[],r=function(path,object){if(Array.isArray(object))for(let t in object){const n=path.slice();n.push(t);try{r(n,object[t])}catch(t){e.push({path:n,error:t})}}};return r([],t),e}class f{constructor(t,e,r,n){this.name=t,this.type=e,this.localName=r,this.dynamic=n}_throwError(t,e){m.throwArgumentError(t,this.localName,e)}}class y{constructor(t){Object(c.b)(this,"wordSize",t||32),this._data=[],this._dataLength=0,this._padding=new Uint8Array(t)}get data(){return Object(n.c)(this._data)}get length(){return this._dataLength}_writeData(data){return this._data.push(data),this._dataLength+=data.length,data.length}appendWriter(t){return this._writeData(Object(n.b)(t._data))}writeBytes(t){let e=Object(n.a)(t);const r=e.length%this.wordSize;return r&&(e=Object(n.b)([e,this._padding.slice(r)])),this._writeData(e)}_getValue(t){let e=Object(n.a)(o.a.from(t));return e.length>this.wordSize&&m.throwError("value out-of-bounds",l.a.errors.BUFFER_OVERRUN,{length:this.wordSize,offset:e.length}),e.length%this.wordSize&&(e=Object(n.b)([this._padding.slice(e.length%this.wordSize),e])),e}writeValue(t){return this._writeData(this._getValue(t))}writeUpdatableValue(){const t=this._data.length;return this._data.push(this._padding),this._dataLength+=this.wordSize,e=>{this._data[t]=this._getValue(e)}}}class w{constructor(data,t,e,r){Object(c.b)(this,"_data",Object(n.a)(data)),Object(c.b)(this,"wordSize",t||32),Object(c.b)(this,"_coerceFunc",e),Object(c.b)(this,"allowLoose",r),this._offset=0}get data(){return Object(n.g)(this._data)}get consumed(){return this._offset}static coerce(t,e){let r=t.match("^u?int([0-9]+)$");return r&&parseInt(r[1])<=48&&(e=e.toNumber()),e}coerce(t,e){return this._coerceFunc?this._coerceFunc(t,e):w.coerce(t,e)}_peekBytes(t,e,r){let n=Math.ceil(e/this.wordSize)*this.wordSize;return this._offset+n>this._data.length&&(this.allowLoose&&r&&this._offset+e<=this._data.length?n=e:m.throwError("data out-of-bounds",l.a.errors.BUFFER_OVERRUN,{length:this._data.length,offset:this._offset+n})),this._data.slice(this._offset,this._offset+n)}subReader(t){return new w(this._data.slice(this._offset+t),this.wordSize,this._coerceFunc,this.allowLoose)}readBytes(t,e){let r=this._peekBytes(0,t,!!e);return this._offset+=r.length,r.slice(0,t)}readValue(){return o.a.from(this.readBytes(this.wordSize))}}},531:function(t,e,r){"use strict";var n=r(17),o=r(46),c=r(26),l=r(111),h=r(48),m=r(209);class d extends h.a{constructor(t){super("address","address",t,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(t,e){try{e=Object(m.a)(e)}catch(t){this._throwError(t.message,e)}return t.writeValue(e)}decode(t){return Object(m.a)(Object(n.f)(t.readValue().toHexString(),20))}}class f extends h.a{constructor(t){super(t.name,t.type,void 0,t.dynamic),this.coder=t}defaultValue(){return this.coder.defaultValue()}encode(t,e){return this.coder.encode(t,e)}decode(t){return this.coder.decode(t)}}const y=new c.a(l.a);function w(t,e,r){let n=null;if(Array.isArray(r))n=r;else if(r&&"object"==typeof r){let t={};n=e.map(e=>{const n=e.localName;return n||y.throwError("cannot encode object for signature with missing names",c.a.errors.INVALID_ARGUMENT,{argument:"values",coder:e,value:r}),t[n]&&y.throwError("cannot encode object for signature with duplicate names",c.a.errors.INVALID_ARGUMENT,{argument:"values",coder:e,value:r}),t[n]=!0,r[n]})}else y.throwArgumentError("invalid tuple value","tuple",r);e.length!==n.length&&y.throwArgumentError("types/value length mismatch","tuple",r);let o=new h.c(t.wordSize),l=new h.c(t.wordSize),m=[];e.forEach((t,e)=>{let r=n[e];if(t.dynamic){let e=l.length;t.encode(l,r);let n=o.writeUpdatableValue();m.push(t=>{n(t+e)})}else t.encode(o,r)}),m.forEach(t=>{t(o.length)});let d=t.appendWriter(o);return d+=t.appendWriter(l)}function E(t,e){let r=[],n=t.subReader(0);e.forEach(e=>{let o=null;if(e.dynamic){let r=t.readValue(),l=n.subReader(r.toNumber());try{o=e.decode(l)}catch(t){if(t.code===c.a.errors.BUFFER_OVERRUN)throw t;(o=t).baseType=e.name,o.name=e.localName,o.type=e.type}}else try{o=e.decode(t)}catch(t){if(t.code===c.a.errors.BUFFER_OVERRUN)throw t;(o=t).baseType=e.name,o.name=e.localName,o.type=e.type}null!=o&&r.push(o)});const o=e.reduce((t,e)=>{const r=e.localName;return r&&(t[r]||(t[r]=0),t[r]++),t},{});e.forEach((t,e)=>{let n=t.localName;if(!n||1!==o[n])return;if("length"===n&&(n="_length"),null!=r[n])return;const c=r[e];c instanceof Error?Object.defineProperty(r,n,{enumerable:!0,get:()=>{throw c}}):r[n]=c});for(let i=0;i<r.length;i++){const t=r[i];t instanceof Error&&Object.defineProperty(r,i,{enumerable:!0,get:()=>{throw t}})}return Object.freeze(r)}class O extends h.a{constructor(t,e,r){super("array",t.type+"["+(e>=0?e:"")+"]",r,-1===e||t.dynamic),this.coder=t,this.length=e}defaultValue(){const t=this.coder.defaultValue(),e=[];for(let i=0;i<this.length;i++)e.push(t);return e}encode(t,e){Array.isArray(e)||this._throwError("expected array value",e);let r=this.length;-1===r&&(r=e.length,t.writeValue(e.length)),y.checkArgumentCount(e.length,r,"coder array"+(this.localName?" "+this.localName:""));let n=[];for(let i=0;i<e.length;i++)n.push(this.coder);return w(t,n,e)}decode(t){let e=this.length;-1===e&&32*(e=t.readValue().toNumber())>t._data.length&&y.throwError("insufficient data length",c.a.errors.BUFFER_OVERRUN,{length:t._data.length,count:e});let r=[];for(let i=0;i<e;i++)r.push(new f(this.coder));return t.coerce(this.name,E(t,r))}}class v extends h.a{constructor(t){super("bool","bool",t,!1)}defaultValue(){return!1}encode(t,e){return t.writeValue(e?1:0)}decode(t){return t.coerce(this.type,!t.readValue().isZero())}}class j extends h.a{constructor(t,e){super(t,t,e,!0)}defaultValue(){return"0x"}encode(t,e){e=Object(n.a)(e);let r=t.writeValue(e.length);return r+=t.writeBytes(e)}decode(t){return t.readBytes(t.readValue().toNumber(),!0)}}class _ extends j{constructor(t){super("bytes",t)}decode(t){return t.coerce(this.name,Object(n.g)(super.decode(t)))}}class A extends h.a{constructor(t,e){let r="bytes"+String(t);super(r,r,e,!1),this.size=t}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+2*this.size)}encode(t,e){let data=Object(n.a)(e);return data.length!==this.size&&this._throwError("incorrect data length",e),t.writeBytes(data)}decode(t){return t.coerce(this.name,Object(n.g)(t.readBytes(this.size)))}}class S extends h.a{constructor(t){super("null","",t,!1)}defaultValue(){return null}encode(t,e){return null!=e&&this._throwError("not null",e),t.writeBytes([])}decode(t){return t.readBytes(0),t.coerce(this.name,null)}}var T=r(75),x=r(1146);class N extends h.a{constructor(t,e,r){const n=(e?"int":"uint")+8*t;super(n,n,r,!1),this.size=t,this.signed=e}defaultValue(){return 0}encode(t,e){let r=T.a.from(e),n=x.a.mask(8*t.wordSize);if(this.signed){let t=n.mask(8*this.size-1);(r.gt(t)||r.lt(t.add(x.c).mul(x.b)))&&this._throwError("value out-of-bounds",e)}else(r.lt(x.d)||r.gt(n.mask(8*this.size)))&&this._throwError("value out-of-bounds",e);return r=r.toTwos(8*this.size).mask(8*this.size),this.signed&&(r=r.fromTwos(8*this.size).toTwos(8*t.wordSize)),t.writeValue(r)}decode(t){let e=t.readValue().mask(8*this.size);return this.signed&&(e=e.fromTwos(8*this.size)),t.coerce(this.name,e)}}var k=r(1122);class F extends j{constructor(t){super("string",t)}defaultValue(){return""}encode(t,e){return super.encode(t,Object(k.a)(e))}decode(t){return Object(k.b)(super.decode(t))}}class C extends h.a{constructor(t,e){let r=!1;const n=[];t.forEach(t=>{t.dynamic&&(r=!0),n.push(t.type)}),super("tuple","tuple("+n.join(",")+")",e,r),this.coders=t}defaultValue(){const t=[];this.coders.forEach(e=>{t.push(e.defaultValue())});const e=this.coders.reduce((t,e)=>{const r=e.localName;return r&&(t[r]||(t[r]=0),t[r]++),t},{});return this.coders.forEach((r,n)=>{let o=r.localName;o&&1===e[o]&&("length"===o&&(o="_length"),null==t[o]&&(t[o]=t[n]))}),Object.freeze(t)}encode(t,e){return w(t,this.coders,e)}decode(t){return t.coerce(this.name,E(t,this.coders))}}var R=r(82);r.d(e,"a",(function(){return z})),r.d(e,"b",(function(){return M}));const P=new c.a(l.a),V=new RegExp(/^bytes([0-9]*)$/),U=new RegExp(/^(u?int)([0-9]*)$/);class z{constructor(t){Object(o.b)(this,"coerceFunc",t||null)}_getCoder(param){switch(param.baseType){case"address":return new d(param.name);case"bool":return new v(param.name);case"string":return new F(param.name);case"bytes":return new _(param.name);case"array":return new O(this._getCoder(param.arrayChildren),param.arrayLength,param.name);case"tuple":return new C((param.components||[]).map(component=>this._getCoder(component)),param.name);case"":return new S(param.name)}let t=param.type.match(U);if(t){let e=parseInt(t[2]||"256");return(0===e||e>256||e%8!=0)&&P.throwArgumentError("invalid "+t[1]+" bit length","param",param),new N(e/8,"int"===t[1],param.name)}if(t=param.type.match(V)){let e=parseInt(t[1]);return(0===e||e>32)&&P.throwArgumentError("invalid bytes length","param",param),new A(e,param.name)}return P.throwArgumentError("invalid type","type",param.type)}_getWordSize(){return 32}_getReader(data,t){return new h.b(data,this._getWordSize(),this.coerceFunc,t)}_getWriter(){return new h.c(this._getWordSize())}getDefaultValue(t){const e=t.map(t=>this._getCoder(R.g.from(t)));return new C(e,"_").defaultValue()}encode(t,e){t.length!==e.length&&P.throwError("types/values length mismatch",c.a.errors.INVALID_ARGUMENT,{count:{types:t.length,values:e.length},value:{types:t,values:e}});const r=t.map(t=>this._getCoder(R.g.from(t))),n=new C(r,"_"),o=this._getWriter();return n.encode(o,e),o.data}decode(t,data,e){const r=t.map(t=>this._getCoder(R.g.from(t)));return new C(r,"_").decode(this._getReader(Object(n.a)(data),e))}}const M=new z},82:function(t,e,r){"use strict";r.d(e,"d",(function(){return E})),r.d(e,"g",(function(){return v})),r.d(e,"e",(function(){return _})),r.d(e,"c",(function(){return A})),r.d(e,"a",(function(){return N})),r.d(e,"f",(function(){return k})),r.d(e,"b",(function(){return C}));var n=r(75),o=r(46),c=r(26),l=r(111);const h=new c.a(l.a),m={};let d={calldata:!0,memory:!0,storage:!0},f={calldata:!0,memory:!0};function y(t,e){if("bytes"===t||"string"===t){if(d[e])return!0}else if("address"===t){if("payable"===e)return!0}else if((t.indexOf("[")>=0||"tuple"===t)&&f[e])return!0;return(d[e]||"payable"===e)&&h.throwArgumentError("invalid modifier","name",e),!1}function w(object,t){for(let e in t)Object(o.b)(object,e,t[e])}const E=Object.freeze({sighash:"sighash",minimal:"minimal",full:"full",json:"json"}),O=new RegExp(/^(.*)\[([0-9]*)\]$/);class v{constructor(t,e){t!==m&&h.throwError("use fromString",c.a.errors.UNSUPPORTED_OPERATION,{operation:"new ParamType()"}),w(this,e);let r=this.type.match(O);w(this,r?{arrayLength:parseInt(r[2]||"-1"),arrayChildren:v.fromObject({type:r[1],components:this.components}),baseType:"array"}:{arrayLength:null,arrayChildren:null,baseType:null!=this.components?"tuple":this.type}),this._isParamType=!0,Object.freeze(this)}format(t){if(t||(t=E.sighash),E[t]||h.throwArgumentError("invalid format type","format",t),t===E.json){let e={type:"tuple"===this.baseType?"tuple":this.type,name:this.name||void 0};return"boolean"==typeof this.indexed&&(e.indexed=this.indexed),this.components&&(e.components=this.components.map(e=>JSON.parse(e.format(t)))),JSON.stringify(e)}let e="";return"array"===this.baseType?(e+=this.arrayChildren.format(t),e+="["+(this.arrayLength<0?"":String(this.arrayLength))+"]"):"tuple"===this.baseType?(t!==E.sighash&&(e+=this.type),e+="("+this.components.map(e=>e.format(t)).join(t===E.full?", ":",")+")"):e+=this.type,t!==E.sighash&&(!0===this.indexed&&(e+=" indexed"),t===E.full&&this.name&&(e+=" "+this.name)),e}static from(t,e){return"string"==typeof t?v.fromString(t,e):v.fromObject(t)}static fromObject(t){return v.isParamType(t)?t:new v(m,{name:t.name||null,type:R(t.type),indexed:null==t.indexed?null:!!t.indexed,components:t.components?t.components.map(v.fromObject):null})}static fromString(t,e){return function(t){return v.fromObject({name:t.name,type:t.type,indexed:t.indexed,components:t.components})}(function(param,t){let e=param;function r(i){h.throwArgumentError(`unexpected character at position ${i}`,"param",param)}function n(e){let r={type:"",name:"",parent:e,state:{allowType:!0}};return t&&(r.indexed=!1),r}param=param.replace(/\s/g," ");let o={type:"",name:"",state:{allowType:!0}},c=o;for(let i=0;i<param.length;i++){let e=param[i];switch(e){case"(":c.state.allowType&&""===c.type?c.type="tuple":c.state.allowParams||r(i),c.state.allowType=!1,c.type=R(c.type),c.components=[n(c)],c=c.components[0];break;case")":delete c.state,"indexed"===c.name&&(t||r(i),c.indexed=!0,c.name=""),y(c.type,c.name)&&(c.name=""),c.type=R(c.type);let o=c;(c=c.parent)||r(i),delete o.parent,c.state.allowParams=!1,c.state.allowName=!0,c.state.allowArray=!0;break;case",":delete c.state,"indexed"===c.name&&(t||r(i),c.indexed=!0,c.name=""),y(c.type,c.name)&&(c.name=""),c.type=R(c.type);let l=n(c.parent);c.parent.components.push(l),delete c.parent,c=l;break;case" ":c.state.allowType&&""!==c.type&&(c.type=R(c.type),delete c.state.allowType,c.state.allowName=!0,c.state.allowParams=!0),c.state.allowName&&""!==c.name&&("indexed"===c.name?(t||r(i),c.indexed&&r(i),c.indexed=!0,c.name=""):y(c.type,c.name)?c.name="":c.state.allowName=!1);break;case"[":c.state.allowArray||r(i),c.type+=e,c.state.allowArray=!1,c.state.allowName=!1,c.state.readArray=!0;break;case"]":c.state.readArray||r(i),c.type+=e,c.state.readArray=!1,c.state.allowArray=!0,c.state.allowName=!0;break;default:c.state.allowType?(c.type+=e,c.state.allowParams=!0,c.state.allowArray=!0):c.state.allowName?(c.name+=e,delete c.state.allowArray):c.state.readArray?c.type+=e:r(i)}}return c.parent&&h.throwArgumentError("unexpected eof","param",param),delete o.state,"indexed"===c.name?(t||r(e.length-7),c.indexed&&r(e.length-7),c.indexed=!0,c.name=""):y(c.type,c.name)&&(c.name=""),o.type=R(o.type),o}(t,!!e))}static isParamType(t){return!(null==t||!t._isParamType)}}function j(t,e){return function(t){t=t.trim();let e=[],r="",n=0;for(let o=0;o<t.length;o++){let c=t[o];","===c&&0===n?(e.push(r),r=""):(r+=c,"("===c?n++:")"===c&&-1===--n&&h.throwArgumentError("unbalanced parenthesis","value",t))}r&&e.push(r);return e}(t).map(param=>v.fromString(param,e))}class _{constructor(t,e){t!==m&&h.throwError("use a static from method",c.a.errors.UNSUPPORTED_OPERATION,{operation:"new Fragment()"}),w(this,e),this._isFragment=!0,Object.freeze(this)}static from(t){return _.isFragment(t)?t:"string"==typeof t?_.fromString(t):_.fromObject(t)}static fromObject(t){if(_.isFragment(t))return t;switch(t.type){case"function":return k.fromObject(t);case"event":return A.fromObject(t);case"constructor":return N.fromObject(t);case"error":return C.fromObject(t);case"fallback":case"receive":return null}return h.throwArgumentError("invalid fragment object","value",t)}static fromString(t){return"event"===(t=(t=(t=t.replace(/\s/g," ")).replace(/\(/g," (").replace(/\)/g,") ").replace(/\s+/g," ")).trim()).split(" ")[0]?A.fromString(t.substring(5).trim()):"function"===t.split(" ")[0]?k.fromString(t.substring(8).trim()):"constructor"===t.split("(")[0].trim()?N.fromString(t.trim()):"error"===t.split(" ")[0]?C.fromString(t.substring(5).trim()):h.throwArgumentError("unsupported fragment","value",t)}static isFragment(t){return!(!t||!t._isFragment)}}class A extends _{format(t){if(t||(t=E.sighash),E[t]||h.throwArgumentError("invalid format type","format",t),t===E.json)return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(input=>JSON.parse(input.format(t)))});let e="";return t!==E.sighash&&(e+="event "),e+=this.name+"("+this.inputs.map(input=>input.format(t)).join(t===E.full?", ":",")+") ",t!==E.sighash&&this.anonymous&&(e+="anonymous "),e.trim()}static from(t){return"string"==typeof t?A.fromString(t):A.fromObject(t)}static fromObject(t){if(A.isEventFragment(t))return t;"event"!==t.type&&h.throwArgumentError("invalid event object","value",t);const e={name:V(t.name),anonymous:t.anonymous,inputs:t.inputs?t.inputs.map(v.fromObject):[],type:"event"};return new A(m,e)}static fromString(t){let e=t.match(U);e||h.throwArgumentError("invalid event string","value",t);let r=!1;return e[3].split(" ").forEach(t=>{switch(t.trim()){case"anonymous":r=!0;break;case"":break;default:h.warn("unknown modifier: "+t)}}),A.fromObject({name:e[1].trim(),anonymous:r,inputs:j(e[2],!0),type:"event"})}static isEventFragment(t){return t&&t._isFragment&&"event"===t.type}}function S(t,e){e.gas=null;let r=t.split("@");return 1!==r.length?(r.length>2&&h.throwArgumentError("invalid human-readable ABI signature","value",t),r[1].match(/^[0-9]+$/)||h.throwArgumentError("invalid human-readable ABI signature gas","value",t),e.gas=n.a.from(r[1]),r[0]):t}function T(t,e){e.constant=!1,e.payable=!1,e.stateMutability="nonpayable",t.split(" ").forEach(t=>{switch(t.trim()){case"constant":e.constant=!0;break;case"payable":e.payable=!0,e.stateMutability="payable";break;case"nonpayable":e.payable=!1,e.stateMutability="nonpayable";break;case"pure":e.constant=!0,e.stateMutability="pure";break;case"view":e.constant=!0,e.stateMutability="view";break;case"external":case"public":case"":break;default:console.log("unknown modifier: "+t)}})}function x(t){let e={constant:!1,payable:!0,stateMutability:"payable"};return null!=t.stateMutability?(e.stateMutability=t.stateMutability,e.constant="view"===e.stateMutability||"pure"===e.stateMutability,null!=t.constant&&!!t.constant!==e.constant&&h.throwArgumentError("cannot have constant function with mutability "+e.stateMutability,"value",t),e.payable="payable"===e.stateMutability,null!=t.payable&&!!t.payable!==e.payable&&h.throwArgumentError("cannot have payable function with mutability "+e.stateMutability,"value",t)):null!=t.payable?(e.payable=!!t.payable,null!=t.constant||e.payable||"constructor"===t.type||h.throwArgumentError("unable to determine stateMutability","value",t),e.constant=!!t.constant,e.constant?e.stateMutability="view":e.stateMutability=e.payable?"payable":"nonpayable",e.payable&&e.constant&&h.throwArgumentError("cannot have constant payable function","value",t)):null!=t.constant?(e.constant=!!t.constant,e.payable=!e.constant,e.stateMutability=e.constant?"view":"payable"):"constructor"!==t.type&&h.throwArgumentError("unable to determine stateMutability","value",t),e}class N extends _{format(t){if(t||(t=E.sighash),E[t]||h.throwArgumentError("invalid format type","format",t),t===E.json)return JSON.stringify({type:"constructor",stateMutability:"nonpayable"!==this.stateMutability?this.stateMutability:void 0,payable:this.payable,gas:this.gas?this.gas.toNumber():void 0,inputs:this.inputs.map(input=>JSON.parse(input.format(t)))});t===E.sighash&&h.throwError("cannot format a constructor for sighash",c.a.errors.UNSUPPORTED_OPERATION,{operation:"format(sighash)"});let e="constructor("+this.inputs.map(input=>input.format(t)).join(t===E.full?", ":",")+") ";return this.stateMutability&&"nonpayable"!==this.stateMutability&&(e+=this.stateMutability+" "),e.trim()}static from(t){return"string"==typeof t?N.fromString(t):N.fromObject(t)}static fromObject(t){if(N.isConstructorFragment(t))return t;"constructor"!==t.type&&h.throwArgumentError("invalid constructor object","value",t);let e=x(t);e.constant&&h.throwArgumentError("constructor cannot be constant","value",t);const r={name:null,type:t.type,inputs:t.inputs?t.inputs.map(v.fromObject):[],payable:e.payable,stateMutability:e.stateMutability,gas:t.gas?n.a.from(t.gas):null};return new N(m,r)}static fromString(t){let e={type:"constructor"},r=(t=S(t,e)).match(U);return r&&"constructor"===r[1].trim()||h.throwArgumentError("invalid constructor string","value",t),e.inputs=j(r[2].trim(),!1),T(r[3].trim(),e),N.fromObject(e)}static isConstructorFragment(t){return t&&t._isFragment&&"constructor"===t.type}}class k extends N{format(t){if(t||(t=E.sighash),E[t]||h.throwArgumentError("invalid format type","format",t),t===E.json)return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:"nonpayable"!==this.stateMutability?this.stateMutability:void 0,payable:this.payable,gas:this.gas?this.gas.toNumber():void 0,inputs:this.inputs.map(input=>JSON.parse(input.format(t))),outputs:this.outputs.map(output=>JSON.parse(output.format(t)))});let e="";return t!==E.sighash&&(e+="function "),e+=this.name+"("+this.inputs.map(input=>input.format(t)).join(t===E.full?", ":",")+") ",t!==E.sighash&&(this.stateMutability?"nonpayable"!==this.stateMutability&&(e+=this.stateMutability+" "):this.constant&&(e+="view "),this.outputs&&this.outputs.length&&(e+="returns ("+this.outputs.map(output=>output.format(t)).join(", ")+") "),null!=this.gas&&(e+="@"+this.gas.toString()+" ")),e.trim()}static from(t){return"string"==typeof t?k.fromString(t):k.fromObject(t)}static fromObject(t){if(k.isFunctionFragment(t))return t;"function"!==t.type&&h.throwArgumentError("invalid function object","value",t);let e=x(t);const r={type:t.type,name:V(t.name),constant:e.constant,inputs:t.inputs?t.inputs.map(v.fromObject):[],outputs:t.outputs?t.outputs.map(v.fromObject):[],payable:e.payable,stateMutability:e.stateMutability,gas:t.gas?n.a.from(t.gas):null};return new k(m,r)}static fromString(t){let e={type:"function"},r=(t=S(t,e)).split(" returns ");r.length>2&&h.throwArgumentError("invalid function string","value",t);let n=r[0].match(U);if(n||h.throwArgumentError("invalid function signature","value",t),e.name=n[1].trim(),e.name&&V(e.name),e.inputs=j(n[2],!1),T(n[3].trim(),e),r.length>1){let n=r[1].match(U);""==n[1].trim()&&""==n[3].trim()||h.throwArgumentError("unexpected tokens","value",t),e.outputs=j(n[2],!1)}else e.outputs=[];return k.fromObject(e)}static isFunctionFragment(t){return t&&t._isFragment&&"function"===t.type}}function F(t){const e=t.format();return"Error(string)"!==e&&"Panic(uint256)"!==e||h.throwArgumentError(`cannot specify user defined ${e} error`,"fragment",t),t}class C extends _{format(t){if(t||(t=E.sighash),E[t]||h.throwArgumentError("invalid format type","format",t),t===E.json)return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(input=>JSON.parse(input.format(t)))});let e="";return t!==E.sighash&&(e+="error "),(e+=this.name+"("+this.inputs.map(input=>input.format(t)).join(t===E.full?", ":",")+") ").trim()}static from(t){return"string"==typeof t?C.fromString(t):C.fromObject(t)}static fromObject(t){if(C.isErrorFragment(t))return t;"error"!==t.type&&h.throwArgumentError("invalid error object","value",t);const e={type:t.type,name:V(t.name),inputs:t.inputs?t.inputs.map(v.fromObject):[]};return F(new C(m,e))}static fromString(t){let e={type:"error"},r=t.match(U);return r||h.throwArgumentError("invalid error signature","value",t),e.name=r[1].trim(),e.name&&V(e.name),e.inputs=j(r[2],!1),F(C.fromObject(e))}static isErrorFragment(t){return t&&t._isFragment&&"error"===t.type}}function R(t){return t.match(/^uint($|[^1-9])/)?t="uint256"+t.substring(4):t.match(/^int($|[^1-9])/)&&(t="int256"+t.substring(3)),t}const P=new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");function V(t){return t&&t.match(P)||h.throwArgumentError(`invalid identifier "${t}"`,"value",t),t}const U=new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")}}]);