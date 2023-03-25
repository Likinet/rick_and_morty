export const AGREGAR_FAVORITO = 'AGREGAR_FAVORITO';
export const QUITAR_FAVORITO = 'QUITAR_FAVORITO';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const agregarFavorito = (character) => {
    return {    type: AGREGAR_FAVORITO,
                payload: character }

}

export const quitarFavorito = (id) => {
    return {    type: QUITAR_FAVORITO,
                payload:id }
}

export const filterCards = (gender) => {
    return {    type: FILTER,
                payload:gender }
}

export const orderCards = (id) => {
    return {    type: ORDER,
                payload:id }
}