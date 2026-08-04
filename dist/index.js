"use strict";var w=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var l=w(function(E,k){
var z=require('@stdlib/array-base-broadcast-array/dist');function B(v,r,s){var j,S,b,x,d,u,t,i,e,f,n,c,q,m,p,A,a,o,y,g,h;if(a=r[1],x=a[2],d=a[1],u=a[0],!(x<=0||d<=0||u<=0))for(y=z(v[0],r[0],a),g=y.data,o=y.strides,j=o[2],S=o[1],b=o[0],h=v[1],c=0,e=0;e<u;e++){for(n=0,m=g[c],A=h[e],i=0;i<d;i++){for(f=0,q=m[n],p=A[i],t=0;t<x;t++)p[t]=s(q[f]),f+=j;n+=S}c+=b}}k.exports=B
});var C=l();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
