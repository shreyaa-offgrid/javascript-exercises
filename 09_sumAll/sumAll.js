const sumAll = function(a,b) {
    if(typeof a !='number' ||
    typeof b != 'number' ||    
    a<0 || b<0 || 
    !Number.isInteger(a) ||
    !Number.isInteger(b)){
        return 'ERROR';
    }
    const arr = [];
    const st = a<b?a:b;
    const end = st===a?b:a;
    for(let i=st;i<=end;i++){
        arr.push(i);
    }
    return arr.reduce((total,el) =>total+el,0);
};

// Do not edit below this line
module.exports = sumAll;
