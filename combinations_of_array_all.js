const combinations = (elements) => {
    
    if(elements.length === 0) return [ [] ];
    
    const firstEl = elements[0];
    const rest = elements.slice(1);
    
    const combsNoFirst = combinations(rest);
    const combsWithFirst = [];
 
    combsNoFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    });
    
    return [...combsNoFirst, ...combsWithFirst];
};

   console.log(combinations(['a', 'b', 'c']));
