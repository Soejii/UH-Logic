var input = [1,2,3,5]
let status = "Tidak Ada"

for (let i = 0; i < input.length; i++) {
    for (let l = 0; l < input.length; l++) {
        if (i == l ) {
        }else if (input[i] == input[l]) {
            status = "Ada"
        }
    }
}console.log(status)