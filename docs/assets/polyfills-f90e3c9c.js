var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(t){return t&&t.Math===Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")(),e={},o=function(t){try{return!!t()}catch(n){return!0}},i=!o((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})),u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=u,f=Function.prototype.call,a=c?f.bind(f):function(){return f.apply(f,arguments)},l={},s={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,y=p&&!s.call({1:2},1);l.f=y?function(t){var n=p(this,t);return!!n&&n.enumerable}:s;var v,h,b=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},g=u,d=Function.prototype,m=d.call,w=g&&d.bind.bind(m,m),O=g?w:function(t){return function(){return m.apply(t,arguments)}},S=O,j=S({}.toString),P=S("".slice),E=function(t){return P(j(t),8,-1)},T=o,A=E,F=Object,x=O("".split),M=T((function(){return!F("z").propertyIsEnumerable(0)}))?function(t){return"String"===A(t)?x(t,""):F(t)}:F,C=function(t){return null==t},I=C,k=TypeError,z=function(t){if(I(t))throw new k("Can't call method on "+t);return t},L=M,N=z,D=function(t){return L(N(t))},R="object"==typeof document&&document.all,_=void 0===R&&void 0!==R?function(t){return"function"==typeof t||t===R}:function(t){return"function"==typeof t},G=_,B=function(t){return"object"==typeof t?null!==t:G(t)},U=r,W=_,$=function(t,n){return arguments.length<2?(r=U[t],W(r)?r:void 0):U[t]&&U[t][n];var r},q=O({}.isPrototypeOf),K=r,V="undefined"!=typeof navigator&&String(navigator.userAgent)||"",X=K.process,Y=K.Deno,H=X&&X.versions||Y&&Y.version,J=H&&H.v8;J&&(h=(v=J.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!h&&V&&(!(v=V.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=V.match(/Chrome\/(\d+)/))&&(h=+v[1]);var Q=h,Z=o,tt=r.String,nt=!!Object.getOwnPropertySymbols&&!Z((function(){var t=Symbol("symbol detection");return!tt(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Q&&Q<41})),rt=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=$,ot=_,it=q,ut=Object,ct=rt?function(t){return"symbol"==typeof t}:function(t){var n=et("Symbol");return ot(n)&&it(n.prototype,ut(t))},ft=String,at=function(t){try{return ft(t)}catch(n){return"Object"}},lt=_,st=at,pt=TypeError,yt=function(t){if(lt(t))return t;throw new pt(st(t)+" is not a function")},vt=yt,ht=C,bt=a,gt=_,dt=B,mt=TypeError,wt={exports:{}},Ot=r,St=Object.defineProperty,jt=function(t,n){try{St(Ot,t,{value:n,configurable:!0,writable:!0})}catch(r){Ot[t]=n}return n},Pt=r,Et=jt,Tt="__core-js_shared__",At=wt.exports=Pt[Tt]||Et(Tt,{});(At.versions||(At.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ft=wt.exports,xt=Ft,Mt=function(t,n){return xt[t]||(xt[t]=n||{})},Ct=z,It=Object,kt=function(t){return It(Ct(t))},zt=kt,Lt=O({}.hasOwnProperty),Nt=Object.hasOwn||function(t,n){return Lt(zt(t),n)},Dt=O,Rt=0,_t=Math.random(),Gt=Dt(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Gt(++Rt+_t,36)},Ut=Mt,Wt=Nt,$t=Bt,qt=nt,Kt=rt,Vt=r.Symbol,Xt=Ut("wks"),Yt=Kt?Vt.for||Vt:Vt&&Vt.withoutSetter||$t,Ht=function(t){return Wt(Xt,t)||(Xt[t]=qt&&Wt(Vt,t)?Vt[t]:Yt("Symbol."+t)),Xt[t]},Jt=a,Qt=B,Zt=ct,tn=function(t,n){var r=t[n];return ht(r)?void 0:vt(r)},nn=function(t,n){var r,e;if("string"===n&&gt(r=t.toString)&&!dt(e=bt(r,t)))return e;if(gt(r=t.valueOf)&&!dt(e=bt(r,t)))return e;if("string"!==n&&gt(r=t.toString)&&!dt(e=bt(r,t)))return e;throw new mt("Can't convert object to primitive value")},rn=TypeError,en=Ht("toPrimitive"),on=function(t,n){if(!Qt(t)||Zt(t))return t;var r,e=tn(t,en);if(e){if(void 0===n&&(n="default"),r=Jt(e,t,n),!Qt(r)||Zt(r))return r;throw new rn("Can't convert object to primitive value")}return void 0===n&&(n="number"),nn(t,n)},un=ct,cn=function(t){var n=on(t,"string");return un(n)?n:n+""},fn=B,an=r.document,ln=fn(an)&&fn(an.createElement),sn=function(t){return ln?an.createElement(t):{}},pn=!i&&!o((function(){return 7!==Object.defineProperty(sn("div"),"a",{get:function(){return 7}}).a})),yn=i,vn=a,hn=l,bn=b,gn=D,dn=cn,mn=Nt,wn=pn,On=Object.getOwnPropertyDescriptor;e.f=yn?On:function(t,n){if(t=gn(t),n=dn(n),wn)try{return On(t,n)}catch(r){}if(mn(t,n))return bn(!vn(hn.f,t,n),t[n])};var Sn={},jn=i&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Pn=B,En=String,Tn=TypeError,An=function(t){if(Pn(t))return t;throw new Tn(En(t)+" is not an object")},Fn=i,xn=pn,Mn=jn,Cn=An,In=cn,kn=TypeError,zn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Nn="enumerable",Dn="configurable",Rn="writable";Sn.f=Fn?Mn?function(t,n,r){if(Cn(t),n=In(n),Cn(r),"function"==typeof t&&"prototype"===n&&"value"in r&&Rn in r&&!r[Rn]){var e=Ln(t,n);e&&e[Rn]&&(t[n]=r.value,r={configurable:Dn in r?r[Dn]:e[Dn],enumerable:Nn in r?r[Nn]:e[Nn],writable:!1})}return zn(t,n,r)}:zn:function(t,n,r){if(Cn(t),n=In(n),Cn(r),xn)try{return zn(t,n,r)}catch(e){}if("get"in r||"set"in r)throw new kn("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var _n=Sn,Gn=b,Bn=i?function(t,n,r){return _n.f(t,n,Gn(1,r))}:function(t,n,r){return t[n]=r,t},Un={exports:{}},Wn=i,$n=Nt,qn=Function.prototype,Kn=Wn&&Object.getOwnPropertyDescriptor,Vn=$n(qn,"name"),Xn={EXISTS:Vn,PROPER:Vn&&"something"===function(){}.name,CONFIGURABLE:Vn&&(!Wn||Wn&&Kn(qn,"name").configurable)},Yn=_,Hn=Ft,Jn=O(Function.toString);Yn(Hn.inspectSource)||(Hn.inspectSource=function(t){return Jn(t)});var Qn,Zn,tr,nr=Hn.inspectSource,rr=_,er=r.WeakMap,or=rr(er)&&/native code/.test(String(er)),ir=Bt,ur=Mt("keys"),cr={},fr=or,ar=r,lr=B,sr=Bn,pr=Nt,yr=Ft,vr=function(t){return ur[t]||(ur[t]=ir(t))},hr=cr,br="Object already initialized",gr=ar.TypeError,dr=ar.WeakMap;if(fr||yr.state){var mr=yr.state||(yr.state=new dr);mr.get=mr.get,mr.has=mr.has,mr.set=mr.set,Qn=function(t,n){if(mr.has(t))throw new gr(br);return n.facade=t,mr.set(t,n),n},Zn=function(t){return mr.get(t)||{}},tr=function(t){return mr.has(t)}}else{var wr=vr("state");hr[wr]=!0,Qn=function(t,n){if(pr(t,wr))throw new gr(br);return n.facade=t,sr(t,wr,n),n},Zn=function(t){return pr(t,wr)?t[wr]:{}},tr=function(t){return pr(t,wr)}}var Or={set:Qn,get:Zn,has:tr,enforce:function(t){return tr(t)?Zn(t):Qn(t,{})},getterFor:function(t){return function(n){var r;if(!lr(n)||(r=Zn(n)).type!==t)throw new gr("Incompatible receiver, "+t+" required");return r}}},Sr=O,jr=o,Pr=_,Er=Nt,Tr=i,Ar=Xn.CONFIGURABLE,Fr=nr,xr=Or.enforce,Mr=Or.get,Cr=String,Ir=Object.defineProperty,kr=Sr("".slice),zr=Sr("".replace),Lr=Sr([].join),Nr=Tr&&!jr((function(){return 8!==Ir((function(){}),"length",{value:8}).length})),Dr=String(String).split("String"),Rr=Un.exports=function(t,n,r){"Symbol("===kr(Cr(n),0,7)&&(n="["+zr(Cr(n),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!Er(t,"name")||Ar&&t.name!==n)&&(Tr?Ir(t,"name",{value:n,configurable:!0}):t.name=n),Nr&&r&&Er(r,"arity")&&t.length!==r.arity&&Ir(t,"length",{value:r.arity});try{r&&Er(r,"constructor")&&r.constructor?Tr&&Ir(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var e=xr(t);return Er(e,"source")||(e.source=Lr(Dr,"string"==typeof n?n:"")),t};Function.prototype.toString=Rr((function(){return Pr(this)&&Mr(this).source||Fr(this)}),"toString");var _r=Un.exports,Gr=_,Br=Sn,Ur=_r,Wr=jt,$r=function(t,n,r,e){e||(e={});var o=e.enumerable,i=void 0!==e.name?e.name:n;if(Gr(r)&&Ur(r,i,e),e.global)o?t[n]=r:Wr(n,r);else{try{e.unsafe?t[n]&&(o=!0):delete t[n]}catch(u){}o?t[n]=r:Br.f(t,n,{value:r,enumerable:!1,configurable:!e.nonConfigurable,writable:!e.nonWritable})}return t},qr={},Kr=Math.ceil,Vr=Math.floor,Xr=Math.trunc||function(t){var n=+t;return(n>0?Vr:Kr)(n)},Yr=function(t){var n=+t;return n!=n||0===n?0:Xr(n)},Hr=Yr,Jr=Math.max,Qr=Math.min,Zr=Yr,te=Math.min,ne=function(t){var n=Zr(t);return n>0?te(n,9007199254740991):0},re=function(t){return ne(t.length)},ee=D,oe=function(t,n){var r=Hr(t);return r<0?Jr(r+n,0):Qr(r,n)},ie=re,ue=function(t){return function(n,r,e){var o=ee(n),i=ie(o);if(0===i)return!t&&-1;var u,c=oe(e,i);if(t&&r!=r){for(;i>c;)if((u=o[c++])!=u)return!0}else for(;i>c;c++)if((t||c in o)&&o[c]===r)return t||c||0;return!t&&-1}},ce={includes:ue(!0),indexOf:ue(!1)},fe=Nt,ae=D,le=ce.indexOf,se=cr,pe=O([].push),ye=function(t,n){var r,e=ae(t),o=0,i=[];for(r in e)!fe(se,r)&&fe(e,r)&&pe(i,r);for(;n.length>o;)fe(e,r=n[o++])&&(~le(i,r)||pe(i,r));return i},ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");qr.f=Object.getOwnPropertyNames||function(t){return ye(t,ve)};var he={};he.f=Object.getOwnPropertySymbols;var be=$,ge=qr,de=he,me=An,we=O([].concat),Oe=be("Reflect","ownKeys")||function(t){var n=ge.f(me(t)),r=de.f;return r?we(n,r(t)):n},Se=Nt,je=Oe,Pe=e,Ee=Sn,Te=o,Ae=_,Fe=/#|\.prototype\./,xe=function(t,n){var r=Ce[Me(t)];return r===ke||r!==Ie&&(Ae(n)?Te(n):!!n)},Me=xe.normalize=function(t){return String(t).replace(Fe,".").toLowerCase()},Ce=xe.data={},Ie=xe.NATIVE="N",ke=xe.POLYFILL="P",ze=xe,Le=r,Ne=e.f,De=Bn,Re=$r,_e=jt,Ge=function(t,n,r){for(var e=je(n),o=Ee.f,i=Pe.f,u=0;u<e.length;u++){var c=e[u];Se(t,c)||r&&Se(r,c)||o(t,c,i(n,c))}},Be=ze,Ue=function(t,n){var r,e,o,i,u,c=t.target,f=t.global,a=t.stat;if(r=f?Le:a?Le[c]||_e(c,{}):Le[c]&&Le[c].prototype)for(e in n){if(i=n[e],o=t.dontCallGetSet?(u=Ne(r,e))&&u.value:r[e],!Be(f?e:c+(a?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ge(i,o)}(t.sham||o&&o.sham)&&De(i,"sham",!0),Re(r,e,i,t)}},We=r.Promise,$e={};$e[Ht("toStringTag")]="z";var qe="[object z]"===String($e),Ke=_,Ve=E,Xe=Ht("toStringTag"),Ye=Object,He="Arguments"===Ve(function(){return arguments}()),Je=O,Qe=o,Ze=_,to=qe?Ve:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Ye(t),Xe))?r:He?Ve(n):"Object"===(e=Ve(n))&&Ke(n.callee)?"Arguments":e},no=nr,ro=function(){},eo=$("Reflect","construct"),oo=/^\s*(?:class|function)\b/,io=Je(oo.exec),uo=!oo.test(ro),co=function(t){if(!Ze(t))return!1;try{return eo(ro,[],t),!0}catch(n){return!1}},fo=function(t){if(!Ze(t))return!1;switch(to(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return uo||!!io(oo,no(t))}catch(n){return!0}};fo.sham=!0;var ao=!eo||Qe((function(){var t;return co(co.call)||!co(Object)||!co((function(){t=!0}))||t}))?fo:co,lo=ao,so=at,po=TypeError,yo=An,vo=function(t){if(lo(t))return t;throw new po(so(t)+" is not a constructor")},ho=C,bo=Ht("species"),go={},mo=yt,wo=TypeError,Oo=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw new wo("Bad Promise constructor");n=t,r=e})),this.resolve=mo(n),this.reject=mo(r)};go.f=function(t){return new Oo(t)};var So=An,jo=B,Po=go,Eo=Ue,To=We,Ao=o,Fo=$,xo=_,Mo=function(t,n){var r,e=yo(t).constructor;return void 0===e||ho(r=yo(e)[bo])?n:vo(r)},Co=function(t,n){if(So(t),jo(n)&&n.constructor===t)return n;var r=Po.f(t);return(0,r.resolve)(n),r.promise},Io=$r,ko=To&&To.prototype;if(Eo({target:"Promise",proto:!0,real:!0,forced:!!To&&Ao((function(){ko.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=Mo(this,Fo("Promise")),r=xo(t);return this.then(r?function(r){return Co(n,t()).then((function(){return r}))}:t,r?function(r){return Co(n,t()).then((function(){throw r}))}:t)}}),xo(To)){var zo=Fo("Promise").prototype.finally;ko.finally!==zo&&Io(ko,"finally",zo,{unsafe:!0})}var Lo=E,No=Array.isArray||function(t){return"Array"===Lo(t)},Do=TypeError,Ro=E,_o=O,Go=function(t){if("Function"===Ro(t))return _o(t)},Bo=yt,Uo=u,Wo=Go(Go.bind),$o=No,qo=re,Ko=function(t){if(t>9007199254740991)throw Do("Maximum allowed index exceeded");return t},Vo=function(t,n){return Bo(t),void 0===n?t:Uo?Wo(t,n):function(){return t.apply(n,arguments)}},Xo=function(t,n,r,e,o,i,u,c){for(var f,a,l=o,s=0,p=!!u&&Vo(u,c);s<e;)s in r&&(f=p?p(r[s],s,n):r[s],i>0&&$o(f)?(a=qo(f),l=Xo(t,n,f,a,l,i-1)-1):(Ko(l+1),t[l]=f),l++),s++;return l},Yo=Xo,Ho=No,Jo=ao,Qo=B,Zo=Ht("species"),ti=Array,ni=function(t){var n;return Ho(t)&&(n=t.constructor,(Jo(n)&&(n===ti||Ho(n.prototype))||Qo(n)&&null===(n=n[Zo]))&&(n=void 0)),void 0===n?ti:n},ri=function(t,n){return new(ni(t))(0===n?0:n)},ei=Yo,oi=kt,ii=re,ui=Yr,ci=ri;Ue({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=oi(this),r=ii(n),e=ci(n,0);return e.length=ei(e,n,n,r,0,void 0===t?1:ui(t)),e}});var fi=Yo,ai=yt,li=kt,si=re,pi=ri;Ue({target:"Array",proto:!0},{flatMap:function(t){var n,r=li(this),e=si(r);return ai(t),(n=pi(r,0)).length=fi(n,r,r,e,0,1,t,arguments.length>1?arguments[1]:void 0),n}});
