(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(22)},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(11),c=n.n(r),i=n(7),l=n(1),d=n(2),s=n(4),u=n(3),p=n(5),m={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f=function(){return a.a.createElement("header",{style:m},a.a.createElement("h1",null,"TodoList"))},h=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"X")))}}]),e}(o.Component),b={background:"#f00",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=h,y=function(t){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component),j=n(12),O=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(j.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component),g=n(6),k=n.n(g),E=(n(21),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:k.a.v4(),title:"Wake up",completed:!1},{id:k.a.v4(),title:"Go to work",completed:!1},{id:k.a.v4(),title:"Have a dinner",completed:!1}]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){n.setState({todos:Object(i.a)(n.state.todos.filter(function(e){return e.id!==t}))})},n.addTodo=function(t){var e={id:k.a.v4(),title:t,completed:!1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(O,{addTodo:this.addTodo}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),e}(o.Component));c.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5c7a73f6.chunk.js.map