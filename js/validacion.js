function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {  
     const nombre = document.getElementById("nombre")
     const apellido = document.getElementById("apellido")
     const email = document.getElementById("email")
     const password = document.getElementById("password1")
     const passwordDos = document.getElementById("password2")
     const checkbox = document.getElementById("terminos")

    if ((nombre.value === "" )|| (apellido.value === "") || (email.value === "") || (password.value.length < 6) || (password.value !== passwordDos.value) || (!checkbox.checked )) {
        showAlertError();
      
    } else { showAlertSuccess();
    }
    
    } 
 );
