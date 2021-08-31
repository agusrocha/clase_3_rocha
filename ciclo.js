for(let i=0;i<5;i++) {
    let nombre=prompt("Adivinanza: Lo levanto cuando estoy contento, pero es más pequeño que el resto. ¿Qué es?");    
        
    if(nombre=="dedo") {
        alert("Felicitaciones la adivinanza es "+nombre+" !!!");
        break;
    }
    alert("La respuesta "+nombre+" no es correcta.");
        
}
alert("Finalizo el juego.");
