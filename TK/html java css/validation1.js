function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var enquiry = document.getElementById("enquiry").value;

    var phonePattern = /^[0-9]{10}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name === "") {
        alert("Please enter your name.");
        document.getElementById("name").focus();
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        document.getElementById("phone").focus();
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }

    if (enquiry === "") {
        alert("Please enter your enquiry.");
        document.getElementById("enquiry").focus();
        return false;
    }

    alert("Enquiry successful!");
    document.getElementById("enquiryForm").reset();
    return false;
}
