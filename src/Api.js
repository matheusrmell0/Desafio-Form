export const API_URL = 'https://api.origamid.dev/json';

// Faz um GET da foto especifica na API através id dela
export function FETCH_GET() {
  return {
    url: `${API_URL}/transacoes.json`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
