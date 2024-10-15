(function(){"use strict";var e={8559:function(e,t,n){var l=n(5130),a=n(6768),o=n(6450),i=n(8477);function r(e,t,n,l,r,s){const u=(0,a.g2)("MainPanel");return(0,a.uX)(),(0,a.Wv)(o.E,null,{default:(0,a.k6)((()=>[(0,a.bF)(i.Y,null,{default:(0,a.k6)((()=>[(0,a.bF)(u)])),_:1})])),_:1})}var s=n(4232),u=n(554),c=n(2729),d=n(697),p=n(1606),m=n(3745),f=n(8995),y=n(1772),h=n(7511),k=n(418),b=n(5272),v=n(2162),P=n(2421),_=n(3813),g=n(6756),F=n(5526),C=n(7009),w=n(7254),W=n(7294),O=n(7505),A=n(8119),E=n(6554),x=n(4750),X=n(4366),V=n(8050);const j={class:"text-primary"},L={class:"text-primary"},D={key:0},M={class:"mt-2"},I={class:"ma-2"},S={class:"text-primary"},K={key:0},T={class:"text-primary"},N={key:1},R={class:"text-primary"},U={class:"text-primary"};function $(e,t,n,i,r,$){const B=(0,a.g2)("v-list-item-content");return(0,a.uX)(),(0,a.Wv)(o.E,null,{default:(0,a.k6)((()=>[(0,a.bF)(_.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(g.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(F.B,{cols:"12",sm:"6"},{default:(0,a.k6)((()=>[(0,a.bF)(c.J,{class:"pa-4",elevation:"16"},{default:(0,a.k6)((()=>[(0,a.bF)(x.W,{label:"참가자 이름",modelValue:r.newPerson,"onUpdate:modelValue":t[0]||(t[0]=e=>r.newPerson=e),"hide-details":"auto",onKeyup:(0,l.jR)($.addPerson,["enter"]),placeholder:"ex)홍길동 철수 영희","append-inner-icon":"mdi-plus","onClick:appendInner":$.addPerson},null,8,["modelValue","onKeyup","onClick:appendInner"]),r.people.length>0?((0,a.uX)(),(0,a.Wv)(c.J,{key:0,class:"mx-auto mt-4"},{default:(0,a.k6)((()=>[(0,a.bF)(X.u,{color:"deep-purple-accent-4",density:"compact"},{default:(0,a.k6)((()=>[(0,a.bF)(V.s,null,{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("모임 멤버")]))),_:1}),(0,a.bF)(u.D,{icon:"mdi-close",onClick:$.removeAllPeople},null,8,["onClick"])])),_:1}),(0,a.bF)(d.O,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.people,(e=>((0,a.uX)(),(0,a.Wv)(f.x,{class:"mr-1",key:e,closable:"","onClick:close":()=>$.removePersonByName(e)},{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(e),1)])),_:2},1032,["onClick:close"])))),128))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),_:1})])),_:1})])),_:1}),r.people.length>0?((0,a.uX)(),(0,a.Wv)(g.L,{key:0},{default:(0,a.k6)((()=>[(0,a.bF)(F.B,{cols:"12",sm:"6"},{default:(0,a.k6)((()=>[(0,a.bF)(c.J,{class:"pa-2",elevation:"16"},{default:(0,a.k6)((()=>[(0,a.bF)(y.p,{modelValue:r.isPaymentDialogOpen,"onUpdate:modelValue":t[6]||(t[6]=e=>r.isPaymentDialogOpen=e),"max-width":"500px",persistent:""},{default:(0,a.k6)((()=>[(0,a.bF)(c.J,null,{default:(0,a.k6)((()=>[(0,a.bF)(p.r,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(r.isEditMode?"결제 수정":"결제 추가"),1)])),_:1}),(0,a.bF)(d.O,null,{default:(0,a.k6)((()=>[(0,a.bF)(x.W,{label:"모임 제목(선택)",placeholder:"꼭 입력하지 않아도 됩니다",modelValue:r.newPayment.title,"onUpdate:modelValue":t[1]||(t[1]=e=>r.newPayment.title=e),"prepend-icon":"mdi-account-group"},null,8,["modelValue"]),(0,a.bF)(x.W,{label:"결제 금액(필수)",modelValue:r.newPayment.amount,"onUpdate:modelValue":t[2]||(t[2]=e=>r.newPayment.amount=e),modelModifiers:{number:!0},type:"number",prefix:"₩","prepend-icon":"mdi-cash",rules:[e=>e>0||"금액은 0원이 될 수 없습니다."],ref:"amountSelect"},null,8,["modelValue","rules"]),(0,a.bF)(A.d4,{label:"결제자 선택(필수)",modelValue:r.newPayment.payer,"onUpdate:modelValue":t[3]||(t[3]=e=>r.newPayment.payer=e),items:r.people,"prepend-icon":"mdi-account-cash",rules:[e=>!!e||"결제자를 선택해주세요"],ref:"payerSelect"},null,8,["modelValue","items","rules"]),(0,a.bF)(A.d4,{label:"참가자 선택",modelValue:r.newPayment.selectedPeople,"onUpdate:modelValue":t[4]||(t[4]=e=>r.newPayment.selectedPeople=e),items:r.people,multiple:"",chips:"","prepend-icon":"mdi-account-star"},null,8,["modelValue","items"]),(0,a.bF)(x.W,{label:"시간(선택)",modelValue:r.newPayment.time,"onUpdate:modelValue":t[5]||(t[5]=e=>r.newPayment.time=e),type:"datetime-local","prepend-icon":"mdi-calendar-clock"},null,8,["modelValue"])])),_:1}),(0,a.bF)(m.S,null,{default:(0,a.k6)((()=>[(0,a.bF)(u.D,{onClick:$.closePaymentDialog},{default:(0,a.k6)((()=>t[9]||(t[9]=[(0,a.eW)("취소")]))),_:1},8,["onClick"]),(0,a.bF)(u.D,{color:"primary",onClick:$.validateAndAddPayment},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("입력 완료")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),r.payments.length>0?((0,a.uX)(),(0,a.Wv)(C.x8,{key:0,class:"ma-1"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.payments,((e,n)=>((0,a.uX)(),(0,a.Wv)(w.g,{key:n,onClick:e=>$.editPayment(n)},{append:(0,a.k6)((()=>[(0,a.bF)(u.D,{color:"grey-lighten-1",icon:"mdi-close",variant:"text",onClick:e=>$.removePayment(n)},null,8,["onClick"])])),default:(0,a.k6)((()=>[n>0?((0,a.uX)(),(0,a.Wv)(h.G,{key:0})):(0,a.Q3)("",!0),(0,a.bF)(W.U,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(e.title)+" ",1),(0,a.Lk)("small",null,[t[11]||(t[11]=(0,a.eW)("(금액: ")),(0,a.Lk)("span",j,(0,s.v_)(e.amount),1),t[12]||(t[12]=(0,a.eW)(" 원)"))])])),_:2},1024),(0,a.bF)(B,null,{default:(0,a.k6)((()=>[(0,a.bF)(O.w,null,{default:(0,a.k6)((()=>[t[13]||(t[13]=(0,a.eW)(" 결제: ")),(0,a.Lk)("span",L,(0,s.v_)(e.payer),1),t[14]||(t[14]=(0,a.eW)(") ")),e.selectedPeople.length>1?((0,a.uX)(),(0,a.CE)("span",D,"외에 참석자 "+(0,s.v_)(e.selectedPeople.length-1)+" 명",1)):(0,a.Q3)("",!0)])),_:2},1024),(0,a.bF)(O.w,null,{default:(0,a.k6)((()=>[(0,a.Lk)("sup",M,(0,s.v_)(e.time),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(u.D,{block:"",class:"",color:"secondary","prepend-icon":"mdi-plus",onClick:$.openPaymentDialog},{default:(0,a.k6)((()=>t[15]||(t[15]=[(0,a.eW)("결제 추가")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0),r.payments.length>0?((0,a.uX)(),(0,a.Wv)(g.L,{key:1},{default:(0,a.k6)((()=>[(0,a.bF)(F.B,{cols:"12",ref:"contentToCopy"},{default:(0,a.k6)((()=>[(0,a.bF)(c.J,{class:"pa-2",elevation:"16"},{default:(0,a.k6)((()=>[(0,a.Lk)("b",I,[t[16]||(t[16]=(0,a.eW)(" 총무는 ")),(0,a.Lk)("span",S,(0,s.v_)(r.treasurer),1),t[17]||(t[17]=(0,a.eW)(" 입니다. "))]),(0,a.bF)(C.x8,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.splitCosts,((e,n)=>((0,a.uX)(),(0,a.Wv)(w.g,{key:n},{default:(0,a.k6)((()=>[(0,a.bF)(B,null,{default:(0,a.k6)((()=>[e<0?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[n===r.treasurer?((0,a.uX)(),(0,a.CE)("span",K,[t[18]||(t[18]=(0,a.eW)(" - 총무(")),(0,a.Lk)("span",T,[(0,a.Lk)("b",null,(0,s.v_)(r.treasurer),1)]),(0,a.eW)(")는 총 "+(0,s.v_)(Math.abs(e))+" 원을 받아야됩니다 ",1)])):((0,a.uX)(),(0,a.CE)("span",N,[t[19]||(t[19]=(0,a.eW)(" - 총무(")),(0,a.Lk)("span",R,[(0,a.Lk)("b",null,(0,s.v_)(r.treasurer),1)]),(0,a.eW)(")는 "+(0,s.v_)(n)+"에게 "+(0,s.v_)(Math.abs(e))+" 원을 보내야됩니다. ",1)]))],64)):e>0?((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.eW)(" - "+(0,s.v_)(n)+"은 총무(",1),(0,a.Lk)("span",U,[(0,a.Lk)("b",null,(0,s.v_)(r.treasurer),1)]),(0,a.eW)(")에게 "+(0,s.v_)(e)+" 원을 송금해야 합니다. ",1)],64)):((0,a.uX)(),(0,a.CE)(a.FK,{key:2},[(0,a.eW)(" - 추가로 송금할 금액이 없습니다. ")],64))])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,a.bF)(u.D,{block:"",color:"primary",onClick:$.copyRenderedHtml},{default:(0,a.k6)((()=>t[20]||(t[20]=[(0,a.eW)("복사하기")]))),_:1},8,["onClick"]),(0,a.bF)(u.D,{block:"",class:"mt-2",color:"secondary",onClick:$.shareInfo},{default:(0,a.k6)((()=>t[21]||(t[21]=[(0,a.eW)("공유하기")]))),_:1},8,["onClick"])])),_:1})])),_:1},512)])),_:1})):(0,a.Q3)("",!0),r.payments.length>0?((0,a.uX)(),(0,a.Wv)(g.L,{key:2},{default:(0,a.k6)((()=>[(0,a.bF)(F.B,{cols:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(k.$,null,{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.people,((e,t)=>((0,a.uX)(),(0,a.Wv)(b.c,{key:t},{default:(0,a.k6)((()=>[(0,a.bF)(v.w,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(e),1)])),_:2},1024),(0,a.bF)(P.T,null,{default:(0,a.k6)((()=>[(0,a.eW)(" 총무는 "+(0,s.v_)(r.treasurer)+" ",1),(0,a.Lk)("p",null,[r.splitCosts[e]<0?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[(0,a.eW)(" 총무가 "+(0,s.v_)(e)+"에게 "+(0,s.v_)(Math.abs(r.splitCosts[e]))+" 원을 "+(0,s.v_)(e===r.treasurer?"받아야됩니다":"송금해야 합니다")+". ",1)],64)):r.splitCosts[e]>0?((0,a.uX)(),(0,a.CE)(a.FK,{key:1},[(0,a.eW)((0,s.v_)(e)+"은 총무에게 "+(0,s.v_)(r.splitCosts[e])+" 원을 송금해야 합니다. ",1)],64)):((0,a.uX)(),(0,a.CE)(a.FK,{key:2},[(0,a.eW)(" 추가로 송금할 금액이 없습니다. ")],64))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(E.K,{timeout:2e3,modelValue:r.isAlertOn,"onUpdate:modelValue":t[7]||(t[7]=e=>r.isAlertOn=e)},{default:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(r.alertMessage),1)])),_:1},8,["modelValue"])])),_:1})])),_:1})}n(4114);var B={data(){return{message:"",newPerson:"",isAlertOn:!1,alertMessage:"",people:[],payments:[],newPayment:{title:"",amount:0,time:"",payer:"",selectedPeople:this.people},splitCosts:{},payerCosts:{},treasurer:"",isPaymentDialogOpen:!1,isEditMode:!1,editingIndex:null}},methods:{validateAndAddPayment(){this.$refs.payerSelect.validate(),this.$refs.amountSelect.validate(),0!=this.newPayment.amount?this.newPayment.payer?this.isEditMode?this.updatePayment():this.addPayment():this.myAlert("결제자를 선택해주세요."):this.myAlert("금액을 입력하세요")},addPerson(){if(""!==this.newPerson.trim()){const e=this.newPerson.split(" ").map((e=>e.trim())).filter((e=>""!==e&&!this.people.includes(e)));this.people.push(...e),this.newPerson=""}},removePerson(e){this.people.splice(e,1)},removePersonByName(e){this.people=this.people.filter((t=>t!==e))},removeAllPeople(){this.people=[]},openPaymentDialog(){this.isPaymentDialogOpen=!0,this.newPayment={title:"",amount:0,time:"",payer:"",selectedPeople:[...this.people]}},closePaymentDialog(){this.isPaymentDialogOpen=!1,this.isEditMode=!1,this.editingIndex=null},addPayment(){this.payments.push({...this.newPayment}),this.newPayment={title:"",amount:0,time:"",payer:"",selectedPeople:[]},this.closePaymentDialog(),this.calculateSplit()},editPayment(e){this.editingIndex=e,this.newPayment={...this.payments[e]},this.isEditMode=!0,this.isPaymentDialogOpen=!0},updatePayment(){null!==this.editingIndex&&(this.payments[this.editingIndex]={...this.newPayment},this.newPayment={title:"",amount:0,time:"",payer:"",selectedPeople:[]},this.closePaymentDialog(),this.calculateSplit())},removePayment(e){this.payments.splice(e,1),this.calculateSplit()},calculateSplit(){const e={},t={};this.payments.forEach((n=>{if(n.amount>0&&n.selectedPeople.length>0&&n.payer){const l=(n.amount/n.selectedPeople.length).toFixed(2);n.selectedPeople.forEach((t=>{e[t]||(e[t]=0),e[t]+=parseFloat(l)})),t[n.payer]||(t[n.payer]=0),t[n.payer]+=n.amount}})),Object.keys(t).forEach((n=>{e[n]||(e[n]=0),e[n]-=t[n]})),this.treasurer=Object.keys(t).reduce(((e,n)=>t[e]>t[n]?e:n),""),this.splitCosts=e,this.payerCosts=t},copyRenderedHtml(){const e=this.$refs.contentToCopy?.$el||this.$refs.contentToCopy;if(e&&e instanceof Node){const n=document.createRange();n.selectNodeContents(e);const l=window.getSelection();l.removeAllRanges(),l.addRange(n);try{const e=document.execCommand("copy");e?this.myAlert("HTML이 클립보드에 복사되었습니다."):this.myAlert("복사에 실패했습니다.")}catch(t){this.myAlert("복사 중 오류가 발생했습니다.")}l.removeAllRanges()}else this.myAlert("복사할 내용을 찾을 수 없습니다.")},shareInfo(){this.copyRenderedHtml(),navigator.clipboard.readText().then((e=>{navigator.share?navigator.share({title:"정산내역 공유",text:e}).then((()=>this.myAlert("복사된 내용이 성공적으로 공유되었습니다."))).catch((e=>this.myAlert(`공유 중 오류가 발생했습니다: ${e}`))):this.myAlert("공유 API를 지원하지 않는 브라우저입니다.")})).catch((e=>{this.myAlert(`클립보드에서 내용을 읽는 중 오류가 발생했습니다: ${e}`)}))},myAlert(e){this.isAlertOn=!0,this.alertMessage=e}}},Q=n(1241);const J=(0,Q.A)(B,[["render",$]]);var H=J,q={name:"App",components:{MainPanel:H},data:()=>({})};const G=(0,Q.A)(q,[["render",r]]);var Y=G,z=(n(5524),n(5790)),Z=(0,z.$N)();async function ee(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ee(),(0,l.Ef)(Y).use(Z).mount("#app")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,o){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],o=e[c][2];for(var r=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[s])}))?l.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"===typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"===typeof l.then)return l}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&l;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){i[e]=function(){return l[e]}}));return i["default"]=function(){return l},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.c79242d5.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="split:";n.l=function(l,a,o,i){if(e[l])e[l].push(a);else{var r,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=l),e[l]=[a];var p=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var a=e[l];if(delete e[l],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/split/"}(),function(){var e={524:0};n.f.j=function(t,l){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)l.push(a[2]);else{var o=new Promise((function(n,l){a=e[t]=[n,l]}));l.push(a[2]=o);var i=n.p+n.u(t),r=new Error,s=function(l){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,a[1](r)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,o,i=l[0],r=l[1],s=l[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var c=s(n)}for(t&&t(l);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},l=self["webpackChunksplit"]=self["webpackChunksplit"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(8559)}));l=n.O(l)})();
//# sourceMappingURL=app.df95822e.js.map