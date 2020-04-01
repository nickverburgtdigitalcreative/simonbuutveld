export default class Deferred {
    constructor() {
        const p = this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });

        this.then = p.then.bind(p);
        this.catch = p.catch.bind(p);
        if (p.finally) {
            this.finally = p.finally.bind(p);
        }
    }
}