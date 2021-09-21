$("document").ready(function(){
    var men=true;
    $("#menu").click(function(){
        if(men==true){
            $("nav li").attr("style","margin-left:10px");
        }
        else{
            $("nav li").attr("style","margin-left:-180px");
        }
        men=!men;
    })

    var fSi=true;
    $("nav li:nth-child(1)").click(function(){
        if(fSi==true){
           $("#fs").attr('style',"display:block");
           $("#bg").attr('style',"display:none");
           bGi=true;
        }
        else{
            $("#fs").attr('style',"display:none");
        }
        fSi=!fSi;
    })

    var bGi=true;
    $("nav li:nth-child(2)").click(function(){
        if(bGi==true){
           $("#bg").attr("style","display:block");
           $("#fs").attr("style","display:none");
            fSi=true;
        }
        else{
            $("#bg").attr('style',"display:none");
        }
        bGi=!bGi;
    })

    $("#fs li:nth-child(1)").click(function(){
        $("#firstIntro,#secIntro,#thiIntro,#fourIntro").attr("style","font-size:16px"); 
    })
    $("#fs li:nth-child(2)").click(function(){
        $("#firstIntro,#secIntro,#thiIntro,#fourIntro").attr("style","font-size:18px"); 
    })
     $("#fs li:nth-child(3)").click(function(){
        $("#firstIntro,#secIntro,#thiIntro,#fourIntro").attr("style","font-size:20px"); 
    })

     $("#bg li:nth-child(1)").click(function(){
        $("#firstIntro,#secIntro,#thiIntro,#fourIntro").attr("style","color:white"); 
        document.querySelector("#block").style.backgroundColor="black"; 
     })
     $("#bg li:nth-child(2)").click(function(){
        $("#firstIntro,#secIntro,#thiIntro,#fourIntro").attr("style","color:black");  
        document.querySelector("#block").style.backgroundColor="white"; 
     })

})