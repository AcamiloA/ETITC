function isPrime(){
    let number = prompt("¿Cual es le número?")
    if(number <= 1) alert("No es primo")
    else if(number <= 3) alert("Es primo")    
    else if (number % 2 === 0 || number % 3 === 0) alert("No es primo")
    else{
        let isPrime = true
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) isPrime = false
        }
        isPrime ? alert("Es primo") : alert("No es primo")
    }
}

function GetEvenNumbers()
{
    let from = prompt("Ingrese el valor desde donde quiere comenzar")
    let to = prompt("Ingrese el valor hasta el que quiere llegar")
    let even = ""
    if(from < to){
        for(from; from <= to ; from++)
        {
            if(from % 2 === 0)
            {
                even += `${from},`
            }
        }
        even = even.slice(0, -1)
        alert(`Los números pares encontrados fueron: ${even}`)
    }
    else{
        alert("El número desde el que quiere comenzar no es menor que al número al que quiere llegar")
    }
}
