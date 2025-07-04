const reverseString = function(string) {
    let words = string.split(' ');
    let ans = [];
    for(let i=words.length-1;i>=0;i--){
        let curr = words[i];
        let arr = curr.split('');
        ans.push(arr.reverse().join(''));
    }
    return ans.join(" ");
    
};

// Do not edit below this line
module.exports = reverseString;
