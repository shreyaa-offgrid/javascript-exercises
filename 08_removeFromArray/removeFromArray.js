const removeFromArray = function(arr, ...args) {
    for(const arg of args){
        let idx = arr.findIndex(
        el=>el===arg);
        while(idx!=-1){
            arr.splice(idx,1);
            idx = arr.findIndex(
            el=>el===arg);
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
