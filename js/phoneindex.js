//			rem响应式布局
		(function(){
		  var html=document.querySelector('html') 
		  html.style.fontSize=window.innerWidth/7.5+'px'
		  window.onresize=function(e){
		    html.style.fontSize=window.innerWidth/7.5+'px'
		  }
		    })()
//		    
//		    //swiper轮播实例化
//	 	var mySwiper = new Swiper ('.swiper-container', {
////	    direction: 'vertical', // 垂直切换选项
//	    loop: true, // 循环模式选项
//	    autoplay:true,
//	    
//	    // 如果需要分页器
//	    pagination: {
//	      el: '.swiper-pagination',
//	    },
//	   
//	  }) 


          function loadCSS() {
//        	console.log(navigator)
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
document.write('<link href="./css/phoneindex.css" rel="stylesheet" type="text/css" media="screen" />');

//	  导航按钮的设置
		document.querySelector('body').onscroll=function(e){
//			console.log(e)//获取鼠标滚动事件
			var Active=document.querySelector('.active')
			if(Active){
				Active.className=''
			}
//			console.log(window.scrollY)//获取y轴坐标值(根据获取到的数据设置滚动到哪里显示什么具有什么样式)

			//设置滚动到什么位置
			  	//console.log(window.scrollTo(x,y))
			  	
			if(window.scrollY>0 && window.scrollY<116){
				var div =document.querySelector('[data-id=header]')
				div.className='active'
			}else if(window.scrollY>116 && window.scrollY<257){
				var div=document.querySelector('[data-id=swipers]')
				div.className='active'
			}else if(window.scrollY>257 && window.scrollY<547){
				var div=document.querySelector('[data-id=jineng]')
				div.className='active'
			}else if(window.scrollY>547 && window.scrollY<694){
				var div=document.querySelector('[data-id=gzjy]')
				div.className='active'
			}else if(window.scrollY>694 && window.scrollY<800){
				var div=document.querySelector('[data-id=xmjy]')
				div.className='active'
			}else if(window.scrollY>800 && window.scrollY<1000){
				var div=document.querySelector('[data-id=zwpingjia]')
				div.className='active'
			}
				}

}
else {
	//pc端
document.write('<link href="./css/index.css" rel="stylesheet" type="text/css" media="screen" />');
//	  导航按钮的设置
		document.querySelector('body').onscroll=function(e){
//			console.log(e)//获取鼠标滚动事件
			var Active=document.querySelector('.active')
			if(Active){
				Active.className=''
			}
			console.log(window.scrollY)//获取y轴坐标值(根据获取到的数据设置滚动到哪里显示什么具有什么样式)

			//设置滚动到什么位置
			  	//console.log(window.scrollTo(x,y))
			  	
			if(window.scrollY>0 && window.scrollY<60){
				var div =document.querySelector('[data-id=header]')
				div.className='active'
			}else if(window.scrollY>60 && window.scrollY<174){
				var div=document.querySelector('[data-id=swipers]')
				div.className='active'
			}else if(window.scrollY>174 && window.scrollY<320){
				var div=document.querySelector('[data-id=jineng]')
				div.className='active'
			}else if(window.scrollY>320 && window.scrollY<420){
				var div=document.querySelector('[data-id=gzjy]')
				div.className='active'
			}else if(window.scrollY>420 && window.scrollY<740){
				var div=document.querySelector('[data-id=xmjy]')
				div.className='active'
			}else if(window.scrollY>740 && window.scrollY<888){
				var div=document.querySelector('[data-id=zwpingjia]')
				div.className='active'
			}


		}
}
}

loadCSS();
	  
////	  导航按钮的设置
//		document.querySelector('body').onscroll=function(e){
////			console.log(e)//获取鼠标滚动事件
//			var Active=document.querySelector('.active')
//			if(Active){
//				Active.className=''
//			}
////			console.log(window.scrollY)//获取y轴坐标值(根据获取到的数据设置滚动到哪里显示什么具有什么样式)
//
//			//设置滚动到什么位置
//			  	//console.log(window.scrollTo(x,y))
//			  	
//			if(window.scrollY>0 && window.scrollY<48){
//				var div =document.querySelector('[data-id=header]')
//				div.className='active'
//			}else if(window.scrollY>48 && window.scrollY<134){
//				var div=document.querySelector('[data-id=swipers]')
//				div.className='active'
//			}else if(window.scrollY>134 && window.scrollY<251){
//				var div=document.querySelector('[data-id=jineng]')
//				div.className='active'
//			}else if(window.scrollY>251 && window.scrollY<325){
//				var div=document.querySelector('[data-id=gzjy]')
//				div.className='active'
//			}else if(window.scrollY>325 && window.scrollY<540){
//				var div=document.querySelector('[data-id=xmjy]')
//				div.className='active'
//			}else if(window.scrollY>530 && window.scrollY<700){
//				var div=document.querySelector('[data-id=zwpingjia]')
//				div.className='active'
//			}
//}