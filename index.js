
var comptes=[{login:"admin",password:"admin"}]
var trucks=[{login:"truck1",password:"truck1",id:"truck1",free:true,tonnage:3.5},{login:"truck2",password:"truck2",id:"truck2",free:true,tonnage:7},{login:"truck3",password:"truck3",id:"truck3",free:true,tonnage:10},{login:"truck4",password:"truck4",id:"truck4",free:true,tonnage:15}];
var trucksOcu=[{login:"truck5",password:"truck",id:"truck5",free:false,tonnage:3.5}]
var tp = 20;
var kp= 1.5;
var messages=[]
var frt=trucks.length
var twn=trucksOcu.length
var all
// compteur laison
$("#frt").append(frt)
$("#nmbrop").append(twn)
$("#allope").append(all)
//-----------------------------------------------------------




$(".insc").hide()
$(".contact").hide()
$(".about").hide()
$(".findTruck").hide()

function test(){
  $(".AcceilDiv").hide()
  $(".contact").hide()
  $(".about").hide()
  $(".findTruck").hide()
  $(".insc").show()
}
function test1(){
  $(".AcceilDiv").hide()
  $(".about").hide()
  $(".insc").hide()
  $(".findTruck").hide()
  $(".contact").show()
}
function test2(){
  $(".AcceilDiv").hide()
  $(".insc").hide()
  $(".contact").hide()
  $(".findTruck").hide()
  $(".about").show()
}
function test3(){
  $(".insc").hide()
  $(".contact").hide()
  $(".about").hide()
  $(".findTruck").hide()
  $(".AcceilDiv").show()
};
//function counter :
function makecounter() {
  var count = 0;
  function counter() {
    count ++;
    return count;
  }
  return counter;
};
var counter=makecounter();
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

// click button Search
$("#btn1").on("click",function(){
  var distance= $('#distance').val()
  var poids= $('#Poids').val()
  var price=0
  var t
  console.log(distance)
  console.log(poids)
  if ((distance<=0)||(poids<=0)){
    alert("check your information")
  }
  else{
    for (var i=0 ; i<trucks.length;i++){
      if ((trucks[i].free===true)&&(trucks[i].tonnage>=poids)){
          
          price=(tp*poids)+(kp*distance)
          console.log(price)
          trucks[i].free=false
          t=trucks[i]
          trucks.splice(i,1)
          trucksOcu.push(t)
          all=counter()
          alert(`price is ${price}`)
          return price
        
          
      }else{
        return price
      }
    }
    
  }
  
})
// Click button Send 
$("#btn2").on("click",function(){
var email=$('#email').val()
var message=$('#msg').val()
var x={ email :message
}
messages.push(x)
})
//