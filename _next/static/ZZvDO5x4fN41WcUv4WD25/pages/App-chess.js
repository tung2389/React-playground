(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{CStR:function(t,e,a){"use strict";a.r(e);var s=a("0iUn"),r=a("sLSF"),i=a("MI3g"),n=a("a7VT"),u=a("AT/M"),l=a("Tit0"),c=a("q1tI"),o=a.n(c),h=(a("Q8kY"),function(t){function e(){return Object(s.default)(this,e),Object(i.default)(this,Object(n.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return o.a.createElement("button",{className:this.props.value,onClick:this.props.onClick})}}]),e}(o.a.Component)),d=function(t){function e(){return Object(s.default)(this,e),Object(i.default)(this,Object(n.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"renderSquare",value:function(t,e){var a=this;return o.a.createElement(h,{value:this.props.squares[t][e],onClick:function(){return a.props.onClick(t,e)},disabled:this.props.ending})}},{key:"renderAllSquares",value:function(){for(var t=Array(8).fill(null),e=0;e<8;e++){for(var a=Array(8).fill(null),s=0;s<8;s++){var r=8*e+s;a.push(o.a.createElement("span",{key:r},this.renderSquare(e,s)))}t.push(o.a.createElement("div",{className:"up",key:e}," ",a))}return t}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,"Board"),o.a.createElement("div",null,this.renderAllSquares()))}}]),e}(o.a.Component),v=a("rAsI"),f=Object(v.a)(0,8),m=Object(v.a)(0,8);function b(t){for(var e=Array(8),a=0;a<8;a++){var s=Array(9).fill(t);e[a]=s}return e}var y=function(t){function e(t){var a;return Object(s.default)(this,e),(a=Object(i.default)(this,Object(n.default)(e).call(this,t))).state={squares:b("normal"),vis:b(0),cnt:0,time:20,start:!1,undomovex:Array(80).fill(0),undomovey:Array(80).fill(0),curx:f,cury:m,hasAlert:!1},a.handleClick=a.handleClick.bind(Object(u.default)(a)),a.start=a.start.bind(Object(u.default)(a)),a.restart=a.restart.bind(Object(u.default)(a)),a.countdown=a.countdown.bind(Object(u.default)(a)),a.undo=a.undo.bind(Object(u.default)(a)),a.mark=a.mark.bind(Object(u.default)(a)),a}return Object(l.default)(e,t),Object(r.default)(e,[{key:"mark",value:function(t,e){for(var a=this.state.squares.slice(),s=this.state.vis.slice(),r=0;r<8;r++)for(var i=0;i<8;i++)(2===Math.abs(r-t)&&1===Math.abs(i-e)||1===Math.abs(r-t)&&2===Math.abs(i-e))&&0===s[r][i]?a[r][i]="cancome":r===t&&i===e||"died"===a[r][i]||(a[r][i]="normal");this.setState({squares:a})}},{key:"undo",value:function(){if(this.state.cnt-1<0)alert("no move to undo");else{var t=this.state.undomovex.slice(),e=this.state.undomovey.slice(),a=this.state.squares.slice(),s=this.state.vis.slice(),r=this.state.cnt,i=t[r-1],n=e[r-1];a[i][n]="horse",s[this.state.curx][this.state.cury]=0,a[this.state.curx][this.state.cury]="normal";var u=this.state.cnt-1;this.setState({curx:i,cury:n,squares:a,vis:s,cnt:u}),this.mark(i,n)}}},{key:"restart",value:function(){alert("the game has been restarted"),f=Object(v.a)(0,8),m=Object(v.a)(0,8);for(var t=this.state.squares.slice(),e=this.state.vis.slice(),a=0;a<8;a++)for(var s=0;s<8;s++)a===f&&s===m?(t[a][s]="horse",e[a][s]=1):(t[a][s]="normal",e[a][s]=0);this.setState({squares:t,vis:e,cnt:0,time:20,start:!1,curx:f,cury:m,hasAlert:!1}),this.mark(f,m)}},{key:"countdown",value:function(){if(this.state.start){var t=this.state.time-1;this.setState({time:t})}}},{key:"componentDidMount",value:function(){setInterval(this.countdown,1e3)}},{key:"start",value:function(){if(!1===this.state.start){var t=this.state.squares.slice(),e=this.state.undomovex.slice(),a=this.state.undomovey.slice(),s=this.state.vis.slice();s[f][m]=1,e[0]=f,a[0]=m,t[f][m]="horse",this.setState({squares:t,start:!0,undomovex:e,undomovey:a,vis:s}),this.mark(f,m)}}},{key:"handleClick",value:function(t,e){var a=this.state.undomovex.slice(),s=this.state.undomovey.slice(),r=this.state.squares.slice(),i=this.state.vis.slice();if(2===Math.abs(t-this.state.curx)&&1===Math.abs(e-this.state.cury)||1===Math.abs(t-this.state.curx)&&2===Math.abs(e-this.state.cury))if(0===i[t][e]){r[t][e]="horse",r[this.state.curx][this.state.cury]="died",i[t][e]=1;var n=this.state.cnt+1;a[n]=t,s[n]=e,this.setState({squares:r,vis:i,cnt:n,undomovex:a,undomovey:s,curx:t,cury:e}),this.mark(t,e)}else alert("invalid move,you has moved to this cell before");else alert("invalid move,your movement is not a horse step")}},{key:"componentDidUpdate",value:function(){if(63===this.state.cnt)alert("You win"),this.restart();else{for(var t=this.state.vis.slice(),e=!1,a=0;a<8;a++)for(var s=0;s<8;s++)(2===Math.abs(this.state.curx-a)&&1===Math.abs(this.state.cury-s)||1===Math.abs(this.state.curx-a)&&2===Math.abs(this.state.cury-s))&&0===t[a][s]&&(e=!0);!1===e&&!1===this.state.hasAlert&&(this.setState({hasAlert:!0}),alert("You lose,no movement is valid now"))}}},{key:"render",value:function(){var t=this,e=this.state.squares.slice(),a={visibility:!0===this.state.start?"visible":"hidden"};return o.a.createElement("div",{className:"center"},o.a.createElement("h1",{align:"center"},o.a.createElement("button",{onClick:this.start},"Start")),o.a.createElement("h1",{align:"center"},o.a.createElement("button",{onClick:this.restart},"Restart")),o.a.createElement("div",{align:"center",style:a},o.a.createElement(d,{squares:e,onClick:function(e,a){return t.handleClick(e,a)}})),o.a.createElement("h1",{align:"center"},o.a.createElement("button",{onClick:this.undo,disabled:this.state.hasAlert},"Undo")))}}]),e}(o.a.Component);e.default=y},k72o:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-chess",function(){var t=a("CStR");return{page:t.default||t}}])},rAsI:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s=function(t,e){return Math.floor(Math.random()*e+t)}}},[["k72o",1,0]]]);