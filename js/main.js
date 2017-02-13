$(document).ready(function(){
	$("#add").on("click",function(){
  	var entered = $("#bar").val()

    $("#bar").val("");
    $("#items").append("<li>"+entered+"</li>");

  });
    $("#cList").on('click', function(){
//items on ul will be deleted on click
      $("li").remove();

    });

    $("#comp").on("click", function(){
//items will be crossed out on click
      $('li').css('textDecoration', 'line-through');




    });

});


console.log("hello");














// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
