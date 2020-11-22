(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(4),c=n.n(s),i=n(35),r=n.n(i),o=(n(84),n(24)),l=n(7),u=(n(85),n(17)),h=n(18),d=n(20),j=n(19),b=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(a.jsx)(o.b,{to:"/",className:"navbar-brand",children:"ExcerTracker"}),Object(a.jsx)("div",{className:"collpase navbar-collapse",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(o.b,{to:"/",className:"nav-link",children:"Exercises"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(o.b,{to:"/create",className:"nav-link",children:"Create Exercise Log"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(o.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})}}]),n}(s.Component),m=n(8),x=n(13),O=n.n(x),p=function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.exercise.username}),Object(a.jsx)("td",{children:e.exercise.description}),Object(a.jsx)("td",{children:e.exercise.duration}),Object(a.jsx)("td",{children:e.exercise.date.substring(0,10)}),Object(a.jsxs)("td",{children:[Object(a.jsx)(o.b,{to:"/edit/"+e.exercise._id,children:"edit"})," | ",Object(a.jsx)("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"delete"})]})]})},g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).deleteExercise=a.deleteExercise.bind(Object(m.a)(a)),a.state={exercises:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){O.a.delete("http://localhost:5000/exercises/"+e).then((function(e){return console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(a.jsx)(p,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Logged Exercises"}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{className:"thead-light",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Description"}),Object(a.jsx)("th",{children:"Duration"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Actions"})]})}),Object(a.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),n}(s.Component),v=n(38),f=n.n(v),C=(n(69),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(m.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),O.a.get("http://localhost:5000/users/").then((function(t){e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),O.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Edit Exercise Log"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("select",{ref:"userInput",className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Description: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Duration (in minutes): "}),Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date: "}),Object(a.jsx)(f.a,{selected:this.state.date,onChange:this.onChangeDate})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"})})]})]})}}]),n}(s.Component)),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(m.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),O.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Create New Exercise Log"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Description: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Duration (in minutes): "}),Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Date: "}),Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"})})]})]})}}]),n}(s.Component),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:""},a}return Object(h.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),O.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Create New User"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Create User",className:"btn btn-primary"})})]})]})}}]),n}(s.Component);var y=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(a.jsx)(l.a,{path:"/edit/:id",component:C}),Object(a.jsx)(l.a,{path:"/create",component:D}),Object(a.jsx)(l.a,{path:"/user",component:N})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),k()},84:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.cd0835de.chunk.js.map