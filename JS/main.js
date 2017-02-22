/**
 * Created by skywalker on 2/21/17.
 */

$(document).ready(function(){

    createGrid(50);

});

function createGrid(width) {
    width = width || 16;

    var cellWidth = 100.0 / width;
    var cellHeight = 500 / width;



    console.log(cellWidth);
    console.log(cellHeight);
    //Create the table
    $('.container').append("<table id='gridTable' cellspacing='0' cellpadding='0'></table>");

    //Create each row
    for (var i = 0; i<width; i++)
        $('#gridTable').append("<tr class='gridRow' id='row" + i + "' style='height: "+ cellHeight +"px'></tr>");

    //create each cell
        for (var i = 0; i<width; i++){

            for (var j=0; j<width; j++)
                $("#row"+ i).append("<td style='width: " + cellWidth + "%' class='cell'></td>");
        }

}

$(document).on("mouseenter", ".cell", function(){
    $(this).addClass("cellTouched");
})