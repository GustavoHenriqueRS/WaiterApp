export const localHost = '192.168.1.107';

export const port = '3001';


export const LocalHostPort = `${localHost}:${port}`;

export function FormatCurrency(value: number) {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
}
