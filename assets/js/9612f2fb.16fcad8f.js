"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,b=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Links to Headings with slug",sidebar_position:8,slug:"/links-to-headings"},o=void 0,l={unversionedId:"Examples/links-to-headings",id:"Examples/links-to-headings",title:"Links to Headings with slug",description:"linktopage",source:"@site/docs/Examples/links-to-headings.md",sourceDirName:"Examples",slug:"/links-to-headings",permalink:"/docu-notion-sample-site/links-to-headings",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Links to Headings with slug",sidebar_position:8,slug:"/links-to-headings"},sidebar:"defaultSidebar",previous:{title:"Lists",permalink:"/docu-notion-sample-site/d0335eaa-f3eb-494b-906e-1e85c6e9db2c"},next:{title:"Links to Headings no slug",permalink:"/docu-notion-sample-site/59e9b092-2e9c-40b4-8f0e-8ab2d50033aa"}},s={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"b8264953-9f32-4aa3-bd61-d9395d0b62f3"},"link_to_page")),(0,a.kt)("p",null,"Inline link to ",(0,a.kt)("a",{parentName:"p",href:"/oranges#88c5b8de053545e5b71641ed512efbe3"},"heading2OfOranges")),(0,a.kt)("p",null,"However, the official API currently delivers the following without any indication of a link:"),(0,a.kt)("p",null," heading1"),(0,a.kt)("p",null,"Instead, we just get the \u201cheading1\u201d text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "object": "block",\n    "id": "6ba9e108-ecf4-462c-aecf-bcf23defe143",\n    "parent": {\n      "type": "page_id",\n      "page_id": "acffdc8c-b6a9-4f62-ab7f-fe01146b039a"\n    },\n    "created_time": "2023-01-12T23:41:00.000Z",\n    "last_edited_time": "2023-01-16T23:10:00.000Z",\n    "created_by": {\n      "object": "user",\n      "id": "11fb7f16-0560-4aee-ab88-ed75a850cfc4"\n    },\n    "last_edited_by": {\n      "object": "user",\n      "id": "11fb7f16-0560-4aee-ab88-ed75a850cfc4"\n    },\n    "has_children": false,\n    "archived": false,\n    "type": "paragraph",\n    "paragraph": {\n      "rich_text": [\n        {\n          "type": "text",\n          "text": { "content": " heading1", "link": null },\n          "annotations": {\n            "bold": false,\n            "italic": false,\n            "strikethrough": false,\n            "underline": false,\n            "code": false,\n            "color": "default"\n          },\n          "plain_text": " heading1",\n          "href": null\n        }\n      ],\n      "color": "default"\n    }\n  },\n')))}d.isMDXComponent=!0}}]);