import { Request } from 'request-promise-native'

export class ApiClient {

    getTasks() {
        return new Promise((resolve, reject) => {
            var options = {
                method: "GET",
                uri: "https://jsonplaceholder.typicode.com/todos/",
                json: true
            };

            new Request(options)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

}