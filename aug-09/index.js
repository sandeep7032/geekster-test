function revNum(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(revNum(+prompt("Enter Value"))));
