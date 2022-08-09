function capitalize(input) {
    var words = input.split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
}
const string = prompt("Enter String : ");
const result = capitalize(string);
console.log(result);
