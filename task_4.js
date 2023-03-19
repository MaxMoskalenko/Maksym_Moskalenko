function count_pairs(arr, target) {
    let pairs = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs += (arr[i] + arr[j]) == target;
        }
    }

    return pairs
}

const test_data = [
    {
        expected: 4,
        input: [[1, 3, 6, 2, 2, 0, 4, 5] , 5],
    },
    {
        expected: 10,
        input: [[3, 3, 3, 3, 3], 6],
    },
    {
        expected: 0,
        input: [[1, 3, 6, 2, 2, 0, 4, 5] , 12],
    },
];

test_data.forEach(({ expected, input }) => {
    console.log(count_pairs(...input), '==', expected);
});