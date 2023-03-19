function filter_list(list) {
    return list.filter((item) => typeof item === 'number');
}

const test_data = [
    {
        expected: [1, 2],
        input: [1, 2, 'a', 'b'],
    },
    {
        expected: [1, 0, 15],
        input: [1, 'a', 'b', 0, 15],
    },
    {
        expected: [1, 2, 123],
        input: [1, 2, 'aasf', '1', '123', 123],
    },
];

test_data.forEach(({ expected, input }) => {
    console.log(filter_list(input), '==', expected);
});
