$(document).ready(function(){
  createTable();
});

function createTable(width){
  width = width || 16;
  
  var cellHeight = 500.0 / width;
  
  
  for (i = 0; i< width; i++){
    $('#container').append("<div class='cellRow' id='cellRow"+ i+"' style='height:" + cellHeight + "px' ></div>");
    
    for (j=0; j< width; j++){
      $('#cellRow' + i).append("<div class='cell' id='cell" + i + "-" + j + "' style='width:"+cellHeight+"px; height:"+cellHeight+"px'></div>");
    }
  }
}

$(document).on('mouseenter', '.cell', function(){
  $(this).addClass("cellTouched");
}
);

$('button').click(function(){
 var newSize = window.prompt("Enter a new board size", "Default is 16");
 
 $(".cellRow").remove();
 
 createTable(newSize);
});
