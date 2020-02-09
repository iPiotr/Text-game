function myFunction() {

const x = document.getElementById("text").value;
    console.log(x);

    if (x == 'hello') {
        document.getElementById("demo").innerHTML = x;
    } else {
        document.getElementById("demo").innerHTML = '';
    }
}

const input = document.getElementById("text");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        myFunction()
    }
});