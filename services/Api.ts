import { APIResponse } from '../data/api-response';

export default class ApiService {

    static apiBase = 'https://ergast.com/api/f1';

    static season (year: number): Promise<APIResponse> {
        return new Promise((resolve, reject) => {
            fetch(`${this.apiBase}/${year}.json`)
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
}
