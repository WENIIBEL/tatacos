let precioUnitario
let cantidad
let total
let numeroPedido

function calcularTotal() {
    precioUnitario = document.getElementById("precioUnitario").value
    cantidad = document.getElementById("cantidad").value
    total = precioUnitario * cantidad
    document.getElementById("total").value = total
}