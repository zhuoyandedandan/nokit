/*csd*/(function(h){h.version="3.4";function g(i){if(!i){return"";}i=i.replace(new RegExp("\\{1}","gim"),"\\\\");i=i.replace(new RegExp("\r{1}","gim"),"");i=i.replace(new RegExp("\n{1}","gim"),"\\n");i=i.replace(new RegExp("\r{1}","gim"),"\\r");i=i.replace(new RegExp('"{1}',"gim"),'\\"');return i;}function f(i){if(!i){return"";}return i.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");}function b(j,k){try{return j();}catch(i){i.message=i.message||"";i.stack=i.stack||"";i.message=k+" : "+i.message+"\r\n    "+i.stack;throw i;}}var e={};function d(k,i){if(!k){return;}i=i||e;for(var j in k){i[j]=k[j];}}function c(k,n,j){var l=function(i){l.buffer.push(i);};for(var m in j){if(j[m]){d(j[m],l);}}l.func=k;l.model=n||{};l.buffer=[];return l;}function a(v,t){v=v||"";t=t||{};var k=t.codeBegin||h.codeBegin;var o=t.codeEnd||h.codeEnd;var l=new RegExp(k,"gim");var p=new RegExp(o,"gim");var q=new RegExp("("+k+"(.|\\\n|\\\r)*?"+o+")","gim");var u=new RegExp(k+"\\s*=","gim");var n=[];var m=v.match(q)||[];var x=v.replace(q,"▎").split("▎")||[];for(var s=0;s<x.length;s++){var w=g(x[s]);var j=m[s];n.push('$("'+w+'")');if(j!==null&&typeof j!=="undefined"){if(u.test(j)){j="$("+j.replace(u,"").replace(p,"")+")";}else{j=j.replace(l,"").replace(p,"");}n.push(j);}}n.push('return $.buffer.join("");');var r=function(z,i){var y=c(r,z,[e,t.extend,i]);return b(function(){return(y.func.src.call(y.model,y,y.model)||"");},"Template execute error");};b(function(){r.src=new Function("$","$$",n.join(";"));},"Template compile error");return r;}h.codeBegin="<%";h.codeEnd="%>";h.extend=d;h.compile=function(j,i){return a(j,i);};h.parse=function(m,k,l,i){var j=a(m,l);return j(k,i);};if(typeof window!=="undefined"&&window.document){h.query=function(i){return window.document.getElementById(i);};h.bind=function(i){i=i||{};var j=i.query||h.query;i.el=i.el||i.element;i.el=(typeof i.el==="string")?j(i.el):i.el;i.tp=i.tp||i.template||i.el;i.tp=(typeof i.tp==="string")?(j(i.tp)||i.tp):i.tp;if(!i.tp||!i.el){return;}var k=a(f(i.tp.innerHTML||i.tp),i);if(i.append){i.el.innerHTML+=k(i.model);}else{i.el.innerHTML=k(i.model);}};}})((function(){var a={};if(typeof exports!=="undefined"){a=exports;a.env=a.env||[];a.env.push("commaonjs");}if(typeof define==="function"&&define.amd){a.env=a.env||[];a.env.push("amd");define("tp",[],function(){return a;});}if(a.env==null||a.env.length<1){a.env=a.env||[];a.env.push("general");this.tp=a;}return a;})());