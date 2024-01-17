!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(Wt,Ut){"use strict";try{!(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i,t=e(Wt);function n(){try{return"object"==typeof indexedDB}catch(e){return!1}}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var i,n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],r=r?(i=n,r.replace(s,(e,t)=>{var n=i[t];return null!=n?String(n):`<${t}?>`})):"Error",r=`${this.serviceName}: ${r} (${a}).`;return new o(a,r,n)}}const s=/\{\$([^}]+)}/g;function r(e){return e&&e._delegate?e._delegate:e}class c{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const u=(t,e)=>e.some(e=>t instanceof e);let d,p;const l=new WeakMap,f=new WeakMap,g=new WeakMap,w=new WeakMap,h=new WeakMap;let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||g.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(i){return i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(p=p||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(i)?function(...e){return i.apply(k(this),e),y(l.get(this))}:function(...e){return y(i.apply(k(this),e))}:function(e,...t){var n=i.call(k(this),e,...t);return g.set(n,e.sort?e.sort():[e]),y(n)}}function b(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&(r=e,f.has(r)||(t=new Promise((e,t)=>{const n=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),n()},a=()=>{t(r.error||new DOMException("AbortError","AbortError")),n()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)}),f.set(r,t))),u(e,d=d||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,v):e);var r,t}function y(e){if(e instanceof IDBRequest)return function(r){const e=new Promise((e,t)=>{const n=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(y(r.result)),n()},a=()=>{t(r.error),n()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&l.set(e,r)}).catch(()=>{}),h.set(e,r),e}(e);if(w.has(e))return w.get(e);var t=b(e);return t!==e&&(w.set(e,t),h.set(t,e)),t}const k=e=>h.get(e);function I(e,t,{blocked:n,upgrade:i,blocking:a,terminated:r}={}){const o=indexedDB.open(e,t),s=y(o);return i&&o.addEventListener("upgradeneeded",e=>{i(y(o.result),e.oldVersion,e.newVersion,y(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{r&&e.addEventListener("close",()=>r()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}function S(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",e=>t(e.oldVersion,e)),y(n).then(()=>{})}const T=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],D=new Map;function _(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(D.get(t))return D.get(t);const a=t.replace(/FromIndex$/,""),r=t!==a,o=C.includes(a);if(a in(r?IDBIndex:IDBObjectStore).prototype&&(o||T.includes(a))){var n=async function(e,...t){var n=this.transaction(e,o?"readwrite":"readonly");let i=n.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[a](...t),o&&n.done]))[0]};return D.set(t,n),n}}}v={...i=v,get:(e,t,n)=>_(e,t)||i.get(e,t,n),has:(e,t)=>!!_(e,t)||i.has(e,t)};var j="@firebase/installations",O="0.6.4";const P=1e4,E=`w:${O}`,M="FIS_v2",A="https://firebaseinstallations.googleapis.com/v1",K=36e5;var N,x,L,B,$;const F=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function H(e){return e instanceof o&&e.code.includes("request-failed")}function R({projectId:e}){return`${A}/projects/${e}/installations`}function q(e){return{token:e.token,requestStatus:2,expiresIn:(e=e.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()}}async function V(e,t){var n=(await t.json()).error;return F.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function W({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function U(e,{refreshToken:t}){const n=W(e);return n.append("Authorization",(t=t,`${M} ${t}`)),n}async function G(e){var t=await e();return 500<=t.status&&t.status<600?e():t}function J(t){return new Promise(e=>{setTimeout(e,t)})}const z=/^[cdef][\w-]{21}$/,Y="";function Q(){try{const t=new Uint8Array(17),n=self.crypto||self.msCrypto;n.getRandomValues(t),t[0]=112+t[0]%16;var e=function(e){const t=function(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(t);return z.test(e)?e:Y}catch(e){return Y}}function Z(e){return`${e.appName}!${e.appId}`}const X=new Map;function ee(e,t){var n=Z(e);te(n,t),function(e,t){const n=function(){!ne&&"BroadcastChannel"in self&&(ne=new BroadcastChannel("[Firebase] FID Change"),ne.onmessage=e=>{te(e.data.key,e.data.fid)});return ne}();n&&n.postMessage({key:e,fid:t});0===X.size&&ne&&(ne.close(),ne=null)}(n,t)}function te(e,t){var n=X.get(e);if(n)for(const i of n)i(t)}let ne=null;const ie="firebase-installations-store";let ae=null;function re(){return ae=ae||I("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(ie)}}),ae}async function oe(e,t){var n=Z(e);const i=await re(),a=i.transaction(ie,"readwrite"),r=a.objectStore(ie);var o=await r.get(n);return await r.put(t,n),await a.done,o&&o.fid===t.fid||ee(e,t.fid),t}async function se(e){var t=Z(e);const n=await re(),i=n.transaction(ie,"readwrite");await i.objectStore(ie).delete(t),await i.done}async function ce(e,t){var n=Z(e);const i=await re(),a=i.transaction(ie,"readwrite"),r=a.objectStore(ie);var o=await r.get(n),s=t(o);return void 0===s?await r.delete(n):await r.put(s,n),await a.done,!s||o&&o.fid===s.fid||ee(e,s.fid),s}async function ue(n){let i;var e=await ce(n.appConfig,e=>{var t=pe(e||{fid:Q(),registrationStatus:0}),t=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:async function(e){let t=await de(e.appConfig);for(;1===t.registrationStatus;)await J(100),t=await de(e.appConfig);if(0!==t.registrationStatus)return t;{var{installationEntry:n,registrationPromise:i}=await ue(e);return i||n}}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=async function(t,n){try{var e=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=R(e),a=W(e),r=t.getImmediate({optional:!0});!r||(o=await r.getHeartbeatsHeader())&&a.append("x-firebase-client",o);var o={fid:n,authVersion:M,appId:e.appId,sdkVersion:E};const s={method:"POST",headers:a,body:JSON.stringify(o)},c=await G(()=>fetch(i,s));if(c.ok){o=await c.json();return{fid:o.fid||n,registrationStatus:2,refreshToken:o.refreshToken,authToken:q(o.authToken)}}throw await V("Create Installation",c)}(t,n);return oe(t.appConfig,e)}catch(e){throw H(e)&&409===e.customData.serverCode?await se(t.appConfig):await oe(t.appConfig,{fid:n.fid,registrationStatus:0}),e}}(e,i);return{installationEntry:i,registrationPromise:n}}}(n,t);return i=t.registrationPromise,t.installationEntry});return e.fid===Y?{installationEntry:await i}:{installationEntry:e,registrationPromise:i}}function de(e){return ce(e,e=>{if(!e)throw F.create("installation-not-found");return pe(e)})}function pe(e){return 1===(t=e).registrationStatus&&t.registrationTime+P<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function le({appConfig:e,heartbeatServiceProvider:t},n){const i=([a,r]=[e,n["fid"]],`${R(a)}/${r}/authTokens:generate`);var a,r;const o=U(e,n),s=t.getImmediate({optional:!0});!s||(c=await s.getHeartbeatsHeader())&&o.append("x-firebase-client",c);var c={installation:{sdkVersion:E,appId:e.appId}};const u={method:"POST",headers:o,body:JSON.stringify(c)},d=await G(()=>fetch(i,u));if(d.ok)return q(await d.json());throw await V("Generate Auth Token",d)}async function fe(i,a=!1){let r;var e=await ce(i.appConfig,e=>{if(!we(e))throw F.create("not-registered");var t,n=e.authToken;if(a||2!==(t=n).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+K}(t)){if(1===n.requestStatus)return r=async function(e,t){let n=await ge(e.appConfig);for(;1===n.authToken.requestStatus;)await J(100),n=await ge(e.appConfig);var i=n.authToken;return 0===i.requestStatus?fe(e,t):i}(i,a),e;if(!navigator.onLine)throw F.create("app-offline");n=(t=e,n={requestStatus:1,requestTime:Date.now()},Object.assign(Object.assign({},t),{authToken:n}));return r=async function(t,n){try{var i=await le(t,n),e=Object.assign(Object.assign({},n),{authToken:i});return await oe(t.appConfig,e),i}catch(e){throw!H(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode?(i=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),await oe(t.appConfig,i)):await se(t.appConfig),e}}(i,n),n}return e});return r?await r:e.authToken}function ge(e){return ce(e,e=>{if(!we(e))throw F.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+P<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function we(e){return void 0!==e&&2===e.registrationStatus}async function he(e,t=!1){var n,i=e;return await((n=(await ue(i)).registrationPromise)&&await n),(await fe(i,t)).token}function ve(e){return F.create("missing-app-config-values",{valueName:e})}const me="installations",be=e=>{var t=e.getProvider("app").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw ve("App Configuration");if(!e.name)throw ve("App Name");for(const t of["projectId","apiKey","appId"])if(!e.options[t])throw ve(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Ut._getProvider(t,"heartbeat"),_delete:()=>Promise.resolve()}},ye=e=>{var t=e.getProvider("app").getImmediate();const n=Ut._getProvider(t,me).getImmediate();return{getId:()=>async function(e){var t=e;const{installationEntry:n,registrationPromise:i}=await ue(t);return(i||fe(t)).catch(console.error),n.fid}(n),getToken:e=>he(n,e)}};Ut._registerComponent(new c(me,be,"PUBLIC")),Ut._registerComponent(new c("installations-internal",ye,"PRIVATE")),Ut.registerVersion(j,O),Ut.registerVersion(j,O,"esm2017");const ke="/firebase-messaging-sw.js",Ie="/firebase-cloud-messaging-push-scope",Se="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Te="https://fcmregistrations.googleapis.com/v1",Ce="google.c.a.c_id",De="google.c.a.e";function _e(e){var t=new Uint8Array(e);const n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(N=$=$||{})[N.DATA_MESSAGE=1]="DATA_MESSAGE",N[N.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",($=x=x||{}).PUSH_RECEIVED="push-received",$.NOTIFICATION_CLICKED="notification-clicked";const je="fcm_token_details_db",Oe="fcm_token_object_Store";async function Pe(c){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(je))return null}let u=null;const e=await I(je,5,{upgrade:async(e,t,n,i)=>{var a;if(!(t<2)&&e.objectStoreNames.contains(Oe)){const s=i.objectStore(Oe);var r,o=await s.index("fcmSenderId").get(c);await s.clear(),o&&(2===t?(r=o).auth&&r.p256dh&&r.endpoint&&(u={token:r.fcmToken,createTime:null!==(a=r.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:_e(r.vapidKey)}}):3===t?(r=o,u={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:_e(r.auth),p256dh:_e(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:_e(r.vapidKey)}}):4===t&&(o=o,u={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:_e(o.auth),p256dh:_e(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:_e(o.vapidKey)}}))}}});return e.close(),await S(je),await S("fcm_vapid_details_db"),await S("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(u)?u:null}const Ee="firebase-messaging-database",Me=1,Ae="firebase-messaging-store";let Ke=null;function Ne(){return Ke=Ke||I(Ee,Me,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Ae)}}),Ke}async function xe(e){var t=Be(e);const n=await Ne();t=await n.transaction(Ae).objectStore(Ae).get(t);if(t)return t;t=await Pe(e.appConfig.senderId);return t?(await Le(e,t),t):void 0}async function Le(e,t){var n=Be(e);const i=await Ne(),a=i.transaction(Ae,"readwrite");return await a.objectStore(Ae).put(t,n),await a.done,t}function Be({appConfig:e}){return e.appId}const $e=new a("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Fe(e,t){var n={method:"DELETE",headers:await Re(e)};try{const r=await fetch(`${He(e.appConfig)}/${t}`,n);var i=await r.json();if(i.error){var a=i.error.message;throw $e.create("token-unsubscribe-failed",{errorInfo:a})}}catch(e){throw $e.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function He({projectId:e}){return`${Te}/projects/${e}/registrations`}async function Re({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function qe({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==Se&&(a.web.applicationPubKey=i),a}const Ve=6048e5;async function We(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const n=atob(t),i=new Uint8Array(n.length);for(let a=0;a<n.length;++a)i[a]=n.charCodeAt(a);return i}(t)})}(e.swRegistration,e.vapidKey);var n,i,a,r,o,s={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:_e(t.getKey("auth")),p256dh:_e(t.getKey("p256dh"))},c=await xe(e.firebaseDependencies);if(c){if(n=c.subscriptionOptions,i=s.vapidKey===n.vapidKey,a=s.endpoint===n.endpoint,r=s.auth===n.auth,o=s.p256dh===n.p256dh,i&&a&&r&&o)return Date.now()>=c.createTime+Ve?async function(t,e){try{var n=await async function(e,t){var n=await Re(e),i=qe(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(`${He(e.appConfig)}/${t.token}`,i);a=await r.json()}catch(e){throw $e.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){i=a.error.message;throw $e.create("token-update-failed",{errorInfo:i})}if(!a.token)throw $e.create("token-update-no-token");return a.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Le(t.firebaseDependencies,i),n}catch(e){throw await Ue(t),e}}(e,{token:c.token,createTime:Date.now(),subscriptionOptions:s}):c.token;try{await Fe(e.firebaseDependencies,c.token)}catch(e){console.warn(e)}return Ge(e.firebaseDependencies,s)}return Ge(e.firebaseDependencies,s)}async function Ue(e){var t=await xe(e.firebaseDependencies);t&&(await Fe(e.firebaseDependencies,t.token),await async function(e){var t=Be(e);const n=await Ne(),i=n.transaction(Ae,"readwrite");await i.objectStore(Ae).delete(t),await i.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Ge(e,t){var n={token:await async function(e,t){var n=await Re(e),i=qe(t),i={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(He(e.appConfig),i);a=await r.json()}catch(e){throw $e.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){i=a.error.message;throw $e.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw $e.create("token-subscribe-no-token");return a.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await Le(e,n),n.token}function Je(e){var t,n,i,a,r,o={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return i=o,(n=e).notification&&(i.notification={},(t=n.notification.title)&&(i.notification.title=t),(t=n.notification.body)&&(i.notification.body=t),(t=n.notification.image)&&(i.notification.image=t),(t=n.notification.icon)&&(i.notification.icon=t)),n=o,(i=e).data&&(n.data=i.data),i=o,((e=e).fcmOptions||null!==(a=e.notification)&&void 0!==a&&a.click_action)&&(i.fcmOptions={},(r=null!==(a=null===(a=e.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==a?a:null===(r=e.notification)||void 0===r?void 0:r.click_action)&&(i.fcmOptions.link=r),(r=null===(r=e.fcmOptions)||void 0===r?void 0:r.analytics_label)&&(i.fcmOptions.analyticsLabel=r)),o}function ze(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function Ye(e){return $e.create("missing-app-config-values",{valueName:e})}ze("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),ze("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class Qe{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw Ye("App Configuration Object");if(!e.name)throw Ye("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw Ye(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function Ze(e){try{e.swRegistration=await navigator.serviceWorker.register(ke,{scope:Ie}),e.swRegistration.update().catch(()=>{})}catch(e){throw $e.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}async function Xe(e,t){if(!navigator)throw $e.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw $e.create("permission-blocked");var n,i;return n=e,await((i=null==t?void 0:t.vapidKey)?n.vapidKey=i:n.vapidKey||(n.vapidKey=Se)),await async function(e,t){if(t||e.swRegistration||await Ze(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw $e.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),We(e)}async function et(e,t,n){var i=function(e){switch(e){case x.NOTIFICATION_CLICKED:return"notification_open";case x.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(t);const a=await e.firebaseDependencies.analyticsProvider.get();a.logEvent(i,{message_id:n[Ce],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function tt(e,t){var n,i=t.data;i.isFirebaseMessaging&&(e.onMessageHandler&&i.messageType===x.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Je(i)):e.onMessageHandler.next(Je(i))),n=i.data,"object"==typeof(t=n)&&t&&Ce in t&&"1"===n[De]&&await et(e,i.messageType,n))}const nt="@firebase/messaging",it=e=>{const t=new Qe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>tt(t,e)),t},at=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>Xe(t,e)}};function rt(e){return async function(e){if(!navigator)throw $e.create("only-available-in-window");return e.swRegistration||await Ze(e),Ue(e)}(e=r(e))}function ot(e,t){return function(e,t){if(!navigator)throw $e.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=r(e),t)}Ut._registerComponent(new c("messaging",it,"PUBLIC")),Ut._registerComponent(new c("messaging-internal",at,"PRIVATE")),Ut.registerVersion(nt,"0.12.5"),Ut.registerVersion(nt,"0.12.5","esm2017");const st="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ct="https://fcmregistrations.googleapis.com/v1",ut="FCM_MSG",dt="google.c.a.c_id",pt=3,lt=1;function ft(e){var t=new Uint8Array(e);const n=btoa(String.fromCharCode(...t));return n.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}($=L=L||{})[$.DATA_MESSAGE=1]="DATA_MESSAGE",$[$.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",($=B=B||{}).PUSH_RECEIVED="push-received",$.NOTIFICATION_CLICKED="notification-clicked";const gt="fcm_token_details_db",wt="fcm_token_object_Store";async function ht(c){if("databases"in indexedDB){const t=await indexedDB.databases(),n=t.map(e=>e.name);if(!n.includes(gt))return null}let u=null;const e=await I(gt,5,{upgrade:async(e,t,n,i)=>{var a;if(!(t<2)&&e.objectStoreNames.contains(wt)){const s=i.objectStore(wt);var r,o=await s.index("fcmSenderId").get(c);await s.clear(),o&&(2===t?(r=o).auth&&r.p256dh&&r.endpoint&&(u={token:r.fcmToken,createTime:null!==(a=r.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:r.auth,p256dh:r.p256dh,endpoint:r.endpoint,swScope:r.swScope,vapidKey:"string"==typeof r.vapidKey?r.vapidKey:ft(r.vapidKey)}}):3===t?(r=o,u={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:ft(r.auth),p256dh:ft(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:ft(r.vapidKey)}}):4===t&&(o=o,u={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:ft(o.auth),p256dh:ft(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:ft(o.vapidKey)}}))}}});return e.close(),await S(gt),await S("fcm_vapid_details_db"),await S("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;var t=e["subscriptionOptions"];return"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length}(u)?u:null}const vt="firebase-messaging-database",mt=1,bt="firebase-messaging-store";let yt=null;function kt(){return yt=yt||I(vt,mt,{upgrade:(e,t)=>{0===t&&e.createObjectStore(bt)}}),yt}async function It(e){var t=Tt(e);const n=await kt();t=await n.transaction(bt).objectStore(bt).get(t);if(t)return t;t=await ht(e.appConfig.senderId);return t?(await St(e,t),t):void 0}async function St(e,t){var n=Tt(e);const i=await kt(),a=i.transaction(bt,"readwrite");return await a.objectStore(bt).put(t,n),await a.done,t}function Tt({appConfig:e}){return e.appId}const Ct=new a("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Dt(e,t){var n={method:"DELETE",headers:await jt(e)};try{const r=await fetch(`${_t(e.appConfig)}/${t}`,n);var i=await r.json();if(i.error){var a=i.error.message;throw Ct.create("token-unsubscribe-failed",{errorInfo:a})}}catch(e){throw Ct.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function _t({projectId:e}){return`${ct}/projects/${e}/registrations`}async function jt({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ot({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==st&&(a.web.applicationPubKey=i),a}async function Pt(e){const t=await async function(e,t){var n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/");const n=atob(t),i=new Uint8Array(n.length);for(let a=0;a<n.length;++a)i[a]=n.charCodeAt(a);return i}(t)})}(e.swRegistration,e.vapidKey);var n,i,a,r,o,s={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ft(t.getKey("auth")),p256dh:ft(t.getKey("p256dh"))},c=await It(e.firebaseDependencies);if(c){if(n=c.subscriptionOptions,i=s.vapidKey===n.vapidKey,a=s.endpoint===n.endpoint,r=s.auth===n.auth,o=s.p256dh===n.p256dh,i&&a&&r&&o)return Date.now()>=c.createTime+6048e5?async function(t,e){try{var n=await async function(e,t){var n=await jt(e),i=Ot(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(`${_t(e.appConfig)}/${t.token}`,i);a=await r.json()}catch(e){throw Ct.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){i=a.error.message;throw Ct.create("token-update-failed",{errorInfo:i})}if(!a.token)throw Ct.create("token-update-no-token");return a.token}(t.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await St(t.firebaseDependencies,i),n}catch(e){throw await Et(t),e}}(e,{token:c.token,createTime:Date.now(),subscriptionOptions:s}):c.token;try{await Dt(e.firebaseDependencies,c.token)}catch(e){console.warn(e)}return Mt(e.firebaseDependencies,s)}return Mt(e.firebaseDependencies,s)}async function Et(e){var t=await It(e.firebaseDependencies);t&&(await Dt(e.firebaseDependencies,t.token),await async function(e){var t=Tt(e);const n=await kt(),i=n.transaction(bt,"readwrite");await i.objectStore(bt).delete(t),await i.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function Mt(e,t){var n={token:await async function(e,t){var n=await jt(e),i=Ot(t),i={method:"POST",headers:n,body:JSON.stringify(i)};let a;try{const r=await fetch(_t(e.appConfig),i);a=await r.json()}catch(e){throw Ct.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(a.error){i=a.error.message;throw Ct.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw Ct.create("token-subscribe-no-token");return a.token}(e,t),createTime:Date.now(),subscriptionOptions:t};return await St(e,n),n.token}async function At(e,t){var n=function(e,t){var n;const i={};e.from&&(i.project_number=e.from);e.fcmMessageId&&(i.message_id=e.fcmMessageId);i.instance_id=t,e.notification?i.message_type=L.DISPLAY_NOTIFICATION.toString():i.message_type=L.DATA_MESSAGE.toString();i.sdk_platform=pt.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(i.collapse_key=e.collapse_key);i.event=lt.toString(),null!==(n=e.fcmOptions)&&void 0!==n&&n.analytics_label&&(i.analytics_label=null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label);return i}(t,await e.firebaseDependencies.installations.getId());!function(e,t,n){const i={};i.event_time_ms=Math.floor(Date.now()).toString(),i.source_extension_json_proto3=JSON.stringify(t),n&&(i.compliance_data=function(e){var t={privacy_context:{prequest:{origin_associated_product_id:e}}};return t}(n));e.logEvents.push(i)}(e,n,t.productId)}function Kt(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}async function Nt(e,t){var n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(n){t.deliveryMetricsExportedToBigQueryEnabled&&await At(t,n);var i,a,r,o,s=await Lt();if(s.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=B.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(s,n);n.notification&&await function(e){var t=e["actions"],n=Notification["maxActions"];t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(n=e.title)&&void 0!==n?n:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[ut]:e},t}(n)),t&&t.onBackgroundMessageHandler&&(o={from:(i=n).from,collapseKey:i.collapse_key,messageId:i.fcmMessageId},s=o,(e=i).notification&&(s.notification={},(n=e.notification.title)&&(s.notification.title=n),(n=e.notification.body)&&(s.notification.body=n),(n=e.notification.image)&&(s.notification.image=n),(n=e.notification.icon)&&(s.notification.icon=n)),e=o,(s=i).data&&(e.data=s.data),s=o,((i=i).fcmOptions||null!==(a=i.notification)&&void 0!==a&&a.click_action)&&(s.fcmOptions={},(r=null!==(a=null===(a=i.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==a?a:null===(r=i.notification)||void 0===r?void 0:r.click_action)&&(s.fcmOptions.link=r),(r=null===(r=i.fcmOptions)||void 0===r?void 0:r.analytics_label)&&(s.fcmOptions.analyticsLabel=r)),o=o,"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o))}}async function xt(e){const t=null===(r=null===(a=e.notification)||void 0===a?void 0:a.data)||void 0===r?void 0:r[ut];if(t&&!e.action){e.stopImmediatePropagation(),e.notification.close();var n=function(e){var t;var n=null!==(t=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==t?t:null===(n=e.notification)||void 0===n?void 0:n.click_action;if(n)return n;return function(e){return"object"==typeof e&&e&&dt in e}(e.data)?self.location.origin:null}(t);if(n){var i,a=new URL(n,self.location.href),r=new URL(self.location.origin);if(a.host===r.host){let e=await async function(e){var t=await Lt();for(const i of t){var n=new URL(i.url,self.location.href);if(e.host===n.host)return i}return null}(a);if(e?e=await e.focus():(e=await self.clients.openWindow(n),i=3e3,await new Promise(e=>{setTimeout(e,i)})),e)return t.messageType=B.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,e.postMessage(t)}}}}function Lt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Bt(e){return Ct.create("missing-app-config-values",{valueName:e})}Kt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Kt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class $t{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var i=function(e){if(!e||!e.options)throw Bt("App Configuration Object");if(!e.name)throw Bt("App Name");var t=e["options"];for(const n of["projectId","apiKey","appId","messagingSenderId"])if(!t[n])throw Bt(n);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}const Ft=e=>{const t=new $t(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(Nt(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n;(n=e["newSubscription"])?(n=await It(t.firebaseDependencies),await Et(t),t.vapidKey=null!==(n=null===(n=null==n?void 0:n.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==n?n:st,await Pt(t)):await Et(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(xt(e))}),t};function Ht(e,t){return function(e,t){if(void 0!==self.document)throw Ct.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=r(e),t)}Ut._registerComponent(new c("messaging-sw",Ft,"PUBLIC"));class Rt{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return async function(e,t){return Xe(e=r(e),t)}(this._delegate,e)}async deleteToken(){return rt(this._delegate)}onMessage(e){return ot(this._delegate,e)}onBackgroundMessage(e){return Ht(this._delegate,e)}}const qt=e=>self&&"ServiceWorkerGlobalScope"in self?new Rt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new Rt(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),Vt={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?n()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&n()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};t.default.INTERNAL.registerComponent(new c("messaging-compat",qt,"PUBLIC").setServiceProps(Vt)),t.default.registerVersion("@firebase/messaging-compat","0.2.5")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging-compat.js.map
