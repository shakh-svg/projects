function add(){

var a = document.getElementById("son1").value;
var b = document.getElementById("son2").value;
console.log(typeof a, typeof b);

if (a !=null && b !=" "){
    document.getElementById("result").innerHTML = "Natija:" + (Number(a)+Number(b))
}
else{

document.getElementById("result").innerHTML = "Not enough data";
}

}
function sub(){

    var a = document.getElementById("son1").value;
    var b = document.getElementById("son2").value;
    console.log(typeof a, typeof b);
    
    if (a !=null && b !=" "){
        document.getElementById("result").innerHTML = "Natija:" + (Number(a)-Number(b))
    }
    else{
    
    document.getElementById("result").innerHTML = "Not enough data";
    }
    
    }

    function mul(){

        var a = document.getElementById("son1").value;
        var b = document.getElementById("son2").value;
        console.log(typeof a, typeof b);
        
        if (a !=null && b !=" "){
            document.getElementById("result").innerHTML = "Natija:" + (Number(a)*Number(b))
        }
        else{
        
        document.getElementById("result").innerHTML = "Not enough data";
        }
        
        }


        function div(){

            var a = document.getElementById("son1").value;
            var b = document.getElementById("son2").value;
            console.log(typeof a, typeof b);
            
            if (a !=null && b !=" "){
                document.getElementById("result").innerHTML = "Natija:" + (Number(a)/Number(b))
            }
            else{
            
            document.getElementById("result").innerHTML = "Not enough data";
            }
            
            }