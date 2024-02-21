function sendMail(){
    let parms ={
        name :document.getElementById("fullName").value,
        email :document.getElementById("emailAddress").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value
    }



    emailjs.send("service_e4v3ntk","template_nmceav4",parms).then(alert("Email sent!!"))
}