import{d as ue,r as G,e as Z,o as Te,a as d,g as E,w as s,l as t,x as D,u as O,a7 as Re,c as L,f as te,F as H,b as p,j as W,B as Ie,m as S,a1 as Ue,I as pe,G as Ee,t as le,k as K,J as Se,L as $e,z as be,A as he,n as ne,v as De,y as re,a5 as Me,a3 as ye,_ as ze,a4 as Ae,a8 as ke,V as Oe,D as _e,a9 as je,X as qe,W as we,q as Be,S as xe,E as Fe,h as Xe,C as Ye,p as We}from"./index-ea7eee8a.js";import{_ as Ge,a as Ke}from"./vueFile.vue_vue_type_script_setup_true_lang-db7b0571.js";import{_ as Ne}from"./aceDrawer.vue_vue_type_script_setup_true_lang-74ddf302.js";import{g as Pe,a as He}from"./getData-8e3ed6b9.js";const Je=["bg.jpg","bg2.jpg","bg3.jpg","head_bg.png"],Qe=[],Ze=[],de={bg:Je,border:Qe,img:Ze},el={class:"img-list"},ll=["onClick"],tl=["src"],ol={key:0},nl=ue({__name:"upload",emits:["click"],setup(M,{expose:R,emit:b}){const f=G(!1),i=G(),z=G("bg"),e=Z(()=>{if(!de)return[];const g=[];for(const C in de)g.push(C);return g}),F=Z(()=>z.value.name==="upload"?[]:de?de[z.value]:[]),w=Z(()=>`./static/screen/${z.value}/`),T=g=>{f.value=!1,b("click",w.value+g,i.value)},u=g=>{z.value="upload",Ie(()=>{F.value.unshift(g.path)})};return R({open:(g,C)=>{f.value=!0,i.value=C,g?z.value=g:z.value=e.value[0]}}),Te(()=>{}),(g,C)=>{const v=S("el-button"),Y=S("el-upload"),U=S("el-tab-pane"),Q=S("el-tabs"),ee=S("el-dialog");return d(),E(ee,{modelValue:f.value,"onUpdate:modelValue":C[1]||(C[1]=A=>f.value=A),width:"800px",title:"选择上传图片"},{default:s(()=>{var A;return[t(Y,{action:O(Re),"on-success":u,"show-file-list":!1},{default:s(()=>[t(v,{type:"primary"},{default:s(()=>[D("上传")]),_:1})]),_:1},8,["action"]),t(Q,{modelValue:z.value,"onUpdate:modelValue":C[0]||(C[0]=j=>z.value=j)},{default:s(()=>[(d(!0),L(H,null,te(O(e),j=>(d(),E(U,{label:j,name:j,key:j},null,8,["label","name"]))),128)),t(U,{label:"上传",name:"upload"})]),_:1},8,["modelValue"]),p("div",el,[p("ul",null,[(d(!0),L(H,null,te(O(F),j=>(d(),L("li",{key:j,onClick:oe=>T(j)},[p("img",{src:O(w)+j,alt:""},null,8,tl)],8,ll))),128))]),(A=O(F))!=null&&A.length?W("",!0):(d(),L("p",ol," 暂无相关素材资源 "))])]}),_:1},8,["modelValue"])}}});const al=Ue(nl,[["__scopeId","data-v-7ebb50b6"]]),sl={key:0},il=p("h3",null,"接口数据处理事件",-1),cl=p("h3",null,"全局数据",-1),rl=p("h3",null,"接口数据处理事件",-1),ul=ue({__name:"configControl",props:{config:null},emits:["update:config","openDrawer","update"],setup(M,{expose:R,emit:b}){const f=M,i=G({}),z=G(),e=Z(()=>i.value.type),F=c=>{b("update:config",Object.assign({},f.config,c))},w=pe({bgColor:"",bgLinear:"",bgAngle:0,bgUpload:"",bgSelect:""});Ee(()=>f.config,c=>{if(!Object.keys(i.value).length){const o=c.background||"";if(o.indexOf("url")!==-1){const V=new RegExp("(?<=url\\()(.*?)(?=\\))","g"),x=o.match(V);Object.assign(w,{bgUpload:x,bgSelect:3})}else if(o.indexOf("linear")!==-1){const x=o.substring(o.indexOf("(")+1,o.lastIndexOf(")")).split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/);Object.assign(w,{bgColor:x[1].trim(),bgLinear:x[2].trim(),bgAngle:Number(x[0].replace("deg","")),bgSelect:2})}else Object.assign(w,{bgColor:o,bgSelect:1})}},{immediate:!0});const T=()=>{let c="";switch(w.bgSelect){case 1:c=w.bgColor;break;case 2:c=`linear-gradient(${w.bgAngle}deg, ${w.bgColor}, ${w.bgLinear})`;break;case 3:c=`url(${w.bgUpload})`;break}u("background",c)},u=(c,o)=>{F({[c]:o})},$=c=>{i.value=c},g=Z(()=>{var c,o,V,x;if(Object.keys(i.value).length){const{config:y={},position:r,type:N}=i.value;return[{type:"group",title:"位置信息"},{label:"width",value:r.width,placeholder:"请输入宽度",key:"width",path:"position"},{label:"height",value:r.height,placeholder:"请输入高度",key:"height",path:"position"},{type:"number",label:"left",value:r.left,placeholder:"图层位置",key:"left",path:"position"},{type:"number",label:"top",value:r.top,key:"top",path:"position"},{type:"number",label:"right",value:r.right,placeholder:"设置后left为auto",key:"right",path:"position"},{type:"number",label:"bottom",value:r.bottom,placeholder:"设置后top为auto",key:"bottom",path:"position"},{type:"number",label:"zIndex",value:r.zIndex,placeholder:"请输入层级",key:"zIndex",path:"position"},{type:"group",title:"属性信息"},{type:"switch",label:"锁定",value:y.lock,key:"lock"},{type:"switch",label:"隐藏",value:r.display,key:"display",path:"position"},{label:"样式类名",placeholder:"方便引用个性化样式",value:y.class,key:"class"},{label:"文本内容",placeholder:"请输入文本内容",value:y.text,key:"text",vShow:["text"]},{type:"select",label:"滚动方向",placeholder:"请选择滚动方向",value:y.direction,key:"direction",vShow:["sText"],options:{left:"从左到右",right:"从右到左",top:"从上到下",bottom:"从下到上"}},{type:"number",label:"滚动速度",placeholder:"滚动速度，数字越大速度越慢",value:y.speed,key:"speed",vShow:["sText"]},{type:"number",label:"滚动步长",placeholder:"每单位时间滚动的距离，默认1",value:y.step,key:"step",vShow:["sText"]},{type:"textarea",label:"文本内容",placeholder:"请输入文本内容，支持html",value:y.text,key:"text",vShow:["sText"]},{label:"字体大小",placeholder:"文本字体大小,如14px",value:(c=y.style)==null?void 0:c.fontSize,key:"fontSize",path:"style",vShow:["text","clock"]},{label:"边框",placeholder:"如1px solid #000",value:(o=y.style)==null?void 0:o.border,key:"border",path:"style",vShow:["border"]},{type:"color",label:"背景颜色",value:(V=y.style)==null?void 0:V.background,key:"background",path:"style",vShow:["border"]},{type:"color",label:"字体颜色",value:(x=y.style)==null?void 0:x.color,key:"color",path:"style",vShow:["text","clock"]},{type:"select",label:"时间格式",value:y.dateTime,key:"dateTime",allowCreate:!0,filterable:!0,placeholder:"选择或创建时间格式",vShow:["clock"],options:{"{y}-{m}-{d}":"{y}-{m}-{d}","{h}:{i}:{s}":"{h}:{i}:{s}","{y}-{m}-{d} {h}:{i}:{s}":"{y}-{m}-{d} {h}:{i}:{s}","{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}":"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}"}},{label:"组件名称",value:y.component,placeholder:"全局注册的组件名称",key:"component",vShow:["component"]},{type:"switch",label:"是否轮播",value:y.carousel,key:"carousel",vShow:["table"]},{type:"number",label:"滚动速度",placeholder:"开启轮播有效",value:y.speed,key:"speed",vShow:["table"]}].filter(J=>{let _=!0;return J.vShow&&(_=J.vShow.includes(N)),J.vHide&&(_=!J.vHide.includes(N)),_})}return[]}),C=(c,o)=>{var V;c.path==="position"?i.value.position[c.key]=o:c.path==="style"?((V=i.value.config)!=null&&V.style||(i.value.config.style={}),i.value.config.style[c.key]=o):i.value.config[c.key]=o,["zIndex","display","lock"].includes(c.key)&&b("update")},v=(c,o)=>{z.value.open(c,o)},Y=(c,o)=>{switch(o){case"screenBg":w.bgUpload=c,T();break;case"src":i.value.config.src=c;break}},U=()=>{b("openDrawer",{codeType:"css",type:"css",title:"当前应用页的样式，类似于.vue文件中的style scoped中的样式"})},Q=()=>{b("openDrawer",{content:i.value.option,title:"可参考echarts相关例子编辑",callback:c=>{i.value.option=c}})},ee=()=>{var c;b("openDrawer",{codeType:"json",content:((c=i.value.config)==null?void 0:c.style)||{},title:"可输入更多的css样式，须为json格式",callback:o=>{i.value.config.style=o}})},A=()=>{var c;b("openDrawer",{codeType:"json",content:((c=i.value.config)==null?void 0:c.props)||{},title:"支持所有表格props属性，可参考el-table。json格式",callback:o=>{i.value.config.props=o}})},j=()=>{let c=i.value.columns;(!c||!c.length)&&(c=[{prop:"",label:""}]),b("openDrawer",{codeType:"json",content:c,title:"表格列设置，可参考table-column属性",callback:o=>{i.value.columns=o}})},oe=(c,o)=>{let V;o==="global"?V=f.config&&f.config[c]:V=i.value.events&&i.value.events[c],V||(c==="beforeRequest"?V=x=>(console.log("beforeRequest",x),x):o==="global"?V=x=>(console.log("afterResponse",x),x):V=(x,y,r)=>(console.log("afterResponse",x,y,r),y)),b("openDrawer",{content:V,title:c==="beforeRequest"?"这里可处理请求前的参数，返回相应参数给接口":"接口数据处理。也可为字符串，如opt=formatTest",callback:x=>{o==="global"?f.config[c]=x:(i.value.events||(i.value.events={}),i.value.events[c]=x)}})},fe=()=>{var x,y;let c,o;const V=i.value.config.optionsType;V===2?(o="从大屏配置的全局数据里获取指定数据",c=(x=i.value.events)==null?void 0:x.getGlobal,c||(c=(r,N)=>(console.log("getGlobalData",r,N),r))):(o="图表数据，替换相关数据返回即可",["text","sText"].includes(e.value)?(c=(y=i.value.config)==null?void 0:y.text,o="编辑文本内容数据"):c=i.value.option,e.value==="table"&&(o="表格列表数据。根据设定的table-column列数据设置对应的数据")),b("openDrawer",{content:c,title:o,callback:r=>{V===2?(i.value.events||(i.value.events={}),i.value.events.getGlobal=r):["text","sText"].includes(e.value)?i.value.config.text=r:i.value.option=r}})};return R({setCurrent:$}),(c,o)=>{var a;const V=S("el-switch"),x=S("el-color-picker"),y=S("el-input"),r=S("el-option"),N=S("el-select"),J=S("el-input-number"),_=S("el-form-item"),X=S("el-button"),ae=S("el-form"),se=S("el-tab-pane"),ie=S("el-radio"),ge=S("el-radio-group"),ce=S("el-tabs"),n=S("el-slider");return d(),L("div",{class:K(["main-right",{lock:(a=i.value.config)==null?void 0:a.lock}])},[Object.keys(i.value).length?(d(),E(ce,{key:0,class:"tabs","model-value":"screen"},{default:s(()=>[t(se,{label:"位置属性",name:"screen"},{default:s(()=>[t(ae,{size:"small"},{default:s(()=>[(d(!0),L(H,null,te(O(g),(l,m)=>(d(),E(_,{label:l.label,key:m},{default:s(()=>[l.type==="group"?(d(),L("h3",sl,le(l.title),1)):l.type==="switch"?(d(),E(V,{key:1,"model-value":l.value,onChange:h=>C(l,h),class:K([l.key])},null,8,["model-value","onChange","class"])):l.type==="color"?(d(),E(x,{key:2,"show-alpha":"",onChange:h=>C(l,h),"model-value":l.value},null,8,["onChange","model-value"])):l.type==="textarea"?(d(),E(y,{key:3,type:"textarea",placeholder:l.placeholder,onChange:h=>C(l,h),"model-value":l.value},null,8,["placeholder","onChange","model-value"])):l.type==="select"?(d(),E(N,{key:4,allowCreate:l.allowCreate,filterable:l.filterable,placeholder:l.placeholder,onChange:h=>C(l,h),"model-value":l.value},{default:s(()=>[(d(!0),L(H,null,te(l.options,(h,I)=>(d(),E(r,{key:h,label:h,value:I},null,8,["label","value"]))),128))]),_:2},1032,["allowCreate","filterable","placeholder","onChange","model-value"])):l.type==="number"?(d(),E(J,{key:5,"controls-position":"right",placeholder:l.placeholder,"model-value":l.value,onInput:h=>C(l,h)},null,8,["placeholder","model-value","onInput"])):(d(),E(y,{key:6,placeholder:l.placeholder,"model-value":l.value,onInput:h=>C(l,h)},null,8,["placeholder","model-value","onInput"]))]),_:2},1032,["label"]))),128)),["image","background"].includes(O(e))?(d(),E(_,{key:0,class:"upload-image"},{default:s(()=>[t(y,{placeholder:"请输入图片地址",modelValue:i.value.config.src,"onUpdate:modelValue":o[0]||(o[0]=l=>i.value.config.src=l)},null,8,["modelValue"]),t(X,{type:"primary",onClick:o[1]||(o[1]=l=>v(O(e)==="image"?"img":"bg","src"))},{default:s(()=>[D("选择图片")]),_:1})]),_:1})):W("",!0),["line","bar","pie","echarts"].includes(O(e))?(d(),E(_,{key:1},{default:s(()=>[t(X,{type:"primary",onClick:Q},{default:s(()=>[D("图表编辑")]),_:1})]),_:1})):W("",!0),["text","sText","image","background","border","clock"].includes(O(e))?(d(),E(_,{key:2},{default:s(()=>[t(X,{type:"primary",onClick:ee},{default:s(()=>[D("编辑更多内联样式")]),_:1})]),_:1})):W("",!0),["table"].includes(O(e))?(d(),E(_,{key:3},{default:s(()=>[t(X,{type:"primary",onClick:A},{default:s(()=>[D("表格属性")]),_:1}),t(X,{type:"primary",onClick:j},{default:s(()=>[D("Table-column")]),_:1})]),_:1})):W("",!0)]),_:1})]),_:1}),t(se,{label:"数据",name:"data"},{default:s(()=>[["line","bar","pie","echarts","text","sText","table"].includes(O(e))?(d(),E(ae,{key:0,size:"small"},{default:s(()=>[t(_,{label:"数据类型"},{default:s(()=>[t(ge,{modelValue:i.value.config.optionsType,"onUpdate:modelValue":o[2]||(o[2]=l=>i.value.config.optionsType=l)},{default:s(()=>[t(ie,{label:0,style:{"margin-right":"4px"}},{default:s(()=>[D("静态")]),_:1}),t(ie,{label:2,style:{"margin-right":"4px"}},{default:s(()=>[D("全局")]),_:1}),t(ie,{label:1},{default:s(()=>[D("动态")]),_:1})]),_:1},8,["modelValue"])]),_:1}),i.value.config.optionsType!==1?(d(),E(_,{key:0},{default:s(()=>[t(X,{type:"primary",onClick:fe},{default:s(()=>[D("编辑数据")]),_:1})]),_:1})):W("",!0),i.value.config.optionsType===1?(d(),L(H,{key:1},[t(_,null,{default:s(()=>[t(y,{modelValue:i.value.config.requestUrl,"onUpdate:modelValue":o[4]||(o[4]=l=>i.value.config.requestUrl=l),placeholder:"接口URL或api中的key"},{prepend:s(()=>[t(N,{modelValue:i.value.config.method,"onUpdate:modelValue":o[3]||(o[3]=l=>i.value.config.method=l),style:{width:"60px"}},{default:s(()=>[t(r,{label:"get",value:"get"}),t(r,{label:"post",value:"post"}),t(r,{label:"ws",value:"ws",disabled:""})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"刷新时间"},{default:s(()=>[t(J,{modelValue:i.value.config.loopTime,"onUpdate:modelValue":o[5]||(o[5]=l=>i.value.config.loopTime=l),disabled:""},null,8,["modelValue"])]),_:1}),t(_,null,{default:s(()=>[il]),_:1}),t(_,null,{default:s(()=>[t(X,{onClick:o[6]||(o[6]=l=>oe("beforeRequest"))},{default:s(()=>[D("beforeRequest")]),_:1})]),_:1}),t(_,null,{default:s(()=>[t(X,{onClick:o[7]||(o[7]=l=>oe("afterResponse"))},{default:s(()=>[D("afterResponse")]),_:1})]),_:1})],64)):W("",!0)]),_:1})):W("",!0)]),_:1})]),_:1})):(d(),E(ce,{key:1,class:"tabs","model-value":"screen"},{default:s(()=>[t(se,{label:"大屏配置",name:"screen"},{default:s(()=>[t(ae,{size:"small"},{default:s(()=>[t(_,{label:"大屏宽度"},{default:s(()=>[t(y,{placeholder:"请输入大屏宽度","model-value":M.config.width,onInput:o[8]||(o[8]=l=>u("width",l))},null,8,["model-value"])]),_:1}),t(_,{label:"大屏高度"},{default:s(()=>[t(y,{placeholder:"请输入大屏高度","model-value":M.config.height,onInput:o[9]||(o[9]=l=>u("height",l))},null,8,["model-value"])]),_:1}),t(_,{class:"color-picker",label:"主色"},{default:s(()=>[t(x,{"show-alpha":"",onChange:o[10]||(o[10]=l=>u("primary",l)),"model-value":M.config.primary},null,8,["model-value"])]),_:1}),t(_,{label:"背景"},{default:s(()=>[t(N,{modelValue:w.bgSelect,"onUpdate:modelValue":o[11]||(o[11]=l=>w.bgSelect=l),onChange:T},{default:s(()=>[t(r,{value:1,label:"背景色"}),t(r,{value:2,label:"渐变色"}),t(r,{value:3,label:"背景图"})]),_:1},8,["modelValue"])]),_:1}),w.bgSelect!==3?(d(),E(_,{key:0,class:"color-picker"},{default:s(()=>[t(x,{"show-alpha":"",modelValue:w.bgColor,"onUpdate:modelValue":o[12]||(o[12]=l=>w.bgColor=l),onChange:T},null,8,["modelValue"])]),_:1})):W("",!0),w.bgSelect===2?(d(),L(H,{key:1},[t(_,{class:"color-picker"},{default:s(()=>[t(x,{"show-alpha":"",modelValue:w.bgLinear,"onUpdate:modelValue":o[13]||(o[13]=l=>w.bgLinear=l),onChange:T},null,8,["modelValue"])]),_:1}),t(_,{label:"渐变角度"},{default:s(()=>[t(n,{modelValue:w.bgAngle,"onUpdate:modelValue":o[14]||(o[14]=l=>w.bgAngle=l),max:360,onChange:T},null,8,["modelValue"])]),_:1})],64)):W("",!0),w.bgSelect===3?(d(),E(_,{key:2,class:"upload-image"},{default:s(()=>[t(y,{placeholder:"请输入图片地址",modelValue:w.bgUpload,"onUpdate:modelValue":o[15]||(o[15]=l=>w.bgUpload=l),onChange:T},null,8,["modelValue"]),t(X,{type:"primary",onClick:o[16]||(o[16]=l=>v("bg","screenBg"))},{default:s(()=>[D("上传")]),_:1})]),_:1})):W("",!0),t(_,null,{default:s(()=>[t(X,{onClick:U},{default:s(()=>[D("编辑样式")]),_:1})]),_:1}),t(_,null,{default:s(()=>[cl]),_:1}),t(_,null,{default:s(()=>[t(y,{"model-value":M.config.requestUrl,placeholder:"接口URL或api中的key",onInput:o[18]||(o[18]=l=>u("requestUrl",l))},{prepend:s(()=>[t(N,{"model-value":M.config.method,style:{width:"60px"},onChange:o[17]||(o[17]=l=>u("method",l))},{default:s(()=>[t(r,{label:"get",value:"get"}),t(r,{label:"post",value:"post"}),t(r,{label:"ws",value:"ws",disabled:""})]),_:1},8,["model-value"])]),_:1},8,["model-value"])]),_:1}),t(_,{label:"刷新时间"},{default:s(()=>[t(J,{disabled:"","model-value":M.config.loopTime,onInput:o[19]||(o[19]=l=>u("loopTime",l))},null,8,["model-value"])]),_:1}),t(_,null,{default:s(()=>[rl]),_:1}),t(_,null,{default:s(()=>[t(X,{onClick:o[20]||(o[20]=l=>oe("beforeRequest","global"))},{default:s(()=>[D("beforeRequest")]),_:1})]),_:1}),t(_,null,{default:s(()=>[t(X,{onClick:o[21]||(o[21]=l=>oe("afterResponse","global"))},{default:s(()=>[D("afterResponse")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),t(al,{ref_key:"uploadImageEl",ref:z,onClick:Y},null,512)],2)}}}),dl={class:"main-left"},pl={class:"components-list scroll"},fl={class:"title"},gl=["title"],vl={class:"scroll layer-list"},ml=["onClick"],bl=["onClick"],hl=["onClick"],yl=p("i",{class:"icon-del"},null,-1),kl=ue({__name:"controlLeft",props:{active:null},emits:["update","update:active"],setup(M,{expose:R,emit:b}){const f={line:["折线图","line"],bar:["柱状图","bar"],pie:["饼图","pie"],echarts:["通用图表",""],table:["表格","table"],text:["文本","text2"],sText:["滚动文本","stext"],image:["图片","image"],background:["背景","image"],border:["边框","border"],clock:["当前时间","time"],component:["自定义","component"]},i=G([]),z=G([{label:"图表",children:[{type:"line",label:f.line[0],icon:f.line[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{type:"bar",label:f.bar[0],icon:f.bar[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{type:"pie",label:f.pie[0],icon:f.pie[1],position:{width:300,height:300},option:{series:[{type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}},{type:"echarts",label:f.echarts[0],icon:f.echarts[1],position:{width:400,height:300},option:{}}]},{label:"表格",children:[{type:"table",label:f.table[0],icon:f.table[1],position:{width:500,height:300},option:[],columns:[]}]},{label:"辅助",children:[{type:"text",label:f.text[0],icon:f.text[1],position:{width:100,height:30},config:{text:"文本内容"}},{type:"sText",label:f.sText[0],icon:f.sText[1],position:{width:100,height:30},config:{text:"滚动文本内容"}},{type:"image",label:f.image[0],icon:f.image[1],position:{width:100,height:50},config:{src:""}},{type:"background",label:f.background[0],icon:f.background[1],position:{width:100,height:50},config:{src:""}},{type:"border",label:f.border[0],icon:f.border[1],position:{width:100,height:100},config:{style:{border:"1px solid #fff"}}}]},{label:"其他",children:[{type:"clock",label:f.clock[0],icon:f.clock[1],position:{width:150,height:30}}]},{label:"自定义组件",children:[{type:"component",label:f.component[0],icon:f.component[1],position:{width:200,height:200},config:{}}]}]),e=T=>$e(T),F=(T,u)=>{let $=!1;switch(u){case"display":$=!T.display,T.display=$;break;case"lock":$=!T.lock,T.lock=$;break;case"active":b("update:active",[T.index]);break}b("update",u,T.index,$)};return R({setLayer:T=>{const u=[];T.forEach(($,g)=>{u.push({label:f[$.type][0],icon:f[$.type][1],zIndex:$.position.zIndex||0,display:$.position.display,lock:$.config.lock,index:g})}),i.value=u.sort(($,g)=>$.icon.localeCompare(g.icon))}}),(T,u)=>{const $=S("el-tab-pane"),g=S("el-popconfirm"),C=S("el-tabs");return d(),L("div",dl,[t(C,{"model-value":"component",class:"tabs"},{default:s(()=>[t($,{label:"组件",name:"component"},{default:s(()=>[p("div",pl,[(d(!0),L(H,null,te(z.value,(v,Y)=>(d(),L("div",{key:Y},[p("div",fl,le(v.label),1),t(O(Se),{itemKey:"label",tag:"ul",modelValue:v.children,"onUpdate:modelValue":U=>v.children=U,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:e},{item:s(({element:U})=>[p("li",{class:K([U.type])},[p("i",{class:K(`icon-${U.icon}`)},null,2),p("span",{title:U.label},le(U.label),9,gl)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])]),_:1}),t($,{label:"图层",name:"layer"},{default:s(()=>[p("div",vl,[p("ul",null,[(d(!0),L(H,null,te(i.value,(v,Y)=>(d(),L("li",{key:Y,class:K({active:M.active[0]===v.index,lock:v.lock,display:v.display})},[p("span",{onClick:U=>F(v,"active")},[p("i",{class:K(`icon-${v.icon}`)},null,2),D(" "+le(v.label),1)],8,ml),p("i",{onClick:U=>F(v,"display"),class:K(["icon",[v.display?"icon-eye-close":"icon-eye"]])},null,10,bl),p("i",{onClick:U=>F(v,"lock"),class:K(["icon",[v.lock?"icon-lock":"icon-lock-open"]])},null,10,hl),t(g,{title:"确认删除",onConfirm:U=>F({index:v.index},"del")},{reference:s(()=>[yl]),_:2},1032,["onConfirm"])],2))),128))])])]),_:1})]),_:1})])}}}),_l=["onMousedown"],Ce=ue({__name:"ruler",props:{direction:{default:"h"},scale:null,offset:null,showRuler:{type:Boolean},showLine:{type:Boolean},size:null,scroll:null},setup(M){const R=M,b=pe({leftTop:0,moveFlag:!1,moveLine:!1,line:[]}),f=Z(()=>{let g={};return R.direction==="v"&&R.scroll[0]>0&&(g={left:R.scroll[0]+20+"px"}),{width:R.size,...g}}),i=Z(()=>{let g;return R.direction==="h"?g={left:b.leftTop+"px"}:g={top:b.leftTop+"px"},{display:b.moveFlag?"block":"none",...g}}),z=Z(()=>{const g=R.direction==="h"?1920:1080;let C=[];for(let v=0;v<g;v=v+100)C.push(v);return C}),e=g=>parseInt(`${g/R.scale*100}`),F=()=>{b.moveFlag=!0,document.onmousemove=g=>{if(!b.moveFlag)return;const C=parseInt(`${g.pageX-R.offset[0]+R.scroll[0]}`),v=parseInt(`${g.pageY-R.offset[1]+R.scroll[1]}`);b.leftTop=R.direction==="h"?C:v},document.onmouseup=function(){T()}},w=()=>{b.moveFlag&&(b.line.includes(b.leftTop)||b.line.push(b.leftTop))},T=()=>{b.moveFlag=!1,document.onmousemove=null,document.onmouseup=null},u=g=>R.direction==="h"?{left:g+"px"}:{top:g+"px"},$=(g,C,v)=>{b.moveLine=!0;const Y=v.pageX-C,U=v.pageY-C;document.onmousemove=Q=>{if(!b.moveLine)return;const ee=parseInt(`${Q.pageX-Y}`),A=parseInt(`${Q.pageY-U}`),j=R.direction==="h"?ee:A;j<30?(b.line.splice(g,1),b.moveLine=!1):b.line[g]=j},document.onmouseup=function(){b.moveLine=!1,T()}};return(g,C)=>(d(),L(H,null,[be(p("div",{class:K(["screen-ruler",`ruler-${M.direction}`]),style:ne(O(f))},[p("div",{class:"ruler-box",onMouseenter:F,onMouseleave:T,onMousedown:w},[(d(!0),L(H,null,te(O(z),v=>(d(),L("span",{key:v},le(e(v)),1))),128))],32)],6),[[he,M.showRuler]]),be(p("div",null,[p("div",{class:K(["ruler-line dotted",`line-${M.direction}`]),style:ne(O(i))},[p("span",null,le(e(b.leftTop-20)),1)],6),(d(!0),L(H,null,te(b.line,(v,Y)=>(d(),L("div",{class:K(["ruler-line",`line-${M.direction}`]),key:v,style:ne(u(v)),onMousedown:U=>$(Y,v,U)},[p("span",null,le(e(v-20)),1)],46,_l))),128))],512),[[he,M.showLine]])],64))}});const wl={class:"container-screen"},xl={class:"main-box"},Cl={class:"control-tools"},Tl=["onMousedown"],Il={key:0},Sl={key:0,class:"no-date"},$l={class:"design-footer"},Ll={class:"center"},Vl={class:"item"},Rl=p("label",{class:"label"},"标尺",-1),Ul={class:"item"},El=p("label",{class:"label"},"参考线",-1),Dl={class:"item slider"},Ml=p("label",{class:"label"},"缩放比例",-1),zl={class:"item"},Bl=ue({__name:"index",setup(M){De().changeBreadcrumb([{label:"系统工具"},{label:"可视化大屏设计"}]);const b=Xe(),f=Ye(),i=re("screenToolWidthLeft")||"",z=re("screenToolWidthRight")||"",e=pe({showLine:!0,scale:100,autoScale:100,ruler:!0,widthLeft:i==="0"?"":i,widthRight:z==="0"?"":z,offset:[],scroll:[0,0],translateX:0,translateY:0,moveFlag:!1,loading:!1,isEye:!1,activeIndex:[],activeTool:"mouse",react:{left:"0px",top:"0px",width:"0px",height:"0px",display:"none"}}),F=G(),w=G(),T=G(),u=G({list:[],config:{width:"1920px",height:"1080px",background:"#000",style:"",primary:"#409eff"}}),$=G({});We("globalScreen",$);const g=Z(()=>{const{width:n,height:a,background:l,primary:m}=u.value.config,h=e.scale/100;return{width:n,height:a,background:l,transform:`scale(${h})`,color:m,cursor:e.activeTool==="mouse"?"default":"pointer"}}),C=()=>{e.activeIndex=[],x({})},v=(n,a)=>{e.react.display="none",e.activeIndex=[a],x(n)},Y=(n,a)=>{if(a==="del")u.value.list.splice(n,1),C();else if(a==="clone"){const l=$e(u.value.list[n]);u.value.list.push(l);const m=u.value.list.length-1;v(l,m)}y()},U=G({100:{style:{}}}),Q=n=>{let a;n==="Left"?(e.widthLeft=e.widthLeft===""?"0px":"",a=e.widthLeft):(e.widthRight=e.widthRight===""?"0px":"",a=e.widthRight),setTimeout(()=>{j()},500),re("screenToolWidth"+n,a||"0")},ee=n=>{A.value.scrollTo(0,0),n==="auto"?e.scale=e.autoScale:e.scale=100,re("screenScale",e.scale+"")},A=G(),j=()=>{Ie(()=>{const n=A.value.offsetWidth,a=parseInt(u.value.config.width);if(n&&a){const m=parseInt(`${n/a*100}`);e.autoScale=m,e.scale=re("screenScale")||m}const l=A.value.getBoundingClientRect();e.offset[1]=l.top+document.documentElement.scrollTop-(document.documentElement.clientTop||0),e.offset[0]=l.left+document.documentElement.scrollLeft-(document.documentElement.clientLeft||0)})},oe=n=>{C(),e.moveFlag=!0;const a=A.value.scrollTop,l=A.value.scrollLeft,m=n.pageX+l,h=n.pageY+a,I=(n.pageX-e.offset[0]-20+e.scroll[0])/(e.scale/100),q=(n.pageY-e.offset[1]-20+e.scroll[1])/(e.scale/100);e.react={left:I+"px",top:q+"px",width:"0px",height:"0px",display:"none"},document.onmousemove=k=>{if(e.moveFlag)if(e.activeTool==="mouse"){const B=(k.pageX-e.offset[0]-20+e.scroll[0])/(e.scale/100),P=(k.pageY-e.offset[1]-20+e.scroll[1])/(e.scale/100),ve=I>B?B:I,me=q>P?P:q;e.react={left:ve+"px",top:me+"px",width:Math.abs(I-B)+"px",height:Math.abs(q-P)+"px",display:"block"}}else{const B=m-k.pageX,P=h-k.pageY;A.value.scrollTo(B,P)}},document.onmouseup=function(){const{width:k,height:B}=e.react;parseInt(k)>10&&parseInt(B)>10?fe():e.react.display="none",e.moveFlag=!1,document.onmousemove=null}},fe=()=>{let n={left:0,top:0,ex:0,ey:0};u.value.list.forEach((m,h)=>{if(ke(m.position)&&l(m.position)){e.activeIndex.includes(h)||e.activeIndex.push(h);const{left:I,top:q,width:k,height:B}=m.position;n.left=a(n.left,I),n.top=a(n.top,q),n.ex=Math.max(n.ex,parseInt(k)+I),n.ey=Math.max(n.ey,parseInt(B)+q)}}),e.activeIndex.length?e.react={left:n.left+"px",top:n.top+"px",width:Math.abs(n.ex-n.left)+"px",height:Math.abs(n.ey-n.top)+"px",display:"block"}:e.react.display="none";function a(m,h){return m===0?h:Math.min(m,h)}function l(m){const h=m.left,I=m.top,q=m.left+parseInt(m.width),k=m.top+parseInt(m.height),B=parseInt(e.react.left),P=parseInt(e.react.top),ve=B+parseInt(e.react.width),me=P+parseInt(e.react.height),Le=h<ve&&B<q,Ve=I<me&&P<k;return Le&&Ve}},c=()=>{const n=A.value.scrollTop,a=A.value.scrollLeft;e.scroll=[a,n]},o=n=>{n.preventDefault()},V=n=>{const a=n.newIndex,l=u.value.list[a];delete l.label,delete l.icon;const{pageX:m,pageY:h}=n.originalEvent;l.position||(l.position={}),l.config||(l.config={}),l.position.left=parseInt(`${m-e.offset[0]+e.scroll[0]}`),l.position.top=parseInt(`${h-e.offset[1]+e.scroll[1]}`),e.react.display="none",e.activeIndex=[a],x(l),y()},x=n=>{F.value.setCurrent(n)},y=()=>{w.value.setLayer(u.value.list)},r=pe({visible:!1,title:"",direction:"",content:"",codeType:"",callback:""}),N=()=>{X()},J=n=>{try{if(typeof r.callback=="function"){const a=r.codeType==="json"?Oe(n):_e(n);r.callback(a)}else switch(r.type){case"css":u.value.config.style=n,je("screenStyle",n,!0);break;case"json":u.value=_e(n),y();break}X()}catch{}},_=n=>{const{type:a,direction:l,codeType:m,title:h,callback:I,content:q}=n;r.direction=l||"ltr",r.type=a,r.codeType=m||"",r.title=h?`提示：${h}`:"",r.visible=!0,r.callback=I;let k=m==="json"?qe(q,!0):we(q,!0);switch(a){case"css":k=u.value.config.style||"";break}r.content=k},X=()=>{r.visible=!1,r.type="",r.title="",r.codeType="",r.callback="",r.content=""},ae=n=>{switch(n){case"del":u.value.list=[],C(),y();break;case"eye":e.isEye=!0;break;case"json":_({type:"json",content:u.value,title:"可编辑修改或将已生成的脚本粘贴进来"});break;case"vue":T.value.openScreen(u.value);break;case"save":se();break}},se=()=>{let n={data:we(u.value),name:"未命名可视化大屏",type:4},a="designSave";const l=b.query.id;l&&(Object.assign(n,{id:l}),delete n.name,a="designEdit"),e.loading=!0,Be(a,n).then(m=>{xe({message:m.message||"保存成功！",type:"success"}),l||f.push({path:"/design/dataScreen/list"}),e.loading=!1}).catch(m=>{xe.error(m.message||"保存异常"),e.loading=!1}),C()},ie=()=>{e.loading=!0,Pe(b.query.id).then(n=>{e.loading=!1,u.value=n,y();const{requestUrl:a,afterResponse:l,beforeRequest:m,method:h}=u.value.config;a&&He(a,l,m,h).then(I=>{$.value=I})}).catch(()=>{e.loading=!1})},ge=(n,a,l)=>{switch(n){case"display":case"zIndex":u.value.list[a].position[n]=l;break;case"lock":u.value.list[a].config[n]=l;break;case"del":return Y(a,"del")}x(u.value.list[a])},ce=n=>{var l;if(!((l=e.activeIndex)!=null&&l.length))return;const a=e.activeIndex;for(const m in a){const h=a[m],I=u.value.list[h];if(!ke(I==null?void 0:I.position)){console.log("不能移");break}n.key==="ArrowRight"?I.position.left++:n.key==="ArrowLeft"?I.position.left--:n.key==="ArrowDown"?I.position.top++:n.key==="ArrowUp"&&I.position.top--}e.react.display==="block"&&(n.key==="ArrowRight"?e.react.left=parseInt(e.react.left)+1+"px":n.key==="ArrowLeft"?e.react.left=parseInt(e.react.left)-1+"px":n.key==="ArrowDown"?e.react.top=parseInt(e.react.top)+1+"px":n.key==="ArrowUp"&&(e.react.top=parseInt(e.react.top)-1+"px")),n.preventDefault()};return Te(()=>{j(),ie(),document.addEventListener("keydown",ce)}),Me(()=>{document.removeEventListener("keydown",ce)}),(n,a)=>{var q;const l=S("el-switch"),m=S("el-slider"),h=S("el-button"),I=Fe("loading");return be((d(),L("div",wl,[e.isEye?(d(),L("i",{key:0,class:"icon-close close-preview",onClick:a[0]||(a[0]=k=>e.isEye=!1)})):W("",!0),t(kl,{style:ne({width:e.widthLeft}),ref_key:"controlLeftEl",ref:w,active:e.activeIndex,"onUpdate:active":a[1]||(a[1]=k=>e.activeIndex=k),onUpdate:ge},null,8,["style","active"]),p("div",xl,[t(Ge,{onClick:ae},{default:s(()=>[p("div",Cl,[p("i",{class:K(["icon-mouse",{active:e.activeTool==="mouse"}]),title:"矩形选择工具",onClick:a[2]||(a[2]=k=>e.activeTool="mouse")},null,2),p("i",{class:K(["icon-hand",{active:e.activeTool==="hand"}]),title:"手拖动工具",onClick:a[3]||(a[3]=k=>e.activeTool="hand")},null,2)])]),_:1}),p("div",{class:"design-box",ref_key:"designBoxEl",ref:A,onScroll:c},[t(Ce,{size:"1920px",scale:e.scale,offset:e.offset,scroll:e.scroll,"show-ruler":e.ruler,"show-line":e.showLine},null,8,["scale","offset","scroll","show-ruler","show-line"]),t(Ce,{size:"1080px",scale:e.scale,offset:e.offset,scroll:e.scroll,"show-ruler":e.ruler,"show-line":e.showLine,direction:"v"},null,8,["scale","offset","scroll","show-ruler","show-line"]),p("div",{onMousedown:ye(oe,["left"]),class:K(["design-canvas",{preview:e.isEye}]),style:ne(O(g)),onContextmenu:o},[t(O(Se),Ae({itemKey:"id",list:u.value.list,name:"fade",class:"drag"},{group:"form",animation:200,handle:".none"},{onAdd:V}),{item:s(({element:k,index:B})=>[t(ze,{data:k,onClick:ye(P=>v(k,B),["stop"]),type:0,scale:e.scale,current:e.activeIndex.includes(B),onControlClick:P=>Y(B,P)},null,8,["data","onClick","scale","current","onControlClick"])]),_:1},16,["list"]),p("div",{class:"draw-react",style:ne(e.react)},[(q=e.activeIndex)!=null&&q.length?(d(),L("span",Il,"选中"+le(e.activeIndex.length)+"个",1)):W("",!0)],4)],46,Tl),u.value.list.length?W("",!0):(d(),L("div",Sl,"请从左则组件栏拖动组件到设计区域"))],544),p("div",$l,[p("i",{class:"icon-menu icon",onClick:a[4]||(a[4]=k=>Q("Left"))}),p("div",Ll,[p("div",Vl,[Rl,t(l,{size:"small",modelValue:e.ruler,"onUpdate:modelValue":a[5]||(a[5]=k=>e.ruler=k)},null,8,["modelValue"])]),p("div",Ul,[El,t(l,{size:"small",modelValue:e.showLine,"onUpdate:modelValue":a[6]||(a[6]=k=>e.showLine=k)},null,8,["modelValue"])]),p("div",Dl,[Ml,t(m,{"show-stops":"",max:200,min:e.autoScale-5,size:"small",marks:U.value,modelValue:e.scale,"onUpdate:modelValue":a[7]||(a[7]=k=>e.scale=k)},null,8,["min","marks","modelValue"])]),p("div",zl,[t(h,{type:"primary",link:"",onClick:a[8]||(a[8]=k=>ee("auto"))},{default:s(()=>[D("自适应")]),_:1}),t(h,{type:"primary",link:"",onClick:a[9]||(a[9]=k=>ee("100"))},{default:s(()=>[D("100%")]),_:1})])]),p("i",{class:"icon-menu icon",onClick:a[10]||(a[10]=k=>Q("Right"))})])]),t(ul,{style:ne({width:e.widthRight}),config:u.value.config,"onUpdate:config":a[11]||(a[11]=k=>u.value.config=k),onOpenDrawer:_,onUpdate:y,ref_key:"configEl",ref:F},null,8,["style","config"]),t(Ne,{modelValue:r.visible,"onUpdate:modelValue":a[12]||(a[12]=k=>r.visible=k),title:r.title,direction:r.direction,content:r.content,"code-type":r.codeType,onBeforeClose:N,onConfirm:J},null,8,["modelValue","title","direction","content","code-type"]),t(Ke,{ref_key:"vueFileEl",ref:T},null,512)])),[[I,e.loading]])}}});export{Bl as default};