
var comptes=[{login:"admin",password:"admin"}]
var trucks=[{login:"truck1",password:"truck1",id:"truck1",free:true,tonnage:3.5},{login:"truck2",password:"truck2",id:"truck2",free:true,tonnage:7},{login:"truck3",password:"truck3",id:"truck3",free:true,tonnage:10},{login:"truck4",password:"truck4",id:"truck4",free:true,tonnage:15}];
var trucksOcu=[]
var tonPrice = 20;
var kilometrePrice= 1.5



$(".insc").hide()
$(".contact").hide()
$(".info").hide()
$(".findTruck").hide()

function test(){
  $(".AcceilDiv").hide()
  $(".contact").hide()
  $(".info").hide()
  $(".insc").show()
}
function test1(){
  $(".AcceilDiv").hide()
  $(".info").hide()
  $(".insc").hide()
  $(".contact").show()
}
function test2(){
  $(".AcceilDiv").hide()
  $(".insc").hide()
  $(".contact").hide()
  $(".info").show()
}
function test3(){
  $(".insc").hide()
  $(".contact").hide()
  $(".info").hide()
  $(".AcceilDiv").show()
};
// click button verif

$("#btn").on("click",function(){
  var user= $('#login').val()
  var pass=$('#pass').val()
  console.log(user)
  if (user.length===0){
    alert("check login")
  }else if(pass.length===0){
    alert("check password")
  }
  for (var i=0;i<comptes.length;i++){
    if (comptes[i].login===user&&comptes[i].password===pass){
      alert("welcome "+user )
      $(".insc").hide()
      $(".contact").hide()
      $(".info").hide()
      $(".AcceilDiv").hide()
      $(".findTruck").show()

    }
    else{
      alert("chek your information")
    }
  }
});
// free truck value :
// click button Search
$("#btn1").on("click",function(){
  var distance= $('#distance').val()
  var poids= $('#poids').val()
  if ((distance<=0)||(poids<=0)){
    alert("check your information")
  }
  else{
    for (var i=0 ; i<length.trucks;i++){
      if ((trucks[i].free===true)&&(trucks[i].tonnage>=poids)){
          var price=0
          price=(tonPrice*poids)+(kilometrePrice*distance)
          trucks[i].free=false
          var t=truck[i]
          trucks.slice (i,1)
          trucksOcu.push(t)
          alert(price)
          return price
          
      }
    }
  }
  
})

