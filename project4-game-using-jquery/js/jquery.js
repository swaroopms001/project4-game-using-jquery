$(document).ready(function () {
        
    
    var x = Math.floor((Math.random() * 16 ) + 1);
    $("btn-t"+x);
    $(this).css({color:'pink'});
    alert("color changed");
    
});
