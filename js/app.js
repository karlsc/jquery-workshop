$('#signup-form').on('submit', function(event) {
    
    var $password = $("input[name='password']").val();
    var $confirm = $("input[name='password2']").val();
    
    if($password.length < 10){
        alert("Please select a password of at least 10 characters.");
        event.preventDefault();
    }
    else if($password !== $confirm){
            
        alert("Passwords not matching.");
        event.preventDefault();
    }
});