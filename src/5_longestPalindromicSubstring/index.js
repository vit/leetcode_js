
function longestPalindrome(s) {
    const n = s.length;
    const is_p = Array(n).fill().map(_ => Array(n).fill(false));

    let max = [0, 0];

    for(let i=n-1; i>=0; i--) {
        for(let j=i; j<n; j++) {
            if(i==j) {
                is_p[i][i] = true;
            } else if(s[i] == s[j] && j<=i+2) {
                is_p[i][j] = true;
            } else if(s[i] == s[j] && is_p[i+1][j-1]) {
                is_p[i][j] = true;
            }
            if(is_p[i][j]) {
                if(max[1] < (j-i))
                    max = [i, j-i];
            }
        }
    }
    return s.substring(max[0], max[0]+max[1]+1);
};

module.exports = longestPalindrome;

/*
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
*/



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