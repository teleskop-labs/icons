import{c as p}from"./vue.esm-bundler-b2c2942f.js";import{b as g}from"./TSvg.vue-b308db39.js";import{_ as C,a as y}from"./TIconWarning-0c772438.js";const x={title:"Components/TIcon",component:g,render:n=>({setup(){return()=>p(C,n,null)}})},r={argTypes:{size:{control:"select",options:["small","medium","large","xlarge"]},label:{control:"text"},testId:{control:"text"}},args:{size:"medium",primaryColor:"currentColor",secondaryColor:"var(--t-sys-elevation-surface)",label:void 0,testId:void 0}},e={argTypes:{height:{control:"number"},width:{control:"number"}},args:{height:32,width:32}},o={render:n=>({setup(){return()=>p(y,n,null)}}),args:{primaryColor:"var(--t-sys-color-icon-brand)",secondaryColor:"red"}};var t,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge']
    },
    label: {
      control: 'text'
    },
    testId: {
      control: 'text'
    }
  },
  args: {
    size: 'medium',
    primaryColor: 'currentColor',
    secondaryColor: 'var(--t-sys-elevation-surface)',
    label: undefined,
    testId: undefined
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    height: {
      control: 'number'
    },
    width: {
      control: 'number'
    }
  },
  args: {
    height: 32,
    width: 32
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,i,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return () => <TIconWarning {...args} />;
    }
  }),
  args: {
    primaryColor: 'var(--t-sys-color-icon-brand)',
    secondaryColor: 'red'
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const v=["Default","CustomSize","CustomColor"];export{o as CustomColor,e as CustomSize,r as Default,v as __namedExportsOrder,x as default};
//# sourceMappingURL=TIcon.stories-dd38b958.js.map
