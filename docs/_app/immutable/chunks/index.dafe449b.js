var j=Object.defineProperty;var B=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,h as w,i as C,j as S,k as I,l as b,m as L,p as P,q as N,v as T,w as q,x as H}from"./scheduler.cc1c0861.js";let $=!1;function M(){$=!0}function O(){$=!1}function z(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:z(1,l,_=>t[n[_]].claim_order,a))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const u=[],s=[];let c=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);c>=r;c--)s.push(t[c]);c--}for(;c>=0;c--)s.push(t[c]);u.reverse(),s.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<s.length;r++){for(;a<u.length&&s[r].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;e.insertBefore(s[r],o)}}function R(e,t){if($){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,l=!1){G(e);const u=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const c=e[s];if(t(c)){const r=n(c);return r===void 0?e.splice(s,1):e[s]=r,l||(e.claim_info.last_index=s),c}}for(let s=e.claim_info.last_index-1;s>=0;s--){const c=e[s];if(t(c)){const r=n(c);return r===void 0?e.splice(s,1):e[s]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function E(e,t,n,i){return A(e,l=>l.nodeName===t,l=>{const u=[];for(let s=0;s<l.attributes.length;s++){const c=l.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>l.removeAttribute(s))},()=>i(t))}function le(e,t,n){return E(e,t,n,V)}function ce(e,t,n){return E(e,t,n,W)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return J(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function oe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function de(e,t){return new e(t)}const m=new Set;let d;function _e(){d={r:0,c:[],p:d}}function me(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function he(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function $e(e){e&&e.c()}function pe(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const u=e.$$.on_mount.map(T).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),l.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(e,t,n,i,l,u,s=null,c=[-1]){const r=P;N(e);const a=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(f,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&l(a.ctx[f],a.ctx[f]=v)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](v),o&&Y(e,f)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){M();const f=F(t.target);a.fragment&&a.fragment.l(f),f.forEach(U)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),O(),C()}N(r)}class xe{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{ce as A,re as B,xe as S,te as a,me as b,ue as c,K as d,ie as e,U as f,V as g,le as h,ye as i,F as j,ae as k,oe as l,x as m,J as n,fe as o,_e as p,de as q,$e as r,ne as s,he as t,pe as u,Q as v,X as w,R as x,se as y,W as z};
