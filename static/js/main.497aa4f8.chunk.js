(this["webpackJsonps5-pokedex-project-res"]=this["webpackJsonps5-pokedex-project-res"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),i=t.n(c),s=t(1),o=t(2),l=t(4),p=t(3),d=[{id:111,name:"Squirtle",type:"water",experience:63},{id:114,name:"Charmander",type:"fire",experience:62},{id:132,name:"Butterfree",type:"flying",experience:178},{id:143,name:"Gengar",type:"poison",experience:225},{id:151,name:"Meatpod",type:"bug",experience:112},{id:168,name:"Pikachu",type:"electric",experience:72},{id:172,name:"Jigglypuff",type:"normal",experience:95},{id:183,name:"Eevee",type:"water",experience:65},{id:199,name:"Swordfish",type:"bug",experience:210},{id:210,name:"Turtlefee",type:"flying",experience:83},{id:211,name:"Rubbitpuff",type:"poison",experience:176},{id:212,name:"Gengareye",type:"water",experience:162}],m=t(8),u=function(e){var a=e.card,t=a.id,n=a.name,c=a.type,i=a.experience;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"card__title"},n),r.a.createElement("div",{className:"card__img"},r.a.createElement("img",{src:"".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat(t,".png"),alt:n})),r.a.createElement("p",{className:"card__paragraph"},"Type: ",r.a.createElement("span",{className:"card__span"},c)),r.a.createElement("p",{className:"card__paragraph"},"Exp: ",r.a.createElement("span",{className:"card__span"},i)))},h=function(e){var a=e.hasWon,t=e.cardArray,n=e.score,c=a?"Winning Hand":"Losing Hand",i=a?"__title-won":"__title-lost";return r.a.createElement("div",{className:"hand-wrapper"},r.a.createElement("h2",{className:"hand-wrapper".concat(i," hand-wrapper__title")},c),r.a.createElement("h3",{className:"hand-wrapper__score"},"Total Experience: ",n),r.a.createElement("div",{className:"hand-wrapper__card-container"},t.map((function(e){return r.a.createElement(u,{key:e.id,card:e})}))))},f=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={hand1:[],hand2:[],hand1Score:0,hand2Score:0},e.splitArrays=function(e){for(var a=[],t=e.length/2,n=0;n<t;n++){var r=Math.floor(Math.random()*e.length);a.push(e.splice(r,1)[0])}return a},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(this.props.data),a=this.splitArrays(e),t=e.reduce((function(e,a){return e+a.experience}),0),n=a.reduce((function(e,a){return e+a.experience}),0);this.setState({hand1:e,hand2:a,hand1Score:t,hand2Score:n})}},{key:"render",value:function(){var e=this.state,a=e.hand1,t=e.hand2,n=e.hand1Score,c=e.hand2Score;return r.a.createElement("div",null,r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{onClick:this.props.click,className:"btn-play"},"Play")),r.a.createElement(h,{hasWon:n>c,cardArray:a,score:n}),r.a.createElement(h,{hasWon:n<c,cardArray:t,score:c}))}}]),t}(n.Component),y=t(7),g=t.n(y),E=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:g.a,alt:"loader"}))},v=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!1},e.handleIsLoading=function(){var a=Math.floor(1e3*Math.random())+1e3;e.setState({isLoading:!0}),setTimeout((function(){e.setState({isLoading:!1})}),a)},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isLoading?r.a.createElement(E,null):r.a.createElement(f,{data:d,click:this.handleIsLoading}))}}]),t}(n.Component);t(14);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t.p+"static/media/loader.6e5d6096.gif"},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.497aa4f8.chunk.js.map