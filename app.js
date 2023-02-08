function calculando(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let conta =  peso / altura ** 2
    console.log(conta)

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = conta
}

