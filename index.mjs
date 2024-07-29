// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.1-esm/index.mjs";function a(a,s,t){var d,e,o,f,i,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w;if(f=(y=s[1])[2],i=y[1],n=y[0],!(f<=0||i<=0||n<=0))for(q=(k=r(a[0],s[0],y)).data,d=(g=k.strides)[2],e=g[1],o=g[0],w=a[1],p=0,c=0;c<n;c++){for(l=0,h=q[p],x=w[c],b=0;b<i;b++){for(j=0,v=h[l],u=x[b],m=0;m<f;m++)u[m]=t(v[j]),j+=d;l+=e}p+=o}}export{a as default};
//# sourceMappingURL=index.mjs.map
