"use strict";var w=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var k=w(function(E,h){
var z=require('@stdlib/array-base-broadcast-array/dist');function B(v,r,l){var y,j,S,s,x,d,t,i,e,u,f,n,b,q,m,p,a,o,c,A,g;if(a=r[1],s=a[2],x=a[1],d=a[0],!(s<=0||x<=0||d<=0))for(c=z(v[0],r[0],a),A=c.data,o=c.strides,y=o[2],j=o[1],S=o[0],g=v[1],n=0,e=0;e<d;e++){for(f=0,q=A[n],p=g[e],i=0;i<x;i++){for(u=0,b=q[f],m=p[i],t=0;t<s;t++)m[t]=l(b[u]),u+=y;f+=j}n+=S}}h.exports=B
});var C=k();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
