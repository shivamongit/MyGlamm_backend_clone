function login() {

    let form = document.getElementById("form");
    let otp = form.otp.value;

    let all_users = JSON.parse(localStorage.getItem("users"));
    let count = 0;

    all_users.forEach(function (user) {


        if (otp === user.mobile) {
            (window.location.href = "index.html");
            count++
        }



    });
    if (count === 0) {
        alert("Please Enter valid credentials")

    }

}