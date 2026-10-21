(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57656,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(75056),o=e.i(98903),i=e.i(38408);let a=(0,r.createContext)(null);function l({iterations:e=10,ms:t=250,threshold:s=.75,step:i=.1,factor:n=.5,flipflops:c=1/0,bounds:u=e=>e>100?[60,100]:[40,60],onIncline:h,onDecline:d,onChange:f,onFallback:p,children:m}){let[v,g]=(0,r.useState)(()=>({fps:0,index:0,factor:n,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return v.subscriptions.set(t,e.current),()=>void v.subscriptions.delete(t)}})),x=0;return(0,o.f)(()=>{let{frames:r,averages:o}=v;if(!v.fallback&&o.length<e){r.push(performance.now());let a=r[r.length-1]-r[0];if(a>=t){if(v.fps=Math.round(r.length/a*1e3)/1,v.refreshrate=Math.max(v.refreshrate,v.fps),o[v.index++%e]=v.fps,o.length===e){let[t,r]=u(v.refreshrate),a=o.filter(e=>e>=r),l=o.filter(e=>e<t);a.length>e*s&&(v.factor=Math.min(1,v.factor+i),v.flipped++,h&&h(v),v.subscriptions.forEach(e=>e.onIncline&&e.onIncline(v))),l.length>e*s&&(v.factor=Math.max(0,v.factor-i),v.flipped++,d&&d(v),v.subscriptions.forEach(e=>e.onDecline&&e.onDecline(v))),x!==v.factor&&(x=v.factor,f&&f(v),v.subscriptions.forEach(e=>e.onChange&&e.onChange(v))),v.flipped>c&&!v.fallback&&(v.fallback=!0,p&&p(v),v.subscriptions.forEach(e=>e.onFallback&&e.onFallback(v))),v.averages=[]}v.frames=[]}}}),r.createElement(a.Provider,{value:v},m)}var n=e.i(90072),c=e.i(8560),u=n;class h extends u.P6{constructor(){super();let e=new u.kG;e.deleteAttribute("uv");let t=new u.aV({side:u.tw}),r=new u.aV,s=new u.SN(0xffffff,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let o=new u.kE(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let i=new u.YJ(e,r,6),a=new u.t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),i.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),i.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),i.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),i.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),i.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),i.setMatrixAt(5,a.matrix),this.add(i);let l=new u.kE(e,d(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let n=new u.kE(e,d(50));n.position.set(-16.109,18.021,-8.207),n.scale.set(.1,2.425,2.751),this.add(n);let c=new u.kE(e,d(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);let h=new u.kE(e,d(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new u.kE(e,d(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new u.kE(e,d(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function d(e){return new u.ht({color:0,emissive:0xffffff,emissiveIntensity:e})}let f={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var p=n;class m{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let v=new p.Sc(-1,1,1,-1,0,1);class g extends p.ld{constructor(){super(),this.setAttribute("position",new p.ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new p.ki([0,2,0,0,2,0],2))}}let x=new g;class b{constructor(e){this._mesh=new p.kE(x,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class w extends m{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof n.Zg?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=n.SP.clone(e.uniforms),this.material=new n.Zg({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new b(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class M extends m{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let s,o,i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0),this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,0xffffffff),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,0xffffffff),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class y extends m{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new n.wq);this._width=r.width,this._height=r.height,(t=new n.qL(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:n.HN})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new w(f),this.copyPass.material.blending=n.A1,this.clock=new n.mR}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,s=this.passes.length;t<s;t++){let s=this.passes[t];if(!1!==s.enabled){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==M&&(s instanceof M?r=!0:s instanceof y&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new n.wq);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(r,s),this.renderTarget2.setSize(r,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T extends m{constructor(e,t,r=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new n.Es}render(e,t,r){let s,o,i=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(s),null!==this.overrideMaterial&&(this.scene.overrideMaterial=o),e.autoClear=i}}let E={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n.Es(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _ extends m{constructor(e,t=1,r,s){super(),this.strength=t,this.radius=r,this.threshold=s,this.resolution=void 0!==e?new n.wq(e.x,e.y):new n.wq(256,256),this.clearColor=new n.Es(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),i=Math.round(this.resolution.y/2);this.renderTargetBright=new n.qL(o,i,{type:n.HN}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new n.qL(o,i,{type:n.HN});t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let r=new n.qL(o,i,{type:n.HN});r.texture.name="UnrealBloomPass.v"+e,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),o=Math.round(o/2),i=Math.round(i/2)}this.highPassUniforms=n.SP.clone(E.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new n.Zg({uniforms:this.highPassUniforms,vertexShader:E.vertexShader,fragmentShader:E.fragmentShader}),this.separableBlurMaterials=[];let a=[3,5,7,9,11];o=Math.round(this.resolution.x/2),i=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new n.wq(1/o,1/i),o=Math.round(o/2),i=Math.round(i/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new n.cE(1,1,1),new n.cE(1,1,1),new n.cE(1,1,1),new n.cE(1,1,1),new n.cE(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=n.SP.clone(f.uniforms),this.blendMaterial=new n.Zg({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:n.tq,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n.Es,this._oldClearAlpha=1,this._basic=new n.p$,this._fsQuad=new b(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(r,s);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(r,s),this.renderTargetsVertical[e].setSize(r,s),this.separableBlurMaterials[e].uniforms.invSize.value=new n.wq(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2)}render(e,t,r,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let i=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[t].uniforms.direction.value=_.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=_.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=i}_getSeparableBlurMaterial(e){let t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new n.Zg({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new n.wq(.5,.5)},direction:{value:new n.wq(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new n.Zg({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}_.BlurDirectionX=new n.wq(1,0),_.BlurDirectionY=new n.wq(0,1);let S={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class D extends m{constructor(e,t,r){super(),this.scene=e,this.camera=t;let s=void 0!==r.focus?r.focus:1,o=void 0!==r.aperture?r.aperture:.025,i=void 0!==r.maxblur?r.maxblur:1;this._renderTargetDepth=new n.qL(1,1,{minFilter:n.r8,magFilter:n.r8,type:n.HN}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new n.QQ,this._materialDepth.depthPacking=n.Wq,this._materialDepth.blending=n.A1;let a=n.SP.clone(S.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=s,a.aspect.value=t.aspect,a.aperture.value=o,a.maxblur.value=i,a.nearClip.value=t.near,a.farClip.value=t.far,this.materialBokeh=new n.Zg({defines:Object.assign({},S.defines),uniforms:a,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader}),this.uniforms=a,this._fsQuad=new b(this.materialBokeh),this._oldClearColor=new n.Es}render(e,t,r){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(0xffffff),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=r.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),e.clear()),this._fsQuad.render(e),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=o}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}let P={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class j extends m{constructor(){super(),this.uniforms=n.SP.clone(P.uniforms),this.material=new n.or({name:P.name,uniforms:this.uniforms,vertexShader:P.vertexShader,fragmentShader:P.fragmentShader}),this._fsQuad=new b(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},n.v0.getTransfer(this._outputColorSpace)===n.W7&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===n.N9?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===n.Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===n.d4?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===n.c2?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===n.Li?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===n.x8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===n.lG&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var U=n;let R=new U.cE;function A(e,t,r,s,o,i){let a=2*Math.PI*o/4,l=Math.max(i-2*o,0),n=Math.PI/4;R.copy(t),R[s]=0,R.normalize();let c=.5*a/(a+l),u=1-R.angleTo(e)/n;return 1===Math.sign(R[r])?u*c:l/(a+l)+c+c*(1-u)}class z extends U.kG{constructor(e=1,t=1,r=1,s=2,o=.1){let i=2*s+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,i,i,i),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},1===i)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U.cE,n=new U.cE,c=new U.cE(e,t,r).divideScalar(2).subScalar(o),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new U.cE,m=.5/i;for(let s=0,i=0;s<u.length;s+=3,i+=2)switch(l.fromArray(u,s),n.copy(l),n.x-=Math.sign(n.x)*m,n.y-=Math.sign(n.y)*m,n.z-=Math.sign(n.z)*m,n.normalize(),u[s+0]=c.x*Math.sign(l.x)+n.x*o,u[s+1]=c.y*Math.sign(l.y)+n.y*o,u[s+2]=c.z*Math.sign(l.z)+n.z*o,h[s+0]=n.x,h[s+1]=n.y,h[s+2]=n.z,Math.floor(s/f)){case 0:p.set(1,0,0),d[i+0]=A(p,n,"z","y",o,r),d[i+1]=1-A(p,n,"y","z",o,t);break;case 1:p.set(-1,0,0),d[i+0]=1-A(p,n,"z","y",o,r),d[i+1]=1-A(p,n,"y","z",o,t);break;case 2:p.set(0,1,0),d[i+0]=1-A(p,n,"x","z",o,e),d[i+1]=A(p,n,"z","x",o,r);break;case 3:p.set(0,-1,0),d[i+0]=1-A(p,n,"x","z",o,e),d[i+1]=1-A(p,n,"z","x",o,r);break;case 4:p.set(0,0,1),d[i+0]=1-A(p,n,"x","y",o,e),d[i+1]=1-A(p,n,"y","x",o,t);break;case 5:p.set(0,0,-1),d[i+0]=A(p,n,"x","y",o,e),d[i+1]=1-A(p,n,"y","x",o,t)}}static fromJSON(e){return new z(e.width,e.height,e.depth,e.segments,e.radius)}}var G=e.i(16218),B=e.i(44220),I=e.i(54440);function F(e){return .075*Math.pow(Math.sin(Math.PI*(.06+.94*e)),.6)*(1-.35*e)-.03*Math.pow(1-e,10)}function k(e){let t=new n.CQ(.78,1.06,32,1);t.rotateX(-Math.PI/2);let r=t.attributes.position;for(let t=0;t<r.count;t++){let s=r.getX(t),o=e<0?(.39-s)/.78:(s+.39)/.78;r.setY(t,F(o))}return r.needsUpdate=!0,t.computeVertexNormals(),t}function N(e){let t=new n.Ow,r=t=>e<0?.39-.78*t:-.39+.78*t;t.moveTo(r(1),0),t.lineTo(r(0),0);for(let e=0;e<=32;e++)t.lineTo(r(e/32),Math.max(0,F(e/32)));return t.closePath(),new n.pY(t)}function V({journey:e,glow:s}){let i=(0,r.useMemo)(()=>({left:(0,B.A)(!1),right:(0,B.A)(!0)}),[]),a=(0,r.useMemo)(()=>{let e=e=>new n.aV({map:e,color:new n.Es("#f3eee4"),roughness:.92,emissive:new n.Es("#fff1d6"),emissiveMap:e,emissiveIntensity:.05,side:n.Vs});return{left:e(i.left),right:e(i.right),turning:e(i.right),edge:new n.aV({color:I.o.bibleEdge,roughness:.32,metalness:.8}),cover:new n.Ox({color:I.o.bibleCover,roughness:.55,clearcoat:.35,clearcoatRoughness:.5}),ribbon:new n.aV({color:I.o.ribbon,roughness:.5})}},[i]),l=(0,r.useMemo)(()=>{let e=new n.CQ(.78,1.06,24,1);return e.rotateX(-Math.PI/2),e.translate(.39,0,0),{left:k(-1),right:k(1),leftEdge:N(-1),rightEdge:N(1),turning:e,rest:Float32Array.from(e.attributes.position.array)}},[]);(0,r.useEffect)(()=>()=>{Object.values(i).forEach(e=>e.dispose()),Object.values(a).forEach(e=>e.dispose()),[l.left,l.right,l.leftEdge,l.rightEdge,l.turning].forEach(e=>e.dispose())},[i,a,l]);let c=(0,r.useRef)(null);return(0,o.f)(()=>{let t=s.current;a.left.emissiveIntensity=a.right.emissiveIntensity=a.turning.emissiveIntensity=.02+.07*t;let r=e.t%7.5,o=c.current;if(!o)return;let i=r<2.8&&t>.2;if(o.visible=i,!i)return;let n=r/2.8,u=Math.PI*(n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2),h=l.turning.attributes.position,d=l.rest;for(let e=0;e<h.count;e++){let t=d[3*e],r=d[3*e+2],s=Math.max(1,Math.round(t/.78*24)),o=0,i=0,a=t/s;for(let e=0;e<s;e++){let t=u-.55*Math.sin(u)*((e+.5)*a/.78);o+=Math.cos(t)*a,i+=Math.sin(t)*a}h.setXYZ(e,o,i,r)}h.needsUpdate=!0,l.turning.computeVertexNormals()}),(0,t.jsxs)("group",{children:[(0,t.jsx)("mesh",{position:[-.43,.012,0],rotation:[0,0,.03],material:a.cover,castShadow:!0,receiveShadow:!0,children:(0,t.jsx)("boxGeometry",{args:[.87,.024,1.15]})}),(0,t.jsx)("mesh",{position:[.43,.012,0],rotation:[0,0,-.03],material:a.cover,castShadow:!0,receiveShadow:!0,children:(0,t.jsx)("boxGeometry",{args:[.87,.024,1.15]})}),(0,t.jsx)("mesh",{position:[-.405,.05,0],material:a.edge,castShadow:!0,children:(0,t.jsx)("boxGeometry",{args:[.78,.05,1.06]})}),(0,t.jsx)("mesh",{position:[.405,.05,0],material:a.edge,castShadow:!0,children:(0,t.jsx)("boxGeometry",{args:[.78,.05,1.06]})}),(0,t.jsx)("mesh",{geometry:l.left,position:[-.405,.075,0],material:a.left,receiveShadow:!0}),(0,t.jsx)("mesh",{geometry:l.right,position:[.405,.075,0],material:a.right,receiveShadow:!0}),(0,t.jsx)("mesh",{geometry:l.leftEdge,position:[-.405,.075,.5305],material:a.edge}),(0,t.jsx)("mesh",{geometry:l.rightEdge,position:[.405,.075,.5305],material:a.edge}),(0,t.jsx)("mesh",{ref:c,geometry:l.turning,position:[.015,.14,0],material:a.turning,visible:!1}),(0,t.jsx)("mesh",{position:[.07,.137,.33],rotation:[0,.1,0],material:a.ribbon,children:(0,t.jsx)("boxGeometry",{args:[.045,.004,.42]})}),(0,t.jsx)("mesh",{position:[.094,.07,.565],rotation:[-1.2,.1,0],material:a.ribbon,children:(0,t.jsx)("boxGeometry",{args:[.045,.004,.15]})}),(0,t.jsx)("mesh",{position:[.105,.003,.68],rotation:[0,.16,0],material:a.ribbon,children:(0,t.jsx)("boxGeometry",{args:[.045,.004,.2]})})]})}var O=e.i(72071);let L=[[[-.66,-.52],[-.42,-.78]],[[.68,-.5],[.42,-.78]],[[-.68,-.52],[-.42,-.78]]],q=[{color:"#FFF5E3",intensity:.22,offset:new n.cE(0,.85*G.l.y,0)},{color:I.o.flame,intensity:.12,offset:null},{color:"#FFE3B0",intensity:.2,offset:new n.cE(.18,-(.7*G.l.y),-.18)}],Q=new n.cE(0,.05,0);function H({journey:e,stones:s,chamberIdx:a,limestone:l}){let{size:c}=(0,i.f)(),u=(0,r.useRef)([]),h=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useMemo)(()=>(0,B.P)(),[]),p=(0,r.useMemo)(()=>({stone:new n.aV({color:I.o.stone,map:l,roughness:.85}),sheet:new n.aV({map:f,roughness:.9,side:n.Vs}),wood:new n.aV({color:"#B89A6A",roughness:.6,metalness:.1}),gold:new n.aV({color:I.o.joint,roughness:.28,metalness:.9}),clay:new n.aV({color:I.o.clay,roughness:.82}),flame:new n.p$({color:new n.Es(I.o.flame).multiplyScalar(1.6)}),leaf:new n.aV({color:I.o.leaf,roughness:.6,side:n.Vs}),leafLight:new n.aV({color:I.o.leafLight,roughness:.6,side:n.Vs})}),[l,f]),m=(0,r.useMemo)(()=>{let e,t,r=new n.$7([new n.cE(0,.012,0),new n.cE(.004,.045,.002),new n.cE(-.002,.075,-.002),new n.cE(.003,.098,.001)]);return{stem:new n.Dn(r,24,.0022,6,!1),leaf:((e=new n.Ow).moveTo(0,0),e.bezierCurveTo(.008,.008,.012,.024,0,.036),e.bezierCurveTo(-.012,.024,-.008,.008,0,0),(t=new n.pY(e,8)).rotateX(-.35),t)}},[]);(0,r.useEffect)(()=>()=>{f.dispose(),Object.values(p).forEach(e=>e.dispose()),Object.values(m).forEach(e=>e.dispose())},[f,p,m]);let v=(0,r.useMemo)(()=>{let e=c.width/Math.max(1,c.height),t=e<.9,r=new n.zm((t?50:38)+18,e,.01,10),o=new n.zx;return a.map((e,i)=>{let a=s[e],l=(0,O.C)(i);r.position.copy(l.pos),r.lookAt(l.target),r.updateMatrixWorld(),r.updateProjectionMatrix();let[c,u]=L[i][+!!t];o.setFromCamera(new n.wq(c,u),r);let h=a.y-G.l.y,d=o.ray.origin,f=o.ray.direction,p=f.y<-1e-4?(h-d.y)/f.y:.4,m=d.clone().addScaledVector(f,p);m.x=n.rB.clamp(m.x,a.x-G.l.x+.085,a.x+G.l.x-.085),m.z=n.rB.clamp(m.z,a.z-G.l.z+.085,a.z+G.l.z-.085),m.y=h;let v=Math.atan2(l.pos.x-m.x,l.pos.z-m.z);return{pos:m,yaw:v,center:new n.cE(a.x,a.y,a.z)}})},[c.width,c.height,s,a]),g=(0,r.useMemo)(()=>new n.cE,[]);(0,o.f)(t=>{let r=e.assemble>.995;u.current.forEach((e,t)=>{e&&(e.visible=r,e.position.copy(v[t].pos),e.rotation.set(0,v[t].yaw,0))});let s=t.clock.elapsedTime,o=1+.05*Math.sin(11.3*s)+.07*Math.sin(4.1*s+1.2);d.current&&(d.current.scale.set(1,2.1*o,1),d.current.getWorldPosition(g));let i=h.current;if(!i)return;let a=0;for(let t=1;t<3;t++)e.chamber[t]>e.chamber[a]&&(a=t);let l=r?e.chamber[a]:0,n=q[a];n.offset?i.position.copy(v[a].center).add(n.offset):i.position.copy(g).add(Q),i.color.set(n.color),i.intensity=n.intensity*l*(1===a?o:1)});let x=e=>t=>{u.current[e]=t};return(0,t.jsxs)("group",{children:[(0,t.jsx)("pointLight",{ref:h,intensity:0,distance:.95,decay:2}),(0,t.jsxs)("group",{ref:x(0),visible:!1,scale:.8,children:[(0,t.jsx)("mesh",{receiveShadow:!0,position:[0,.016,0],material:p.stone,children:(0,t.jsx)("boxGeometry",{args:[.16,.032,.11]})}),(0,t.jsx)("mesh",{receiveShadow:!0,position:[0,.0335,.004],rotation:[-Math.PI/2+.08,0,0],material:p.sheet,children:(0,t.jsx)("planeGeometry",{args:[.104,.076]})}),[-1,1].map(e=>(0,t.jsxs)("group",{position:[.058*e,.041,0],children:[(0,t.jsx)("mesh",{receiveShadow:!0,rotation:[Math.PI/2,0,0],material:p.wood,children:(0,t.jsx)("cylinderGeometry",{args:[.0085,.0085,.094,16]})}),[-1,1].map(e=>(0,t.jsx)("mesh",{receiveShadow:!0,position:[0,0,.05*e],rotation:[Math.PI/2,0,0],material:p.gold,children:(0,t.jsx)("cylinderGeometry",{args:[.011,.011,.006,16]})},e))]},e))]}),(0,t.jsxs)("group",{ref:x(1),visible:!1,children:[(0,t.jsx)("mesh",{receiveShadow:!0,position:[0,.015,0],material:p.stone,children:(0,t.jsx)("boxGeometry",{args:[.1,.03,.08]})}),(0,t.jsx)("mesh",{receiveShadow:!0,position:[0,.043,0],scale:[1.25,.55,1],material:p.clay,children:(0,t.jsx)("sphereGeometry",{args:[.024,24,16]})}),(0,t.jsx)("mesh",{receiveShadow:!0,position:[.03,.046,0],rotation:[0,0,-Math.PI/2],material:p.clay,children:(0,t.jsx)("cylinderGeometry",{args:[.0055,.0095,.03,12]})}),(0,t.jsx)("mesh",{receiveShadow:!0,position:[-.006,.055,0],material:p.clay,children:(0,t.jsx)("torusGeometry",{args:[.008,.0022,8,20]})}),(0,t.jsx)("mesh",{ref:d,position:[.046,.058,0],material:p.flame,children:(0,t.jsx)("sphereGeometry",{args:[.0062,12,10]})})]}),(0,t.jsxs)("group",{ref:x(2),visible:!1,children:[[-1,1].map(e=>(0,t.jsx)("mesh",{receiveShadow:!0,position:[.029*e,.015,0],rotation:[0,.12*e,-.22*e],material:p.stone,children:(0,t.jsx)("boxGeometry",{args:[.05,.03,.066]})},e)),(0,t.jsx)("mesh",{receiveShadow:!0,geometry:m.stem,material:p.leaf}),[[.032,.2,.9],[.046,2.6,.75],[.06,-.9,.85],[.074,1.9,.7],[.088,-2.4,.6],[.098,.6,.55]].map(([e,r,s],o)=>(0,t.jsx)("mesh",{receiveShadow:!0,geometry:m.leaf,position:[0,e,0],rotation:[0,r,0],scale:s,material:o%2?p.leafLight:p.leaf},o))]})]})}var J=e.i(8115),W=e.i(77018);let Z=e=>Math.min(1,Math.max(0,e)),K=(e,t,r)=>{let s=Z((r-e)/(t-e));return s*s*(3-2*s)},X=e=>1-Math.pow(1-e,3),Y=(e,t=.9)=>1+(t+1)*Math.pow(e-1,3)+t*Math.pow(e-1,2),$=new n.cE(.3,G.D,.02),ee=new n.cE((G.r.w-G.r.gap)/2,(G.r.h-G.r.gap)/2,(G.r.d-G.r.gap)/2),et=G.D+.13;function er(e,t){return e.onBeforeCompile=e=>{e.uniforms.uHalf={value:ee},e.uniforms.uJoint={value:t.joint},e.uniforms.uGlowColor={value:t.glow},e.uniforms.uBand={value:t.band},t.jointGlow&&(e.uniforms.uJointGlow=t.jointGlow),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;
${t.instanced?"attribute float aGlow;\nvarying float vGlow;":""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal = position;
${t.instanced?"vGlow = aGlow;":""}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uHalf;
uniform vec3 uJoint;
uniform vec3 uGlowColor;
uniform float uBand;
${t.instanced?"varying float vGlow;":"uniform float uJointGlow;"}
varying vec3 vLocal;
// distance to the nearest edge of the box: the middle one of the three face distances
float bhJointBand() {
  vec3 q = uHalf - abs(vLocal);
  float lo = min(q.x, min(q.y, q.z));
  float hi = max(q.x, max(q.y, q.z));
  float mid = q.x + q.y + q.z - lo - hi;
  return 1.0 - smoothstep(uBand * 0.5, uBand, mid);
}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
float bhJoint = bhJointBand();
diffuseColor.rgb = mix(diffuseColor.rgb, uJoint, bhJoint);
metalnessFactor = mix(metalnessFactor, 0.7, bhJoint);
roughnessFactor = mix(roughnessFactor, 0.32, bhJoint);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${t.instanced?"totalEmissiveRadiance += uGlowColor * vGlow * (0.08 + 0.92 * bhJoint);":"totalEmissiveRadiance += uGlowColor * uJointGlow * bhJoint;"}`)},e.customProgramCacheKey=()=>`bh-joints-${t.instanced?"i":"s"}`,e}function es({journey:e,quality:s,bibleGlow:a}){let{camera:l,clock:c,size:u}=(0,i.f)(),h=(0,r.useMemo)(()=>(0,G.c)(),[]),d=(0,r.useMemo)(()=>h.filter(e=>"corner"!==e.kind),[h]),f=(0,r.useMemo)(()=>h.find(e=>"corner"===e.kind),[h]),p=(0,r.useMemo)(()=>G.I.map(e=>d.findIndex(t=>t.course===e.course&&t.ix===e.ix&&t.iz===e.iz)),[d]),m=(0,r.useMemo)(()=>({limestone:(0,B.E)(),engrave:(0,B.r)("1 COR 3:11"),walls:[0,1,2].map(e=>(0,B.C)(e)),ceilings:[0,1,2].map(e=>(0,B.H)(e)),floor:(0,B.O)()}),[]),v=(0,r.useMemo)(()=>{let e=new z(G.r.w-G.r.gap,G.r.h-G.r.gap,G.r.d-G.r.gap,"high"===s?3:2,.03);return e.setAttribute("aGlow",new n.VZ(new Float32Array(d.length),1)),e},[s,d.length]),g=(0,r.useMemo)(()=>new z(G.r.w-G.r.gap,G.r.h-G.r.gap,G.r.d-G.r.gap,"high"===s?3:2,.03),[s]),x=(0,r.useMemo)(()=>({value:.3}),[]),b=(0,r.useMemo)(()=>{let e=er(new n.aV({color:"#ffffff",map:m.limestone,bumpMap:"high"===s?m.limestone:null,bumpScale:.5,roughness:.84,metalness:0}),{instanced:!0,joint:new n.Es(I.o.joint),glow:new n.Es(I.o.cornerGlow).multiplyScalar(.9),band:.024}),t=er(new n.Ox({color:I.o.cornerstone,roughness:.3,metalness:.55,clearcoat:.6,clearcoatRoughness:.2,emissive:new n.Es(I.o.cornerstone),emissiveIntensity:.15}),{instanced:!1,joint:new n.Es(I.o.cornerGlow),glow:new n.Es(I.o.cornerGlow),band:.03,jointGlow:x}),r=e=>new n.p$({map:e,side:n.tw});return{stone:e,corner:t,engrave:new n.aV({map:m.engrave,transparent:!0,depthWrite:!1,roughness:.3,metalness:.4,emissive:new n.Es(I.o.cornerGlow),emissiveMap:m.engrave,emissiveIntensity:.6,polygonOffset:!0,polygonOffsetFactor:-2}),shells:G.I.map((e,t)=>{let s=r(m.walls[t]);return[s,s,r(m.ceilings[t]),r(m.floor),s,s]}),line:new n.NQ({color:I.o.joint,transparent:!0,opacity:1,depthWrite:!1}),bob:new n.aV({color:I.o.joint,roughness:.38,metalness:.45,transparent:!0}),ground:new n.aV({color:I.o.ground,roughness:1,metalness:0})}},[s,m,x]),w=(0,r.useMemo)(()=>{let e=new n.ld().setFromPoints([new n.cE(0,et+.1,0),new n.cE(0,9.5,0)]),t=new n.DL(e,b.line);return t.position.set(G.w.x,0,G.w.z),t.frustumCulled=!1,t},[b.line]);(0,r.useEffect)(()=>()=>{m.limestone.dispose(),m.engrave.dispose(),m.walls.forEach(e=>e.dispose()),m.ceilings.forEach(e=>e.dispose()),m.floor.dispose(),b.stone.dispose(),b.corner.dispose(),b.engrave.dispose(),b.shells.forEach(e=>new Set(e).forEach(e=>e.dispose())),b.line.dispose(),b.bob.dispose(),b.ground.dispose(),w.geometry.dispose(),v.dispose(),g.dispose()},[m,b,v,g,w]);let M=(0,r.useMemo)(()=>d.map(e=>{let t=(0,G.E)(13*e.id+7),r=t()*Math.PI*2,s=4+7*t();return{target:new n.cE(e.x,e.y,e.z),start:new n.cE(Math.cos(r)*s,.8+7*t(),Math.sin(r)*s*.8),rot:new n.FS((t()-.5)*3,(t()-.5)*3,(t()-.5)*3),spin:(t()-.5)*.4,phase:t()*Math.PI*2,scale:.12+.14*t(),t0:.06+.16*e.course+.12*t(),dur:.26}}),[d]),y=(0,r.useMemo)(()=>({t0:.8,dur:.17,start:new n.cE(3.2,4.6,2.2)}),[]),C=(0,r.useRef)(null),T=(0,r.useRef)([]),E=(0,r.useRef)(null),_=(0,r.useRef)(null),S=(0,r.useRef)(null),D=(0,r.useRef)(null),P=(0,r.useRef)(null),j=(0,r.useRef)(null),U=(0,r.useRef)(null),R=(0,r.useMemo)(()=>({obj:new n.t,v:new n.cE,ndc:new n.cE,pts:Array.from({length:7},()=>new n.wq),lastCornerLocal:0,lineOpacity:0,lineCheck:0,lineBlocked:!1,shadowWide:!0}),[]);(0,r.useEffect)(()=>{let e=C.current;if(!e)return;e.instanceMatrix.setUsage(n.DT);let t=[I.o.stone,I.o.stoneCool,I.o.stoneWarm].map(e=>new n.Es(e)),r=new n.Es;d.forEach((s,o)=>{let i=(0,G.E)(s.id+31);r.copy(t[Math.floor(i()*t.length)]).multiplyScalar(.97+.05*i()),e.setColorAt(o,r)}),e.instanceColor&&(e.instanceColor.needsUpdate=!0)},[d]),(0,o.f)((t,r)=>{let s=Math.min(r,.05),o=e.assemble,i=e.t,n=C.current;if(!n)return;let{obj:h,v:m,ndc:g}=R,A=v.getAttribute("aGlow"),z=A.array,B=W.E.pointer.active&&o>.98&&e.verse<.5,I=u.width/Math.max(1,u.height);for(let t=0;t<d.length;t++){let r=M[t],s=(o-r.t0)/r.dur,a=Z(s);if(a<=0)h.position.copy(r.start),h.position.y+=.25*Math.sin(.5*i+r.phase),h.rotation.set(r.rot.x+i*r.spin,r.rot.y+i*r.spin*.7,r.rot.z),h.scale.setScalar(r.scale);else{let e=Y(a);h.position.copy(r.start).lerp(r.target,e);let t=1-X(a);h.rotation.set(r.rot.x*t,r.rot.y*t,r.rot.z*t),h.scale.setScalar(r.scale+(1-r.scale)*X(Math.min(1,1.3*a)))}h.updateMatrix(),n.setMatrixAt(t,h.matrix);let c=a<=0?.35:1.1*(1-K(1,1.35,s)),u=p.indexOf(t);if(B){g.copy(h.position).project(l);let e=(g.x-W.E.pointer.x)*I,t=g.y-W.E.pointer.y;c+=.55*Math.max(0,1-Math.sqrt(e*e+t*t)/.22)}if(z[t]=c*(1-.7*e.verse),u>=0){let e=T.current[u];e&&(e.position.copy(h.position),e.rotation.copy(h.rotation),e.scale.copy(h.scale))}}n.instanceMatrix.needsUpdate=!0,A.needsUpdate=!0;let F=Z((o-y.t0)/y.dur),k=E.current;if(k)if(F<=0)k.position.copy(y.start),k.position.y+=.2*Math.sin(.6*i),k.rotation.set(.3,.6+.08*i,-.2),k.scale.setScalar(.5);else{let e=Y(F,.6);k.position.copy(y.start).lerp(m.set(f.x,f.y,f.z),e);let t=1-X(F);k.rotation.set(.3*t,.6*t,-.2*t),k.scale.setScalar(.5+.5*X(F))}R.lastCornerLocal<1&&F>=1&&(e.settledAt=c.elapsedTime,(0,J.n)()),R.lastCornerLocal=F;let N=e.settledAt>=0?Math.exp(-(1.4*(c.elapsedTime-e.settledAt))):0,V=e.corner;x.value=.3+.9*V+1.2*N,b.corner.emissiveIntensity=.08+.1*V+.2*N,b.engrave.emissiveIntensity=.35+.65*V+.8*N,S.current&&(S.current.intensity=.2+.45*V+.6*N);let O=Z((o-.9)/.1);_.current&&(_.current.visible=O>0,_.current.position.set($.x,$.y+(1-X(O))*2.2,$.z)),a.current=K(.4,1,O)*(1-.8*e.corner)*(1-.5*e.verse);let L=W.E.tune;if(P.current&&(P.current.intensity=L?.hemi??.75),j.current&&(j.current.intensity=L?.fill??.35),D.current){D.current.intensity=(L?.key??1.75)*(1-.25*e.verse);let t=o<.995;if(t!==R.shadowWide){R.shadowWide=t;let e=D.current.shadow.camera,r=t?13:5.2;e.left=-r,e.right=r,e.top=r,e.bottom=-r,e.updateProjectionMatrix()}}R.lineCheck-=1,R.lineCheck<=0&&(R.lineCheck=3,R.lineBlocked=(()=>{let e=W.E.clearRects;if(!e.length)return!1;let{v:t,pts:r}=R,s=u.width,o=u.height,i=0;for(let e=0;e<r.length;e++){let a=et+(9.5-et)*e/(r.length-1);t.set(G.w.x,a,G.w.z).project(l),t.z>1||t.z<-1||r[i++].set((t.x+1)/2*s,(1-t.y)/2*o)}for(let t=0;t<i;t++){let s=r[t],o=r[Math.min(i-1,t+1)];for(let t of e){let e=t.left-20,r=t.right+20,i=t.top-20,a=t.bottom+20,l=Math.max(1,Math.ceil(Math.hypot(o.x-s.x,o.y-s.y)/24));for(let t=0;t<=l;t++){let n=t/l,c=s.x+(o.x-s.x)*n,u=s.y+(o.y-s.y)*n;if(c>=e&&c<=r&&u>=i&&u<=a)return!0}}}return!1})());let q=Math.max(e.chamber[0],e.chamber[1],e.chamber[2]),Q=R.lineBlocked?0:(1-e.verse)*(1-q)*(1-e.prayer)*(1-e.veil);R.lineOpacity+=(Q-R.lineOpacity)*(1-Math.exp(-(7*s))),b.line.opacity=R.lineOpacity,b.bob.opacity=R.lineOpacity,w.visible=R.lineOpacity>.01,U.current&&(U.current.visible=w.visible&&o>.9)});let A="high"===s?2048:1024;return(0,t.jsxs)("group",{children:[(0,t.jsx)("hemisphereLight",{ref:P,args:[I.o.ambientSky,I.o.ambientGround,.75]}),(0,t.jsx)("directionalLight",{ref:D,position:[-7,7.5,6.5],intensity:1.75,color:I.o.keyLight,castShadow:!0,"shadow-mapSize":[A,A],"shadow-camera-near":1,"shadow-camera-far":34,"shadow-camera-left":-13,"shadow-camera-right":13,"shadow-camera-top":13,"shadow-camera-bottom":-13,"shadow-bias":-4e-4,"shadow-normalBias":.025}),(0,t.jsx)("directionalLight",{ref:j,position:[6,3,-6],intensity:.35,color:I.o.fill}),(0,t.jsx)("instancedMesh",{ref:C,args:[v,b.stone,d.length],frustumCulled:!1,castShadow:!0,receiveShadow:!0}),G.I.map((e,r)=>(0,t.jsx)("mesh",{ref:e=>{T.current[r]=e},material:b.shells[r],children:(0,t.jsx)("boxGeometry",{args:[2*G.l.x,2*G.l.y,2*G.l.z]})},r)),(0,t.jsx)(H,{journey:e,stones:d,chamberIdx:p,limestone:m.limestone}),(0,t.jsxs)("group",{ref:E,children:[(0,t.jsx)("mesh",{geometry:g,material:b.corner,castShadow:!0,receiveShadow:!0}),(0,t.jsx)("mesh",{position:[0,-.005,G.r.d/2-G.r.gap/2+.003],material:b.engrave,children:(0,t.jsx)("planeGeometry",{args:[.84,.315]})})]}),(0,t.jsx)("pointLight",{ref:S,position:[f.x+.15,f.y+.95,f.front+.85],color:I.o.cornerGlow,intensity:.25,distance:4,decay:2}),(0,t.jsx)("group",{ref:_,visible:!1,rotation:[0,.16,0],scale:1.22,children:(0,t.jsx)(V,{journey:e,glow:a})}),(0,t.jsx)("primitive",{object:w}),(0,t.jsxs)("group",{ref:U,position:[G.w.x,0,G.w.z],visible:!1,children:[(0,t.jsx)("mesh",{position:[0,et,0],rotation:[Math.PI,0,0],material:b.bob,children:(0,t.jsx)("coneGeometry",{args:[.05,.16,24]})}),(0,t.jsx)("mesh",{position:[0,et+.09,0],material:b.bob,children:(0,t.jsx)("cylinderGeometry",{args:[.018,.05,.02,24]})})]}),(0,t.jsx)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.002,0],material:b.ground,receiveShadow:!0,children:(0,t.jsx)("circleGeometry",{args:[80,64]})})]})}let eo=e=>Math.min(1,Math.max(0,e));function ei({journey:e,quality:s}){let i="high"===s?1100:500,a=(0,r.useMemo)(()=>new n.R6(1,0),[]),l=(0,r.useMemo)(()=>new n.aV({color:I.J.gold,emissive:new n.Es(I.J.goldHover),emissiveIntensity:.25,metalness:.75,roughness:.3,flatShading:!0}),[]);(0,r.useEffect)(()=>()=>{a.dispose(),l.dispose()},[a,l]);let c=(0,r.useMemo)(()=>{let e=(0,G.c)(),t=(0,G.E)(4242);return Array.from({length:i},()=>{let r=.3>t(),s=t()*Math.PI*2,o=2.5+13*Math.pow(t(),.7),i=new n.cE(Math.cos(s)*o,-.2+10*t(),Math.sin(s)*o*.85),a=e[Math.floor(t()*e.length)],l=Math.floor(3*t());return{ambient:r,home:i,target:new n.cE(a.x+(0===l?(.5>t()?-1:1)*G.r.w*.48:(t()-.5)*G.r.w),a.y+(1===l?.48*G.r.h:(t()-.5)*G.r.h),a.z+(2===l?.48*G.r.d:(t()-.5)*G.r.d)),size:.008+.05*Math.pow(t(),3),c0:.02+.7*t(),f:.15+.35*t(),phase:t()*Math.PI*2,amp:.15+.5*t(),spin:new n.cE(t()-.5,t()-.5,t()-.5).multiplyScalar(2),rise:t()}})},[i]),u=(0,r.useRef)(null),h=(0,r.useMemo)(()=>new n.t,[]);return(0,r.useEffect)(()=>{u.current?.instanceMatrix.setUsage(n.DT)},[]),(0,o.f)(()=>{let t=u.current;if(!t)return;let{assemble:r,t:s,prayer:o}=e;for(let e=0;e<c.length;e++){let i=c[e],a=s*i.f+i.phase;h.position.set(i.home.x+Math.sin(a)*i.amp,i.home.y+Math.sin(.7*a)*i.amp*.6,i.home.z+Math.cos(a)*i.amp);let l=i.size;if(i.ambient){if(o>0){let e=(.12*s+i.rise)%1*9-2;h.position.y=h.position.y*(1-o)+(.3*i.home.y+e)*o}}else{let e=eo((r-i.c0)/.3),t=e*e*e;h.position.lerp(i.target,t),l*=1-t}h.rotation.set(i.spin.x*s,i.spin.y*s,i.spin.z*s),h.scale.setScalar(Math.max(l,1e-5)),h.updateMatrix(),t.setMatrixAt(e,h.matrix)}t.instanceMatrix.needsUpdate=!0,l.emissiveIntensity=.25*(1-.6*e.verse)}),(0,t.jsx)("instancedMesh",{ref:u,args:[a,l,i],frustumCulled:!1})}let ea=new n.cE((G.r.w-G.r.gap)/2,(G.r.h-G.r.gap)/2,(G.r.d-G.r.gap)/2),el=new n.cE(G.l.x,G.l.y,G.l.z),en=(0,G.c)().map(e=>({c:new n.cE(e.x,e.y,e.z),hollow:G.I.some(t=>t.course===e.course&&t.ix===e.ix&&t.iz===e.iz)})),ec=new n.cE;function eu(e,t,r){return ec.set(Math.abs(e.x-t.x)-r.x,Math.abs(e.y-t.y)-r.y,Math.abs(e.z-t.z)-r.z),Math.hypot(Math.max(ec.x,0),Math.max(ec.y,0),Math.max(ec.z,0))+Math.min(Math.max(ec.x,ec.y,ec.z),0)}let eh=e=>Math.min(1,Math.max(0,e));function ed(){let{gl:e,scene:t}=(0,i.f)();return(0,r.useEffect)(()=>{let r=new c.c(e),s=r.fromScene(new h,.04).texture;return t.environment=s,t.environmentIntensity=.25,()=>{t.environment=null,s.dispose(),r.dispose()}},[e,t]),null}function ef({journey:e}){let{gl:t}=(0,i.f)(),s=(0,r.useRef)(-1),a=(0,r.useRef)(0);return(0,r.useEffect)(()=>(t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,()=>{t.shadowMap.autoUpdate=!0}),[t]),(0,o.f)(()=>{a.current++;let r=e.assemble;(r<1||r!==s.current||a.current<8)&&(t.shadowMap.needsUpdate=!0),s.current=r}),null}function ep({journey:e,fx:t}){let{camera:s,size:a,clock:l}=(0,i.f)(),c=(0,r.useMemo)(()=>(0,O.V)(),[]),u=(0,r.useRef)({init:!1,pos:new n.cE,target:new n.cE,last:new n.cE,px:0,py:0,transit:0,frames:0});return(0,o.f)((r,o)=>{let i,n=u.current,h=Math.min(o,.05),d=a.width/Math.max(1,a.height),f=window.scrollY,p=c(f,d);e.assemble=eh((f-W.E.assembleFrom)/Math.max(1,W.E.assembleTo-W.E.assembleFrom));let m=1-Math.exp(-(4*h));e.verse+=(p.verse-e.verse)*m,e.corner+=(p.corner-e.corner)*m,e.prayer+=(p.prayer-e.prayer)*m;for(let t=0;t<3;t++)e.chamber[t]+=(p.chamber[t]-e.chamber[t])*m;W.E.verse=e.verse;let v=Math.max(.75*e.verse,e.corner);e.t+=h*(1-.92*v);let g=1-Math.exp(-(5.5*h));n.init?(n.pos.lerp(p.pos,g),n.target.lerp(p.target,g)):(n.pos.copy(p.pos),n.target.copy(p.target),n.last.copy(p.pos),n.init=!0);let x=n.pos.distanceTo(n.last)/Math.max(h,.001);n.last.copy(n.pos),e.speed+=(x-e.speed)*(1-Math.exp(-(8*h)));let b=W.E.pointer.active?W.E.pointer:{x:0,y:0};n.px+=(b.x-n.px)*(1-Math.exp(-(2.5*h))),n.py+=(b.y-n.py)*(1-Math.exp(-(2.5*h)));let w=Math.max(e.chamber[0],e.chamber[1],e.chamber[2]),M=(1-v)*(1-w)*.35;if(s.position.copy(n.pos),d<.9&&w>0&&s.position.sub(n.target).multiplyScalar(1+.25*w).add(n.target),s.position.x+=n.px*M,s.position.y+=n.py*M*.6,e.settledAt>=0){let t=l.elapsedTime-e.settledAt;if(t<.8){let e=.035*Math.exp(-(6*t));s.position.x+=Math.sin(73*t)*e,s.position.y+=Math.sin(91*t+1.3)*e}}s.lookAt(n.target);let y=(d<.9?50:38)+18*w;Math.abs(s.fov-y)>.01&&(s.fov+=(y-s.fov)*m,s.updateProjectionMatrix());let C=1-(i=eh((function(e){let t=e.y;for(let r of en){let s=eu(e,r.c,ea);r.hollow&&(s=Math.max(s,-eu(e,r.c,el))),s<t&&(t=s)}return t}(s.position)-0)/.075))*i*(3-2*i);n.transit=Math.max(p.transit,n.transit*Math.exp(-(2.6*h)));let T=Math.max(C,n.transit);e.veil+=(T-e.veil)*(1-Math.exp(-h*(T>e.veil?22:9)));let E=t.current;E.bloom=.36*(1-.5*e.verse)+.1*e.corner,E.ca=W.E.scriptureVisible>0?0:Math.min(.008,.0025*Math.max(0,e.speed-.6))*(1-e.veil),E.bokeh=w*(1-e.veil),E.focus.copy(n.target),E.veil=Math.max(e.veil,.14*w),n.frames++,2===n.frames&&(0,W.y)(.92),6===n.frames&&(0,W.j)()}),null}let em={uniforms:{tDiffuse:{value:null},uTime:{value:0},uCA:{value:0},uGrain:{value:.012},uVeil:{value:0},uVeilColor:{value:new n.Es(I.o.sky).convertLinearToSRGB()},uResolution:{value:new n.wq(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uCA, uGrain, uVeil;
    uniform vec3 uVeilColor;
    uniform vec2 uResolution;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5;
      float r = length(d);
      vec2 off = d * uCA * (0.35 + r * 2.2);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      col += (hash(vUv * uResolution + fract(uTime * 7.0) * 113.0) - 0.5) * uGrain * (1.0 - uVeil);
      col = mix(col, uVeilColor, uVeil);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `};function ev({quality:e,fx:t,lite:s}){let{gl:a,scene:l,camera:c,size:u,viewport:h}=(0,i.f)(),d=(0,r.useMemo)(()=>{let t=new C(a,new n.qL(1,1,{type:n.HN,samples:4*("high"===e)}));t.addPass(new T(l,c));let r="high"!==e||s?null:new D(l,c,{focus:1,aperture:.004,maxblur:0});r&&(r.enabled=!1,t.addPass(r));let o=new _(new n.wq(256,256),.5,.32,.975);s||t.addPass(o),t.addPass(new j);let i=new w(em);return t.addPass(i),{composer:t,bokeh:r,bloom:o,finish:i}},[a,l,c,e,s]);return(0,r.useEffect)(()=>{let{composer:e}=d;e.setPixelRatio(h.dpr),e.setSize(u.width,u.height),d.finish.uniforms.uResolution.value.set(u.width*h.dpr,u.height*h.dpr)},[d,u,h.dpr]),(0,r.useEffect)(()=>()=>d.composer.dispose(),[d]),(0,o.f)((e,r)=>{let s=t.current,{bloom:o,bokeh:i,finish:a,composer:l}=d,n=W.E.tune;if(o.strength=n?.bloom??s.bloom,o.threshold=n?.threshold??.975,o.radius=n?.radius??.32,i){let t=s.bokeh>.02;if(i.enabled=t,t){let t=i.uniforms;t.focus.value=e.camera.position.distanceTo(s.focus),t.maxblur.value=.0022*s.bokeh,t.aperture.value=.006}}a.uniforms.uTime.value=e.clock.elapsedTime,a.uniforms.uCA.value=s.ca,a.uniforms.uVeil.value=s.veil,l.render(r)},1),null}e.s(["default",0,function({active:e,initialQuality:o,dprCap:i}){let[a,c]=(0,r.useState)(o),[u]=(0,r.useState)(()=>window.matchMedia("(max-width: 767px), (pointer: coarse)").matches),h=u?1:i,[d,f]=(0,r.useState)(h),p=(0,r.useMemo)(()=>({assemble:0,verse:0,chamber:[0,0,0],corner:0,prayer:0,veil:0,t:0,settledAt:-1,speed:0}),[]),m=(0,r.useRef)(0),v=(0,r.useRef)({bloom:.5,ca:0,bokeh:0,focus:new n.cE,veil:0});return(0,r.useEffect)(()=>{W.E.quality=a,(0,W.y)(.7)},[a]),(0,t.jsxs)(s.f,{frameloop:e?"always":"never",dpr:[1,d],flat:!0,shadows:"high"===a?"soft":"percentage",camera:{fov:38,near:.1,far:140,position:[10.5,6.6,17.5]},gl:{antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1},style:{position:"absolute",inset:0},"aria-hidden":"true",tabIndex:-1,children:[(0,t.jsx)("color",{attach:"background",args:[I.o.sky]}),(0,t.jsx)("fog",{attach:"fog",args:[I.o.sky,18,52]}),(0,t.jsx)(l,{flipflops:3,onDecline:()=>f(Math.max(1,h-.5)),onIncline:()=>f(h),onFallback:()=>{f(1),c("medium")}}),(0,t.jsx)(ep,{journey:p,fx:v}),(0,t.jsx)(ef,{journey:p}),(0,t.jsx)(ed,{}),!1,(0,t.jsx)(es,{journey:p,quality:a,bibleGlow:m}),(0,t.jsx)(ei,{journey:p,quality:a}),(0,t.jsx)(ev,{quality:a,fx:v,lite:u})]})}],57656)},79694,function(e){e.n(e.i(57656))}]);