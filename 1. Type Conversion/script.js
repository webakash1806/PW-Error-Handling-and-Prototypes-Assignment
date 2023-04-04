function sub() {
    try {
        let inp = document.getElementById("inp").value
        let num = Number(inp)
        if (isNaN(num)) {
            throw console.error("Invalid Input");
        }
        else {
            console.log(num);
            document.getElementById("res").innerHTML = num
        }
    }
    catch {
        alert("Invalid Input! Enter only number")
    }
}

