(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{111:function(t,e,r){const n=r(532),o=r(569);t.exports={packageInit:(t,e)=>{if(e=Array.prototype.slice.call(e),!t)throw new Error('You need to instantiate using the "new" keyword.');Object.defineProperty(t,"currentProvider",{get:()=>t._provider,set:e=>t.setProvider(e),enumerable:!0,configurable:!0}),e[0]&&e[0]._requestManager?t._requestManager=e[0]._requestManager:t._requestManager=new n.Manager(e[0],e[1]),t.givenProvider=n.Manager.givenProvider,t.providers=n.Manager.providers,t._provider=t._requestManager.provider,t.setProvider||(t.setProvider=(e,r)=>(t._requestManager.setProvider(e,r),t._provider=t._requestManager.provider,!0)),t.setRequestManager=e=>{t._requestManager=e,t._provider=e.provider},t.BatchRequest=n.BatchManager.bind(null,t._requestManager),t.extend=o(t)},addProviders:t=>{t.givenProvider=n.Manager.givenProvider,t.providers=n.Manager.providers}}},114:function(t,e,r){"use strict";var n=r(39),o=r(38).errors,c=r(38).formatters,l=r(20),d=r(179),f=r(180).subscriptions,h=r(26),m=function(t){if(!t.call||!t.name)throw new Error('When creating a method you need to provide at least the "name" and "call" property.');this.name=t.name,this.call=t.call,this.params=t.params||0,this.inputFormatter=t.inputFormatter,this.outputFormatter=t.outputFormatter,this.transformPayload=t.transformPayload,this.extraFormatters=t.extraFormatters,this.abiCoder=t.abiCoder,this.requestManager=t.requestManager,this.accounts=t.accounts,this.defaultBlock=t.defaultBlock||"latest",this.defaultAccount=t.defaultAccount||null,this.transactionBlockTimeout=t.transactionBlockTimeout||50,this.transactionConfirmationBlocks=t.transactionConfirmationBlocks||24,this.transactionPollingTimeout=t.transactionPollingTimeout||750,this.defaultCommon=t.defaultCommon,this.defaultChain=t.defaultChain,this.defaultHardfork=t.defaultHardfork,this.handleRevert=t.handleRevert};m.prototype.setRequestManager=function(t,e){this.requestManager=t,e&&(this.accounts=e)},m.prototype.createFunction=function(t,e){var r=this.buildCall();return r.call=this.call,this.setRequestManager(t||this.requestManager,e||this.accounts),r},m.prototype.attachToObject=function(t){var e=this.buildCall();e.call=this.call;var r=this.name.split(".");r.length>1?(t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=e):t[r[0]]=e},m.prototype.getCall=function(t){return n.isFunction(this.call)?this.call(t):this.call},m.prototype.extractCallback=function(t){if(n.isFunction(t[t.length-1]))return t.pop()},m.prototype.validateArgs=function(t){if(t.length!==this.params)throw o.InvalidNumberOfParams(t.length,this.params,this.name)},m.prototype.formatInput=function(t){var e=this;return this.inputFormatter?this.inputFormatter.map((function(r,n){return r?r.call(e,t[n]):t[n]})):t},m.prototype.formatOutput=function(t){var e=this;return n.isArray(t)?t.map((function(t){return e.outputFormatter&&t?e.outputFormatter(t):t})):this.outputFormatter&&t?this.outputFormatter(t):t},m.prototype.toPayload=function(t){var e=this.getCall(t),r=this.extractCallback(t),n=this.formatInput(t);this.validateArgs(n);var o={method:e,params:n,callback:r};return this.transformPayload&&(o=this.transformPayload(o)),o},m.prototype._confirmTransaction=function(t,e,r){var v=this,y=!1,w=!0,E=0,k=0,x=null,_=null,T=n.isObject(r.params[0])&&r.params[0].gas?r.params[0].gas:null,C=n.isObject(r.params[0])&&r.params[0].data&&r.params[0].from&&!r.params[0].to,N=C&&r.params[0].data.length>2,P=[new m({name:"getBlockByNumber",call:"eth_getBlockByNumber",params:2,inputFormatter:[c.inputBlockNumberFormatter,function(t){return!!t}],outputFormatter:c.outputBlockFormatter}),new m({name:"getTransactionReceipt",call:"eth_getTransactionReceipt",params:1,inputFormatter:[null],outputFormatter:c.outputTransactionReceiptFormatter}),new m({name:"getCode",call:"eth_getCode",params:2,inputFormatter:[c.inputAddressFormatter,c.inputDefaultBlockNumberFormatter]}),new m({name:"getTransactionByHash",call:"eth_getTransactionByHash",params:1,inputFormatter:[null],outputFormatter:c.outputTransactionFormatter}),new f({name:"subscribe",type:"eth",subscriptions:{newBlockHeaders:{subscriptionName:"newHeads",params:0,outputFormatter:c.outputBlockFormatter}}})],O={};n.each(P,(function(t){t.attachToObject(O),t.requestManager=v.requestManager}));var F=function(n,f,m,P,sub){if(!m)return sub||(sub={unsubscribe:function(){clearInterval(x)}}),(n?d.resolve(n):O.getTransactionReceipt(e)).catch((function(e){sub.unsubscribe(),y=!0,l._fireError({message:"Failed to check for transaction receipt:",data:e},t.eventEmitter,t.reject)})).then((async function(e){if(!e||!e.blockHash)throw new Error("Receipt missing or blockHash null");if(v.extraFormatters&&v.extraFormatters.receiptFormatter&&(e=v.extraFormatters.receiptFormatter(e)),t.eventEmitter.listeners("confirmation").length>0){var r;if(void 0===n||0!==k){var o=await O.getBlockByNumber("latest"),c=o?o.hash:null;f?_?(r=await O.getBlockByNumber(_.number+1))&&(_=r,t.eventEmitter.emit("confirmation",k,e,c)):(r=await O.getBlockByNumber(e.blockNumber),_=r,t.eventEmitter.emit("confirmation",k,e,c)):t.eventEmitter.emit("confirmation",k,e,c)}(f&&r||!f)&&k++,w=!1,k===v.transactionConfirmationBlocks+1&&(sub.unsubscribe(),t.eventEmitter.removeAllListeners())}return e})).then((async function(e){if(C&&!y){if(!e.contractAddress)return w&&(sub.unsubscribe(),y=!0),void l._fireError(o.NoContractAddressFoundError(e),t.eventEmitter,t.reject,null,e);var code;try{code=await O.getCode(e.contractAddress)}catch(t){}if(!code)return;!0===e.status&&N||code.length>2?(t.eventEmitter.emit("receipt",e),v.extraFormatters&&v.extraFormatters.contractDeployFormatter?t.resolve(v.extraFormatters.contractDeployFormatter(e)):t.resolve(e),w&&t.eventEmitter.removeAllListeners()):l._fireError(o.ContractCodeNotStoredError(e),t.eventEmitter,t.reject,null,e),w&&sub.unsubscribe(),y=!0}return e})).then((async function(e){if(!C&&!y){if(e.outOfGas||T&&T===e.gasUsed||!0!==e.status&&"0x1"!==e.status&&void 0!==e.status)if(JSON.stringify(e,null,2),!1===e.status||"0x0"===e.status)try{var n=null;if(!v.handleRevert||"eth_sendTransaction"!==v.call&&"eth_sendRawTransaction"!==v.call)throw!1;var d=r.params[0];if("eth_sendRawTransaction"===v.call){var f=r.params[0],m=h.parse(f);d=c.inputTransactionFormatter({data:m.data,to:m.to,from:m.from,gas:m.gasLimit.toHexString(),gasPrice:m.gasPrice.toHexString(),value:m.value.toHexString()})}if(!(n=await v.getRevertReason(d,e.blockNumber)))throw!1;l._fireError(o.TransactionRevertInstructionError(n.reason,n.signature,e),t.eventEmitter,t.reject,null,e)}catch(r){l._fireError(o.TransactionRevertedWithoutReasonError(e),t.eventEmitter,t.reject,null,e)}else l._fireError(o.TransactionOutOfGasError(e),t.eventEmitter,t.reject,null,e);else t.eventEmitter.emit("receipt",e),t.resolve(e),w&&t.eventEmitter.removeAllListeners();w&&sub.unsubscribe(),y=!0}})).catch((function(){E++,f?E-1>=v.transactionPollingTimeout&&(sub.unsubscribe(),y=!0,l._fireError(o.TransactionError("Transaction was not mined within "+v.transactionPollingTimeout+" seconds, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject)):E-1>=v.transactionBlockTimeout&&(sub.unsubscribe(),y=!0,l._fireError(o.TransactionError("Transaction was not mined within "+v.transactionBlockTimeout+" blocks, please make sure your transaction was properly sent. Be aware that it might still be mined!"),t.eventEmitter,t.reject))}));sub.unsubscribe(),y=!0,l._fireError({message:"Failed to subscribe to new newBlockHeaders to confirm the transaction receipts.",data:m},t.eventEmitter,t.reject)},R=function(t){const e=()=>{x=setInterval(F.bind(null,t,!0),1e3)};this.requestManager.provider.on?O.subscribe("newBlockHeaders",(function(r,n,sub){r||!n?e():F(t,!1,r,0,sub)})):e()}.bind(this);O.getTransactionReceipt(e).then((function(e){e&&e.blockHash?(t.eventEmitter.listeners("confirmation").length>0&&R(e),F(e,!1)):y||R()})).catch((function(){y||R()}))};var v=function(t,e){return n.isNumber(t)?e.wallet[t]:n.isObject(t)&&t.address&&t.privateKey?t:e.wallet[t.toLowerCase()]};m.prototype.buildCall=function(){var t=this,e="eth_sendTransaction"===t.call||"eth_sendRawTransaction"===t.call,r="eth_call"===t.call,c=function(){var c=d(!e),f=t.toPayload(Array.prototype.slice.call(arguments)),h=function(n,d){var h;if(t.handleRevert&&r&&t.abiCoder&&(!n&&t.isRevertReasonString(d)?h=d.substring(10):n&&n.data&&(h=n.data.substring(10)),h)){var m=t.abiCoder.decodeParameter("string","0x"+h);return void l._fireError(o.RevertInstructionError(m,"Error(String)"),c.eventEmitter,c.reject,f.callback,{reason:m,signature:"Error(String)"})}try{d=t.formatOutput(d)}catch(t){n=t}if(d instanceof Error&&(n=d),n)return n.error&&(n=n.error),l._fireError(n,c.eventEmitter,c.reject,f.callback);f.callback&&f.callback(null,d),e?(c.eventEmitter.emit("transactionHash",d),t._confirmTransaction(c,d,f)):n||c.resolve(d)},y=function(e){var r=n.extend({},f,{method:"eth_sendRawTransaction",params:[e.rawTransaction]});t.requestManager.send(r,h)},w=function(t,e){var r;if(e&&e.accounts&&e.accounts.wallet&&e.accounts.wallet.length)if("eth_sendTransaction"===t.method){var o=t.params[0];if((r=v(n.isObject(o)?o.from:null,e.accounts))&&r.privateKey){var l=n.omit(o,"from");return e.defaultChain&&!l.chain&&(l.chain=e.defaultChain),e.defaultHardfork&&!l.hardfork&&(l.hardfork=e.defaultHardfork),e.defaultCommon&&!l.common&&(l.common=e.defaultCommon),e.accounts.signTransaction(l,r.privateKey).then(y).catch((function(t){n.isFunction(c.eventEmitter.listeners)&&c.eventEmitter.listeners("error").length&&(c.eventEmitter.emit("error",t),c.eventEmitter.removeAllListeners(),c.eventEmitter.catch((function(){}))),c.reject(t)}))}}else if("eth_sign"===t.method){var data=t.params[1];if((r=v(t.params[0],e.accounts))&&r.privateKey){var d=e.accounts.sign(data,r.privateKey);return t.callback&&t.callback(null,d.signature),void c.resolve(d.signature)}}return e.requestManager.send(t,h)};if(e&&n.isObject(f.params[0])&&void 0===f.params[0].gasPrice){var E=new m({name:"getGasPrice",call:"eth_gasPrice",params:0}).createFunction(t.requestManager);E((function(r,n){n&&(f.params[0].gasPrice=n),e&&setTimeout(()=>{c.eventEmitter.emit("sending",f)},0),w(f,t)}))}else e&&setTimeout(()=>{c.eventEmitter.emit("sending",f)},0),w(f,t);return e&&setTimeout(()=>{c.eventEmitter.emit("sent",f)},0),c.eventEmitter};return c.method=t,c.request=this.request.bind(this),c},m.prototype.getRevertReason=function(t,e){var r=this;return new Promise((function(n,o){new m({name:"call",call:"eth_call",params:2,abiCoder:r.abiCoder,handleRevert:!0}).createFunction(r.requestManager)(t,l.numberToHex(e)).then((function(){n(!1)})).catch((function(t){t.reason?n({reason:t.reason,signature:t.signature}):o(t)}))}))},m.prototype.isRevertReasonString=function(data){return n.isString(data)&&(data.length-2)/2%32==4&&"0x08c379a0"===data.substring(0,10)},m.prototype.request=function(){var t=this.toPayload(Array.prototype.slice.call(arguments));return t.format=this.formatOutput.bind(this),t},t.exports=m},179:function(t,e,r){"use strict";var n=r(570),o=function(t){var e,r,o=new Promise((function(){e=arguments[0],r=arguments[1]}));if(t)return{resolve:e,reject:r,eventEmitter:o};var c=new n;return o._events=c._events,o.emit=c.emit,o.on=c.on,o.once=c.once,o.off=c.off,o.listeners=c.listeners,o.addListener=c.addListener,o.removeListener=c.removeListener,o.removeAllListeners=c.removeAllListeners,{resolve:e,reject:r,eventEmitter:o}};o.resolve=function(t){var e=o(!0);return e.resolve(t),e.eventEmitter},t.exports=o},180:function(t,e,r){"use strict";var n=r(571),o=function(t){this.name=t.name,this.type=t.type,this.subscriptions=t.subscriptions||{},this.requestManager=null};o.prototype.setRequestManager=function(t){this.requestManager=t},o.prototype.attachToObject=function(t){var e=this.buildCall(),r=this.name.split(".");r.length>1?(t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=e):t[r[0]]=e},o.prototype.buildCall=function(){var t=this;return function(){t.subscriptions[arguments[0]]||console.warn("Subscription "+JSON.stringify(arguments[0])+" doesn't exist. Subscribing anyway.");var e=new n({subscription:t.subscriptions[arguments[0]]||{},requestManager:t.requestManager,type:t.type});return e.subscribe.apply(e,arguments)}},t.exports={subscriptions:o,subscription:n}},324:function(t,e,r){"use strict";var n={messageId:0,toPayload:function(t,e){if(!t)throw new Error('JSONRPC method should be specified for params: "'+JSON.stringify(e)+'"!');return n.messageId++,{jsonrpc:"2.0",id:n.messageId,method:t,params:e||[]}},isValidResponse:function(t){return Array.isArray(t)?t.every(e):e(t);function e(t){return!(!t||t.error||"2.0"!==t.jsonrpc||"number"!=typeof t.id&&"string"!=typeof t.id||void 0===t.result)}},toBatchPayload:function(t){return t.map((function(t){return n.toPayload(t.method,t.params)}))}};t.exports=n},38:function(t,e,r){"use strict";var n=r(535),o=r(536);t.exports={errors:n,formatters:o}},532:function(t,e,r){"use strict";const{callbackify:n}=r(322);var o=r(39),c=r(38).errors,l=r(324),d=r(539),f=r(540),h=function t(e,r){this.provider=null,this.providers=t.providers,this.setProvider(e,r),this.subscriptions=new Map};h.givenProvider=f,h.providers={WebsocketProvider:r(541),HttpProvider:r(551),IpcProvider:r(567)},h.prototype.setProvider=function(t,e){var r=this;if(t&&"string"==typeof t&&this.providers)if(/^http(s)?:\/\//i.test(t))t=new this.providers.HttpProvider(t);else if(/^ws(s)?:\/\//i.test(t))t=new this.providers.WebsocketProvider(t);else if(t&&"object"==typeof e&&"function"==typeof e.connect)t=new this.providers.IpcProvider(t,e);else if(t)throw new Error("Can't autodetect provider for \""+t+'"');this.provider&&this.provider.connected&&this.clearSubscriptions(),this.provider=t||null,this.provider&&this.provider.on&&(this.provider.on("data",(function(t,e){(t=t||e).method&&t.params&&t.params.subscription&&r.subscriptions.has(t.params.subscription)&&r.subscriptions.get(t.params.subscription).callback(null,t.params.result)})),this.provider.on("connect",(function(){r.subscriptions.forEach((function(t){t.subscription.resubscribe()}))})),this.provider.on("error",(function(t){r.subscriptions.forEach((function(e){e.callback(t)}))})),this.provider.on("close",(function(t){r._isCleanCloseEvent(t)&&!r._isIpcCloseError(t)||(r.subscriptions.forEach((function(e){e.callback(c.ConnectionCloseError(t)),r.subscriptions.delete(e.subscription.id)})),r.provider&&r.provider.emit&&r.provider.emit("error",c.ConnectionCloseError(t))),r.provider&&r.provider.emit&&r.provider.emit("end",t)})))},h.prototype.send=function(data,t){if(t=t||function(){},!this.provider)return t(c.InvalidProvider());const{method:e,params:r}=data,o=l.toPayload(e,r),d=this._jsonrpcResultCallback(t,o);if(this.provider.request){n(this.provider.request)({method:e,params:r},t)}else if(this.provider.sendAsync)this.provider.sendAsync(o,d);else{if(!this.provider.send)throw new Error("Provider does not have a request or send method to use.");this.provider.send(o,d)}},h.prototype.sendBatch=function(data,t){if(!this.provider)return t(c.InvalidProvider());var e=l.toBatchPayload(data);this.provider[this.provider.sendAsync?"sendAsync":"send"](e,(function(e,r){return e?t(e):o.isArray(r)?void t(null,r):t(c.InvalidResponse(r))}))},h.prototype.addSubscription=function(t,e){if(!this.provider.on)throw new Error("The provider doesn't support subscriptions: "+this.provider.constructor.name);this.subscriptions.set(t.id,{callback:e,subscription:t})},h.prototype.removeSubscription=function(t,e){if(this.subscriptions.has(t)){var r=this.subscriptions.get(t).subscription.options.type;return this.subscriptions.delete(t),void this.send({method:r+"_unsubscribe",params:[t]},e)}"function"==typeof e&&e(null)},h.prototype.clearSubscriptions=function(t){try{var e=this;return this.subscriptions.size>0&&this.subscriptions.forEach((function(r,n){t&&"syncing"===r.name||e.removeSubscription(n)})),this.provider.reset&&this.provider.reset(),!0}catch(t){throw new Error(`Error while clearing subscriptions: ${t}`)}},h.prototype._isCleanCloseEvent=function(t){return"object"==typeof t&&([1e3].includes(t.code)||!0===t.wasClean)},h.prototype._isIpcCloseError=function(t){return"boolean"==typeof t&&t},h.prototype._jsonrpcResultCallback=function(t,e){return function(r,n){return n&&n.id&&e.id!==n.id?t(new Error(`Wrong response id ${n.id} (expected: ${e.id}) in ${JSON.stringify(e)}`)):r?t(r):n&&n.error?t(c.ErrorResponse(n)):l.isValidResponse(n)?void t(null,n.result):t(c.InvalidResponse(n))}},t.exports={Manager:h,BatchManager:d}},535:function(t,e,r){"use strict";t.exports={ErrorResponse:function(t){var e=t&&t.error&&t.error.message?t.error.message:JSON.stringify(t),data=t.error&&t.error.data?t.error.data:null,r=new Error("Returned error: "+e);return r.data=data,r},InvalidNumberOfParams:function(t,e,r){return new Error('Invalid number of parameters for "'+r+'". Got '+t+" expected "+e+"!")},InvalidConnection:function(t,e){return this.ConnectionError("CONNECTION ERROR: Couldn't connect to node "+t+".",e)},InvalidProvider:function(){return new Error("Provider not set or invalid")},InvalidResponse:function(t){var e=t&&t.error&&t.error.message?t.error.message:"Invalid JSON RPC response: "+JSON.stringify(t);return new Error(e)},ConnectionTimeout:function(t){return new Error("CONNECTION TIMEOUT: timeout of "+t+" ms achived")},ConnectionNotOpenError:function(t){return this.ConnectionError("connection not open on send()",t)},ConnectionCloseError:function(t){return"object"==typeof t&&t.code&&t.reason?this.ConnectionError("CONNECTION ERROR: The connection got closed with the close code `"+t.code+"` and the following reason string `"+t.reason+"`",t):new Error("CONNECTION ERROR: The connection closed unexpectedly")},MaxAttemptsReachedOnReconnectingError:function(){return new Error("Maximum number of reconnect attempts reached!")},PendingRequestsOnReconnectingError:function(){return new Error("CONNECTION ERROR: Provider started to reconnect before the response got received!")},ConnectionError:function(t,e){const r=new Error(t);return e&&(r.code=e.code,r.reason=e.reason),r},RevertInstructionError:function(t,e){var r=new Error("Your request got reverted with the following reason string: "+t);return r.reason=t,r.signature=e,r},TransactionRevertInstructionError:function(t,e,r){var n=new Error("Transaction has been reverted by the EVM:\n"+JSON.stringify(r,null,2));return n.reason=t,n.signature=e,n.receipt=r,n},TransactionError:function(t,e){var r=new Error(t);return r.receipt=e,r},NoContractAddressFoundError:function(t){return this.TransactionError("The transaction receipt didn't contain a contract address.",t)},ContractCodeNotStoredError:function(t){return this.TransactionError("The contract code couldn't be stored, please check your gas limit.",t)},TransactionRevertedWithoutReasonError:function(t){return this.TransactionError("Transaction has been reverted by the EVM:\n"+JSON.stringify(t,null,2),t)},TransactionOutOfGasError:function(t){return this.TransactionError("Transaction ran out of gas. Please provide more gas:\n"+JSON.stringify(t,null,2),t)},ResolverMethodMissingError:function(address,t){return new Error("The resolver at "+address+'does not implement requested method: "'+t+'".')},ContractMissingABIError:function(){return new Error("You must provide the json interface of the contract when instantiating a contract object.")},ContractOnceRequiresCallbackError:function(){return new Error("Once requires a callback as the second parameter.")},ContractEventDoesNotExistError:function(t){return new Error('Event "'+t+"\" doesn't exist in this contract.")},ContractReservedEventError:function(t){return new Error('The event "'+t+"\" is a reserved event name, you can't use it.")},ContractMissingDeployDataError:function(){return new Error('No "data" specified in neither the given options, nor the default options.')},ContractNoAddressDefinedError:function(){return new Error("This contract object doesn't have address set yet, please set an address first.")},ContractNoFromAddressDefinedError:function(){return new Error('No "from" address specified in neither the given options, nor the default options.')}}},536:function(t,e,r){"use strict";var n=r(39),o=r(20),c=r(323),l=function(t){return o.toBN(t).toString(10)},d=function(t){if(void 0!==t)return function(t){return"latest"===t||"pending"===t||"earliest"===t}(t)?t:"genesis"===t?"0x0":o.isHexStrict(t)?n.isString(t)?t.toLowerCase():t:o.numberToHex(t)},f=function(t){if(t.to&&(t.to=v(t.to)),t.data&&t.input)throw new Error('You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');if(!t.data&&t.input&&(t.data=t.input,delete t.input),t.data&&!t.data.startsWith("0x")&&(t.data="0x"+t.data),t.data&&!o.isHex(t.data))throw new Error("The data field must be HEX encoded data.");return(t.gas||t.gasLimit)&&(t.gas=t.gas||t.gasLimit),["gasPrice","gas","value","nonce"].filter((function(e){return void 0!==t[e]})).forEach((function(e){t[e]=o.numberToHex(t[e])})),t},h=function(t){return null!==t.blockNumber&&(t.blockNumber=o.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=o.hexToNumber(t.transactionIndex)),t.nonce=o.hexToNumber(t.nonce),t.gas=o.hexToNumber(t.gas),t.gasPrice=l(t.gasPrice),t.value=l(t.value),t.to&&o.isAddress(t.to)?t.to=o.toChecksumAddress(t.to):t.to=null,t.from&&(t.from=o.toChecksumAddress(t.from)),t},m=function(t){if("string"==typeof t.blockHash&&"string"==typeof t.transactionHash&&"string"==typeof t.logIndex){var e=o.sha3(t.blockHash.replace("0x","")+t.transactionHash.replace("0x","")+t.logIndex.replace("0x",""));t.id="log_"+e.replace("0x","").substr(0,8)}else t.id||(t.id=null);return null!==t.blockNumber&&(t.blockNumber=o.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=o.hexToNumber(t.transactionIndex)),null!==t.logIndex&&(t.logIndex=o.hexToNumber(t.logIndex)),t.address&&(t.address=o.toChecksumAddress(t.address)),t},v=function(address){var t=new c(address);if(t.isValid()&&t.isDirect())return t.toAddress().toLowerCase();if(o.isAddress(address))return"0x"+address.toLowerCase().replace("0x","");throw new Error('Provided address "'+address+"\" is invalid, the capitalization checksum test failed, or its an indrect IBAN address which can't be converted.")};t.exports={inputDefaultBlockNumberFormatter:function(t){return d(this&&null==t?this.defaultBlock:t)},inputBlockNumberFormatter:d,inputCallFormatter:function(t){var e=(t=f(t)).from||(this?this.defaultAccount:null);return e&&(t.from=v(e)),t},inputTransactionFormatter:function(t){if(t=f(t),!n.isNumber(t.from)&&!n.isObject(t.from)){if(t.from=t.from||(this?this.defaultAccount:null),!t.from&&!n.isNumber(t.from))throw new Error('The send transactions "from" field must be defined!');t.from=v(t.from)}return t},inputAddressFormatter:v,inputPostFormatter:function(t){return t.ttl&&(t.ttl=o.numberToHex(t.ttl)),t.workToProve&&(t.workToProve=o.numberToHex(t.workToProve)),t.priority&&(t.priority=o.numberToHex(t.priority)),n.isArray(t.topics)||(t.topics=t.topics?[t.topics]:[]),t.topics=t.topics.map((function(t){return 0===t.indexOf("0x")?t:o.fromUtf8(t)})),t},inputLogFormatter:function(t){var e=function(t){return null==t?null:0===(t=String(t)).indexOf("0x")?t:o.fromUtf8(t)};return(t.fromBlock||0===t.fromBlock)&&(t.fromBlock=d(t.fromBlock)),(t.toBlock||0===t.toBlock)&&(t.toBlock=d(t.toBlock)),t.topics=t.topics||[],t.topics=t.topics.map((function(t){return n.isArray(t)?t.map(e):e(t)})),e=null,t.address&&(t.address=n.isArray(t.address)?t.address.map((function(t){return v(t)})):v(t.address)),t},inputSignFormatter:function(data){return o.isHexStrict(data)?data:o.utf8ToHex(data)},inputStorageKeysFormatter:function(t){return t.map(o.numberToHex)},outputProofFormatter:function(t){return t.address=o.toChecksumAddress(t.address),t.nonce=o.hexToNumberString(t.nonce),t.balance=o.hexToNumberString(t.balance),t},outputBigNumberFormatter:l,outputTransactionFormatter:h,outputTransactionReceiptFormatter:function(t){if("object"!=typeof t)throw new Error("Received receipt is invalid: "+t);return null!==t.blockNumber&&(t.blockNumber=o.hexToNumber(t.blockNumber)),null!==t.transactionIndex&&(t.transactionIndex=o.hexToNumber(t.transactionIndex)),t.cumulativeGasUsed=o.hexToNumber(t.cumulativeGasUsed),t.gasUsed=o.hexToNumber(t.gasUsed),n.isArray(t.logs)&&(t.logs=t.logs.map(m)),t.contractAddress&&(t.contractAddress=o.toChecksumAddress(t.contractAddress)),void 0!==t.status&&null!==t.status&&(t.status=Boolean(parseInt(t.status))),t},outputBlockFormatter:function(t){return t.gasLimit=o.hexToNumber(t.gasLimit),t.gasUsed=o.hexToNumber(t.gasUsed),t.size=o.hexToNumber(t.size),t.timestamp=o.hexToNumber(t.timestamp),null!==t.number&&(t.number=o.hexToNumber(t.number)),t.difficulty&&(t.difficulty=l(t.difficulty)),t.totalDifficulty&&(t.totalDifficulty=l(t.totalDifficulty)),n.isArray(t.transactions)&&t.transactions.forEach((function(t){if(!n.isString(t))return h(t)})),t.miner&&(t.miner=o.toChecksumAddress(t.miner)),t},outputLogFormatter:m,outputPostFormatter:function(t){return t.expiry=o.hexToNumber(t.expiry),t.sent=o.hexToNumber(t.sent),t.ttl=o.hexToNumber(t.ttl),t.workProved=o.hexToNumber(t.workProved),t.topics||(t.topics=[]),t.topics=t.topics.map((function(t){return o.toUtf8(t)})),t},outputSyncingFormatter:function(t){return t.startingBlock=o.hexToNumber(t.startingBlock),t.currentBlock=o.hexToNumber(t.currentBlock),t.highestBlock=o.hexToNumber(t.highestBlock),t.knownStates&&(t.knownStates=o.hexToNumber(t.knownStates),t.pulledStates=o.hexToNumber(t.pulledStates)),t}}},539:function(t,e,r){"use strict";var n=r(324),o=r(38).errors,c=function(t){this.requestManager=t,this.requests=[]};c.prototype.add=function(t){this.requests.push(t)},c.prototype.execute=function(){var t=this.requests;this.requestManager.sendBatch(t,(function(e,r){r=r||[],t.map((function(t,e){return r[e]||{}})).forEach((function(e,r){if(t[r].callback){if(e&&e.error)return t[r].callback(o.ErrorResponse(e));if(!n.isValidResponse(e))return t[r].callback(o.InvalidResponse(e));try{t[r].callback(null,t[r].format?t[r].format(e.result):e.result)}catch(e){t[r].callback(e)}}}))}))},t.exports=c},540:function(t,e,r){"use strict";var n,o=null;try{n=Function("return this")()}catch(t){n=window}void 0!==n.ethereum?o=n.ethereum:void 0!==n.web3&&n.web3.currentProvider&&(n.web3.currentProvider.sendAsync&&(n.web3.currentProvider.send=n.web3.currentProvider.sendAsync,delete n.web3.currentProvider.sendAsync),!n.web3.currentProvider.on&&n.web3.currentProvider.connection&&"ipcProviderWrapper"===n.web3.currentProvider.connection.constructor.name&&(n.web3.currentProvider.on=function(t,e){if("function"!=typeof e)throw new Error("The second parameter callback must be a function.");switch(t){case"data":this.connection.on("data",(function(data){var t="";data=data.toString();try{t=JSON.parse(data)}catch(t){return e(new Error("Couldn't parse response data"+data))}t.id||-1===t.method.indexOf("_subscription")||e(null,t)}));break;default:this.connection.on(t,e)}}),o=n.web3.currentProvider),t.exports=o},569:function(t,e,r){"use strict";var n=r(38).formatters,o=r(114),c=r(20);t.exports=function(t){var e=function(e){var r;return e.property?(t[e.property]||(t[e.property]={}),r=t[e.property]):r=t,e.methods&&e.methods.forEach((function(e){e instanceof o||(e=new o(e)),e.attachToObject(r),e.setRequestManager(t._requestManager)})),t};return e.formatters=n,e.utils=c,e.Method=o,e}},570:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o="~";function c(){}function l(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function d(t,e,r,n,c){if("function"!=typeof r)throw new TypeError("The listener must be a function");var d=new l(r,n||t,c),f=o?o+e:e;return t._events[f]?t._events[f].fn?t._events[f]=[t._events[f],d]:t._events[f].push(d):(t._events[f]=d,t._eventsCount++),t}function f(t,e){0==--t._eventsCount?t._events=new c:delete t._events[e]}function h(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(o=!1)),h.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)n.call(t,e)&&r.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},h.prototype.listeners=function(t){var e=o?o+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,c=new Array(n);i<n;i++)c[i]=r[i].fn;return c},h.prototype.listenerCount=function(t){var e=o?o+t:t,r=this._events[e];return r?r.fn?1:r.length:0},h.prototype.emit=function(t,e,r,n,c,l){var d=o?o+t:t;if(!this._events[d])return!1;var f,i,h=this._events[d],m=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,r),!0;case 4:return h.fn.call(h.context,e,r,n),!0;case 5:return h.fn.call(h.context,e,r,n,c),!0;case 6:return h.fn.call(h.context,e,r,n,c,l),!0}for(i=1,f=new Array(m-1);i<m;i++)f[i-1]=arguments[i];h.fn.apply(h.context,f)}else{var v,y=h.length;for(i=0;i<y;i++)switch(h[i].once&&this.removeListener(t,h[i].fn,void 0,!0),m){case 1:h[i].fn.call(h[i].context);break;case 2:h[i].fn.call(h[i].context,e);break;case 3:h[i].fn.call(h[i].context,e,r);break;case 4:h[i].fn.call(h[i].context,e,r,n);break;default:if(!f)for(v=1,f=new Array(m-1);v<m;v++)f[v-1]=arguments[v];h[i].fn.apply(h[i].context,f)}}return!0},h.prototype.on=function(t,e,r){return d(this,t,e,r,!1)},h.prototype.once=function(t,e,r){return d(this,t,e,r,!0)},h.prototype.removeListener=function(t,e,r,n){var c=o?o+t:t;if(!this._events[c])return this;if(!e)return f(this,c),this;var l=this._events[c];if(l.fn)l.fn!==e||n&&!l.once||r&&l.context!==r||f(this,c);else{for(var i=0,d=[],h=l.length;i<h;i++)(l[i].fn!==e||n&&!l[i].once||r&&l[i].context!==r)&&d.push(l[i]);d.length?this._events[c]=1===d.length?d[0]:d:f(this,c)}return this},h.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&f(this,e)):(this._events=new c,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=o,h.EventEmitter=h,t.exports=h},571:function(t,e,r){"use strict";var n=r(39),o=r(38).errors,c=r(572),l=r(38).formatters;function d(t){c.call(this),this.id=null,this.callback=n.identity,this.arguments=null,this.lastBlock=null,this.options={subscription:t.subscription,type:t.type,requestManager:t.requestManager}}d.prototype=Object.create(c.prototype),d.prototype.constructor=d,d.prototype._extractCallback=function(t){if(n.isFunction(t[t.length-1]))return t.pop()},d.prototype._validateArgs=function(t){var e=this.options.subscription;if(e||(e={}),e.params||(e.params=0),t.length!==e.params)throw o.InvalidNumberOfParams(t.length,e.params,e.subscriptionName)},d.prototype._formatInput=function(t){var e=this.options.subscription;return e&&e.inputFormatter?e.inputFormatter.map((function(e,r){return e?e(t[r]):t[r]})):t},d.prototype._formatOutput=function(t){var e=this.options.subscription;return e&&e.outputFormatter&&t?e.outputFormatter(t):t},d.prototype._toPayload=function(t){var e=[];if(this.callback=this._extractCallback(t)||n.identity,this.subscriptionMethod||(this.subscriptionMethod=t.shift(),this.options.subscription.subscriptionName&&(this.subscriptionMethod=this.options.subscription.subscriptionName)),this.arguments||(this.arguments=this._formatInput(t),this._validateArgs(this.arguments),t=[]),e.push(this.subscriptionMethod),e=e.concat(this.arguments),t.length)throw new Error("Only a callback is allowed as parameter on an already instantiated subscription.");return{method:this.options.type+"_subscribe",params:e}},d.prototype.unsubscribe=function(t){this.options.requestManager.removeSubscription(this.id,t),this.id=null,this.lastBlock=null,this.removeAllListeners()},d.prototype.subscribe=function(){var t=this,e=Array.prototype.slice.call(arguments),r=this._toPayload(e);if(!r)return this;if(!this.options.requestManager.provider)return setTimeout((function(){var e=new Error("No provider set.");t.callback(e,null,t),t.emit("error",e)}),0),this;if(!this.options.requestManager.provider.on)return setTimeout((function(){var e=new Error("The current provider doesn't support subscriptions: "+t.options.requestManager.provider.constructor.name);t.callback(e,null,t),t.emit("error",e)}),0),this;if(this.lastBlock&&n.isObject(this.options.params)&&(r.params[1]=this.options.params,r.params[1].fromBlock=l.inputBlockNumberFormatter(this.lastBlock+1)),this.id&&this.unsubscribe(),this.options.params=r.params[1],"logs"===r.params[0]&&n.isObject(r.params[1])&&r.params[1].hasOwnProperty("fromBlock")&&isFinite(r.params[1].fromBlock)){var o=Object.assign({},r.params[1]);this.options.requestManager.send({method:"eth_getLogs",params:[o]},(function(e,r){e?setTimeout((function(){t.callback(e,null,t),t.emit("error",e)}),0):r.forEach((function(e){var output=t._formatOutput(e);t.callback(null,output,t),t.emit("data",output)}))}))}return"object"==typeof r.params[1]&&delete r.params[1].fromBlock,this.options.requestManager.send(r,(function(e,o){!e&&o?(t.id=o,t.method=r.params[0],t.emit("connected",o),t.options.requestManager.addSubscription(t,(function(e,r){e?(t.callback(e,!1,t),t.emit("error",e)):(n.isArray(r)||(r=[r]),r.forEach((function(e){var output=t._formatOutput(e);if(t.lastBlock=n.isObject(output)?output.blockNumber:null,n.isFunction(t.options.subscription.subscriptionHandler))return t.options.subscription.subscriptionHandler.call(t,output);t.emit("data",output),t.callback(null,output,t)})))}))):setTimeout((function(){t.callback(e,!1,t),t.emit("error",e)}),0)})),this},d.prototype.resubscribe=function(){this.options.requestManager.removeSubscription(this.id),this.id=null,this.subscribe(this.callback)},t.exports=d},572:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o="~";function c(){}function l(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function d(t,e,r,n,c){if("function"!=typeof r)throw new TypeError("The listener must be a function");var d=new l(r,n||t,c),f=o?o+e:e;return t._events[f]?t._events[f].fn?t._events[f]=[t._events[f],d]:t._events[f].push(d):(t._events[f]=d,t._eventsCount++),t}function f(t,e){0==--t._eventsCount?t._events=new c:delete t._events[e]}function h(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(o=!1)),h.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)n.call(t,e)&&r.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},h.prototype.listeners=function(t){var e=o?o+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,c=new Array(n);i<n;i++)c[i]=r[i].fn;return c},h.prototype.listenerCount=function(t){var e=o?o+t:t,r=this._events[e];return r?r.fn?1:r.length:0},h.prototype.emit=function(t,e,r,n,c,l){var d=o?o+t:t;if(!this._events[d])return!1;var f,i,h=this._events[d],m=arguments.length;if(h.fn){switch(h.once&&this.removeListener(t,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,e),!0;case 3:return h.fn.call(h.context,e,r),!0;case 4:return h.fn.call(h.context,e,r,n),!0;case 5:return h.fn.call(h.context,e,r,n,c),!0;case 6:return h.fn.call(h.context,e,r,n,c,l),!0}for(i=1,f=new Array(m-1);i<m;i++)f[i-1]=arguments[i];h.fn.apply(h.context,f)}else{var v,y=h.length;for(i=0;i<y;i++)switch(h[i].once&&this.removeListener(t,h[i].fn,void 0,!0),m){case 1:h[i].fn.call(h[i].context);break;case 2:h[i].fn.call(h[i].context,e);break;case 3:h[i].fn.call(h[i].context,e,r);break;case 4:h[i].fn.call(h[i].context,e,r,n);break;default:if(!f)for(v=1,f=new Array(m-1);v<m;v++)f[v-1]=arguments[v];h[i].fn.apply(h[i].context,f)}}return!0},h.prototype.on=function(t,e,r){return d(this,t,e,r,!1)},h.prototype.once=function(t,e,r){return d(this,t,e,r,!0)},h.prototype.removeListener=function(t,e,r,n){var c=o?o+t:t;if(!this._events[c])return this;if(!e)return f(this,c),this;var l=this._events[c];if(l.fn)l.fn!==e||n&&!l.once||r&&l.context!==r||f(this,c);else{for(var i=0,d=[],h=l.length;i<h;i++)(l[i].fn!==e||n&&!l[i].once||r&&l[i].context!==r)&&d.push(l[i]);d.length?this._events[c]=1===d.length?d[0]:d:f(this,c)}return this},h.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&f(this,e)):(this._events=new c,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=o,h.EventEmitter=h,t.exports=h},825:function(t,e,r){"use strict";var n=r(39),o=r(826),c=function t(e){this.givenProvider=t.givenProvider,e&&e._requestManager&&(e=e.currentProvider),"undefined"!=typeof document&&(this.pick=o.pick),this.setProvider(e)};c.givenProvider=null,"undefined"!=typeof ethereum&&ethereum.bzz&&(c.givenProvider=ethereum.bzz),c.prototype.setProvider=function(t){if(n.isObject(t)&&n.isString(t.bzz)&&(t=t.bzz),!n.isString(t)){this.currentProvider=null;var e=new Error("No provider set, please set one using bzz.setProvider().");return this.download=this.upload=this.isAvailable=function(){throw e},!1}return this.currentProvider=t,this.download=o.at(t).download,this.upload=o.at(t).upload,this.isAvailable=o.at(t).isAvailable,!0},t.exports=c}}]);