export const fetchApi = async (endpoint, options = {}) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  if (typeof window !== 'undefined' && baseUrl.includes('localhost')) {
    const host = window.location.hostname === 'localhost' ? '127.0.0.1' : window.location.hostname;
    baseUrl = `${window.location.protocol}//${host}:4000`;
  }
  const url = `${baseUrl}/api${endpoint}`;
  
  const headers = {
    ...options.headers,
  };

  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const res = await fetch(url, { ...options, headers });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || `Request failed with status ${res.status}`);
    }

    if (res.status === 204) return null;

    return await res.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};
