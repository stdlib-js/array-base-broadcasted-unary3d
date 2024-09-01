// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){var r,i,a;for(i=e.length,r=[],a=0;a<i;a++)r.push(e[a]);return r}function r(e){return"number"==typeof e}function i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,a){var n=!1,t=r-e.length;return t<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=a?e+i(t):i(t)+e,n&&(e="-"+e)),e}var n=String.prototype.toLowerCase,t=String.prototype.toUpperCase;function s(e){var i,s,o;switch(e.specifier){case"b":i=2;break;case"o":i=8;break;case"x":case"X":i=16;break;default:i=10}if(s=e.arg,o=parseInt(s,10),!isFinite(o)){if(!r(s))throw new Error("invalid integer. Value: "+s);o=0}return o<0&&("u"===e.specifier||10!==i)&&(o=4294967295+o+1),o<0?(s=(-o).toString(i),e.precision&&(s=a(s,e.precision,e.padRight)),s="-"+s):(s=o.toString(i),o||e.precision?e.precision&&(s=a(s,e.precision,e.padRight)):s="",e.sign&&(s=e.sign+s)),16===i&&(e.alternate&&(s="0x"+s),s=e.specifier===t.call(e.specifier)?t.call(s):n.call(s)),8===i&&e.alternate&&"0"!==s.charAt(0)&&(s="0"+s),s}var o=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,u=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var i,a,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+a);n=e.arg}switch(e.specifier){case"e":case"E":a=n.toExponential(e.precision);break;case"f":case"F":a=n.toFixed(e.precision);break;case"g":case"G":o(n)<1e-4?((i=e.precision)>0&&(i-=1),a=n.toExponential(i)):a=n.toPrecision(e.precision),e.alternate||(a=l.call(a,v,"$1e"),a=l.call(a,w,"e"),a=l.call(a,u,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=l.call(a,f,"e+0$1"),a=l.call(a,h,"e-0$1"),e.alternate&&(a=l.call(a,g,"$1."),a=l.call(a,d,"$1.e")),n>=0&&e.sign&&(a=e.sign+a),a=e.specifier===p.call(e.specifier)?p.call(a):c.call(a)}function b(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var y=String.fromCharCode,E=Array.isArray;function x(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,n,t,o,c,p,l,f,h,g,d,u;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),i=n.flags,f=0;f<i.length;f++)switch(t=i.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,x(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(h=n.arg,g=n.width,d=n.padRight,u=void 0,(u=g-h.length)<0?h:h=d?h+b(u):b(u)+h)),c+=n.arg||"",p+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,a,n;for(i=[],n=0,a=S.exec(e);a;)(r=e.slice(n,S.lastIndex-a[0].length)).length&&i.push(r),i.push($(a)),n=S.lastIndex,a=S.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){var r,i;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}function F(r,i,a){var n,t,s,o,c,p,l,f,h,g,d,u,w,v,m,b,y,E,x,k,I;if(o=(y=i[1])[2],c=y[1],p=y[0],!(o<=0||c<=0||p<=0))for(x=function(r,i,a){var n,t,s,o,c,p,l,f;if((o=a.length)<(c=i.length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(n=r,l=c;l<o;l++)n=[n];for(s=function(e,r){var i,a;for(i=[],a=0;a<r;a++)i.push(e);return i}(0,o),l=o-1;l>=0;l--)if(!((f=c-o+l)<0)){if(p=i[f],0!==(t=a[l])&&t<p)throw new Error(A("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),l));if(p===t)s[l]=1;else{if(1!==p)throw new Error(A("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",e(i).join(", "),e(a).join(", "),l));s[l]=0}}return{ref:r,data:n,shape:e(a),strides:s}}(r[0],i[0],y),k=x.data,n=(E=x.strides)[2],t=E[1],s=E[0],I=r[1],u=0,h=0;h<p;h++){for(d=0,v=k[u],b=I[h],f=0;f<c;f++){for(g=0,w=v[d],m=b[f],l=0;l<o;l++)m[l]=a(w[g]),g+=n;d+=t}u+=s}}export{F as default};
//# sourceMappingURL=mod.js.map
