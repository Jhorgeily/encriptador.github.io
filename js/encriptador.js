/* ENCRIPTAR
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

window.onload = function(){
    var errores =  document.getElementById('errores');
    var entrada = document.getElementById('input');
    var salida = document.getElementById('output');   
    
    errores.style.visibility = "hidden";
    entrada.addEventListener('click', () => {
        entrada.value = '';
    })
    document.getElementById('encriptar').addEventListener('click', () => { 
        errores.style.visibility = "hidden";
        if( validarCaracteres(entrada.value) == false){
            if(validarTexto(entrada.value) == 0){
                salida.value = encriptar(entrada.value);
            }else{
                errores.textContent = "Error: No se puede ingresar mayúsuculas.";
                errores.style.visibility = "visible";
            }
        }else{
            errores.textContent = "Error: No se puede ingresar caracteres especiales.";
            errores.style.visibility = "visible";
        }
            
    });    
    document.getElementById('desencriptar').addEventListener('click', () => {
        salida.value = desencriptar(entrada.value);
    })
    document.getElementById('copiar').addEventListener('click', () => {
        navigator.clipboard.writeText(salida.value);
    })
}

function validarCaracteres(texto){
    console.log(texto);
    const specialChars = /[E`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log(specialChars.test(texto));
    if(specialChars.test(texto) == true){
        return true;
    }
    
    return false;
} 
function validarTexto(texto){
    
    for(i=0; i<= texto.length-1;i++){
        if(texto[i]==texto[i].toUpperCase() && texto[i] != " "){
            return 1;
        }
    }
    
    return 0;
}

function encriptar (texto){

    var encriptado = "";

    for(i=0;i<=texto.length-1; i++){
        switch (texto[i].toLowerCase()) {
            case 'a':
                //console.log("Letra a en ",i+1);
                encriptado = encriptado +"ai";
                break;
            case 'e':
                //console.log("Letra e en ",i+1);
                encriptado = encriptado +"enter";
                break;
            case 'i':
                //console.log("Letra i en ",i+1);
                encriptado = encriptado +"imes";
                break;
            case 'o':
                //console.log("Letra o en ",i+1);
                encriptado = encriptado +"ober";
                break;
            case 'u':
                //console.log("Letra u en ",i+1);
                encriptado = encriptado +"ufat";
                break;
            default:
            encriptado = encriptado+texto[i].toLowerCase();    
            break;
        }
    }

    return encriptado;
}

/* DESENCRIPTAR
La palabra "enter" es convertida para "e"
La palabra "imes" es convertida para "i"
La palabra "ai" es convertida para "a"
La palabra "ober" es convertida para "o"
La palabra "ufat" es convertida para "u"*/
function desencriptar(texto){
   
    cont = 100;
    while(texto.includes("enter","imes","ai","ober","ufat") || cont > 0){
        console.log(texto);
        texto = texto.replace("ai","a").replace("ober","o").replace("imes","i").replace("ufat","u").replace("enter","e");
        cont--;
    }

    return texto;

}


