window.onload = function () {

    let button = document.querySelector("form .btn");
    button.addEventListener("click", function (event) {

        event.preventDefault();
        var email = document.getElementById('email').value.trim();
        msg = document.getElementById("message");
        var child = document.getElementById("temp");

        if (email.length == 0) {
            if (child != null) {
                msg.removeChild(child);
            }
            let parag = document.createElement("p");
            let paragTxt = document.createTextNode("Email field must not be empty");
            parag.appendChild(paragTxt)
            parag.setAttribute("id", "temp");
            msg.appendChild(parag)

        } else if (!isEmail(email)) {
            if (child != null) {
                msg.removeChild(child);
            }
            console.log("email invalid");
            var parag = document.createElement("p");
            var paragTxt = document.createTextNode("Incorrect Email format!");
            parag.appendChild(paragTxt)
            parag.setAttribute("id", "temp");
            msg.appendChild(parag)


        } else {
            if (child != null) {
                msg.removeChild(child);
            }
            var parag = document.createElement("p");
            var paragTxt = document.createTextNode("Thank you! Your email address: " + email + " has been added to our mailing list!");
            parag.appendChild(paragTxt)
            parag.setAttribute("id", "temp");
            msg.appendChild(parag)


        }

    });

}

/**
 * valid email address checks
 */
function isEmail(emailAddress) {
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|io|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
}