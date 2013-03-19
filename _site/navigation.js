$('document').ready(function(){
    var currentPage = 2;
        
    var keysDown = {};
        
    $('#body').keydown(function(e){
            
        
    if(e.which == 37 && currentPage == 2){
        e.preventDefault();
        $('#home').fadeOut("slow");
        $('img.arrow1').fadeOut("slow");
        $('#blog').fadeIn("slow");
        currentPage = 1;
    }
    else if(e.which == 39 && currentPage == 2){
        e.preventDefault();
        $('#home').fadeOut("slow"); 
        $('img.arrow2').fadeOut("slow");
        $('#projects').fadeIn("slow");
        currentPage = 3;
    }
        
   else if(e.which == 39 && currentPage == 1){
        e.preventDefault();
        $('#blog').fadeOut("slow"); 
        $('#home').fadeIn("slow");
        $('img.arrow1').fadeIn("slow");
        currentPage = 2;
    }
    else if(e.which == 37 && currentPage == 3){
        e.preventDefault();
        $('#projects').fadeOut("slow");
        $('#home').fadeIn("slow");
        $('img.arrow2').fadeIn("slow");
        currentPage = 2;
    }
        
    });
        
    $('img').click(function(e){
        if(e.currentTarget.className == 'arrow1' && currentPage == 2){
            $('#home').fadeOut("slow");
            $('img.arrow1').fadeOut("slow");
            $('#blog').fadeIn("slow");
            currentPage = 1;
        }
        else if(e.currentTarget.className == 'arrow2' && currentPage == 2){
            $('#home').fadeOut("slow");
            $('img.arrow2').fadeOut("slow");
            $('#projects').fadeIn("slow");
            currentPage = 3;
        }
        else if(e.currentTarget.className == 'arrow2' && currentPage == 1){
            $('#blog').fadeOut("slow");
            $('img.arrow1').fadeIn("slow");
            $('#home').fadeIn("slow");
            currentPage = 2;
        }
        else if(e.currentTarget.className == 'arrow1' && currentPage == 3){
            $('#projects').fadeOut("slow");
            $('img.arrow2').fadeIn("slow");
            $('#home').fadeIn("slow");
            currentPage = 2;
        }
    });
});