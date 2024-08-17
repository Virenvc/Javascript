// let str = ""
// for (let i = 1; i <= 5; i++) {
//     // let str = i;
//     // console.log("* ");
//     for (let j = 1; j <= 5; j++) {
//         str += i;
//     }
//     str += "\n"
// }
// console.log(str);

let str = ""
for (let i = 1; i <= 5; i++) {
    for (let j = i; j <= 5; j++) {
        str += "*";
    }
    str += "\n"
}
console.log(str);