let input = [1,4,6,5]
let result = []

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
        result.unshift('Genap');
    }    else result.unshift('ganjil');
} console.log(result)