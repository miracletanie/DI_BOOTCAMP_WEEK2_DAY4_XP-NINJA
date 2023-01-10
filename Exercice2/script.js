

function capitalize(str) {
    var result = ['', '']; 
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0) { 
            result[0] += str[i].toUpperCase(); 
        } else {
            result[1] += str[i].toUpperCase(); 
        }
        }
    return result;
}
console.log(capitalize("abcdef")); 

