function manufacture(gifts, materials) {
    // Creamos un array para almacenar las palabras que contienen caracteres de 'materials'
    const caracteres = [];
    // Recorremos cada palabra en el array 'gifts'
    for (let i = 0; i < gifts.length; i++) {
        // Variable para rastrear si la palabra actual contiene caracteres de 'materials'
        let existe = true;

        // Recorremos cada carácter de la palabra actual
        for (let j = 0; j < gifts[i].length; j++) {
            // Verificamos si el carácter actual de la palabra no está en 'materials'
            if (!materials.includes(gifts[i][j])) {
                // Si no está, marcamos la palabra como no encontrada y salimos del bucle
                existe = false;
                break;
            }
        }
        // Si la palabra fue encontrada (todos sus caracteres están en 'materials'), la agregamos al array
        if (existe) {
            caracteres.push(gifts[i]);
        }
    }
    // Devolvemos el array que contiene las palabras que cumplen con la condición
    return caracteres;
}