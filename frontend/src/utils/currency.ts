export function formatCurrency(amount: number): string {
  try {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(amount);
  } catch (err) {
    return `Rs. ${amount}`;
  }
}
