import{d as f,C as b,r as o,h as a,o as y,c as _,m as s,w as n,x as g,t as r}from"./index-3679850f.js";const x=f({__name:"list",setup(k){const l=b(),c=o(),i=o({list:[{type:"input",control:{modelValue:"",placeholder:"请输入流程名称"},config:{},name:"name",item:{label:"流程名称"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:""},name:"flow",item:{label:"流程分类"}},{type:"button",control:{label:"查询",type:"primary",key:"submit"},config:{}},{type:"button",control:{label:"重置",key:"reset"},config:{}}],form:{size:"default"},config:{}}),p=o({columns:[{label:"多选",type:"selection"},{label:"流程名称",prop:"name"},{label:"流程表单",prop:"sourceName"},{label:"分类",prop:"category",config:{dictKey:"flow"}},{label:"状态",prop:"status",config:{dictKey:"status",tagList:{0:"info",1:"success"}}},{label:"操作",prop:"__control"}],config:{},controlBtn:[{label:"新增流程",type:"primary",size:"small",icon:"plus",click:()=>{l.push({path:"/design/flow"})}},{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}],operateBtn:[{label:"编辑",click:e=>{l.push({path:"/design/flow",query:{id:e.id}})}},{label:"删除",key:"del"}]}),u=e=>(e.type=3,e);return(e,h)=>{const d=a("router-link"),m=a("ak-list");return y(),_("div",null,[s(m,{ref_key:"tableListEl",ref:c,requestUrl:"designList",deleteUrl:"designDelete",searchData:i.value,tableData:p.value,beforeRequest:u},{sourceName:n(({row:t})=>[s(d,{to:`/design/form?id=${t.source}`},{default:n(()=>[g(r(t.sourceName)+"/"+r(t.source),1)]),_:2},1032,["to"])]),_:1},8,["searchData","tableData"])])}}});export{x as default};
