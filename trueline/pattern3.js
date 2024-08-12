let r = 5;
let pat = "";

for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= r - i; j++) {
        pat += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        pat += k;
    }

    pat += "\n";
}
console.log(pat);
/*
fbhu
dffr
r
rfg
er
fgr
fgrt
 */