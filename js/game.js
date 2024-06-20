export class Juego {
    constructor(name = null, price = null, category = null, description = null, year = null, img = null) {
        if (name !== null) {
            this.name = name
        } else {
            this.name = "Debe asignar un valor para la casilla nombre"
        };

        if (price !== null) {
            this.price = price
        } else {
            this.price = "Debe asignar un valor para la casilla precio"
        };

        if (category !== null) {
            this.category = category
        } else {
            this.category = "Debe asignar un valor para la casilla categoria"
        };

        if (description !== null) {
            this.description = description
        } else {
            this.description = "Debe asignar un valor para el nombre"
        };

        if (year !== null) {
            this.year = year
        } else {
            this.year = "Debe asignar un valor para el nombre"
        };

        if (img !== null) {
            this.img = img
        } else {
            this.img = "Debe asignar un valor para el nombre"
        };
    }
}