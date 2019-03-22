(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docz/examples/03-example-actions.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),s=t("./node_modules/react/index.js"),u=t.n(s),m=t("./node_modules/@mdx-js/tag/dist/index.js"),d=t("./docz/utils/Playground.jsx"),p=t("./src/material-table.js"),b=t("./node_modules/@material-ui/core/colors/red.js"),h=t.n(b),f=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(i.a)(this,Object(l.a)(n).call(this,e))).layout=null,t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=Object(a.a)(e,["components"]);return u.a.createElement(m.MDXTag,{name:"wrapper",components:n},u.a.createElement(m.MDXTag,{name:"h1",components:n,props:{id:"actions-examples"}},"Actions Examples"),u.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"default-actions"}},"Default Actions"),u.a.createElement(m.MDXTag,{name:"p",components:n},"Table has export, column show/hide actions by default."),u.a.createElement(d.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Default Actions\"\n  options={{\n    columnsButton: true,\n    exportButton: true,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:d.a,MaterialTable:p.b,red:h.a},__codesandbox:"undefined"},u.a.createElement(p.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Default Actions",options:{columnsButton:!0,exportButton:!0}})),u.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"custom-actions"}},"Custom Actions"),u.a.createElement(m.MDXTag,{name:"p",components:n},"You can add your custom actions. "),u.a.createElement(d.a,{__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Custom Actions\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n    rowData => ({\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      disabled: rowData.birthYear >= 2000,\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    }),\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n      iconProps: {\n        style: {\n          fontSize: 30,\n          color: 'green',\n        },\n      },\n    },\n  ]}\n/>",__scope:{props:this?this.props:t,Playground:d.a,MaterialTable:p.b,red:h.a},__codesandbox:"undefined"},u.a.createElement(p.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Custom Actions",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)}},function(e){return{icon:"account_circle",tooltip:"Show User Info",disabled:e.birthYear>=2e3,onClick:function(e,n){alert("You clicked user "+n.name)}}},{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)},iconProps:{style:{fontSize:30,color:"green"}}}]})),u.a.createElement(m.MDXTag,{name:"h2",components:n,props:{id:"actions-with-column-index"}},"Actions with Column Index"),u.a.createElement(m.MDXTag,{name:"p",components:n},"You can change place of actions."),u.a.createElement(d.a,{__position:2,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  title=\"Actions with Column Index\"\n  actions={[\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    },\n    rowData => ({\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      disabled: rowData.birthYear >= 2000,\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n    }),\n    {\n      icon: 'account_circle',\n      tooltip: 'Show User Info',\n      onClick: (event, rowData) => {\n        alert('You clicked user ' + rowData.name)\n      },\n      iconProps: {\n        style: {\n          fontSize: 30,\n          color: 'green',\n        },\n      },\n    },\n  ]}\n  options={{\n    actionsColumnIndex: -1,\n  }}\n/>",__scope:{props:this?this.props:t,Playground:d.a,MaterialTable:p.b,red:h.a},__codesandbox:"undefined"},u.a.createElement(p.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],title:"Actions with Column Index",actions:[{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)}},function(e){return{icon:"account_circle",tooltip:"Show User Info",disabled:e.birthYear>=2e3,onClick:function(e,n){alert("You clicked user "+n.name)}}},{icon:"account_circle",tooltip:"Show User Info",onClick:function(e,n){alert("You clicked user "+n.name)},iconProps:{style:{fontSize:30,color:"green"}}}],options:{actionsColumnIndex:-1}})))}}]),n}(u.a.Component);f.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.esm.js"),o=t("./node_modules/codemirror/lib/codemirror.js");t.n(o).a.defaults.viewportMargin=1/0,n.a=a.c}}]);
//# sourceMappingURL=docz-examples-03-example-actions.267bad3dc970257e8dc0.js.map