
function wordBreak(s, wordDict) {
    const flags = Array(s.length).fill(false);
    for(let i=0; i<s.length; i++) {
        for(const w of wordDict) {
            const prev = i - w.length;
            const base = prev + 1;
            const prev_flag = prev < 0 || flags[prev];
            if(base >= 0) {
                flags[i] ||= w == s.slice(base, base + w.length) && prev_flag;
                if(flags[i]) break;
            }
        }
    }
    return flags[s.length-1];
};


/*
function wordBreak(s, wordDict) {
    const flags = Array(s.length);

    function wordBreakRec(ind) {
        if(flags[ind] != undefined)
            return flags[ind];

        if(s.length == ind)
            return (flags[ind] = true);

        flags[ind] = false;
    
        for(const w of wordDict) {
            if(w == s.slice(ind, ind + w.length)) {
                flags[ind] ||= wordBreakRec(ind + w.length);
                if(flags[ind]) break;
            }
        }
    
        return flags[ind];
    };
    
    return wordBreakRec(0);
};
*/

module.exports = wordBreak;




