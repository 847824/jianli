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
			  	
			if(window.scrollY>0 && window.scrollY<48){
				var div =document.querySelector('[data-id=header]')
				div.className='active'
			}else if(window.scrollY>48 && window.scrollY<134){
				var div=document.querySelector('[data-id=swipers]')
				div.className='active'
			}else if(window.scrollY>134 && window.scrollY<251){
				var div=document.querySelector('[data-id=jineng]')
				div.className='active'
			}else if(window.scrollY>251 && window.scrollY<325){
				var div=document.querySelector('[data-id=gzjy]')
				div.className='active'
			}else if(window.scrollY>325 && window.scrollY<540){
				var div=document.querySelector('[data-id=xmjy]')
				div.className='active'
			}else if(window.scrollY>530 && window.scrollY<700){
				var div=document.querySelector('[data-id=zwpingjia]')
				div.className='active'
			}


		}