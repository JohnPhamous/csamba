var attempt = 3;

function validate() {
    var username = document.getElementById("clogin").value;
    var password = document.getElementById("cpassword").value;
    if (username == "dhalaney@engr.ucr.edu" && password == "csamba") {
        alert("Login good");
        //window.location = "newLocation.html";
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


