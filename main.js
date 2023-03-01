function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if($(email).val()){
        alert("email is required")
    } else if (!$(subject).val()){
        alert("Subject is required")
    } else if (!$(message).val()){
        alert("message is required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form Submitted")
    }
}