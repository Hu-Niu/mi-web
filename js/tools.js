				//简单移动函数
				function move(object,tagect,speed,style,callback){
					clearInterval(object.timer);
					var current=parseInt(getStyle(object,style));
					if(current>tagect){
						speed=-speed;
					}
					object.timer=setInterval(function(){
					var olderValue=parseInt(getStyle(object,style));
					var newValue=olderValue + speed;
					if((speed>0 && tagect<newValue) || (speed<0 && tagect>newValue)){
						newValue=tagect;
					}
					object.style[style]=newValue+'px';
					if(newValue==tagect){
						clearInterval(object.timer);
						callback&&callback();
					}
					},30);
				}
				
				//获取样式函数
				function getStyle(obj , name){
						//正常浏览器的方式，具有getComputedStyle()方法
						return window.getComputedStyle(obj , null)[name];
		     	}
				
