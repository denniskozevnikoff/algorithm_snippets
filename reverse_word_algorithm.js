var letters = [];

var word = "hegel";
var rword = "";

for(var i = 0; i < word.length; i++){
    console.log(word[i]);
    letters.push(word[i]);
}


for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

console.log(rword);
