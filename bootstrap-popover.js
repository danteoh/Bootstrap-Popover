$(function(){
  $(".popout").each(function(){
    $(this).find(".popout-toggle").bind("click", function(e){
      e.preventDefault();
      if(!$(this).parent().hasClass("open")){
        $(".popout.open").find(".popout-menu").css("display", "none")
        $(".popout.open").removeClass("open")
        $(this).parent().addClass("open")
        $(this).parent().find(".popout-menu").css("display", "block")
        $(this).parent().find(".popout-menu").addClass("open")  
      }
      return false    
    })
  })
  $("html").bind("click", function(){
    $(".popout.open").find(".popout-menu").css("display", "none")
    $(".popout.open").removeClass("open")
  })
})