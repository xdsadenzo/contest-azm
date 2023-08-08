
function fun(){
  let us = $("#inp").val();
  let d = "";
  console.log("before search")
  let k = $("#kinza");
  $.ajax({
      url : "index.json",
      method : "get",
      success : function(data2){
   $.each(data2.led,function(keyy,valu){
      // console.log("hello"+valu.name)
      if(valu.name==us){
          console.log("done");
          d += (`<div ' class='col-md-2 mt-5'><div class='card mt-3'>
              <img class='card-img-top' src=` +valu.image+ `   alt=''>
              <div class='card-body'><h4 class='card-title'>`+valu.age+`</h4><p class='card-text'>
              `+valu.Qualification+`</p></div></div></div>`)
      }
  

   })
   k.html(d);
  
      }
      // ajax braxket
  })

  //FUN bracket
}
