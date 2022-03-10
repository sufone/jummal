export default function sumDigitsFromString(string) {
    string = string.split(''); //split into individual characters
    var sum = 0; //have a storage ready
    for (var i = 0; i < string.length; i++) {
        //iterate through
        sum += parseInt(string[i], 10); //convert from string to int, base10
    }
    return JSON.stringify(sum); //return when done
}