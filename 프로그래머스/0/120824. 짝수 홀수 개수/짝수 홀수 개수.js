function solution(num_list) {
    return num_list.reduce(([even, odd], curr) => {
        return [
            curr % 2 === 0? even + 1 : even,
            curr % 2  === 1? odd + 1 : odd 
        ]
    }, [0,0]);
};
