for(let i=0;i<5;i++) {
    let nombre=prompt("Adivinanza: Lo levanto cuando estoy contento, pero es más pequeño que el resto. ¿Qué es?");    
        
    if(nombre=="dedo") {
        console.log("Felicitaciones la adivinanza es "+nombre+" !!!");
        break;
    }
    console.log("La respuesta "+nombre+" no es correcta.");
        
}
console.log("Finalizo el juego.");
