(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),a=t.n(c),o=t(3),r=t(2),u=t(0),s=function(e){var n=e.handleSearchChange;return Object(u.jsxs)(u.Fragment,{children:["filter shown with: ",Object(u.jsx)("input",{onChange:n})]})},i=function(e){var n=e.addPerson,t=e.newName,c=e.newNumber,a=e.handleNameChange,o=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:a})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:c,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},l=t(4),d=t.n(l),j="/api/persons",b=function(){return d.a.get(j).then((function(e){return e.data}))},h=function(e){var n=d.a.post(j,e);return console.log("created ",e),n.then((function(e){return e.data}))},f=function(e,n){var t=d.a.put("".concat(j,"/").concat(e),n);return console.log("updated ",n),t.then((function(e){return e.data}))},m=function(e){d.a.delete("".concat(j,"/").concat(e)),console.log("deleted ",e)},O=function(e){var n=e.persons,t=e.search,c=e.setPersons;return Object(u.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(u.jsxs)("li",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(){return t=e.id,a=e.name,void(window.confirm("Are you sure you want to delete ".concat(a,"?"))&&(m(t),c(n.filter((function(e){return e.id!==t})))));var t,a},children:"delete"})]},e.name)}))})},p=(t(40),function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"notification",children:n})}),g=(t(41),function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})}),v=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),l=Object(o.a)(a,2),d=l[0],j=l[1],m=Object(r.useState)(""),v=Object(o.a)(m,2),x=v[0],w=v[1],C=Object(r.useState)(""),N=Object(o.a)(C,2),S=N[0],k=N[1],y=Object(r.useState)(null),P=Object(o.a)(y,2),A=P[0],E=P[1],J=Object(r.useState)(null),L=Object(o.a)(J,2),T=L[0],B=L[1];Object(r.useEffect)((function(){b().then((function(e){c(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(p,{message:A}),Object(u.jsx)(g,{message:T}),Object(u.jsx)(s,{handleSearchChange:function(e){k(e.target.value)}}),Object(u.jsx)("h2",{children:"Add new"}),Object(u.jsx)(i,{addPerson:function(e){e.preventDefault(),console.log("adding person",d);var n={name:d,number:x};if(t.some((function(e){return e.name===d}))){if(window.confirm("".concat(n.name," is already added to the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===n.name})).id;E("updated ".concat(d," with new number ").concat(x)),setTimeout((function(){E(null)}),5e3),f(a,n).then((function(e){c(t.map((function(n){return n.id!==a?n:e})))})).catch((function(e){E(null),B("person ".concat(n.name," was already deleted.")),setTimeout((function(){B(null)}),5e3)}))}}else h(n).then((function(e){c(t.concat(e)),console.log("done setting persons")})),j(""),w("")},newName:d,newNumber:x,handleNameChange:function(e){j(e.target.value)},handleNumberChange:function(e){w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(O,{persons:t,search:S,setPersons:c})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.31892536.chunk.js.map