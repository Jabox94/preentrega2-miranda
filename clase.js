class Autos {
    constructor(id, marca, color, velmax) {
        this.id = id;
        this.marca = marca;
        this.color = color;
        this.velmax = velmax;
    }
}

const autos = [];
const auto1 = [1, 'Ferrari 812 GTS', 'rojo', '340 km/h'];
const auto2 = [2, 'Ferrari F40', 'rojo', '324 km/h'];
const auto3 = [3, 'Audio R8 V10', 'Azul marino', '331 km/h'];
const auto4 = [4, 'chevrolet camaro', 'Amarillo', '320 km/h'];

autos.push(auto1, auto2, auto3, auto4);
console.log(autos);