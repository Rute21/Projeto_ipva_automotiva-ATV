import { calcularIpva } from "./script_calculos.js";

const formulario = document.getElementById("#div-form-veiculo");
const lista = document.getElementById("lista-veiculo");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const ano = Number(document.getElementById("ano").value);
    const valor = Number(document.getElementById("valor").value);

    const combustivel =
    document.querySelector('input[name="combustivel"]:checked').value;

    const seguro = valor * 0.10;

    const ipva = calcularIpva(valor, combustivel, ano);

    
    lista.innerHTML += `
        <p>
            ${placa} -
            ${modelo} -
            ${marca} -
            ${ano} -
            Seguro: R$ ${seguro.toFixed(2)} -
            IPVA: ${ipva}
        </p>
    `;

    formulario.reset();
});  