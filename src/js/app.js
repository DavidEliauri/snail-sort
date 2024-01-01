/**
 *
 * @param {[][]} array
 * @returns {[]}
 */
function snail(array) {
    if (array[0].length === 0) {
        return [];
    }

    const finalArr = [];

    const arrayLength = array[0].length;

    let recursiveIndex = 0;

    /**
     *
     * @param {number} x
     * @param {number} y
     */
    function recursive(x, y) {
        finalArr.push(array[y][x]);

        if (x < recursiveIndex) {
            recursive(++x, y);

            return;
        }

        if (recursiveIndex === Math.ceil(arrayLength / 2)) {
            return;
        }

        if (y === recursiveIndex && x < arrayLength - recursiveIndex - 1) {
            recursive(++x, y);

            return;
        }

        if (
            x === arrayLength - recursiveIndex - 1 &&
            y < arrayLength - recursiveIndex - 1
        ) {
            recursive(x, ++y);

            return;
        }

        if (y === arrayLength - recursiveIndex - 1 && x > recursiveIndex) {
            recursive(--x, y);

            return;
        }

        if (x === recursiveIndex && y > recursiveIndex + 1) {
            if (y === recursiveIndex + 2) {
                recursiveIndex++;
            }

            recursive(x, --y);

            return;
        }
    }

    recursive(0, 0);

    return finalArr;
}

// console.log(
//     snail([
//         [1, 2, 3, 4, 5, 6],
//         [7, 8, 9, 10, 11, 12],
//         [13, 14, 15, 16, 17, 18],
//         [19, 20, 21, 22, 23, 24],
//         [25, 26, 27, 28, 29, 30],
//         [31, 32, 33, 34, 35, 36],
//     ]),
// );

// console.log(
//     snail([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ]),
// );

console.log(
    snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]),
);

/**
 *
 * @param {[]} firstArr
 * @param {[]} secondArr
 * @returns {boolean}
 */
function deepEqualArray(firstArr, secondArr) {
    if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
        throw new TypeError();
    }

    for (const [index, element] of firstArr.entries()) {
        if (element === secondArr[index]) {
            continue;
        }

        return false;
    }

    return true;
}
