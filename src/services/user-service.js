export class UserService {

    async getUsersAsync() {
        return new Promise((resovle, reject) => {
            resovle([{ userId: 100 }, { userId: 101 }]);
        })
    }
}