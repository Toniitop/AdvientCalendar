const elementosVistos = {}; // Objeto para almacenar los elementos vistos

for (let i = 0; i < gifts.length; i++) {
    if (elementosVistos[gifts[i]] !== undefined) {
        // Si el elemento ya ha sido visto, significa que hay un duplicado
        return gifts[i];
    } else {
        // Si el elemento no ha sido visto, se agrega al objeto
        elementosVistos[gifts[i]] = true;
    }
}
return -1; // No se encontraron duplicados