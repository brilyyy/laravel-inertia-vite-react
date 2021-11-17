import{b as u}from"./vendor.7e44d81f.js";var p={exports:{}},t={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=u.exports,_=60103;t.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;_=a("react.element"),t.Fragment=a("react.fragment")}var m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function l(o,r,s){var e,n={},f=null,i=null;s!==void 0&&(f=""+s),r.key!==void 0&&(f=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)v.call(r,e)&&!y.hasOwnProperty(e)&&(n[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:_,type:o,key:f,ref:i,props:n,_owner:m.current}}t.jsx=l;t.jsxs=l;p.exports=t;const c=p.exports.jsx;var O=()=>c("div",{children:"Hi from inertia-react"});export{O as default};
