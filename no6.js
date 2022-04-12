var input = [1,1,2,3,7]
var k = 10
let status = "Tidak Bisa"

for (let i = 0; i < input.length; i++) {
    for (let l = 0; l < input.length; l++) {
        if (input[i] + input[l] == 10 ) {
            status = "Bisa"
        }
    }
}console.log(status)