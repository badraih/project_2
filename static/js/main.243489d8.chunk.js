(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(9),c=a.n(l),s=(a(17),a(1)),r=a(2),i=a(4),m=a(3),u=a(5),k=(a(7),a(8),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("table",{id:"Books"},n.a.createElement("tr",null,n.a.createElement("th",null,"Title"),n.a.createElement("th",null,"Book"),n.a.createElement("th",null,"note")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("h2",{className:"".concat(this.props.book.checked," header")},n.a.createElement("input",{value:"0",type:"checkbox",checked:"checked"===this.props.book.checked,onChange:function(){return e.props.checkBook(e.props.index)}}),this.props.book.title)),n.a.createElement("td",null,n.a.createElement("img",{className:"imageBook",src:this.props.book.image})),n.a.createElement("td",null," ",n.a.createElement("p",{className:"".concat(this.props.book.checked," text")},this.props.book.note)," "))))}}]),t}(o.Component)),h=a(10),p=a.n(h),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={formData:{title:"",image:"",note:"",checked:"false"},checkCount:0,book_list:[]},a.setBookData=function(e){e.preventDefault();var t=a.state.book_list.slice(0);t.push(a.state.formData),""===a.state.formData.title&&""===a.state.formData.image&&""==a.state.formData.note||(a.setState({book_list:t,formData:{title:"",image:"",note:"",checked:"false"}}),localStorage.setItem("book_list",JSON.stringify(t)))},a.getBookData=function(e){e.preventDefault();var t=e.target.value,o=a.state.formData,n=Object.assign({},o);n[e.target.name]=t,a.setState({formData:n})},a.clearBookChecked=function(){var e=a.state.book_list.filter(function(e){return console.log(e),"false"===e.checked});console.log("listUpdated after delete checked book",e),localStorage.setItem("count",JSON.stringify(parseInt(0))),a.setState({book_list:e,checkCount:0}),localStorage.setItem("book_list",JSON.stringify(e))},a.checkBook=function(e){var t=a.state.book_list.slice(0);"checked"===t[e].checked?(t[e].checked="false",a.setState({checkCount:a.state.checkCount-1}),localStorage.setItem("count",JSON.stringify(a.state.checkCount-1))):(t[e].checked="checked",a.setState({checkCount:a.state.checkCount+1}),localStorage.setItem("count",JSON.stringify(a.state.checkCount+1))),a.setState({book_list:t}),localStorage.setItem("book_list",JSON.stringify(t))},a.clearAll=function(){a.setState({book_list:[],checkCount:0}),localStorage.setItem("book_list",JSON.stringify([]))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"SaveDataToLocalStorage",value:function(e){var t=[];(t=JSON.parse(localStorage.getItem("book_list"))).push(e),localStorage.setItem("book_list",JSON.stringify(t))}},{key:"componentDidMount",value:function(){localStorage.getItem("book_list")||localStorage.setItem("book_list",JSON.stringify(this.state.book_list)),localStorage.getItem("book_list")&&this.setState({book_list:JSON.parse(localStorage.getItem("book_list"))}),localStorage.getItem("count")||localStorage.setItem("count",JSON.stringify(this.state.checkCount)),localStorage.getItem("count")&&this.setState({checkCount:JSON.parse(localStorage.getItem("count"))})}},{key:"render",value:function(){var e=this,t=this.state.book_list.map(function(t,a){return n.a.createElement(k,{book:t,index:a,checkBook:e.checkBook,Count:e.Count})});return n.a.createElement("div",{id:"data"},n.a.createElement("div",{className:"pageHeader"},n.a.createElement("h1",{className:"bookListHeader"},"Books List")),n.a.createElement("div",{className:"input-group ml-5"},n.a.createElement("div",{className:"input-group-prepend ml-2 "},n.a.createElement("span",{className:"input-group-text",id:"addon-wrapping"},"Title")),n.a.createElement("input",{type:"text",className:"form",placeholder:"title",name:"title",onChange:this.getBookData,value:this.state.formData.title}),n.a.createElement("div",{className:"input-group-prepend ml-2"},n.a.createElement("span",{className:"input-group-text",id:"addon-wrapping"},"Image")),n.a.createElement("input",{type:"text",className:"form",placeholder:"image",name:"image",onChange:this.getBookData,value:this.state.formData.image}),n.a.createElement("div",{className:"input-group-prepend ml-2"},n.a.createElement("span",{className:"input-group-text",id:"addon-wrapping"},"Note")),n.a.createElement("input",{type:"text",className:"form",placeholder:"note",name:"note",onChange:this.getBookData,value:this.state.formData.note}),n.a.createElement("button",{type:"submit",className:"btn ml-2",onClick:this.setBookData}," \uff0b Add book")),n.a.createElement("br",null),n.a.createElement("div",{className:"btn1"},n.a.createElement("button",{type:"submit",className:"btn1 btnCheckedClear",onClick:this.clearBookChecked},"Clear completed book"),n.a.createElement("button",{type:"submit",className:"btn1 btnCheckedClear",onClick:this.clearAll},"Clear all books"),n.a.createElement("p",{className:"btn1 count"},this.state.checkCount," book completed"),n.a.createElement("p",{className:"date"}," ",p()().format("MMM Do YY")," "),n.a.createElement("br",null)),0===this.state.book_list.length?n.a.createElement("h3",{className:"NoBook"}," About Book List:",n.a.createElement("p",{className:"About"}," Book List is the site for readers and their books list. Our mission is to help readers ",n.a.createElement("br",null)," to add their books that they want to read it and allow to write their note about the book ",n.a.createElement("br",null),"also clear the book after they finished reading the book . ")):t)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);c.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){},8:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.243489d8.chunk.js.map