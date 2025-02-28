import{_ as i,C as r,c as n,o as h,j as d,G as l,al as s,a as e,w as o}from"./chunks/framework.CRahgyQP.js";const k=JSON.parse('{"title":"开关 Switch","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/switch/README.md","filePath":"docs/components/switch/README.md"}'),c={name:"docs/components/switch/README.md"};function b(w,t,p,f,m,u){const a=r("Demo");return h(),n("div",null,[t[9]||(t[9]=d("h1",{id:"开关-switch",tabindex:"-1"},[e("开关 Switch "),d("a",{class:"header-anchor",href:"#开关-switch","aria-label":'Permalink to "开关 Switch"'},"​")],-1)),t[10]||(t[10]=d("p",null,"使用开关切换两种状态之间。",-1)),t[11]||(t[11]=d("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l(a,{title:"",content:"Switch",type:"basic",name:"SwitchBasic"},{default:o(()=>t[0]||(t[0]=[d("p",null,"Switch/basic",-1)])),_:1}),t[12]||(t[12]=d("h2",{id:"尺寸",tabindex:"-1"},[e("尺寸 "),d("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),l(a,{title:"尺寸有三种：`small`、`default`、`large`。",content:"Switch",type:"size",name:"SwitchSize"},{default:o(()=>t[1]||(t[1]=[d("p",null,"Switch/size",-1)])),_:1}),t[13]||(t[13]=d("h2",{id:"默认开启",tabindex:"-1"},[e("默认开启 "),d("a",{class:"header-anchor",href:"#默认开启","aria-label":'Permalink to "默认开启"'},"​")],-1)),l(a,{title:"需要默认开启则传入`:default-checked='true'`，该参数默认为`false`。",content:"Switch",type:"open",name:"SwitchOpen"},{default:o(()=>t[2]||(t[2]=[d("p",null,"Switch/open",-1)])),_:1}),t[14]||(t[14]=d("h2",{id:"禁用",tabindex:"-1"},[e("禁用 "),d("a",{class:"header-anchor",href:"#禁用","aria-label":'Permalink to "禁用"'},"​")],-1)),l(a,{title:"禁用只需要添加`disabled`",content:"Switch",type:"disabled",name:"SwitchDisabled"},{default:o(()=>t[3]||(t[3]=[d("p",null,"Switch/disabled",-1)])),_:1}),t[15]||(t[15]=d("h2",{id:"自定义颜色",tabindex:"-1"},[e("自定义颜色 "),d("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),l(a,{title:"自定义颜色可以通过`checked-color`和`unchecked-color`。",content:"Switch",type:"color",name:"SwitchColor"},{default:o(()=>t[4]||(t[4]=[d("p",null,"Switch/color",-1)])),_:1}),t[16]||(t[16]=d("h2",{id:"自定义文案",tabindex:"-1"},[e("自定义文案 "),d("a",{class:"header-anchor",href:"#自定义文案","aria-label":'Permalink to "自定义文案"'},"​")],-1)),l(a,{title:"自定义文档需要通过`slot`去传文档。开启前的文案`slot='checked'`，开启后的文案`slot='unchecked'`。",content:"Switch",type:"text",name:"SwitchText"},{default:o(()=>t[5]||(t[5]=[d("p",null,"Switch/text",-1)])),_:1}),t[17]||(t[17]=d("h2",{id:"自定义图标",tabindex:"-1"},[e("自定义图标 "),d("a",{class:"header-anchor",href:"#自定义图标","aria-label":'Permalink to "自定义图标"'},"​")],-1)),l(a,{title:"自定义图标需要通过`slot`。开启前图标`slot='checkedIcon'`，开启后图标`slot='uncheckedIcon'`。",content:"Switch",type:"icon",name:"SwitchIcon"},{default:o(()=>t[6]||(t[6]=[d("p",null,"Switch/icon",-1)])),_:1}),t[18]||(t[18]=d("h2",{id:"加载",tabindex:"-1"},[e("加载 "),d("a",{class:"header-anchor",href:"#加载","aria-label":'Permalink to "加载"'},"​")],-1)),l(a,{title:"加载需要添加`loading`字段，默认是`false`。loading图标会跟着当前的开关背景颜色保持一致。",content:"Switch",type:"loading",name:"SwitchLoading"},{default:o(()=>t[7]||(t[7]=[d("p",null,"Switch/loading",-1)])),_:1}),t[19]||(t[19]=d("h2",{id:"切换拦截",tabindex:"-1"},[e("切换拦截 "),d("a",{class:"header-anchor",href:"#切换拦截","aria-label":'Permalink to "切换拦截"'},"​")],-1)),l(a,{title:"切换拦截需要传入`before-change`方法。当为`true`的时候才进行切换，当为`false`的时候不会进行切换",content:"Switch",type:"before",name:"SwitchBefore"},{default:o(()=>t[8]||(t[8]=[d("p",null,"Switch/before",-1)])),_:1}),t[20]||(t[20]=s('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="y-switch-props" tabindex="-1"><code>&lt;y-switch&gt;</code> Props <a class="header-anchor" href="#y-switch-props" aria-label="Permalink to &quot;`&lt;y-switch&gt;` Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th><th>必传</th></tr></thead><tbody><tr><td>default-checked</td><td>boolean</td><td>false</td><td>默认选中状态</td><td>N</td></tr><tr><td>width</td><td>string</td><td>2.5rem</td><td>宽度</td><td>N</td></tr><tr><td>size</td><td><code>small</code> \\ <code>default</code> \\ <code>large</code></td><td>default</td><td>尺寸大小</td><td>N</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>是否禁用</td><td>N</td></tr><tr><td>unchecked-color</td><td>string</td><td>-</td><td>未选中时的开关背景颜色</td><td>N</td></tr><tr><td>checked-color</td><td>string</td><td>-</td><td>选中时的开关背景颜色</td><td>N</td></tr><tr><td>loading</td><td>boolean</td><td>false</td><td>是否加载</td><td>N</td></tr></tbody></table><h3 id="y-switch-methods" tabindex="-1"><code>&lt;y-switch&gt;</code> methods <a class="header-anchor" href="#y-switch-methods" aria-label="Permalink to &quot;`&lt;y-switch&gt;` methods&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>描述</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>change</td><td>按钮状态发生改变的时候</td><td>-</td><td>-</td></tr><tr><td>update</td><td>值发生改变的时候</td><td>-</td><td>-</td></tr></tbody></table><h3 id="y-switch-slots" tabindex="-1"><code>&lt;y-switch&gt;</code> slots <a class="header-anchor" href="#y-switch-slots" aria-label="Permalink to &quot;`&lt;y-switch&gt;` slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>描述</th><th>参数</th></tr></thead><tbody><tr><td>checkedIcon</td><td>开关打开时的图标</td><td>-</td></tr><tr><td>uncheckedIcon</td><td>开关关闭时的图标</td><td>-</td></tr><tr><td>checked</td><td>开关打开时的文字</td><td>-</td></tr><tr><td>unchecked</td><td>开关关闭时的文字</td><td>-</td></tr></tbody></table>',7))])}const y=i(c,[["render",b]]);export{k as __pageData,y as default};
