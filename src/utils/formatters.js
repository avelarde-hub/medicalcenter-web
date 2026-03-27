export const currencyFormatter = new Intl.NumberFormat('es-EC', {
  style: 'currency',
  currency: 'USD'
});

export function formatCurrency(value) {
  return currencyFormatter.format(value || 0);
}

export function formatRole(role) {
  const labels = {
    admin: 'Administrador',
    doctor: 'Médico',
    patient: 'Usuario'
  };
  return labels[role] || role;
}
