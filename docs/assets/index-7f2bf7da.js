import{d as ie,r as G,a as J,b as Ue,h as R,o as g,f as O,w as s,m as o,x as A,L as Ce,c as E,e as le,F as P,l as y,j as K,B as Me,a7 as De,_ as Oe,I as de,G as Ae,t as ee,k as N,M as he,N as ze,z as ye,A as Ie,n as oe,v as je,u as qe,C as Be,y as pe,p as Fe,a5 as Xe,D as Ye,a3 as Te,g as We,a4 as Ge,a8 as $e,W as Ne,E as Se,a9 as Ke,Y as Pe,X as Le,q as He,S as Ve,aa as Ee}from"./index-3679850f.js";import{_ as Je,a as Qe}from"./vueFile.vue_vue_type_script_setup_true_lang-604207ac.js";import{_ as Ze}from"./aceDrawer.vue_vue_type_script_setup_true_lang-7e84294c.js";import{g as el,a as ll}from"./getData-b87e5deb.js";const tl=["bg.jpg","bg2.jpg","bg3.jpg","head_bg.png"],ol=[],nl=[],ve={bg:tl,border:ol,img:nl},al={class:"img-list"},sl=["onClick"],il=["src"],cl={key:0},rl=ie({__name:"upload",emits:["click"],setup(ne,{expose:U,emit:b}){const p=G(!1),r=G(),D=G("bg"),e=J(()=>{if(!ve)return[];const d=[];for(const V in ve)d.push(V);return d}),q=J(()=>D.value.name==="upload"?[]:ve?ve[D.value]:[]),x=J(()=>`./static/screen/${D.value}/`),k=d=>{p.value=!1,b("click",x.value+d,r.value)},L=d=>{D.value="upload",Me(()=>{q.value.unshift(d.path)})};return U({open:(d,V)=>{p.value=!0,r.value=V,d?D.value=d:D.value=e.value[0]}}),Ue(()=>{}),(d,V)=>{const v=R("el-button"),Y=R("el-upload"),z=R("el-tab-pane"),Z=R("el-tabs"),te=R("el-dialog");return g(),O(te,{modelValue:p.value,"onUpdate:modelValue":V[1]||(V[1]=j=>p.value=j),width:"800px",title:"选择上传图片"},{default:s(()=>{var j;return[o(Y,{action:Ce(De),"on-success":L,"show-file-list":!1},{default:s(()=>[o(v,{type:"primary"},{default:s(()=>[A("上传")]),_:1})]),_:1},8,["action"]),o(Z,{modelValue:D.value,"onUpdate:modelValue":V[0]||(V[0]=B=>D.value=B)},{default:s(()=>[(g(!0),E(P,null,le(e.value,B=>(g(),O(z,{label:B,name:B,key:B},null,8,["label","name"]))),128)),o(z,{label:"上传",name:"upload"})]),_:1},8,["modelValue"]),y("div",al,[y("ul",null,[(g(!0),E(P,null,le(q.value,B=>(g(),E("li",{key:B,onClick:ae=>k(B)},[y("img",{src:x.value+B,alt:""},null,8,il)],8,sl))),128))]),(j=q.value)!=null&&j.length?K("",!0):(g(),E("p",cl,"暂无相关素材资源"))])]}),_:1},8,["modelValue"])}}});const ul=Oe(rl,[["__scopeId","data-v-b06a5e4b"]]),pl={key:0},dl=y("h3",null,"接口数据处理事件",-1),fl=y("h3",null,"全局数据",-1),gl=y("h3",null,"接口数据处理事件",-1),vl=ie({__name:"configControl",props:{config:{}},emits:["update:config","openDrawer","update"],setup(ne,{expose:U,emit:b}){const p=ne,r=G({}),D=G(),e=J(()=>r.value.type),q=c=>{b("update:config",Object.assign({},p.config,c))},x=de({bgColor:"",bgLinear:"",bgAngle:0,bgUpload:"",bgSelect:""});Ae(()=>p.config,c=>{if(!Object.keys(r.value).length){const n=c.background||"";if(n.indexOf("url")!==-1){const M=new RegExp("(?<=url\\()(.*?)(?=\\))","g"),S=n.match(M);Object.assign(x,{bgUpload:S,bgSelect:3})}else if(n.indexOf("linear")!==-1){const S=n.substring(n.indexOf("(")+1,n.lastIndexOf(")")).split(/,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/);Object.assign(x,{bgColor:S[1].trim(),bgLinear:S[2].trim(),bgAngle:Number(S[0].replace("deg","")),bgSelect:2})}else Object.assign(x,{bgColor:n,bgSelect:1})}},{immediate:!0});const k=()=>{let c="";switch(x.bgSelect){case 1:c=x.bgColor;break;case 2:c=`linear-gradient(${x.bgAngle}deg, ${x.bgColor}, ${x.bgLinear})`;break;case 3:c=`url(${x.bgUpload})`;break}L("background",c)},L=(c,n)=>{q({[c]:n})},a=c=>{r.value=c},d=J(()=>{var c,n,M,S;if(Object.keys(r.value).length){const{config:_={},position:m,type:I}=r.value;return[{type:"group",title:"位置信息"},{label:"width",value:m.width,placeholder:"请输入宽度",key:"width",path:"position"},{label:"height",value:m.height,placeholder:"请输入高度",key:"height",path:"position"},{type:"number",label:"left",value:m.left,placeholder:"图层位置",key:"left",path:"position"},{type:"number",label:"top",value:m.top,key:"top",path:"position"},{type:"number",label:"right",value:m.right,placeholder:"设置后left为auto",key:"right",path:"position"},{type:"number",label:"bottom",value:m.bottom,placeholder:"设置后top为auto",key:"bottom",path:"position"},{type:"number",label:"zIndex",value:m.zIndex,placeholder:"请输入层级",key:"zIndex",path:"position"},{type:"group",title:"属性信息"},{type:"switch",label:"锁定",value:_.lock,key:"lock"},{type:"switch",label:"隐藏",value:m.display,key:"display",path:"position"},{label:"样式类名",placeholder:"方便引用个性化样式",value:_.class,key:"class"},{label:"文本内容",placeholder:"请输入文本内容",value:_.text,key:"text",vShow:["text"]},{type:"select",label:"滚动方向",placeholder:"请选择滚动方向",value:_.direction,key:"direction",vShow:["sText"],options:{left:"从左到右",right:"从右到左",top:"从上到下",bottom:"从下到上"}},{type:"number",label:"滚动速度",placeholder:"滚动速度，数字越大速度越慢",value:_.speed,key:"speed",vShow:["sText"]},{type:"number",label:"滚动步长",placeholder:"每单位时间滚动的距离，默认1",value:_.step,key:"step",vShow:["sText"]},{type:"textarea",label:"文本内容",placeholder:"请输入文本内容，支持html",value:_.text,key:"text",vShow:["sText"]},{label:"字体大小",placeholder:"文本字体大小,如14px",value:(c=_.style)==null?void 0:c.fontSize,key:"fontSize",path:"style",vShow:["text","clock"]},{label:"边框",placeholder:"如1px solid #000",value:(n=_.style)==null?void 0:n.border,key:"border",path:"style",vShow:["border"]},{type:"color",label:"背景颜色",value:(M=_.style)==null?void 0:M.background,key:"background",path:"style",vShow:["border"]},{type:"color",label:"字体颜色",value:(S=_.style)==null?void 0:S.color,key:"color",path:"style",vShow:["text","clock"]},{type:"select",label:"时间格式",value:_.dateTime,key:"dateTime",allowCreate:!0,filterable:!0,placeholder:"选择或创建时间格式",vShow:["clock"],options:{"{y}-{m}-{d}":"{y}-{m}-{d}","{h}:{i}:{s}":"{h}:{i}:{s}","{y}-{m}-{d} {h}:{i}:{s}":"{y}-{m}-{d} {h}:{i}:{s}","{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}":"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}"}},{label:"组件名称",value:_.component,placeholder:"全局注册的组件名称",key:"component",vShow:["component"]},{type:"switch",label:"是否轮播",value:_.carousel,key:"carousel",vShow:["table"]},{type:"number",label:"滚动速度",placeholder:"开启轮播有效",value:_.speed,key:"speed",vShow:["table"]}].filter(Q=>{let C=!0;return Q.vShow&&(C=Q.vShow.includes(I)),Q.vHide&&(C=!Q.vHide.includes(I)),C})}return[]}),V=(c,n)=>{var M;c.path==="position"?r.value.position[c.key]=n:c.path==="style"?((M=r.value.config)!=null&&M.style||(r.value.config.style={}),r.value.config.style[c.key]=n):r.value.config[c.key]=n,["zIndex","display","lock"].includes(c.key)&&b("update")},v=(c,n)=>{D.value.open(c,n)},Y=(c,n)=>{switch(n){case"screenBg":x.bgUpload=c,k();break;case"src":r.value.config.src=c;break}},z=()=>{b("openDrawer",{codeType:"css",type:"css",title:"当前应用页的样式，类似于.vue文件中的style scoped中的样式"})},Z=()=>{b("openDrawer",{content:r.value.option,title:"可参考echarts相关例子编辑",callback:c=>{r.value.option=c}})},te=()=>{var c;b("openDrawer",{codeType:"json",content:((c=r.value.config)==null?void 0:c.style)||{},title:"可输入更多的css样式，须为json格式",callback:n=>{r.value.config.style=n}})},j=()=>{var c;b("openDrawer",{codeType:"json",content:((c=r.value.config)==null?void 0:c.props)||{},title:"支持所有表格props属性，可参考el-table。json格式",callback:n=>{r.value.config.props=n}})},B=()=>{let c=r.value.columns;(!c||!c.length)&&(c=[{prop:"",label:""}]),b("openDrawer",{codeType:"json",content:c,title:"表格列设置，可参考table-column属性",callback:n=>{r.value.columns=n}})},ae=(c,n)=>{let M;n==="global"?M=p.config&&p.config[c]:M=r.value.events&&r.value.events[c],M||(c==="beforeRequest"?M=S=>(console.log("beforeRequest",S),S):n==="global"?M=S=>(console.log("afterResponse",S),S):M=(S,_,m)=>(console.log("afterResponse",S,_,m),_)),b("openDrawer",{content:M,title:c==="beforeRequest"?"这里可处理请求前的参数，返回相应参数给接口":"接口数据处理。也可为字符串，如opt=formatTest",callback:S=>{n==="global"?p.config[c]=S:(r.value.events||(r.value.events={}),r.value.events[c]=S)}})},be=()=>{var S,_;let c,n;const M=r.value.config.optionsType;M===2?(n="从大屏配置的全局数据里获取指定数据",c=(S=r.value.events)==null?void 0:S.getGlobal,c||(c=(m,I)=>(console.log("getGlobalData",m,I),m))):(n="图表数据，替换相关数据返回即可",["text","sText"].includes(e.value)?(c=(_=r.value.config)==null?void 0:_.text,n="编辑文本内容数据"):c=r.value.option,e.value==="table"&&(n="表格列表数据。根据设定的table-column列数据设置对应的数据")),b("openDrawer",{content:c,title:n,callback:m=>{M===2?(r.value.events||(r.value.events={}),r.value.events.getGlobal=m):["text","sText"].includes(e.value)?r.value.config.text=m:r.value.option=m}})};return U({setCurrent:a}),(c,n)=>{var ge;const M=R("el-switch"),S=R("el-color-picker"),_=R("el-input"),m=R("el-option"),I=R("el-select"),Q=R("el-input-number"),C=R("el-form-item"),W=R("el-button"),se=R("el-form"),ce=R("el-tab-pane"),re=R("el-radio"),me=R("el-radio-group"),ue=R("el-tabs"),fe=R("el-slider");return g(),E("div",{class:N(["main-right",{lock:(ge=r.value.config)==null?void 0:ge.lock}])},[Object.keys(r.value).length?(g(),O(ue,{key:0,class:"tabs","model-value":"screen"},{default:s(()=>[o(ce,{label:"位置属性",name:"screen"},{default:s(()=>[o(se,{size:"small"},{default:s(()=>[(g(!0),E(P,null,le(d.value,(i,ke)=>(g(),O(C,{label:i.label,key:ke},{default:s(()=>[i.type==="group"?(g(),E("h3",pl,ee(i.title),1)):i.type==="switch"?(g(),O(M,{key:1,"model-value":i.value,onChange:X=>V(i,X),class:N([i.key])},null,8,["model-value","onChange","class"])):i.type==="color"?(g(),O(S,{key:2,"show-alpha":"",onChange:X=>V(i,X),"model-value":i.value},null,8,["onChange","model-value"])):i.type==="textarea"?(g(),O(_,{key:3,type:"textarea",placeholder:i.placeholder,onChange:X=>V(i,X),"model-value":i.value},null,8,["placeholder","onChange","model-value"])):i.type==="select"?(g(),O(I,{key:4,allowCreate:i.allowCreate,filterable:i.filterable,placeholder:i.placeholder,onChange:X=>V(i,X),"model-value":i.value},{default:s(()=>[(g(!0),E(P,null,le(i.options,(X,_e)=>(g(),O(m,{key:X,label:X,value:_e},null,8,["label","value"]))),128))]),_:2},1032,["allowCreate","filterable","placeholder","onChange","model-value"])):i.type==="number"?(g(),O(Q,{key:5,"controls-position":"right",placeholder:i.placeholder,"model-value":i.value,onInput:X=>V(i,X)},null,8,["placeholder","model-value","onInput"])):(g(),O(_,{key:6,placeholder:i.placeholder,"model-value":i.value,onInput:X=>V(i,X)},null,8,["placeholder","model-value","onInput"]))]),_:2},1032,["label"]))),128)),["image","background"].includes(e.value)?(g(),O(C,{key:0,class:"upload-image"},{default:s(()=>[o(_,{placeholder:"请输入图片地址",modelValue:r.value.config.src,"onUpdate:modelValue":n[0]||(n[0]=i=>r.value.config.src=i)},null,8,["modelValue"]),o(W,{type:"primary",onClick:n[1]||(n[1]=i=>v(e.value==="image"?"img":"bg","src"))},{default:s(()=>[A("选择图片")]),_:1})]),_:1})):K("",!0),["line","bar","pie","echarts"].includes(e.value)?(g(),O(C,{key:1},{default:s(()=>[o(W,{type:"primary",onClick:Z},{default:s(()=>[A("图表编辑")]),_:1})]),_:1})):K("",!0),["text","sText","image","background","border","clock"].includes(e.value)?(g(),O(C,{key:2},{default:s(()=>[o(W,{type:"primary",onClick:te},{default:s(()=>[A("编辑更多内联样式")]),_:1})]),_:1})):K("",!0),["table"].includes(e.value)?(g(),O(C,{key:3},{default:s(()=>[o(W,{type:"primary",onClick:j},{default:s(()=>[A("表格属性")]),_:1}),o(W,{type:"primary",onClick:B},{default:s(()=>[A("Table-column")]),_:1})]),_:1})):K("",!0)]),_:1})]),_:1}),o(ce,{label:"数据",name:"data"},{default:s(()=>[["line","bar","pie","echarts","text","sText","table"].includes(e.value)?(g(),O(se,{key:0,size:"small"},{default:s(()=>[o(C,{label:"数据类型"},{default:s(()=>[o(me,{modelValue:r.value.config.optionsType,"onUpdate:modelValue":n[2]||(n[2]=i=>r.value.config.optionsType=i)},{default:s(()=>[o(re,{label:0,style:{"margin-right":"4px"}},{default:s(()=>[A("静态")]),_:1}),o(re,{label:2,style:{"margin-right":"4px"}},{default:s(()=>[A("全局")]),_:1}),o(re,{label:1},{default:s(()=>[A("动态")]),_:1})]),_:1},8,["modelValue"])]),_:1}),r.value.config.optionsType!==1?(g(),O(C,{key:0},{default:s(()=>[o(W,{type:"primary",onClick:be},{default:s(()=>[A("编辑数据")]),_:1})]),_:1})):K("",!0),r.value.config.optionsType===1?(g(),E(P,{key:1},[o(C,null,{default:s(()=>[o(_,{modelValue:r.value.config.requestUrl,"onUpdate:modelValue":n[4]||(n[4]=i=>r.value.config.requestUrl=i),placeholder:"接口URL或api中的key"},{prepend:s(()=>[o(I,{modelValue:r.value.config.method,"onUpdate:modelValue":n[3]||(n[3]=i=>r.value.config.method=i),style:{width:"60px"}},{default:s(()=>[o(m,{label:"get",value:"get"}),o(m,{label:"post",value:"post"}),o(m,{label:"ws",value:"ws",disabled:""})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),o(C,{label:"刷新时间"},{default:s(()=>[o(Q,{modelValue:r.value.config.loopTime,"onUpdate:modelValue":n[5]||(n[5]=i=>r.value.config.loopTime=i),disabled:""},null,8,["modelValue"])]),_:1}),o(C,null,{default:s(()=>[dl]),_:1}),o(C,null,{default:s(()=>[o(W,{onClick:n[6]||(n[6]=i=>ae("beforeRequest"))},{default:s(()=>[A("beforeRequest")]),_:1})]),_:1}),o(C,null,{default:s(()=>[o(W,{onClick:n[7]||(n[7]=i=>ae("afterResponse"))},{default:s(()=>[A("afterResponse")]),_:1})]),_:1})],64)):K("",!0)]),_:1})):K("",!0)]),_:1})]),_:1})):(g(),O(ue,{key:1,class:"tabs","model-value":"screen"},{default:s(()=>[o(ce,{label:"大屏配置",name:"screen"},{default:s(()=>[o(se,{size:"small"},{default:s(()=>[o(C,{label:"大屏宽度"},{default:s(()=>[o(_,{placeholder:"请输入大屏宽度","model-value":c.config.width,onInput:n[8]||(n[8]=i=>L("width",i))},null,8,["model-value"])]),_:1}),o(C,{label:"大屏高度"},{default:s(()=>[o(_,{placeholder:"请输入大屏高度","model-value":c.config.height,onInput:n[9]||(n[9]=i=>L("height",i))},null,8,["model-value"])]),_:1}),o(C,{class:"color-picker",label:"主色"},{default:s(()=>[o(S,{"show-alpha":"",onChange:n[10]||(n[10]=i=>L("primary",i)),"model-value":c.config.primary},null,8,["model-value"])]),_:1}),o(C,{label:"背景"},{default:s(()=>[o(I,{modelValue:x.bgSelect,"onUpdate:modelValue":n[11]||(n[11]=i=>x.bgSelect=i),onChange:k},{default:s(()=>[o(m,{value:1,label:"背景色"}),o(m,{value:2,label:"渐变色"}),o(m,{value:3,label:"背景图"})]),_:1},8,["modelValue"])]),_:1}),x.bgSelect!==3?(g(),O(C,{key:0,class:"color-picker"},{default:s(()=>[o(S,{"show-alpha":"",modelValue:x.bgColor,"onUpdate:modelValue":n[12]||(n[12]=i=>x.bgColor=i),onChange:k},null,8,["modelValue"])]),_:1})):K("",!0),x.bgSelect===2?(g(),E(P,{key:1},[o(C,{class:"color-picker"},{default:s(()=>[o(S,{"show-alpha":"",modelValue:x.bgLinear,"onUpdate:modelValue":n[13]||(n[13]=i=>x.bgLinear=i),onChange:k},null,8,["modelValue"])]),_:1}),o(C,{label:"渐变角度"},{default:s(()=>[o(fe,{modelValue:x.bgAngle,"onUpdate:modelValue":n[14]||(n[14]=i=>x.bgAngle=i),max:360,onChange:k},null,8,["modelValue"])]),_:1})],64)):K("",!0),x.bgSelect===3?(g(),O(C,{key:2,class:"upload-image"},{default:s(()=>[o(_,{placeholder:"请输入图片地址",modelValue:x.bgUpload,"onUpdate:modelValue":n[15]||(n[15]=i=>x.bgUpload=i),onChange:k},null,8,["modelValue"]),o(W,{type:"primary",onClick:n[16]||(n[16]=i=>v("bg","screenBg"))},{default:s(()=>[A("上传")]),_:1})]),_:1})):K("",!0),o(C,null,{default:s(()=>[o(W,{onClick:z},{default:s(()=>[A("编辑样式")]),_:1})]),_:1}),o(C,null,{default:s(()=>[fl]),_:1}),o(C,null,{default:s(()=>[o(_,{"model-value":c.config.requestUrl,placeholder:"接口URL或api中的key",onInput:n[18]||(n[18]=i=>L("requestUrl",i))},{prepend:s(()=>[o(I,{"model-value":c.config.method,style:{width:"60px"},onChange:n[17]||(n[17]=i=>L("method",i))},{default:s(()=>[o(m,{label:"get",value:"get"}),o(m,{label:"post",value:"post"}),o(m,{label:"ws",value:"ws",disabled:""})]),_:1},8,["model-value"])]),_:1},8,["model-value"])]),_:1}),o(C,{label:"刷新时间"},{default:s(()=>[o(Q,{disabled:"","model-value":c.config.loopTime,onInput:n[19]||(n[19]=i=>L("loopTime",i))},null,8,["model-value"])]),_:1}),o(C,null,{default:s(()=>[gl]),_:1}),o(C,null,{default:s(()=>[o(W,{onClick:n[20]||(n[20]=i=>ae("beforeRequest","global"))},{default:s(()=>[A("beforeRequest")]),_:1})]),_:1}),o(C,null,{default:s(()=>[o(W,{onClick:n[21]||(n[21]=i=>ae("afterResponse","global"))},{default:s(()=>[A("afterResponse")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),o(ul,{ref_key:"uploadImageEl",ref:D,onClick:Y},null,512)],2)}}}),hl={class:"main-left"},yl={class:"components-list scroll"},bl={class:"title"},ml=["title"],kl={class:"scroll layer-list"},_l=["onClick"],wl=["onClick"],xl=["onClick"],Il=y("i",{class:"icon-del"},null,-1),Cl=ie({__name:"controlLeft",props:{active:{}},emits:["update","update:active"],setup(ne,{expose:U,emit:b}){const p={line:["折线图","line"],bar:["柱状图","bar"],pie:["饼图","pie"],echarts:["通用图表",""],table:["表格","table"],text:["文本","text2"],sText:["滚动文本","stext"],image:["图片","image"],background:["背景","image"],border:["边框","border"],clock:["当前时间","time"],component:["自定义","component"]},r=G([]),D=G([{label:"图表",children:[{type:"line",label:p.line[0],icon:p.line[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{type:"bar",label:p.bar[0],icon:p.bar[1],position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{type:"pie",label:p.pie[0],icon:p.pie[1],position:{width:300,height:300},option:{series:[{type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}},{type:"echarts",label:p.echarts[0],icon:p.echarts[1],position:{width:400,height:300},option:{}}]},{label:"表格",children:[{type:"table",label:p.table[0],icon:p.table[1],position:{width:500,height:300},option:[],columns:[]}]},{label:"辅助",children:[{type:"text",label:p.text[0],icon:p.text[1],position:{width:100,height:30},config:{text:"文本内容"}},{type:"sText",label:p.sText[0],icon:p.sText[1],position:{width:100,height:30},config:{text:"滚动文本内容"}},{type:"image",label:p.image[0],icon:p.image[1],position:{width:100,height:50},config:{src:""}},{type:"background",label:p.background[0],icon:p.background[1],position:{width:100,height:50},config:{src:""}},{type:"border",label:p.border[0],icon:p.border[1],position:{width:100,height:100},config:{style:{border:"1px solid #fff"}}}]},{label:"其他",children:[{type:"clock",label:p.clock[0],icon:p.clock[1],position:{width:150,height:30}}]},{label:"自定义组件",children:[{type:"component",label:p.component[0],icon:p.component[1],position:{width:200,height:200},config:{}}]}]),e=k=>he(k),q=(k,L)=>{let a=!1;switch(L){case"display":a=!k.display,k.display=a;break;case"lock":a=!k.lock,k.lock=a;break;case"active":b("update:active",[k.index]);break}b("update",L,k.index,a)};return U({setLayer:k=>{const L=[];k.forEach((a,d)=>{a.type==="group"?L.push({label:"合并组",zIndex:a.position.zIndex||0,display:a.position.display,lock:a.config.lock,index:d,icon:"",groupId:a.id,type:"group"}):L.push({label:p[a.type][0],icon:p[a.type][1],zIndex:a.position.zIndex||0,display:a.position.display,lock:a.config.lock,index:d,groupId:a.groupId})}),r.value=L.sort(function(a,d){return a.groupId<d.groupId?-1:a.groupId>d.groupId?1:a.icon.localeCompare(d.icon)})}}),(k,L)=>{const a=R("el-tab-pane"),d=R("el-popconfirm"),V=R("el-tabs");return g(),E("div",hl,[o(V,{"model-value":"component",class:"tabs"},{default:s(()=>[o(a,{label:"组件",name:"component"},{default:s(()=>[y("div",yl,[(g(!0),E(P,null,le(D.value,(v,Y)=>(g(),E("div",{key:Y},[y("div",bl,ee(v.label),1),o(Ce(ze),{itemKey:"label",tag:"ul",modelValue:v.children,"onUpdate:modelValue":z=>v.children=z,group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:e},{item:s(({element:z})=>[y("li",{class:N([z.type])},[y("i",{class:N(`icon-${z.icon}`)},null,2),y("span",{title:z.label},ee(z.label),9,ml)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])]),_:1}),o(a,{label:"图层",name:"layer"},{default:s(()=>[y("div",kl,[y("ul",null,[(g(!0),E(P,null,le(r.value,(v,Y)=>(g(),E("li",{key:Y,class:N({active:k.active.includes(v.index),lock:v.lock,display:v.display,isGroup:v.groupId&&!v.type})},[y("span",{onClick:z=>q(v,"active")},[y("i",{class:N(`icon-${v.icon}`)},null,2),A(" "+ee(v.label),1)],8,_l),y("i",{onClick:z=>q(v,"display"),class:N(["icon",[v.display?"icon-eye-close":"icon-eye"]])},null,10,wl),y("i",{onClick:z=>q(v,"lock"),class:N(["icon",[v.lock?"icon-lock":"icon-lock-open"]])},null,10,xl),o(d,{title:"确认删除",onConfirm:z=>q({index:v.index},"del")},{reference:s(()=>[Il]),_:2},1032,["onConfirm"])],2))),128))])])]),_:1})]),_:1})])}}}),Tl=["onMousedown"],Re=ie({__name:"ruler",props:{direction:{default:"h"},scale:{},offset:{},showRuler:{type:Boolean},showLine:{type:Boolean},size:{},scroll:{}},setup(ne){const U=ne,b=de({leftTop:0,moveFlag:!1,moveLine:!1,line:[]}),p=J(()=>{let d={};return U.direction==="v"&&U.scroll[0]>0&&(d={left:U.scroll[0]+20+"px"}),{width:U.size,...d}}),r=J(()=>{let d;return U.direction==="h"?d={left:b.leftTop+"px"}:d={top:b.leftTop+"px"},{display:b.moveFlag?"block":"none",...d}}),D=J(()=>{const d=U.direction==="h"?1920:1080,V=[];for(let v=0;v<d;v=v+100)V.push(v);return V}),e=d=>parseInt(`${d/U.scale*100}`),q=()=>{b.moveFlag=!0,document.onmousemove=d=>{if(!b.moveFlag)return;const V=parseInt(`${d.pageX-U.offset[0]+U.scroll[0]}`),v=parseInt(`${d.pageY-U.offset[1]+U.scroll[1]}`);b.leftTop=U.direction==="h"?V:v},document.onmouseup=function(){k()}},x=()=>{b.moveFlag&&(b.line.includes(b.leftTop)||b.line.push(b.leftTop))},k=()=>{b.moveFlag=!1,document.onmousemove=null,document.onmouseup=null},L=d=>U.direction==="h"?{left:d+"px"}:{top:d+"px"},a=(d,V,v)=>{b.moveLine=!0;const Y=v.pageX-V,z=v.pageY-V;document.onmousemove=Z=>{if(!b.moveLine)return;const te=parseInt(`${Z.pageX-Y}`),j=parseInt(`${Z.pageY-z}`),B=U.direction==="h"?te:j;B<30?(b.line.splice(d,1),b.moveLine=!1):b.line[d]=B},document.onmouseup=function(){b.moveLine=!1,k()}};return(d,V)=>(g(),E(P,null,[ye(y("div",{class:N(["screen-ruler",`ruler-${d.direction}`]),style:oe(p.value)},[y("div",{class:"ruler-box",onMouseenter:q,onMouseleave:k,onMousedown:x},[(g(!0),E(P,null,le(D.value,v=>(g(),E("span",{key:v},ee(e(v)),1))),128))],32)],6),[[Ie,d.showRuler]]),ye(y("div",null,[y("div",{class:N(["ruler-line dotted",`line-${d.direction}`]),style:oe(r.value)},[y("span",null,ee(e(b.leftTop-20)),1)],6),(g(!0),E(P,null,le(b.line,(v,Y)=>(g(),E("div",{class:N(["ruler-line",`line-${d.direction}`]),key:v,style:oe(L(v)),onMousedown:z=>a(Y,v,z)},[y("span",null,ee(e(v-20)),1)],46,Tl))),128))],512),[[Ie,d.showLine]])],64))}});const $l=["onClick"],Sl=ie({__name:"rightMenu",emits:["click"],setup(ne,{expose:U,emit:b}){const p=de({offsetX:0,offsetY:0,visible:!1,type:0}),r=J(()=>{const k={0:["split","copy"],1:["merge"],2:["merge","split","left","right","top","bottom","horizontally","verticalCenter"]};return[{key:"merge",label:"组合"},{key:"split",label:"拆分"},{key:"left",label:"左对齐"},{key:"right",label:"右对齐",display:!0},{key:"top",label:"顶部对齐",display:!0},{key:"bottom",label:"底部对齐",display:!0},{key:"horizontally",label:"水平居中",display:!0},{key:"verticalCenter",label:"垂直居中",display:!0},{key:"copy",label:"复制"},{key:"del",label:"删除"},{key:"lock",label:"锁定"},{key:"display",label:"隐藏"}].filter(L=>!k[p.type].includes(L.key))}),D=J(()=>({left:p.offsetX+"px",top:p.offsetY+"px"})),e=()=>{setTimeout(()=>{p.visible=!1},1e3)},q=k=>{b("click",k,p.type),p.visible=!1};return U({open:({x:k,y:L,type:a})=>{p.offsetX=k+10,p.offsetY=L,p.type=a||0,p.visible=!0}}),(k,L)=>ye((g(),E("div",{class:"screen-right-menu",style:oe(D.value),onMouseleave:e},[y("ul",null,[(g(!0),E(P,null,le(r.value,a=>(g(),E("li",{key:a.key,onClick:d=>q(a.key),class:N({display:a.display})},ee(a.label),11,$l))),128))])],36)),[[Ie,p.visible]])}}),Ll={class:"container-screen"},Vl={class:"main-box"},El={class:"control-tools"},Rl=["onMousedown"],Ul={key:0},Ml={key:0,class:"no-date"},zl={class:"design-footer"},Dl={class:"center"},Ol={class:"item"},Al=y("label",{class:"label"},"标尺",-1),jl={class:"item"},ql=y("label",{class:"label"},"参考线",-1),Bl={class:"item slider"},Fl=y("label",{class:"label"},"缩放比例",-1),Xl={class:"item"},Kl=ie({__name:"index",setup(ne){je().changeBreadcrumb([{label:"系统工具"},{label:"可视化大屏设计"}]);const b=qe(),p=Be(),r=pe("screenToolWidthLeft")||"",D=pe("screenToolWidthRight")||"",e=de({showLine:!0,scale:100,autoScale:100,ruler:!0,widthLeft:r==="0"?"":r,widthRight:D==="0"?"":D,offset:[],scroll:[0,0],translateX:0,translateY:0,moveFlag:!1,loading:!1,isEye:!1,activeIndex:[],activeTool:"mouse",rect:{left:"0px",top:"0px",width:"0px",height:"0px",display:"none"}}),q=G(),x=G(),k=G(),L=G(),a=G({list:[],config:{width:"1920px",height:"1080px",background:"#000",style:"",primary:"#409eff"}}),d=G({});Fe("globalScreen",d);const V=J(()=>{const{width:t,height:l,background:u,primary:h}=a.value.config,w=e.scale/100;return{width:t,height:l,background:u,transform:`scale(${w})`,color:h,cursor:e.activeTool==="mouse"?"default":"pointer"}}),v=()=>{e.activeIndex=[],_({})},Y=(t,l)=>{e.rect.display="none",e.activeIndex=[l],_(t)},z=G({100:{style:{}}}),Z=t=>{let l;t==="Left"?(e.widthLeft=e.widthLeft===""?"0px":"",l=e.widthLeft):(e.widthRight=e.widthRight===""?"0px":"",l=e.widthRight),setTimeout(()=>{B()},500),pe("screenToolWidth"+t,l||"0")},te=t=>{j.value.scrollTo(0,0),t==="auto"?e.scale=e.autoScale:e.scale=100,pe("screenScale",e.scale+"")},j=G(),B=()=>{Me(()=>{const t=j.value.offsetWidth,l=parseInt(a.value.config.width);if(t&&l){const h=parseInt(`${t/l*100}`);e.autoScale=h;const w=pe("screenScale");e.scale=parseInt(w)||h}const u=j.value.getBoundingClientRect();e.offset[1]=u.top+document.documentElement.scrollTop-(document.documentElement.clientTop||0),e.offset[0]=u.left+document.documentElement.scrollLeft-(document.documentElement.clientLeft||0)})},ae=t=>{v(),e.moveFlag=!0;const l=j.value.scrollTop,u=j.value.scrollLeft,h=t.pageX+u,w=t.pageY+l,T=(t.pageX-e.offset[0]-20+e.scroll[0])/(e.scale/100),$=(t.pageY-e.offset[1]-20+e.scroll[1])/(e.scale/100);e.rect={left:T+"px",top:$+"px",width:"0px",height:"0px",display:"none"},document.onmousemove=f=>{if(e.moveFlag)if(e.activeTool==="mouse"){const F=(f.pageX-e.offset[0]-20+e.scroll[0])/(e.scale/100),H=(f.pageY-e.offset[1]-20+e.scroll[1])/(e.scale/100),we=T>F?F:T,xe=$>H?H:$;e.rect={left:we+"px",top:xe+"px",width:Math.abs(T-F)+"px",height:Math.abs($-H)+"px",display:"block"}}else{const F=h-f.pageX,H=w-f.pageY;j.value.scrollTo(F,H)}},document.onmouseup=function(){const{width:f,height:F}=e.rect;parseInt(f)>10&&parseInt(F)>10?be():e.rect.display="none",e.moveFlag=!1,document.onmousemove=null}},be=()=>{if(a.value.list.forEach((l,u)=>{$e(l.position)&&t(l.position)&&l.type!=="group"&&!l.groupId&&!l.config.lock&&(e.activeIndex.includes(u)||e.activeIndex.push(u))}),e.activeIndex.length){const{left:l,top:u,width:h,height:w}=c();e.rect={left:l+"px",top:u+"px",width:h+"px",height:w+"px",display:"block"}}else e.rect.display="none";function t(l){const u=l.left,h=l.top,w=l.left+parseInt(l.width),T=l.top+parseInt(l.height),$=parseInt(e.rect.left),f=parseInt(e.rect.top),F=$+parseInt(e.rect.width),H=f+parseInt(e.rect.height),we=u<F&&$<w,xe=h<H&&f<T;return we&&xe}},c=()=>{const t={left:0,top:0,ex:0,ey:0};return a.value.list.forEach((u,h)=>{if(e.activeIndex.includes(h)){const{left:w,top:T,width:$,height:f}=u.position;t.left=l(t.left,w),t.top=l(t.top,T),t.ex=Math.max(t.ex,parseInt(`${$}`)+w),t.ey=Math.max(t.ey,parseInt(`${f}`)+T)}}),{left:t.left,top:t.top,width:Math.abs(t.ex-t.left),height:Math.abs(t.ey-t.top)};function l(u,h){return u===0?h:Math.min(u,h)}},n=()=>{const t=j.value.scrollTop,l=j.value.scrollLeft;e.scroll=[l,t]},M=t=>{t.preventDefault()},S=t=>{const l=t.newIndex,u=a.value.list[l];delete u.label,delete u.icon;const{pageX:h,pageY:w}=t.originalEvent;u.position||(u.position={}),u.config||(u.config={}),u.position.left=parseInt(`${h-e.offset[0]+e.scroll[0]}`),u.position.top=parseInt(`${w-e.offset[1]+e.scroll[1]}`),e.rect.display="none",e.activeIndex=[l],_(u),m()},_=t=>{q.value.setCurrent(t)},m=()=>{x.value.setLayer(a.value.list)},I=de({visible:!1,title:"",direction:"",content:"",codeType:"",callback:""}),Q=()=>{se()},C=t=>{try{if(typeof I.callback=="function"){const l=I.codeType==="json"?Ne(t):Se(t);I.callback(l)}else switch(I.type){case"css":a.value.config.style=t,Ke("screenStyle",t,!0);break;case"json":a.value=Se(t),m();break}se()}catch{}},W=t=>{const{type:l,direction:u,codeType:h,title:w,callback:T,content:$}=t;I.direction=u||"ltr",I.type=l,I.codeType=h||"",I.title=w?`提示：${w}`:"",I.visible=!0,I.callback=T;let f=h==="json"?Pe($,!0):Le($,!0);switch(l){case"css":f=a.value.config.style||"";break}I.content=f},se=()=>{I.visible=!1,I.type="",I.title="",I.codeType="",I.callback="",I.content=""},ce=t=>{switch(t){case"del":a.value.list=[],v(),m();break;case"eye":e.isEye=!0;break;case"json":W({type:"json",content:a.value,title:"可编辑修改或将已生成的脚本粘贴进来"});break;case"vue":k.value.openScreen(a.value);break;case"save":re();break}},re=()=>{const t={data:Le(a.value),name:"未命名可视化大屏",type:4};let l="designSave";const u=b.query.id;u&&(Object.assign(t,{id:u}),delete t.name,l="designEdit"),e.loading=!0,He(l,t).then(h=>{Ve({message:h.message||"保存成功！",type:"success"}),u||p.push({path:"/design/dataScreen/list"}),e.loading=!1}).catch(h=>{Ve.error(h.message||"保存异常"),e.loading=!1}),v()},me=()=>{e.loading=!0,el(b.query.id).then(t=>{e.loading=!1,a.value=t,m();const{requestUrl:l,afterResponse:u,beforeRequest:h,method:w}=a.value.config;l&&ll(l,u,h,w).then(T=>{d.value=T})}).catch(()=>{e.loading=!1})},ue=(t,l,u)=>{e.rect.display="none";const h=a.value.list[l].id,w=a.value.list;if(["display","lock"].includes(t)&&(t==="display"?w[l].position[t]=u:w[l].config[t]=u,h&&w.forEach(T=>{T.groupId===h&&(t==="display"?T.position.display=u:T.config.lock=u)}),_(w[l])),t==="del"&&(a.value.list.splice(l,1),v(),h&&(a.value.list=w.filter(T=>T.groupId!==h))),t==="copy"){let T="";const $=he(a.value.list[l]);h&&(T=Ee(8),$.id=T,w.forEach(F=>{if(F.groupId===h){const H=he(F);H.groupId=T,a.value.list.push(H)}})),a.value.list.push($);const f=a.value.list.length-1;Y($,f)}m()},fe=t=>{var h;if(!((h=e.activeIndex)!=null&&h.length))return;const l=he(e.activeIndex),u=a.value.list[e.activeIndex[0]].id;e.activeIndex.length===1&&u&&a.value.list.forEach((w,T)=>{w.groupId===u&&l.push(T)});for(const w in l){const T=l[w],$=a.value.list[T];if(!$e($==null?void 0:$.position)){console.log("不能移");break}t.key==="ArrowRight"?$.position.left++:t.key==="ArrowLeft"?$.position.left--:t.key==="ArrowDown"?$.position.top++:t.key==="ArrowUp"&&$.position.top--}e.rect.display==="block"&&(t.key==="ArrowRight"?e.rect.left=parseInt(e.rect.left)+1+"px":t.key==="ArrowLeft"?e.rect.left=parseInt(e.rect.left)-1+"px":t.key==="ArrowDown"?e.rect.top=parseInt(e.rect.top)+1+"px":t.key==="ArrowUp"&&(e.rect.top=parseInt(e.rect.top)-1+"px")),t.preventDefault()},ge=t=>{L.value.open({x:t.pageX,y:t.pageY}),t.preventDefault()},i=({x:t,y:l,type:u})=>{L.value.open({x:t,y:l,type:u})},ke=(t,l)=>{const{list:u}=a.value,{id:h,position:w}=u[e.activeIndex[0]];let T,$=0;switch(t){case"merge":X();break;case"split":u.forEach(f=>{f.groupId===h&&delete f.groupId}),a.value.list.splice(e.activeIndex[0],1),v(),m();break;case"left":l===0?T=parseInt(e.rect.left):l===1&&(T=w.left),a.value.list.forEach((f,F)=>{(l===0&&e.activeIndex.includes(F)||l===1&&f.groupId===h)&&(f.position.left=T,f.position.width>$&&($=parseInt(f.position.width)))}),l===0?e.rect.width=$+"px":l===1&&(a.value.list[e.activeIndex[0]].position.width=$);break;case"right":case"top":case"bottom":case"horizontally":case"verticalCenter":break;case"copy":case"del":case"lock":case"display":ue(t,e.activeIndex[0],!0);break}},X=()=>{const t=Ee(8);a.value.list.push({type:"group",position:{left:parseInt(e.rect.left),top:parseInt(e.rect.top),width:parseInt(e.rect.width),height:parseInt(e.rect.height),zIndex:110},config:{},id:t}),a.value.list.forEach((u,h)=>{e.activeIndex.includes(h)&&(u.groupId=t)});const l=a.value.list.length-1;Y(a.value.list[l],l),m()},_e=()=>{};return Ue(()=>{B(),me(),document.addEventListener("keydown",fe)}),Xe(()=>{document.removeEventListener("keydown",fe)}),(t,l)=>{var $;const u=R("el-switch"),h=R("el-slider"),w=R("el-button"),T=Ye("loading");return ye((g(),E("div",Ll,[e.isEye?(g(),E("i",{key:0,class:"icon-close close-preview",onClick:l[0]||(l[0]=f=>e.isEye=!1)})):K("",!0),o(Cl,{style:oe({width:e.widthLeft}),ref_key:"controlLeftEl",ref:x,active:e.activeIndex,"onUpdate:active":l[1]||(l[1]=f=>e.activeIndex=f),onUpdate:ue},null,8,["style","active"]),y("div",Vl,[o(Je,{onClick:ce},{default:s(()=>[y("div",El,[y("i",{class:N(["icon-mouse",{active:e.activeTool==="mouse"}]),title:"矩形选择工具",onClick:l[2]||(l[2]=f=>e.activeTool="mouse")},null,2),y("i",{class:N(["icon-hand",{active:e.activeTool==="hand"}]),title:"手拖动工具",onClick:l[3]||(l[3]=f=>e.activeTool="hand")},null,2)])]),_:1}),y("div",{class:"design-box",ref_key:"designBoxEl",ref:j,onScroll:n},[o(Re,{size:"1920px",scale:e.scale,offset:e.offset,scroll:e.scroll,"show-ruler":e.ruler,"show-line":e.showLine},null,8,["scale","offset","scroll","show-ruler","show-line"]),o(Re,{size:"1080px",scale:e.scale,offset:e.offset,scroll:e.scroll,"show-ruler":e.ruler,"show-line":e.showLine,direction:"v"},null,8,["scale","offset","scroll","show-ruler","show-line"]),y("div",{onMousedown:Te(ae,["left"]),class:N(["design-canvas",{preview:e.isEye}]),style:oe(V.value),onContextmenu:M},[o(Ce(ze),Ge({itemKey:"id",list:a.value.list,name:"fade",class:"drag"},{group:"form",animation:200,handle:".none"},{onAdd:S}),{item:s(({element:f,index:F})=>[o(We,{data:f,onClick:Te(H=>Y(f,F),["stop"]),type:0,scale:e.scale,current:e.activeIndex.includes(F),onContextmenu:i,onMoveOrResize:_e},null,8,["data","onClick","scale","current"])]),_:1},16,["list"]),y("div",{class:"draw-react",style:oe(e.rect),onContextmenu:ge},[($=e.activeIndex)!=null&&$.length?(g(),E("span",Ul,"选中"+ee(e.activeIndex.length)+"个",1)):K("",!0)],36)],46,Rl),a.value.list.length?K("",!0):(g(),E("div",Ml," 请从左则组件栏拖动组件到设计区域 "))],544),y("div",zl,[y("i",{class:"icon-menu icon",onClick:l[4]||(l[4]=f=>Z("Left"))}),y("div",Dl,[y("div",Ol,[Al,o(u,{size:"small",modelValue:e.ruler,"onUpdate:modelValue":l[5]||(l[5]=f=>e.ruler=f)},null,8,["modelValue"])]),y("div",jl,[ql,o(u,{size:"small",modelValue:e.showLine,"onUpdate:modelValue":l[6]||(l[6]=f=>e.showLine=f)},null,8,["modelValue"])]),y("div",Bl,[Fl,o(h,{"show-stops":"",max:200,min:e.autoScale-5,size:"small",marks:z.value,modelValue:e.scale,"onUpdate:modelValue":l[7]||(l[7]=f=>e.scale=f)},null,8,["min","marks","modelValue"])]),y("div",Xl,[o(w,{type:"primary",link:"",onClick:l[8]||(l[8]=f=>te("auto"))},{default:s(()=>[A("自适应 ")]),_:1}),o(w,{type:"primary",link:"",onClick:l[9]||(l[9]=f=>te("100"))},{default:s(()=>[A("100% ")]),_:1})])]),y("i",{class:"icon-menu icon",onClick:l[10]||(l[10]=f=>Z("Right"))})])]),o(vl,{style:oe({width:e.widthRight}),config:a.value.config,"onUpdate:config":l[11]||(l[11]=f=>a.value.config=f),onOpenDrawer:W,onUpdate:m,ref_key:"configEl",ref:q},null,8,["style","config"]),o(Ze,{modelValue:I.visible,"onUpdate:modelValue":l[12]||(l[12]=f=>I.visible=f),title:I.title,direction:I.direction,content:I.content,"code-type":I.codeType,onBeforeClose:Q,onConfirm:C},null,8,["modelValue","title","direction","content","code-type"]),o(Qe,{ref_key:"vueFileEl",ref:k},null,512),o(Sl,{ref_key:"rightMenuEl",ref:L,onClick:ke},null,512)])),[[T,e.loading]])}}});export{Kl as default};
