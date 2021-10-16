module.exports = function (Homework) {

    function promisify(func) {
        return function (...args) {
            return new Promise((resolve, reject) => {
                args.push((res => resolve(res)))

                func.call(this, ...args);
            })
        }
    }

    const { add, less } = Homework;

    const addPromise = promisify(add);
    const lessPromise = promisify(less);

    return async (array, fn, initialValue, cb) => {
        const lengthPromise = promisify(array.length);
        const getPromise = promisify(array.get);
        const funcPromise = promisify(fn);

        const arrayLength = await lengthPromise();
        const accum = initialValue

        for (let i = 0; await lessPromise(i, arrayLength); await addPromise(i, 1)) {
            const arrItem = await getPromise();

            accum = await funcPromise(accum, arrItem, i, array);
        }

        cb(accum);
    }
}