
function quadratic(delta, a, b) {

    if(delta==0) {
        var x =-b/(2*a);
        return "X: "+x;
    }

    else if(delta > 0){
        var x1 = (-b + Math.sqrt(delta))/(2*a);
        var x2 = (-b - Math.sqrt(delta))/(2*a);
        return "X1: "+x1+";<br>X2: "+x2;
    }

    else if(delta<0){
        return "No data";
    }

}

function discriminant(a, b, c) {
    //a(x**2)+bx+c=0
    var delta = Math.pow(b, 2) - 4 * a * c;
    return quadratic(delta, a, b);
}

// document.write(discriminant(2, 4, 2))
document.write(discriminant(2, 3, 1))