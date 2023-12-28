
function wordBreak(s, wordDict) {
    const flags = Array(s.length);

    function wordBreakRec(ind) {
        if(flags[ind] != undefined)
            return flags[ind];

        if(s.length == ind)
            return (flags[ind] = true);

        flags[ind] = false;
    
        for(const w of wordDict)
            if(w == s.slice(ind, ind + w.length))
                flags[ind] ||= wordBreakRec(ind + w.length);
    
        return flags[ind];
    };
    
    return wordBreakRec(0);
};

module.exports = wordBreak;




