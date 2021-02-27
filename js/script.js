var cont="contact-us";
function infor(){
    var name= document.getElementById("names").value;
    var text=document.getElementById("message").value;
    var email=document.getElementById("emails").value;

    if(name===""||email===""||text===""){
        alert("Enter details");
    }
    else{
        alert("Thank you " + name + "we have recieved your message");
    }
}

$(document).ready(function(){
    $(".dev-con").click(function(){
        $(".dev-img").toggle(function(){
            $(".paragraph-dev").toggle();
        });
    });
});
$(document).ready(function(){
    $(".design-con").click(function(){
        $(".paragraph-des").toggle(function(){
            $(".design-img").toggle();
        });
    });
});


$(document).ready(function(){
    $(".product-con").click(function(){
        $(".paragraph-prod").toggle(function(){
            $(".prod-img").toggle();
        });
    });
});