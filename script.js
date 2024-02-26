function displayUserName() {
    var userName = document.getElementById("username").value;
    document.getElementById("output").innerHTML = "Hello, " + userName + "!";
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    img.style.width = "400px"; // Change size on click
}