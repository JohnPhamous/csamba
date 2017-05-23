var attempt = 3;

function validate() {
    var username = document.getElementById("clogin").value;
    var password = document.getElementById("cpassword").value;
    if (username == "david" && password == "csamba") {
        window.location = "user/index.html";
    }
    else {
        attempt--;
        alert("Invalid login");
        if (attempt == 0) {
            document.getElementById("clogin").disabled = true;
            document.getElementById("cpassword").disabled = true;
            document.getElementById("cbutton").disabled = true;
        }
    }
}


