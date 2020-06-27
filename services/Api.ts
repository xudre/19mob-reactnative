import { APIResponse } from '../data/api-response';

export default class ApiService {

    static apiBase = 'https://ergast.com/api/f1';

    private static get(path: string, query?: { [key: string]: string | number }): Promise<APIResponse> {
        const q: string[] = [];

        if (query !== undefined) {
            for (const key in query) {
                q.push(`${key}=${query[key]}`);
            }
        }

        return new Promise((resolve, reject) => {
            fetch(`${this.apiBase}/${path}.json?${q.join('&')}`)
            .then(response => {
                response.json()
                .then(body => {
                    resolve(body);
                });
            })
            .catch(reason => {
                reject(reason);
            });
        });
    }

    static seasons (limit: number = 10): Promise<APIResponse> {
        return this.get('seasons', { limit });
    }
    static seasonResults (year: number, round: number): Promise<APIResponse> {
        return this.get(`${year.toString()}/${round}/results`);
    }
    static season (year: number): Promise<APIResponse> {
        return this.get(year.toString());
    }

    static drivers (year: number, limit = 10): Promise<APIResponse> {
        return this.get(`${year}/drivers`, { limit });
    }

}
