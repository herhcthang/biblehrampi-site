(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65361,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(75056),s=e.i(98903);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var a=e.i(90072),o=e.i(38408);let u={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},v={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},l=r.forwardRef(({scale:e=10,frames:t=1/0,opacity:n=1,width:l=1,height:f=1,blur:c=1,near:m=0,far:d=10,resolution:h=512,smooth:x=!0,color:g="#000000",depthWrite:p=!1,renderOrder:y,...D},U)=>{let b,w,M=r.useRef(null),E=(0,o.f)(e=>e.scene),j=(0,o.f)(e=>e.gl),A=r.useRef(null);l*=Array.isArray(e)?e[0]:e||1,f*=Array.isArray(e)?e[1]:e||1;let[R,I,P,S,T,C,B]=r.useMemo(()=>{let e=new a.qL(h,h),t=new a.qL(h,h);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new a.CQ(l,f).rotateX(Math.PI/2),n=new a.kE(r),s=new a.QQ;s.depthTest=s.depthWrite=!1,s.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new a.Es(g)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let i=new a.Zg(u),o=new a.Zg(v);return o.depthTest=i.depthTest=!1,[e,r,s,n,i,o,t]},[h,l,f,e,g]),V=e=>{S.visible=!0,S.material=T,T.uniforms.tDiffuse.value=R.texture,T.uniforms.h.value=e/256,j.setRenderTarget(B),j.render(S,A.current),S.material=C,C.uniforms.tDiffuse.value=B.texture,C.uniforms.v.value=e/256,j.setRenderTarget(R),j.render(S,A.current),S.visible=!1},k=0;return(0,s.f)(()=>{A.current&&(1/0===t||k<t)&&(k++,b=E.background,w=E.overrideMaterial,M.current.visible=!1,E.background=null,E.overrideMaterial=P,j.setRenderTarget(R),j.render(E,A.current),V(c),x&&V(.4*c),j.setRenderTarget(null),M.current.visible=!0,E.overrideMaterial=w,E.background=b)}),r.useImperativeHandle(U,()=>M.current,[]),r.createElement("group",i({"rotation-x":Math.PI/2},D,{ref:M}),r.createElement("mesh",{renderOrder:y,geometry:I,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},r.createElement("meshBasicMaterial",{transparent:!0,map:R.texture,opacity:n,depthWrite:p})),r.createElement("orthographicCamera",{ref:A,args:[-l/2,l/2,f/2,-f/2,m,d]}))}),f=r.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:s=.05,steps:a=1,smoothness:o=4,bevelSegments:u=4,creaseAngle:v=.4,children:l,...f},m){return r.createElement("mesh",i({ref:m},f),r.createElement(c,{args:[e,t,n],radius:s,steps:a,smoothness:o,bevelSegments:u,creaseAngle:v}),l)}),c=r.forwardRef(function({args:[e=1,t=1,n=1]=[],radius:s=.05,steps:o=1,smoothness:u=4,bevelSegments:v=4,creaseAngle:l=.4,...f},c){let m=r.useMemo(()=>{let r,n;return r=new a.Ow,n=s-1e-5,r.absarc(1e-5,1e-5,1e-5,-Math.PI/2,-Math.PI,!0),r.absarc(1e-5,t-2*n,1e-5,Math.PI,Math.PI/2,!0),r.absarc(e-2*n,t-2*n,1e-5,Math.PI/2,0,!0),r.absarc(e-2*n,1e-5,1e-5,0,-Math.PI/2,!0),r},[e,t,s]),d=r.useMemo(()=>({depth:n-2*s,bevelEnabled:!0,bevelSegments:2*v,steps:o,bevelSize:s-1e-5,bevelThickness:s,curveSegments:u}),[n,s,u,v,o]),h=r.useRef(null);return r.useLayoutEffect(()=>{h.current&&(h.current.center(),function(e,t=Math.PI/3){let r=Math.cos(t),n=(1+1e-10)*100,s=[new a.cE,new a.cE,new a.cE],i=new a.cE,o=new a.cE,u=new a.cE,v=new a.cE;function l(e){let t=~~(e.x*n),r=~~(e.y*n),s=~~(e.z*n);return`${t},${r},${s}`}let f=e.index?e.toNonIndexed():e,c=f.attributes.position,m={};for(let e=0,t=c.count/3;e<t;e++){let t=3*e,r=s[0].fromBufferAttribute(c,t+0),n=s[1].fromBufferAttribute(c,t+1),u=s[2].fromBufferAttribute(c,t+2);i.subVectors(u,n),o.subVectors(r,n);let v=new a.cE().crossVectors(i,o).normalize();for(let e=0;e<3;e++){let t=l(s[e]);t in m||(m[t]=[]),m[t].push(v)}}let d=new Float32Array(3*c.count),h=new a.f5(d,3,!1);for(let e=0,t=c.count/3;e<t;e++){let t=3*e,n=s[0].fromBufferAttribute(c,t+0),a=s[1].fromBufferAttribute(c,t+1),f=s[2].fromBufferAttribute(c,t+2);i.subVectors(f,a),o.subVectors(n,a),u.crossVectors(i,o).normalize();for(let e=0;e<3;e++){let n=m[l(s[e])];v.set(0,0,0);for(let e=0,t=n.length;e<t;e++){let t=n[e];u.dot(t)>r&&v.add(t)}v.normalize(),h.setXYZ(t+e,v.x,v.y,v.z)}}f.setAttribute("normal",h)}(h.current,l))},[m,d,l]),r.useImperativeHandle(c,()=>h.current),r.createElement("extrudeGeometry",i({ref:h,args:[m,d]},f))});var m=e.i(44220),d=e.i(54440);function h({numeral:e,onReady:n}){let i=(0,r.useRef)(null),o=(0,r.useRef)(0),u=(0,r.useRef)({x:0,y:0,sx:0,sy:0}),v=(0,r.useMemo)(()=>({grain:(0,m.E)(),edge:(0,m.D)(128,0,9),numeral:(0,m.r)(e,{width:512,height:512,size:250,rules:!1,fill:d.J.goldHover,shadow:"rgba(60,45,15,0.55)"})}),[e]),l=(0,r.useMemo)(()=>({stone:new a.aV({color:d.o.stone,map:v.grain,bumpMap:v.grain,bumpScale:.8,roughness:.86,emissive:new a.Es(d.J.gold),emissiveMap:v.edge,emissiveIntensity:.35}),numeral:new a.aV({map:v.numeral,transparent:!0,depthWrite:!1,roughness:.4,metalness:.5,emissive:new a.Es(d.J.gold),emissiveMap:v.numeral,emissiveIntensity:.12,polygonOffset:!0,polygonOffsetFactor:-2})}),[v]);return(0,r.useEffect)(()=>()=>{Object.values(v).forEach(e=>e.dispose()),Object.values(l).forEach(e=>e.dispose())},[v,l]),(0,r.useEffect)(()=>{let e=e=>{"mouse"===e.pointerType&&(u.current.x=e.clientX/window.innerWidth*2-1,u.current.y=e.clientY/window.innerHeight*2-1)};return window.addEventListener("pointermove",e,{passive:!0}),()=>window.removeEventListener("pointermove",e)},[]),(0,s.f)((e,t)=>{let r=i.current;if(!r)return;let s=u.current;s.sx+=(s.x-s.sx)*Math.min(1,2.5*t),s.sy+=(s.y-s.sy)*Math.min(1,2.5*t);let a=e.clock.elapsedTime;r.rotation.y=-.5+.07*Math.sin(.22*a)+.12*s.sx,r.rotation.x=.04+.05*s.sy,r.position.y=.03*Math.sin(.5*a),o.current++,3===o.current&&n()}),(0,t.jsxs)("group",{ref:i,children:[(0,t.jsx)(f,{args:[1.6,.8,1],radius:.05,smoothness:3,material:l.stone}),(0,t.jsx)("mesh",{position:[0,0,.5025],material:l.numeral,children:(0,t.jsx)("planeGeometry",{args:[.66,.66]})})]})}e.s(["default",0,function({numeral:e,active:r,onReady:s}){return(0,t.jsxs)(n.f,{frameloop:r?"always":"never",dpr:[1,1.5],camera:{fov:28,position:[2.1,1.25,3.7]},gl:{antialias:!0,alpha:!0,powerPreference:"low-power"},onCreated:({camera:e})=>e.lookAt(0,-.05,0),style:{position:"absolute",inset:0},children:[(0,t.jsx)("hemisphereLight",{args:[d.o.ambientSky,d.o.ambientGround,1.5]}),(0,t.jsx)("directionalLight",{position:[-3,5,4],intensity:2.2,color:d.o.keyLight}),(0,t.jsx)("directionalLight",{position:[4,1,-2],intensity:.5,color:d.o.fill}),(0,t.jsx)(h,{numeral:e,onReady:s}),(0,t.jsx)(l,{position:[0,-.47,0],opacity:.38,scale:4,blur:2.4,far:1.2,frames:1,color:d.J.text})]})}],65361)},78175,function(e){e.n(e.i(65361))}]);