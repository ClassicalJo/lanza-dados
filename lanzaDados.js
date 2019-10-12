function crearDado(caras) {
    let i;
    let z;
    let random = Math.random()
    let arrayDado = [];
    let resultado;

    for (i = 0; i < caras; i++) {
        arrayDado.push(((caras - i) / caras))
    }

    for (z = 0; z < arrayDado.length; z++) {
        if (arrayDado[z] >= random === true) {
            resultado = z + 1
        }
    }
    return resultado
}

function tirarDado(cantidad, caras) {
    let arrayTirada = []
    let i;
    for (i = 0; i < cantidad; i++) {
        arrayTirada.push(crearDado(caras))
    }
    return arrayTirada
    //comprobarDispersion(), si queres probar esto de nuevo, tenes que hacer de arrayTirada una variable global
}


//formulario basico:
vamosDadosRueden = function(){
    let $mostrarResultados = document.querySelector('#resultados')
    $mostrarResultados.textContent = ''
    let $lanzadorCantidad = document.querySelector('#d100').value
    if ($lanzadorCantidad !== ''){
        let resultadosd100 = document.createElement('p')
        resultadosd100.textContent = `Tiraste ${$lanzadorCantidad}d100!, los resultados son ${String(tirarDado($lanzadorCantidad, 100))}`
        $mostrarResultados.appendChild(resultadosd100)
    }
    
    $lanzadorCantidad = document.querySelector('#d20').value
    if ($lanzadorCantidad !== ''){
        let resultadosd20 = document.createElement('p')
        resultadosd20.textContent = `Tiraste ${$lanzadorCantidad}d20!, los resultados son ${String(tirarDado($lanzadorCantidad, 20))}`
        $mostrarResultados.appendChild(resultadosd20)
    }
    
    $lanzadorCantidad = document.querySelector('#d12').value
    if ($lanzadorCantidad !== ''){
        let resultadosd12 = document.createElement('p')
        resultadosd12.textContent = `Tiraste ${$lanzadorCantidad}d12!, los resultados son ${String(tirarDado($lanzadorCantidad, 12))}`
        $mostrarResultados.appendChild(resultadosd12)
    }
    
    $lanzadorCantidad = document.querySelector('#d10').value
    if ($lanzadorCantidad !== ''){
        let resultadosd10 = document.createElement('p')
        resultadosd10.textContent = `Tiraste ${$lanzadorCantidad}d10!, los resultados son ${String(tirarDado($lanzadorCantidad, 10))}`
        $mostrarResultados.appendChild(resultadosd10)
    }
    
    $lanzadorCantidad = document.querySelector('#d8').value
    if ($lanzadorCantidad !== ''){
        let resultadosd8 = document.createElement('p')
        resultadosd8.textContent = `Tiraste ${$lanzadorCantidad}d8!, los resultados son ${String(tirarDado($lanzadorCantidad, 8))}`
        $mostrarResultados.appendChild(resultadosd8)
    }
    
    $lanzadorCantidad = document.querySelector('#d6').value
    if ($lanzadorCantidad !== ''){
        let resultadosd6 = document.createElement('p')
        resultadosd6.textContent = `Tiraste ${$lanzadorCantidad}d6!, los resultados son ${String(tirarDado($lanzadorCantidad, 6))}`
        $mostrarResultados.appendChild(resultadosd6)
    }

    $lanzadorCantidad = document.querySelector('#d4').value
    if ($lanzadorCantidad !== ''){
        let resultadosd4 = document.createElement('p')
        resultadosd4.textContent = `Tiraste ${$lanzadorCantidad}d4!, los resultados son ${String(tirarDado($lanzadorCantidad, 4))}`
        $mostrarResultados.appendChild(resultadosd4)
    }
    

    $lanzadorCantidad = document.querySelector('#cantidad').value
    $lanzadorCaras = document.querySelector('#caras').value
    if ($lanzadorCantidad !== '' && $lanzadorCaras !== ''){
        resultados = document.createElement('p')
        resultados.textContent = `Y los resultados del tirador especifico (${$lanzadorCantidad}d${$lanzadorCaras}) son: ${String(tirarDado($lanzadorCantidad, $lanzadorCaras))}`
        $mostrarResultados.appendChild(resultados)
    }
    
    
}

$submitButton = document.querySelector('.submit')
$submitButton.onclick = vamosDadosRueden
































function comprobarDispersion() {
    let z;
    let positivos6 = 0;
    let positivos5 = 0;
    let positivos4 = 0;
    let positivos3 = 0;
    let positivos2 = 0;
    let positivos1 = 0;

    for (z = 0; z < arrayTirada.length; z++) {
        if (arrayTirada[z] === 6) {
            positivos6++
        }
        else if (arrayTirada[z] === 5) {
            positivos5++
        }
        else if (arrayTirada[z] === 4) {
            positivos4++
        }
        else if (arrayTirada[z] === 3) {
            positivos3++
        }
        else if (arrayTirada[z] === 2) {
            positivos2++
        }
        else if (arrayTirada[z] === 1) {
            positivos1++
        }
    }
    console.log(`En la tirada de ${arrayTirada.length} resultados hay:`)
    console.log(`${positivos6} dados con resultado 6, lo que implica un ${positivos6/arrayTirada.length} % del total`)
    console.log(`${positivos5} dados con resultado 5, lo que implica un ${positivos5/arrayTirada.length} % del total`)
    console.log(`${positivos4} dados con resultado 4, lo que implica un ${positivos4/arrayTirada.length} % del total`)
    console.log(`${positivos3} dados con resultado 3, lo que implica un ${positivos3/arrayTirada.length} % del total`)
    console.log(`${positivos2} dados con resultado 2, lo que implica un ${positivos2/arrayTirada.length} % del total`)
    console.log(`${positivos1} dados con resultado 1, lo que implica un ${positivos1/arrayTirada.length} % del total`)
    arrayTirada = []
}

