import{b as f,B as h,T as b}from"./index-9b0e0ffc.js";import{a as T,j as S}from"./index-fbaeb650.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const j={title:"Form/Text Input",component:f,args:{}},r={args:{placeholder:"Type your name"}},e={args:{disabled:!0}},s={args:{prefix:"cal.com/",placeholder:"your-username"}},a={decorators:[y=>T(h,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2",cursor:"pointer"},children:[S(b,{size:"sm",children:"Email address"}),y()]})]};var o,t,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your name'
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box as="label" css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '$2',
      cursor: 'pointer'
    }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>;
  }]
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const E=["Primary","Disabled","WithPrefix","WithLabel"];export{e as Disabled,r as Primary,a as WithLabel,s as WithPrefix,E as __namedExportsOrder,j as default};
//# sourceMappingURL=TextInput.stories-6918c49f.js.map
