const brl = money =>
  `R$${String(money.toFixed(2)).replace('.', ',')}`;

export { brl };
