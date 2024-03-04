import axios, { AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BACKEND_API_URL,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  }

  private async withAuth() {
    const response = await this.client.get('/sanctum/csrf-cookie');
    this.client.defaults.headers.common['X-XSRF-TOKEN'] = response.data.csrfToken;
    return this;
  }

  async get(url: string) {
    await this.withAuth();
    return this.client.get(url);
  }

  async post(url: string, data: string) {
    await this.withAuth();
    return this.client.post(url, data);
  }
}

export default ApiClient;
