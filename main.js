function calcularISR() {
  const ingreso = parseFloat(document.getElementById('ingreso').value);
  let tasa = 0;

  if (ingreso <= 25000) {
    tasa = 0.01;
  } else if (ingreso <= 50000) {
    tasa = 0.011;
  } else if (ingreso <= 83333.33) {
    tasa = 0.015;
  } else {
    tasa = 0.025;
  }

  const isr = ingreso * tasa;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    ISR a pagar: $${isr.toFixed(2)} MXN <br/>
    Tasa aplicada: ${(tasa * 100).toFixed(2)}%
  `;
}
