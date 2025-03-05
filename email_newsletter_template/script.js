function removeElement(id) {
    const element = document.getElementById(id);
    element.remove();
}

function fadeOut(id) {
    var email_input = document.getElementById(id);
    email_input.style.opacity = 1;
    setInterval(function () {
        if (email_input.style.opacity > 0) {
            email_input.style.opacity = email_input.style.opacity - 0.1;
        }
        else {
            removeElement("content_heading");
            clearInterval();
        }
    }, 50);
}

function submit() {
    var email_id = document.getElementById("email").value;

    if (email_id == "") {
        console.log("no email entered");
    }
    else if (email_id != "") {
        // window.alert("Thank you for subscribing to our weekly newsletter!");
        fadeOut("content_heading");

        //code for opening the popu
        setTimeout(() => {
            let popup = document.getElementById("popup");
            popup.classList.add("open-popup");
        }, 500);
    }

    console.log(email_id);
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}