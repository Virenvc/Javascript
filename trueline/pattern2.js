str = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        str += i;
    }
    str += "\n"
} console.log(str);


str = ""
for (let i = 5; i >= 1; i--) {
    for (let j = i; j <= 5; j++) {
        str += i;
    }
    str += "\n"
} console.log(str);

str = ""
for (let i = 5; i <= 1; i--) {
    for (let j = 5; j >= i; j++) {
        str += i;
    }
    str += "\n"
} console.log(str);

/*
    a
    abc
    abcde
    abcdefg
    abcdefghi
*/