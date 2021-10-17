module.exports = function (Homework) {

    const reduce  = async (array, fn, initialValue, cb) => {
        const length = await new Promise(array.length);
        for (
            let i = 0;
            await new Promise((resolve) => Homework.less(i, length, resolve));
            i = await new Promise((resolve) => Homework.add(i, 1, resolve))
        ) {
            const currentValue = await new Promise((resolve) => array.get(i, resolve));
            initialValue = await new Promise((resolve) => fn(initialValue, currentValue, i, array, resolve));
        }
        cb(initialValue);
    }
    return (array, fn, initialValue, cb) => {
        return reduce(array, fn, initialValue, cb);
    }
}