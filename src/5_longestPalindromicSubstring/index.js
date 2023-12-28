function maxStr(...lst) {
    let [maxLen, maxS] = [0, ""];
    for(let str of lst)
        if(maxLen < str.length)
            [maxLen, maxS] = [str.length, str];
    return maxS;
}

function longestPalindrome(s) {
    function find(base, offset) {
        let [sub, start] = offset==0 ? [s[base], 1] : ["", 0];
        for(let k=start; base+offset+k<s.length; k++) {
            if(s[base-k]!=s[base+offset+k]) break;
            sub = s[base-k] + sub + s[base+offset+k];
        }
        return sub;
    }

    let maxSubstr = "";
    for(let i=0; i<s.length; i++)
        maxSubstr = maxStr(maxSubstr, find(i, 0), find(i, 1));
    return maxSubstr;
};

module.exports = longestPalindrome;





/*

function longestPalindrome(s) {
    const len = s.length;
    const dp = new Array(len);
    for(let i=0; i<len; i++) {
        dp[i] = new Array(len).fill(0);
        dp[i][i] = 1;
    }

    let maxSubstr = [0,0];
    for(let i=0; i<s.length; i++)
        maxSubstr = maxStr(maxSubstr, find(i, 0), find(i, 1));

    return s.slice(maxSubstr[0], maxSubstr[0]+maxSubstr[1]);
};

*/