function CalculateArea()
{
    alert("Calcule el área de un rectángulo")
    let flag = true
    do
    {
        let unitOfMeasure = prompt("¿Cual es la unidad de medida?")
        let width = prompt("¿Cual es el valor del ancho?", "10")
        let height = prompt("¿Cual es el valor del alto?", "10")

        if(width === 0){
            alert("El valor del ancho no puede ser 0")
        }
        if(height === 0){
            alert("El valor del alto no puede ser 0")
        }

        if(height != 0 && width != 0){
            let area = width * height
            alert(`El área es de ${area}${unitOfMeasure}²`)
        }

        flag = confirm("¿Desea repetir el proceso?")
    }while(flag)
}

