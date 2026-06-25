export function calcularIpva(valor, combustivel, ano) {

    const anoAtual = new Date().getFullYear();

    if (anoAtual - ano > 20) {
        return "Isento";
    }

    if (combustivel === "gasolina") {
        return valor * 0.20;
    } else if (combustivel === "etanol") {
        return valor * 0.15;
    } else if (combustivel === "bicombustivel") {
        return valor * 0.10;
    } else if (combustivel === "hibrido") {
        return valor * 0.08;
    } else if (combustivel === "eletrico") {
        return valor * 0.02;
    }
}