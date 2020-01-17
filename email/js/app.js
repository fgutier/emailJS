//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioCorreo = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');


//Eventlistener
EventListeners();
function EventListeners(){
    //inicio de la app y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton de enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    //bbtnReset boton de resetear formulario
    btnReset.addEventListener('click', resetFormulario);    
}






//funciones
function inicioApp(){
    //deshabilitar el envio
    btnEnviar.disabled = true; 

}

//valida que el campo tenga algo escrito
function validarCampo(){

    //se valida la longitud del texto y no este vacio
    validarLongitud(this);

    //validar email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
}

//function para resetear formulario
function resetFormulario(e){
    formularioCorreo.reset();
    e.preventDefault();

}

//cuando se envia el correo
function enviarEmail(e){
    //spiner al presionar enviar
    const spinnerGift = document.querySelector('#spinner');
    spinnerGift.style.display = 'block';

    //gift que envia email
    const enviarEmail = document.createElement('img');
    enviarEmail.src = 'img/mail.gif';
    enviarEmail.style.display = 'block';

    //ocultar spinner y monstrar enviado
    setTimeout(function(){
        spinnerGift.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviarEmail);
        setTimeout(function(){
            enviarEmail.remove();
            formularioCorreo.reset();
        },5000);
    }, 3000);

    e.preventDefault();
}

//verifiva longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}