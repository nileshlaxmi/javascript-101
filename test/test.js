test = () => {
    var a = {
        x: 4
    }
    
    var b = a;
    
    a.x = 2
    console.log(b);
    
    var c = Object.assign({},a);
    c.x = 5
    console.log(c);
    console.log(a);
    
    document.getElementById("result").innerHTML = JSON.stringify(c);
}

test();

