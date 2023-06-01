class Celular{
    constructor(marca, modelo, ram, armazenamento, processador, qtdDeCameras, foto){
        this.marca = marca
        this.modelo = modelo
        this.ram = ram
        this.armazenamento = armazenamento
        this.processador = processador
        this.qtdDeCameras = qtdDeCameras + " Câmeras"
        this.foto = foto
    }
}

class Tv {
    constructor(marca, modelo, tamanho){
        this.marca = marca
        this.modelo = modelo
        this.tamanho = tamanho
    }
}