function post(){
    var message = document.getElementById("message").value; 

    if (message.length<1){
        alert("Please enter valid message");
    }
    else{
        alert("Message sent successfuly.");
        return true;
    }
}

document.getElementById("message").innerHTML = message;