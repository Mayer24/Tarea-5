// Obtener el promedio de notas de un alumno considerando que 
// la suma de las notas debe ser el retorno de una función y 
// el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.

//suma
const sumar =(a, b, c, d, e, f) => {
    return a + b + c + d + e + f
}
const sumatoria = sumar(6, 8, 9, 2, 5, 10)
console.log('Resultado de la suma: ', sumatoria)

//promedio
const promedio = (a, b, c, d, e, f) => {
    return (sumatoria) / 6
}
const resultado = promedio (sumatoria)
console.log('Resultado del promedio: ', resultado)