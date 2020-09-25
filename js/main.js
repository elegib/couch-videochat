$(document).ready(function () {



  //setTimeout(function(){   $("img").unveil(); }, 10000)



    $('.header').height($(window).height()*2/3);
    $('.classMission').height($(window).height());
    $('#circle').width($(window).width()*3);
    $('#outsideCircle').width($(window).width());
    $('#outside').width($(window).width());
    $(".description").addClass("animate");

    var prova = $(".navbar").height();

    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)

    })



    var controlMission = 0;
    var prevScrollPos = $(window).scrollTop();
    var counterAudio = 0;
    var counterAudio1 = 0;
    var counterSubGroup = 0;
    var counterSharing = 0;
    var counterSharing1 = 0;
    var counterSAudio = 0;

    $(window).scroll(function(){

  //scroll controls navbar fadein fadeout
      if($(window).scrollTop()>50){
        var postScrollPos = $(window).scrollTop();
          if(postScrollPos>prevScrollPos) {

            $(".navbar").css({"top":"-60px"});}
          else {

            $(".navbar").css({"top":"0px"})}

      prevScrollPos=postScrollPos;}


    //scroll controls fixed image
      var scrollclassMission = $(".classMission").offset().top;
      var subGroupPos= $(".classSubGroup").offset().top
      var scrollclassAudio = $(".classAudio").offset().top;
      var scrollclassAudio1 = $(".classAudio").offset().top + $(".classAudio").height();
      var scrollclassSharing= $(".classSharing").offset().top;
      var scrollclassSharing1= $(".classSharing").offset().top + $(".classSharing").height();;
      var scrollclassSAudio= $(".classSmartAudio").offset().top;
      var scrollvideoPower= $(".ytVideo").offset().top;



      var scrollImage = $(".overlay").offset().top;

      var windowPos = $(window).scrollTop();
      var windowPosBot = $(window).scrollTop() + $(window).height();





    /*  if($(window).scrollTop()>scrollAbout) {
        $(".overlay").css({"position":"absolute", "top":scrollAbout})}
      else{
        $(".overlay").css({"position":"fixed", "top":"0"})}*/

    //scroll controls mission fixed or not
        if($(window).scrollTop()>scrollclassMission) {
            $("#missionText").css({"position":"fixed", "top":"15%" })}
      else{
          $("#missionText").css({"position":"absolute", "top":"15%" })}


    /*    else{
            $("#missionText").css({"position":"absolute", "top":"15%" })}*/



    if($(window).scrollTop()>$(window).height()/5 ) {  $("#missionText").removeClass("animateDown").addClass("animateUp"); controlMission= 1}
   else{if(controlMission==1){$("#missionText").addClass("animateDown"); controlMission = 0;}}



         if(subGroupPos-windowPos<120){
             $("#immagine1")[0].play();
           }


         if(scrollclassAudio-windowPos<30){
              $("#immagine2")[0].play();
         }


         if(windowPosBot-scrollclassAudio1>40){
             $("#immagine3")[0].play();
       }

         if(scrollclassSharing-windowPos<30){
             $("#immagine4")[0].play();
           }

         if(windowPosBot-scrollclassSharing1>40){
             $("#immagine5")[0].play();
           }


         if(scrollvideoPower-windowPos<60){
             $("#immagine7")[0].play();
           }

console.log(scrollvideoPower-windowPos)


})

$('video').each(function() {
 $(this)[0].pause();})

$(window).resize(function(){
  if($(window).width()>992){
    $(".imgSx").addClass("margineSx")}
  else{
    $(".imgSx").removeClass("margineSx")};

  if($(window).width()>992){
    $(".imgDx").addClass("margineDx")}
  else{
    $(".imgDx").removeClass("margineDx")}

  $('#circle').width($(window).width()*3);
  $('#outsideCircle').width($(window).width());
  $('#outside').width($(window).width());

  if($(window).width()<768){
    $("#naming").css({"font-size":"300%"});
    $("#tagline").css({"font-size":"100%"});
    $("#missionCouch").css({"font-size":"220%"});

  }
  else{
    $("#naming").css({"font-size":"500%"});
    $("#tagline").css({"font-size":"196%"});
    $("#missionCouch").css({"font-size":"3.5em"})
}

})

if($(window).width()<768){
  $("#naming").css({"font-size":"300%"});
  $("#tagline").css({"font-size":"100%"});
  $("#missionCouch").css({"font-size":"220%"});}


if($(window).width()>992){
  $(".imgSx").addClass("margineSx")
  $(".imgDx").addClass("margineDx")}
else{
  $(".imgSx").removeClass("margineSx")
  $(".imgDx").removeClass("margineDx")}









})
