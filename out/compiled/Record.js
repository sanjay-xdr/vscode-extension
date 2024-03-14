var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function d(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function s(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function i(t,e){t.value=null==e?"":e}let m;function f(t){m=t}function p(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const v=[],g=[];let h=[];const b=[],$=Promise.resolve();let y=!1;function _(t){h.push(t)}const z=new Set;let E=0;function x(){if(0!==E)return;const t=m;do{try{for(;E<v.length;){const t=v[E];E++,f(t),C(t.$$)}}catch(t){throw v.length=0,E=0,t}for(f(null),v.length=0,E=0;g.length;)g.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];z.has(e)||(z.add(e),e())}h.length=0}while(v.length);for(;b.length;)b.pop()();y=!1,z.clear(),f(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const B=new Set;function w(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];h.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),h=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(v.push(t),y||(y=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(d,u,l,a,s,i,p=null,v=[-1]){const g=m;f(d);const h=d.$$={fragment:null,ctx:[],props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(g?g.$$.context:[])),callbacks:n(),dirty:v,skip_bound:!1,root:u.target||g.$$.root};p&&p(h.root);let b=!1;if(h.ctx=l?l(d,u.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),b&&F(d,t)),e})):[],h.update(),b=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();u.intro&&(($=d.$$.fragment)&&$.i&&(B.delete($),$.i(y))),function(t,n,d){const{fragment:u,after_update:c}=t.$$;u&&u.m(n,d),_((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(_)}(d,u.target,u.anchor),x()}var $,y;f(g)}class I{$$=void 0;$$set=void 0;$destroy(){w(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function j(e){let n,o,r,d,m,f,p,v,g,h,b,$,y,_,z,E,x,C,B,w,F,k,I;return{c(){n=l("body"),o=l("a"),o.textContent="Home",r=a(),d=l("div"),d.innerHTML='<button id="selectRecordFolderButton" class="secondary svelte-16buzzd">Select Project Folder</button> <input type="text" id="recordProjectFolder" name="projectFolder" placeholder="Enter Manual Path" class="svelte-16buzzd"/>',m=a(),f=l("div"),f.innerHTML='<button id="enterAppCommandButton" disabled="true" class="secondary svelte-16buzzd">Enter App Command</button> <input type="text" id="recordCommand" name="recordCommand" placeholder="Enter App Command" class="svelte-16buzzd"/>',p=a(),v=l("div"),g=l("div"),h=l("select"),b=l("option"),b.textContent="Flag 1",$=l("option"),$.textContent="Flag 2",y=a(),_=l("div"),z=l("select"),E=l("option"),E.textContent="True",x=l("option"),x.textContent="False",C=a(),B=l("button"),B.textContent="Start Recording",w=a(),F=l("hr"),k=a(),I=l("div"),I.innerHTML='<div id="upperOutputDiv" class="svelte-16buzzd"><img class="keploylogo svelte-16buzzd" src="https://avatars.githubusercontent.com/u/92252339?s=200&amp;v=4" alt="Keploy Logo"/> <h3>Command</h3></div> <div id="recordCommandDiv"><h1 id="generatedRecordCommand" class="svelte-16buzzd">keploy record -c &quot;&quot;</h1></div> <button id="stopRecordingButton" class="svelte-16buzzd">Stop Recording</button> <h3 id="recordStatus" class="svelte-16buzzd"></h3> <div id="recordedTestCases" class="svelte-16buzzd"></div>',s(o,"id","navigateHomeButton"),s(o,"class","homebutton svelte-16buzzd"),s(d,"id","selectFolderDiv"),s(d,"class","svelte-16buzzd"),s(f,"id","appCommandDiv"),s(f,"class","svelte-16buzzd"),b.__value="manual",i(b,b.__value),$.__value="record",i($,$.__value),s(h,"id","selectflags"),s(h,"class","svelte-16buzzd"),s(g,"id","flags"),E.__value="manual",i(E,E.__value),x.__value="record",i(x,x.__value),s(z,"id","selectflagValue"),s(z,"class","svelte-16buzzd"),s(_,"id","flagValue"),s(v,"id","flagsDiv"),s(v,"class","svelte-16buzzd"),s(B,"id","startRecordingButton"),B.disabled="true",s(B,"class","svelte-16buzzd"),s(F,"class","svelte-16buzzd"),s(I,"id","outputDiv")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),u(n,o),u(n,r),u(n,d),u(n,m),u(n,f),u(n,p),u(n,v),u(v,g),u(g,h),u(h,b),u(h,$),u(v,y),u(v,_),u(_,z),u(z,E),u(z,x),u(n,C),u(n,B),u(n,w),u(n,F),u(n,k),u(n,I)},p:t,i:t,o:t,d(t){t&&c(n)}}}function R(t){return p((()=>{document.getElementById("recordProjectFolder").addEventListener("input",(()=>{document.getElementById("recordProjectFolder").value&&document.getElementById("recordCommand").value&&(document.getElementById("startRecordingButton").disabled=!1)})),document.getElementById("recordCommand").addEventListener("input",(()=>{document.getElementById("recordProjectFolder").value&&document.getElementById("recordCommand").value&&(document.getElementById("startRecordingButton").disabled=!1)})),document.getElementById("recordCommand").addEventListener("input",(()=>{document.getElementById("generatedRecordCommand").innerText=`keploy record -c "${document.getElementById("recordCommand").value}"`}))})),[]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");return new class extends I{constructor(t){super(),k(this,t,R,j,d,{})}}({target:document.body})}();
//# sourceMappingURL=Record.js.map
