function sort_friends(friends_str) {
    let friends_arr = friends_str
        .toUpperCase()
        .split(';')
        .map((friend) => friend.split(':'));

    friends_arr.sort((friend1, friend2) => {
        if (friend1[1] == friend2[1]) {
            return friend1[0] > friend2[0] ? 1 : -1;
        }

        return friend1[1] > friend2[1] ? 1 : -1;
    });

    return friends_arr.reduce(
        (acc, friend) => acc + `(${friend[1]}, ${friend[0]})`,
        ''
    );
}

const test_data = [
    {
        expected:
            '(CORWILL, ALFRED)(CORWILL, FIRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)',
        input: 'Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill',
    },
];

test_data.forEach(({ expected, input }) => {
    console.log(sort_friends(input), '==');
    console.log(expected);
});
