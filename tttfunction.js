const ob = {
    "1": 1,
    "2": 1,
    "3": 0,
    "4": 1,
    "5": 0,
    "6": 1,
    "7": 1,
    "8": 0,
    "9": 1,
};   //1 es x   0 es O

function areEqual(){
    var len = arguments.length;
    for (var i = 1; i< len; i++){
       if (arguments[i] === null || arguments[i] !== arguments[i-1])
          return false;
    }
    return true;
 }

var msg = "";

if (areEqual(ob["1"], ob["2"], ob["3"]) || 
    areEqual(ob["4"], ob["5"], ob["6"]) ||
    areEqual(ob["7"], ob["8"], ob["9"]) || 
    areEqual(ob["1"], ob["4"], ob["7"]) || 
    areEqual(ob["2"], ob["5"], ob["8"]) || 
    areEqual(ob["3"], ob["6"], ob["9"]) || 
    areEqual(ob["1"], ob["5"], ob["9"]) || 
    areEqual(ob["3"], ob["5"], ob["7"]))
    {
    
        msg = "Ganador";

}else{
    var i = true;
    for (const value in ob) {
        if (ob[value] == null){ i = false;}
    }
    if(i = true){msg = "Empate";}
}
console.log(msg)