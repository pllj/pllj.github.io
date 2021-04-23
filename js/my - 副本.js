		(function gethitokoto(){
			$.get('https://v1.hitokoto.cn/', function (data) {
				if (typeof data === 'string') data = JSON.parse(data);
				data['hitokoto'].replace(/[\r\n]/g,""); 
				document.getElementsByClassName('subtitle')[0].innerHTML=data['hitokoto']+" —— "+data['from']+"   ";
			});
		})();
		//cpp=document.getElementsByClassName("cpp");
		//for(i=0;i<cpp.length;i++) cpp[i].onmousedown=function(){return false;};
		//document.body.onselectstart=function(){return false;};
		//window.ontouchstart = function(){return false};
