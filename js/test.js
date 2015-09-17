var start_swipe = 0;
var end_swipe = 0;
var threshold = 100;
var y_threshold = 10;

var function_loop_mouse_enter = function(){
	for (var i= 0;i<game_list_item.length;i++){

		game_list_item[i].addEventListener('mousedown', function(){
			start_swipe = event.clientX;
		});

		game_list_item[i].addEventListener('mouseup', function(){
			end_swipe = event.clientX;
			if (start_swipe + threshold < end_swipe ){
				alert("swipe right");				
			}
			if (start_swipe > end_swipe + threshold){
				alert('swipe left');
			}
		});
	
		game_list_item[i].addEventListener('mouseenter', function(event){
		   	for (var i = 0;i < games.length; i++) {
		   			//alert(event.clientX);
			   	if (games[i].children.length===1){
			   		games[i].removeChild(games[i].children[0]);
				   	
				}
   			}
		});
	}
};
	
	game_list_item[3].addEventListener('touchstart', function(event){ 
		y_threshold = y_threshold + game_list_item[3].innerHeight
		start_swipe = event.touches[0].pageX;
		start_swipe_y = event.touches[0].pageY;

	});  
	game_list_item[3].addEventListener('touchend', function(event){ 

     		end_swipe = event.changedTouches[0].pageX;
     		end_swipe_y = event.changedTouches[0].pageY;

     		if (start_swipe_y < end_swipe_y){
     			if (end_swipe_y - start_swipe_y > y_threshold){
     				return;
     			}
     		} 
     		if (start_swipe_y > end_swipe_y){
     			if (start_swipe_y - end_swipe_y > y_threshold){
     				return;
     			}
     		}       			
			if (start_swipe + threshold< end_swipe ){
							
			}
			if (start_swipe > end_swipe + threshold){
				alert('swipe left');
			}
		});
