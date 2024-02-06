"use strict";(self.webpackChunkngx_echarts_demo=self.webpackChunkngx_echarts_demo||[]).push([[298],{2298:(h,p,a)=>{a.r(p),a.d(p,{DemoSeriesModule:()=>k});var s=a(6814),c=a(2242),_=a(859),O=a(3742),e=a(9212),T=a(3626),g=a(6616),C=a(6987),v=a(6254),E=a(5539);let x=(()=>{class n{constructor(){this.html=a(7348).Z,this.component=a(82).Z}createNodes(r){const t=[];for(let o=0;o<r;o++)t.push({id:o+""});return t}createEdges(r){const t=[];if(2===r)return[[0,1]];for(let o=0;o<r;o++)t.push([o,(o+1)%r]);return t}ngOnInit(){const r=[];for(let t=0;t<16;t++)r.push({nodes:this.createNodes(t+2),edges:this.createEdges(t+2)});this.options={series:r.map((t,o)=>({type:"graph",layout:"force",animation:!1,data:t.nodes,left:o%4*25+"%",top:25*Math.floor(o/4)+"%",width:"25%",height:"25%",force:{repulsion:60,edgeLength:2},edges:t.edges.map(d=>({source:d[0]+"",target:d[1]+""}))}))}}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-graph-force-layout"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart-600",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&e._UZ(0,"div",0)(1,"app-code-block",1),2&t&&(e.Q6J("options",o.options),e.xp6(1),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w]})}return n})(),A=(()=>{class n{constructor(){this.html=a(4801).Z,this.component=a(7771).Z,this.options={title:{text:"Simple Graph"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:60,roam:!0,label:{show:!0},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{fontSize:20},data:[{name:"Node 1",x:300,y:300},{name:"Node 2",x:800,y:300},{name:"Node 3",x:550,y:100},{name:"Node 4",x:550,y:500}],links:[{source:0,target:1,symbolSize:[5,20],label:{show:!0},lineStyle:{width:5,curveness:.2}},{source:"Node 2",target:"Node 1",label:{show:!0},lineStyle:{curveness:.2}},{source:"Node 1",target:"Node 3"},{source:"Node 2",target:"Node 3"},{source:"Node 2",target:"Node 4"},{source:"Node 1",target:"Node 4"}],lineStyle:{opacity:.9,width:2,curveness:0}}]}}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-graph-simple"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&e._UZ(0,"div",0)(1,"app-code-block",1),2&t&&(e.Q6J("options",o.options),e.xp6(1),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w]})}return n})();function Z(n,y){1&n&&e._UZ(0,"app-graph-simple")}function w(n,y){1&n&&e._UZ(0,"app-graph-force-layout")}let R=(()=>{class n{constructor(){}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-series-graph"]],decls:15,vars:1,consts:[["nzTitle","Graph"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Graph"],["nz-tab",""],["nzTitle","Force Layout"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),e._uU(4,"Home"),e.qZA()(),e.TgZ(5,"nz-breadcrumb-item"),e._uU(6,"Series"),e.qZA(),e.TgZ(7,"nz-breadcrumb-item"),e._uU(8,"Graph"),e.qZA()()(),e._UZ(9,"nz-divider"),e.TgZ(10,"nz-tabset",3)(11,"nz-tab",4),e.YNc(12,Z,1,0,"ng-template",5),e.qZA(),e.TgZ(13,"nz-tab",6),e.YNc(14,w,1,0,"ng-template",5),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("nzTabPosition","left"))},dependencies:[T.Dg,T.MO,g.xH,g.xw,g.cj,C.g,v.$O,v.A2,O.rH,x,A]})}return n})();var N=a(7398),U=a(4404),D=a(9862);let G=(()=>{class n{constructor(r){this.http=r,this.html=a(5918).Z,this.component=a(1211).Z}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe((0,N.U)(r=>(U.each(r.children,(t,o)=>o%2==0&&(t.collapsed=!0)),{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[r],top:"1%",left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}]})))}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(D.eN))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-tree-from-left-to-right"]],decls:3,vars:5,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&(e._UZ(0,"div",0),e.ALo(1,"async"),e._UZ(2,"app-code-block",1)),2&t&&(e.Q6J("options",e.lcZ(1,3,o.options)),e.xp6(2),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w,s.Ov]})}return n})(),I=(()=>{class n{constructor(r){this.http=r,this.html=a(9528).Z,this.component=a(547).Z}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe((0,N.U)(r=>({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[r],top:"18%",bottom:"14%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]})))}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(D.eN))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-tree-radial"]],decls:3,vars:5,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&(e._UZ(0,"div",0),e.ALo(1,"async"),e._UZ(2,"app-code-block",1)),2&t&&(e.Q6J("options",e.lcZ(1,3,o.options)),e.xp6(2),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w,s.Ov]})}return n})();function P(n,y){1&n&&e._UZ(0,"app-tree-from-left-to-right")}function M(n,y){1&n&&e._UZ(0,"app-tree-radial")}let F=(()=>{class n{constructor(){}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-series-tree"]],decls:15,vars:1,consts:[["nzTitle","Tree"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","From Left To Right"],["nz-tab",""],["nzTitle","Radial Tree"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),e._uU(4,"Home"),e.qZA()(),e.TgZ(5,"nz-breadcrumb-item"),e._uU(6,"Series"),e.qZA(),e.TgZ(7,"nz-breadcrumb-item"),e._uU(8,"Tree"),e.qZA()()(),e._UZ(9,"nz-divider"),e.TgZ(10,"nz-tabset",3)(11,"nz-tab",4),e.YNc(12,P,1,0,"ng-template",5),e.qZA(),e.TgZ(13,"nz-tab",6),e.YNc(14,M,1,0,"ng-template",5),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("nzTabPosition","left"))},dependencies:[T.Dg,T.MO,g.xH,g.xw,g.cj,C.g,v.$O,v.A2,O.rH,G,I]})}return n})();var z=a(6674);let L=(()=>{class n{constructor(){this.html=a(7865).Z,this.component=a(1999).Z}ngOnInit(){this.options={title:{top:30,left:"center",text:"Daily Step Count"},tooltip:{},visualMap:{min:0,max:1e4,type:"piecewise",orient:"horizontal",left:"center",top:65},calendar:{top:120,left:30,right:30,cellSize:["auto",13],range:"2016",itemStyle:{borderWidth:.5},yearLabel:{show:!1}},series:{type:"heatmap",coordinateSystem:"calendar",data:this.getVirtualData("2016")}}}getVirtualData(r){const t=+z.time.parse(r+"-01-01"),o=+z.time.parse(+r+1+"-01-01"),f=[];for(let b=t;b<o;b+=864e5)f.push([z.time.format(b,"{yyyy}-{MM}-{dd}",!1),Math.floor(1e4*Math.random())]);return f}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-heatmap-calendar"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&e._UZ(0,"div",0)(1,"app-code-block",1),2&t&&(e.Q6J("options",o.options),e.xp6(1),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w]})}return n})(),j=(()=>{class n{constructor(){this.html=a(1882).Z,this.component=a(9387).Z,this.noise=function X(){class n{constructor(l,m,u){this.x=l,this.y=m,this.z=u}dot2(l,m){return this.x*l+this.y*m}dot3(l,m,u){return this.x*l+this.y*m+this.z*u}}const y=[new n(1,1,0),new n(-1,1,0),new n(1,-1,0),new n(-1,-1,0),new n(1,0,1),new n(-1,0,1),new n(1,0,-1),new n(-1,0,-1),new n(0,1,1),new n(0,-1,1),new n(0,1,-1),new n(0,-1,-1)],r=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];let t=new Array(512),o=new Array(512);function d(i){i>0&&i<1&&(i*=65536),(i=Math.floor(i))<256&&(i|=i<<8);for(let l=0;l<256;l++){let m;m=1&l?r[l]^255&i:r[l]^i>>8&255,t[l]=t[l+256]=m,o[l]=o[l+256]=y[m%12]}}function f(i){return i*i*i*(i*(6*i-15)+10)}function b(i,l,m){return(1-m)*i+m*l}return d(0),{seed:d,perlin2:function B(i,l){let m=Math.floor(i),u=Math.floor(l);i-=m,l-=u,m&=255,u&=255;let Q=o[m+t[u]].dot2(i,l),K=o[m+t[u+1]].dot2(i,l-1),q=o[m+1+t[u]].dot2(i-1,l),V=o[m+1+t[u+1]].dot2(i-1,l-1),S=f(i);return b(b(Q,q,S),b(K,V,S),f(l))}}}()}ngOnInit(){this.noise.seed(Math.random());let{data:r,xData:t,yData:o}=this.generateData();this.options={tooltip:{},grid:{right:140,left:40},xAxis:{type:"category",data:t},yAxis:{type:"category",data:o},visualMap:{type:"piecewise",min:0,max:1,left:"right",top:"center",calculable:!0,realtime:!1,splitNumber:8,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},series:[{name:"Gaussian",type:"heatmap",data:r,emphasis:{itemStyle:{borderColor:"#333",borderWidth:1}},progressive:1e3,animation:!1}]}}generateData(){let r=[],t=[],o=[];for(let d=0;d<=200;d++){for(let f=0;f<=100;f++)o.push([d,f,this.noise.perlin2(d/40,f/20)+.5]);r.push(d)}for(let d=0;d<100;d++)t.push(d);return{data:o,xData:r,yData:t}}static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-heatmap-discrete"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,o){1&t&&e._UZ(0,"div",0)(1,"app-code-block",1),2&t&&(e.Q6J("options",o.options),e.xp6(1),e.Q6J("html",o.html)("component",o.component))},dependencies:[E.P,c._w]})}return n})();function H(n,y){1&n&&e._UZ(0,"app-heatmap-calendar")}function W(n,y){1&n&&e._UZ(0,"app-heatmap-discrete")}const J=[{path:"",redirectTo:"graph",pathMatch:"full"},{path:"graph",component:R},{path:"tree",component:F},{path:"heatmap",component:(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-series-heatmap"]],decls:15,vars:1,consts:[["nzTitle","Tree"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Calendar Heatmap"],["nz-tab",""],["nzTitle","Discrete Mapping of Color"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),e._uU(4,"Home"),e.qZA()(),e.TgZ(5,"nz-breadcrumb-item"),e._uU(6,"Series"),e.qZA(),e.TgZ(7,"nz-breadcrumb-item"),e._uU(8,"Heatmap"),e.qZA()()(),e._UZ(9,"nz-divider"),e.TgZ(10,"nz-tabset",3)(11,"nz-tab",4),e.YNc(12,H,1,0,"ng-template",5),e.qZA(),e.TgZ(13,"nz-tab",6),e.YNc(14,W,1,0,"ng-template",5),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("nzTabPosition","left"))},dependencies:[T.Dg,T.MO,g.xH,g.xw,g.cj,C.g,v.$O,v.A2,O.rH,L,j]})}return n})()}];let Y=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[O.Bz.forChild(J),O.Bz]})}return n})(),k=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[s.ez,_.m,c.Ns,Y]})}return n})()},7348:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options" class="demo-chart-600"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},4801:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options" class="demo-chart"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},7865:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options" class="demo-chart"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},1882:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options" class="demo-chart"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},5918:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options | async" class="demo-chart"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},9528:(h,p,a)=>{a.d(p,{Z:()=>c});const c='\x3c!-- DEMO START --\x3e\n<div echarts [options]="options | async" class="demo-chart"></div>\n\x3c!-- DEMO END --\x3e\n\n<app-code-block [html]="html" [component]="component"> </app-code-block>\n'},82:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-graph-force-layout',\n  templateUrl: './graph-force-layout.component.html',\n  styleUrls: ['./graph-force-layout.component.scss'],\n})\nexport class GraphForceLayoutComponent implements OnInit {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./graph-force-layout.component.html')\n      .default;\n  component = require('!!raw-loader!./graph-force-layout.component.ts').default;\n  // IGNORE END\n  options: EChartsOption;\n\n  createNodes(count: number) {\n    const nodes = [];\n    for (let i = 0; i < count; i++) {\n      nodes.push({\n        id: i + '',\n      });\n    }\n    return nodes;\n  }\n\n  createEdges(count: number) {\n    const edges = [];\n    if (count === 2) {\n      return [[0, 1]];\n    }\n    for (let i = 0; i < count; i++) {\n      edges.push([i, (i + 1) % count]);\n    }\n    return edges;\n  }\n\n  ngOnInit(): void {\n    const datas = [];\n    for (let i = 0; i < 16; i++) {\n      datas.push({\n        nodes: this.createNodes(i + 2),\n        edges: this.createEdges(i + 2),\n      });\n    }\n\n    this.options = {\n      series: datas.map((item, idx) => {\n        return {\n          type: 'graph',\n          layout: 'force',\n          animation: false,\n          data: item.nodes,\n          left: (idx % 4) * 25 + '%',\n          top: Math.floor(idx / 4) * 25 + '%',\n          width: '25%',\n          height: '25%',\n          force: {\n            repulsion: 60,\n            edgeLength: 2,\n          },\n          edges: item.edges.map(e => {\n            return {\n              source: e[0] + '',\n              target: e[1] + '',\n            };\n          }),\n        };\n      }),\n    };\n  }\n}\n"},7771:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component } from '@angular/core';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-graph-simple',\n  templateUrl: './graph-simple.component.html',\n  styleUrls: ['./graph-simple.component.scss'],\n})\nexport class GraphSimpleComponent {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./graph-simple.component.html')\n      .default;\n  component = require('!!raw-loader!./graph-simple.component.ts').default;\n  // IGNORE END\n  options: EChartsOption = {\n    title: {\n      text: 'Simple Graph',\n    },\n    tooltip: {},\n    animationDurationUpdate: 1500,\n    animationEasingUpdate: 'quinticInOut',\n    series: [\n      {\n        type: 'graph',\n        layout: 'none',\n        symbolSize: 60,\n        roam: true,\n        label: {\n          show: true,\n        },\n        edgeSymbol: ['circle', 'arrow'],\n        edgeSymbolSize: [4, 10],\n        edgeLabel: {\n          fontSize: 20,\n        },\n        data: [\n          {\n            name: 'Node 1',\n            x: 300,\n            y: 300,\n          },\n          {\n            name: 'Node 2',\n            x: 800,\n            y: 300,\n          },\n          {\n            name: 'Node 3',\n            x: 550,\n            y: 100,\n          },\n          {\n            name: 'Node 4',\n            x: 550,\n            y: 500,\n          },\n        ],\n        // links: [],\n        links: [\n          {\n            source: 0,\n            target: 1,\n            symbolSize: [5, 20],\n            label: {\n              show: true,\n            },\n            lineStyle: {\n              width: 5,\n              curveness: 0.2,\n            },\n          },\n          {\n            source: 'Node 2',\n            target: 'Node 1',\n            label: {\n              show: true,\n            },\n            lineStyle: {\n              curveness: 0.2,\n            },\n          },\n          {\n            source: 'Node 1',\n            target: 'Node 3',\n          },\n          {\n            source: 'Node 2',\n            target: 'Node 3',\n          },\n          {\n            source: 'Node 2',\n            target: 'Node 4',\n          },\n          {\n            source: 'Node 1',\n            target: 'Node 4',\n          },\n        ],\n        lineStyle: {\n          opacity: 0.9,\n          width: 2,\n          curveness: 0,\n        },\n      },\n    ],\n  };\n}\n"},1999:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport * as echarts from 'echarts';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-heatmap-calendar',\n  templateUrl: './heatmap-calendar.component.html',\n  styleUrl: './heatmap-calendar.component.scss',\n})\nexport class HeatmapCalendarComponent implements OnInit {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./heatmap-calendar.component.html')\n      .default;\n  component = require('!!raw-loader!./heatmap-calendar.component.ts').default;\n  // IGNORE END\n  options: EChartsOption;\n\n  ngOnInit(): void {\n    this.options = {\n      title: {\n        top: 30,\n        left: 'center',\n        text: 'Daily Step Count',\n      },\n      tooltip: {},\n      visualMap: {\n        min: 0,\n        max: 10000,\n        type: 'piecewise',\n        orient: 'horizontal',\n        left: 'center',\n        top: 65,\n      },\n      calendar: {\n        top: 120,\n        left: 30,\n        right: 30,\n        cellSize: ['auto', 13],\n        range: '2016',\n        itemStyle: {\n          borderWidth: 0.5,\n        },\n        yearLabel: { show: false },\n      },\n      series: {\n        type: 'heatmap',\n        coordinateSystem: 'calendar',\n        data: this.getVirtualData('2016'),\n      },\n    };\n  }\n\n  getVirtualData(year: string) {\n    const date = +echarts.time.parse(year + '-01-01');\n    const end = +echarts.time.parse(+year + 1 + '-01-01');\n    const dayTime = 3600 * 24 * 1000;\n    const data: [string, number][] = [];\n    for (let time = date; time < end; time += dayTime) {\n      data.push([\n        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),\n        Math.floor(Math.random() * 10000),\n      ]);\n    }\n    return data;\n  }\n}\n"},9387:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport * as echarts from 'echarts';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-heatmap-discrete',\n  templateUrl: './heatmap-discrete.component.html',\n  styleUrl: './heatmap-discrete.component.scss',\n})\nexport class HeatmapDiscreteComponent implements OnInit {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./heatmap-discrete.component.html')\n      .default;\n  component = require('!!raw-loader!./heatmap-discrete.component.ts').default;\n  // IGNORE END\n  options: EChartsOption;\n  noise = getNoiseHelper();\n\n  ngOnInit(): void {\n    this.noise.seed(Math.random());\n    let { data, xData, yData } = this.generateData();\n\n    this.options = {\n      tooltip: {},\n      grid: {\n        right: 140,\n        left: 40,\n      },\n      xAxis: {\n        type: 'category',\n        data: xData,\n      },\n      yAxis: {\n        type: 'category',\n        data: yData,\n      },\n      visualMap: {\n        type: 'piecewise',\n        min: 0,\n        max: 1,\n        left: 'right',\n        top: 'center',\n        calculable: true,\n        realtime: false,\n        splitNumber: 8,\n        inRange: {\n          color: [\n            '#313695',\n            '#4575b4',\n            '#74add1',\n            '#abd9e9',\n            '#e0f3f8',\n            '#ffffbf',\n            '#fee090',\n            '#fdae61',\n            '#f46d43',\n            '#d73027',\n            '#a50026',\n          ],\n        },\n      },\n      series: [\n        {\n          name: 'Gaussian',\n          type: 'heatmap',\n          data: data,\n          emphasis: {\n            itemStyle: {\n              borderColor: '#333',\n              borderWidth: 1,\n            },\n          },\n          progressive: 1000,\n          animation: false,\n        },\n      ],\n    };\n  }\n\n  generateData() {\n    let xData: number[] = [];\n    let yData: number[] = [];\n\n    let data = [];\n    for (let i = 0; i <= 200; i++) {\n      for (let j = 0; j <= 100; j++) {\n        data.push([i, j, this.noise.perlin2(i / 40, j / 20) + 0.5]);\n      }\n      xData.push(i);\n    }\n    for (let j = 0; j < 100; j++) {\n      yData.push(j);\n    }\n    return { data, xData, yData };\n  }\n}\n\n///////////////////////////////////////////////////////////////////////////\n// perlin noise helper from https://github.com/josephg/noisejs\n///////////////////////////////////////////////////////////////////////////\nfunction getNoiseHelper() {\n  class Grad {\n    x: number;\n    y: number;\n    z: number;\n    constructor(x: number, y: number, z: number) {\n      this.x = x;\n      this.y = y;\n      this.z = z;\n    }\n\n    dot2(x: number, y: number) {\n      return this.x * x + this.y * y;\n    }\n\n    dot3(x: number, y: number, z: number) {\n      return this.x * x + this.y * y + this.z * z;\n    }\n  }\n\n  const grad3 = [\n    new Grad(1, 1, 0),\n    new Grad(-1, 1, 0),\n    new Grad(1, -1, 0),\n    new Grad(-1, -1, 0),\n    new Grad(1, 0, 1),\n    new Grad(-1, 0, 1),\n    new Grad(1, 0, -1),\n    new Grad(-1, 0, -1),\n    new Grad(0, 1, 1),\n    new Grad(0, -1, 1),\n    new Grad(0, 1, -1),\n    new Grad(0, -1, -1),\n  ];\n  const p = [\n    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69,\n    142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219,\n    203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,\n    74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230,\n    220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,\n    132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186,\n    3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59,\n    227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70,\n    221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,\n    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81,\n    51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115,\n    121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,\n    78, 66, 215, 61, 156, 180,\n  ];\n  // To remove the need for index wrapping, double the permutation table length\n  let perm = new Array(512);\n  let gradP = new Array(512);\n  // This isn't a very good seeding function, but it works ok. It supports 2^16\n  // different seed values. Write something better if you need more seeds.\n  function seed(seed: number) {\n    if (seed > 0 && seed < 1) {\n      // Scale the seed out\n      seed *= 65536;\n    }\n    seed = Math.floor(seed);\n    if (seed < 256) {\n      seed |= seed << 8;\n    }\n    for (let i = 0; i < 256; i++) {\n      let v;\n      if (i & 1) {\n        v = p[i] ^ (seed & 255);\n      } else {\n        v = p[i] ^ ((seed >> 8) & 255);\n      }\n      perm[i] = perm[i + 256] = v;\n      gradP[i] = gradP[i + 256] = grad3[v % 12];\n    }\n  }\n  seed(0);\n  // ##### Perlin noise stuff\n  function fade(t: number) {\n    return t * t * t * (t * (t * 6 - 15) + 10);\n  }\n  function lerp(a: number, b: number, t: number) {\n    return (1 - t) * a + t * b;\n  }\n  // 2D Perlin Noise\n  function perlin2(x: number, y: number) {\n    // Find unit grid cell containing point\n    let X = Math.floor(x),\n      Y = Math.floor(y);\n    // Get relative xy coordinates of point within that cell\n    x = x - X;\n    y = y - Y;\n    // Wrap the integer cells at 255 (smaller integer period can be introduced here)\n    X = X & 255;\n    Y = Y & 255;\n    // Calculate noise contributions from each of the four corners\n    let n00 = gradP[X + perm[Y]].dot2(x, y);\n    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);\n    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);\n    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);\n    // Compute the fade curve value for x\n    let u = fade(x);\n    // Interpolate the four results\n    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));\n  }\n\n  return {\n    seed,\n    perlin2,\n  };\n}\n"},1211:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport * as util from 'zrender/lib/core/util';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-tree-from-left-to-right',\n  templateUrl: './tree-from-left-to-right.component.html',\n  styleUrls: ['./tree-from-left-to-right.component.scss'],\n})\nexport class TreeFromLeftToRightComponent implements OnInit {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./tree-from-left-to-right.component.html')\n      .default;\n  component = require('!!raw-loader!./tree-from-left-to-right.component.ts').default;\n  // IGNORE END\n  options: Observable<EChartsOption>;\n  constructor(private http: HttpClient) {}\n\n  ngOnInit(): void {\n    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(\n      map(data => {\n        util.each(\n          data.children,\n          (datum: any, index: number) => index % 2 === 0 && (datum.collapsed = true)\n        );\n        return {\n          tooltip: {\n            trigger: 'item',\n            triggerOn: 'mousemove',\n          },\n          series: [\n            {\n              type: 'tree',\n              data: [data],\n              top: '1%',\n              left: '7%',\n              bottom: '1%',\n              right: '20%',\n              symbolSize: 7,\n              label: {\n                position: 'left',\n                verticalAlign: 'middle',\n                align: 'right',\n                fontSize: 9,\n              },\n              leaves: {\n                label: {\n                  position: 'right',\n                  verticalAlign: 'middle',\n                  align: 'left',\n                },\n              },\n              expandAndCollapse: true,\n              animationDuration: 550,\n              animationDurationUpdate: 750,\n            },\n          ],\n        };\n      })\n    );\n  }\n}\n"},547:(h,p,a)=>{a.d(p,{Z:()=>s});const s="import { Component, OnInit } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\nimport type { EChartsOption } from 'echarts';\n// IGNORE START\ndeclare const require: any;\n// IGNORE END\n\n@Component({\n  selector: 'app-tree-radial',\n  templateUrl: './tree-radial.component.html',\n  styleUrls: ['./tree-radial.component.scss'],\n})\nexport class TreeRadialComponent implements OnInit {\n  // IGNORE START\n  html =\n    require('!!html-loader?{\"minimize\": {\"removeComments\":false,\"caseSensitive\":true}}!./tree-radial.component.html')\n      .default;\n  component = require('!!raw-loader!./tree-radial.component.ts').default;\n  // IGNORE END\n  options: Observable<EChartsOption>;\n  constructor(private http: HttpClient) {}\n\n  ngOnInit(): void {\n    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(\n      map(data => ({\n        tooltip: {\n          trigger: 'item',\n          triggerOn: 'mousemove',\n        },\n        series: [\n          {\n            type: 'tree',\n            data: [data],\n            top: '18%',\n            bottom: '14%',\n            layout: 'radial',\n            symbol: 'emptyCircle',\n            symbolSize: 7,\n            initialTreeDepth: 3,\n            animationDurationUpdate: 750,\n          },\n        ],\n      }))\n    );\n  }\n}\n"}}]);