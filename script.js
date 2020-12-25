function show(id){
    var x = document.getElementById(id).style.display;
    var y = document.getElementById(id).style.display;
    if(x == "none"){
        document.getElementById(id).style.display = "block";
        y.style.display = "none";
    }else{
       document.getElementById(id).style.display = "none";
       y.style.display = "block";
    }
}

function multi(){
    var b = document.getElementById('mocba');
    var a = document.getElementById('qty1').value;
    var c;

    if(b.checked){
        
        c = b.value*a;

        alert("$"+c);
    }else{
        console.log("error");
    }
}