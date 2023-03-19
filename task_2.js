function first_non_repeating_letter(str) {
    let str_length = str.length;

    while (str_length != 0) {
        const ch = str[0];

        str = str.replaceAll(new RegExp(ch, 'ig'), '');

        if (str_length - str.length == 1) {
            return ch;
        }
        str_length = str.length;
    }

    return '';
}

const test_data = [
    {
        expected: 't',
        input: 'stress',
    },
    {
        expected: 'T',
        input: 'sTreSS',
    },
    {
        expected: '',
        input: 'sttrreess',
    },
];

test_data.forEach(({ expected, input }) => {
    console.log(first_non_repeating_letter(input), '==', expected);
});
