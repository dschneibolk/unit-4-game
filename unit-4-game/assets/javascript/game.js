$(document).ready(function(){

    $(".btn").on("click",function(event){
        alert("you just clicked");
        console.log(this.getAttribute("data-id"));
        console.log($(this).attr("data-id"));
    })

    $("#target").html("Target: 345")
    $("#total").html("Total: ***")
    $("#wins").html("Wins: *****")
    $("#losses").html("Losses:****")

})
