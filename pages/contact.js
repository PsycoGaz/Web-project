function SendMail() {
    var params ={
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       message : document.getElementById("message").value
    }
   emailjs.send("service_r91n637", "template_204kcgh", params).then(function (res){
       alert("Your Email was Sent successfully ! " );
})
}