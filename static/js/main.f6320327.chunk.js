(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"filter_filter__jTWfq",filterInput:"filter_filterInput__2UDLd"}},19:function(t,e,n){},2:function(t,e,n){t.exports={form:"forma_form__3pahl",label:"forma_label__HS2jT",input:"forma_input___UVR_",button:"forma_button__2MTg1"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(19),n(14)),i=n(5),l=n(6),u=n(8),m=n(7),b=(n(20),n(3)),d=n.n(b),h=n(13),f=n(2),j=n.n(f),p=n(0),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{className:j.a.input,id:this.nameInputId,value:e,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:j.a.label,htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{className:j.a.input,id:this.numberInputId,value:n,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(9),_=n.n(O);function g(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:_.a.li,children:[a,": ",c,Object(p.jsx)("button",{className:_.a.buttonDel,onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var x=n(11),C=n.n(x);function I(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:C.a.filter,children:["Find contacts by name",Object(p.jsx)("input",{className:C.a.filterInput,name:"filter",type:"text",value:e,onChange:n})]})}var S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts"));else{var c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))}},t.checkContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(v,{onSubmit:this.addContact})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(I,{value:t,onChange:this.changeFilter}),Object(p.jsx)(g,{contacts:this.checkContact(),onDelete:this.removeContact})]})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={buttonDel:"contacts_buttonDel__2kZdu",list:"contacts_list__3B3f5",li:"contacts_li__1GcYy"}}},[[30,1,2]]]);
//# sourceMappingURL=main.f6320327.chunk.js.map