
function wordBreak(s, wordDict) {
    const flags = new Array(s.length+1).fill(false);
    flags[0] = true;
    for(let ind=1; ind<=s.length; ind++) {
        for(const w of wordDict) {
            const base = ind - w.length;
            if(
                base >=0
                && flags[base]
                && w == s.substring(base, base + w.length)
            ) {
                flags[ind] = true;
                break;
            }
        }
    }
    return flags.pop();
};


/*
function wordBreak(s, wordDict) {
    const flags = new Array(s.length).fill(false);
    for(let ind=0; ind<s.length; ind++) {
        for(const w of wordDict) {
            const prev_ind = ind - w.length;
            const prev_flag = prev_ind < 0 || flags[prev_ind];
            const base = prev_ind + 1;
            if(
                prev_flag
                && base >= 0
                && w == s.substring(base, base + w.length)
            ) {
                flags[ind] = true;
                break;
            }
        }
    }
    return flags.pop();
};
*/

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




