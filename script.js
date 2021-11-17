$( document ).ready(function() {
  //hide buttons at beging 
  $('#resume').hide();
   $('#stop').hide();
   $('#reset').hide();
  //time
  var count;
  //session minutes
  var min= parseInt($('.min').text());
  //break minutes
  var breakk= parseInt($('.breakmin').text());
  
  //function inter val
  var inter;
  //on , off between break and session
  var what=1;
  //session time
  var session = parseInt($(".min").text());
  session = session*60;
  
  //start session
  $('#start').on('click',function(){
   count = parseInt($('#timer').text());
   $("#status").text("Session!");
   $(".timermin").css('border','3px solid red');
   //seconds *60 = mintues
   count=count*60;
    //function run every second
   inter = setInterval(timer, 1000);
   $("#start").hide();
   $('#stop').show();
   $('#reset').show();
    //make +,- unclickable
   document.getElementById('minsession').style.pointerEvents = 'none';
   document.getElementById('addsession').style.pointerEvents = 'none';
   document.getElementById('addbreak').style.pointerEvents = 'none';
   document.getElementById('minbreak').style.pointerEvents = 'none';
 
  });
  
  //stop session
   $('#stop').on('click',function(){
      $("#timer").text($("#timer").text());
      clearInterval(inter);
      $('#resume').show();

     });
  
 //resume session 
$("#resume").on('click',function(){
   $('#resume').hide();
  inter = setInterval(timer, 1000);
});
  
   //reset session 
$("#reset").on('click',function(){
  $(".timermin").css('border','3px solid #fff');
  what=1;
  $("#status").text("");
  clearInterval(inter);
  $("#resume").hide();
  $("#stop").hide();
  $("#reset").hide();
  $("#start").show();
  $("#timer").text("25:00");
  $(".min").text(25);
  $(".breakmin").text(5);
  //make +,- clickable
  document.getElementById('minsession').style.pointerEvents = 'auto';
  document.getElementById('addsession').style.pointerEvents = 'auto';
  document.getElementById('addbreak').style.pointerEvents = 'auto';
  document.getElementById('minbreak').style.pointerEvents = 'auto';
 
});
  
  
//timer function
function timer()
{
  
  //second -1
  count=count-1;
  if (count <= 0)
  {
    //check what to run break or session time
    if(what==1){   
    
      clearInterval(inter);
      what=2;
     $("#status").text("Break!");
      var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
audio.play();
      $(".timermin").css('border','3px solid #00b2ee');
      //set break time
       count=breakk*60;
      //run function
       inter = setInterval(timer, 1000);
    }else{
      clearInterval(inter);
      what=1;
      $("#status").text("Session!");
      count=min*60;
      $(".timermin").css('border','3px solid red');
       inter = setInterval(timer, 1000);
    }
      

     
  }
  //caculate minutes and seconds
    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    $("#timer").text(minutes + " : " + seconds) ; // place in the timer box

}
  //add minuntes to session
 $('#addsession').on('click' , function(){ 
  min= min+1;
  $('.min').text(min);
  $('#timer').text(min+":00");
 });
  
  //subtract minutes from the session
 $('#minsession').on('click' , function(){
   min= min-1;
   if(min<=0){
     min=1;
   }else{
   $('.min').text(min);
    $('#timer').text(min+":00");}
 });
 
    //add minuntes to break
 $('#addbreak').on('click' , function(){ 
  breakk= breakk+1;
  $('.breakmin').text(breakk);

 });
  
  //subtract minutes from the session
 $('#minbreak').on('click' , function(){
     breakk= breakk-1;
   if(breakk<=0){
     breakk=1;
   }else
   $('.breakmin').text(breakk);
 });
  
  
  
  
  

  });
