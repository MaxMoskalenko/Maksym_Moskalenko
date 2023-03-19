function digital_root(num) {
    const root = String(num)
        .split('')
        .reduce((acc, digit) => acc + Number(digit), 0);

    return root < 10 ? root : digital_root(root);
}

const test_data = [
    {
        expected: 7,
        input: 16,
    },
    {
        expected: 6,
        input: 942,
    },
    {
        expected: 6,
        input: 132189,
    },
    {
        expected: 2,
        input: 493193,
    },
];

test_data.forEach(({ expected, input }) => {
    console.log(digital_root(input), '==', expected);
});
