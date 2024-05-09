function inicio() {
    let temperaturaCelsius;
    
    temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");
    if (!temperaturaCelsius || isNaN(temperaturaCelsius)){
        alert("Por favor, ingrese un valor numérico.");
        return inicio();
    }
 
    temperaturaCelsius = parseFloat(temperaturaCelsius);

    let temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
    let temperaturaEnKelvin = convertirCelsiusAKelvin(temperaturaCelsius);

    mostrarResultados(temperaturaEnFahrenheit, temperaturaEnKelvin);
}

function convertirCelsiusAFahrenheit(temperatura) {
    return (temperatura * 1.8) + 32;
}

function convertirCelsiusAKelvin(temperatura) {
    return temperatura + 273.15;
}

function mostrarResultados(temperaturaFahrenheit, temperaturaKelvin) {
    let mensaje = "La temperatura en Fahrenheit es " + temperaturaFahrenheit.toFixed(2) + "°F\n";
    mensaje += "La temperatura en Kelvin es " + temperaturaKelvin.toFixed(2) + "K";

    console.log(mensaje);
}

inicio();
