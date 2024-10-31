function rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    let costePorDia;

    switch (tipoDeVehiculo) {
        case "Compacto":
            costePorDia = 14000;
            break;
        case "Mediano":
            costePorDia = 17000;
            break;
        case "Camioneta":
            costePorDia = 28000;
            break;
        default:
            return "Ese vehículo no existe.";
    }

    let costeSillaDeBebe = sillaParaBebe ? 1200 : 0;
    let Total = (diasDeAlquiler * (costePorDia + costeSillaDeBebe));
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${Total}.`;
    if (sillaParaBebe) {
        mensaje += " Con la silla para niños.";
    }
    return mensaje;
}

// Pruebas
console.log(rentalCar("Compacto", 3, false));
console.log(rentalCar("Compacto", 5, true));
console.log(rentalCar("Mediano", 8, false));
console.log(rentalCar("Camioneta", 1, true));

/*
console.log(rentalCar("Compacto", 3, false)); // Prueba 1
console.log(rentalCar("Compacto", 5, true)); // Prueba 2
console.log(rentalCar("Mediano", 8, false)); // Prueba 3
console.log(rentalCar("Camioneta", 1, true)); // Prueba 4
*/
