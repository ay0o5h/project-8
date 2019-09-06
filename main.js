
$(document).ready(function(){
    //start header
     $(".header .uk-navbar-right li  ").on('click',function(e){
         e.preventDefault();
         $(this).addClass("active").siblings().removeClass("active");
    })
    //end header 
    $(".social .uk-section i").each(function(){
        $(this).hover(function(){
            $(this).animate({
                fontSize:'40px',
                marginTop :'3px'
            },500,function(){
                $(this).animate({
                    fontSize:'30px',
                    marginTop :'0'
            },500)
        })
        })
    })
})