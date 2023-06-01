const cel1 = new Celular("Xiaomi", "Redmi Note 12", "6 GB", "128 GB", "SnapDragon 685", "3", "redminote12.jpeg")
const cel2 = new Celular("Xiaomi", "Redmi Note 12 Pro", "6 GB", "256 GB", "Dimensity 1080", "3", "redminote12pro.jpeg")
const cel3 = new Celular("Xiaomi", "Redmi Note 12 Pro Plus", "8 GB", "256 GB", "Dimensity 1080", "3", "redminote12proplus.jpeg")
const cel4 = new Celular("Samsung", "Galaxy S23 Ultra", "12 GB", "1 TB", "SnapDragon 8 Gen 2", "4", "s23.jpeg")
const cel5 = new Celular("Xiaomi", "Poco X5", "6 GB", "128 GB", "SnapDragon 695", "3", "poco.jpeg")

const tv1 = new Tv("LG", "OLED83C2PSA", "83")
const tv2 = new Tv("LG", "32LT330HBSB", "32")
const tv3 = new Tv("LG", "50UQ7950", "50")
const tv4 = new Tv("LG", "43UQ751COSF", "43")
const tv5 = new Tv("LG", "43LM631C0SB", "43")

document.write(`
    <div class="card">
        <img class="foto" src="img/${cel1.foto}"/>
        <div class="info">
            <h3 class="modelo">${cel1.modelo}</h3>
            <p class="marca">${cel1.marca}</p>

            <span class="outros">${cel1.processador}</span>
            <span class="separador"> | </span>
            <span class="outros">${cel1.armazenamento}</span>
            <span class="separador"> | </span>
            <span class="outros">${cel1.ram}</span>
            <span class="separador"> | </span>
            <span class="outros">${cel1.qtdDeCameras}</span>
        </div>
    </div>
`)

const tvs = [tv1,tv2,tv3,tv4,tv5]

for(let i = 0; i < tvs.length ; i++){
    document.write(`
        <p>${tvs[i].marca}</p>
        <p>${tvs[i].modelo}</p>
        <p>${tvs[i].tamanho}</p>
    `)
}