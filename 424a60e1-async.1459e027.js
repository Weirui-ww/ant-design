(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["424a60e1"],{"424a60e1":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=n("f19d2b93");n("b275ecf3");var l=n("5b220c3d"),i=n("e22febe0"),r=n("a9d1a279");let c=[{value:"parent 1",title:"parent 1",icon:(0,a.jsx)(i.CarryOutOutlined,{}),children:[{value:"parent 1-0",title:"parent 1-0",icon:(0,a.jsx)(i.CarryOutOutlined,{}),children:[{value:"leaf1",title:"leaf1",icon:(0,a.jsx)(i.CarryOutOutlined,{})},{value:"leaf2",title:"leaf2",icon:(0,a.jsx)(i.CarryOutOutlined,{})}]},{value:"parent 1-1",title:"parent 1-1",icon:(0,a.jsx)(i.CarryOutOutlined,{}),children:[{value:"sss",title:"sss",icon:(0,a.jsx)(i.CarryOutOutlined,{})}]}]}];var d=()=>{let[e,t]=(0,l.useState)(!0),[n,i]=(0,l.useState)(!1),[d,u]=(0,l.useState)(!1);return(0,a.jsxs)(r.Space,{direction:"vertical",children:[(0,a.jsx)(r.Switch,{checkedChildren:"showIcon",unCheckedChildren:"showIcon",checked:d,onChange:()=>u(!d)}),(0,a.jsx)(r.Switch,{checkedChildren:"treeLine",unCheckedChildren:"treeLine",checked:e,onChange:()=>t(!e)}),(0,a.jsx)(r.Switch,{disabled:!e,checkedChildren:"showLeafIcon",unCheckedChildren:"showLeafIcon",checked:n,onChange:()=>i(!n)}),(0,a.jsx)(r.TreeSelect,{treeLine:e&&{showLeafIcon:n},style:{width:300},treeData:c,treeIcon:d})]});};}}]);