
function longestPalindromeSubseq(s) {
    const n = s.length;
    let max = 0;

    const memo = new Array(n+1).fill(0).map(_ => new Array(n+1).fill(0));

    for(let i=0; i<n; i++) {
        for(let j=n-1; j>=i; j--) {
            let val = memo[i][j];
            if(s[i] == s[j]) {
                val+= (i==j) ? 1 : 2;
                memo[i][j] = val;
            } else {
                if(s[i-1] != s[j+1]) {
                    // val+= (i==j) ? 1 : 2;
                }
            }
            if(max < val) {
                max = val;
            }
            memo[i][j] = val;
        }

    }

    console.log(s, max);
    console.log(memo);

    return max;
}


/*
function longestPalindromeSubseq(s) {
    const n = s.length;

    recCnt = 0;

    const memo = new Array(n).fill(0).map(_ => new Array(n).fill(0));


    function find(i) {
        // console.log(memo);
        let len = findRec(i, i, -1);
        if(i < n-1 && s[i]==s[i+1]) {
            const lenEven = findRec(i, i+1, 0);
            if(len < lenEven) {
                len = lenEven;
            }
        }
        return len;
    }

    function findRec(left, right, sum) {
        // console.log(memo);
        recCnt++;
        if(left<0 || right>n-1) {
            return sum;
        }

        if(memo[left][right] > 0)
            return memo[left][right];



        if(s[left]==s[right]) {
            return findRec(left-1, right+1, sum+2);
        }
        const len1 = findRec(left, right+1, sum);
        const len2 = findRec(left-1, right, sum);

        const max = Math.max(len1, len2);
        memo[left][right] = max;
        return max;
    }

    let maxLen = 0;
    for(let i=0; i<s.length; i++) {
        const len = find(i);
        if(maxLen < len) maxLen = len;
    }
    console.log(s, maxLen, recCnt, n*n*n);
    console.log(memo);
    return maxLen;
};
*/




/*
function isPalindrome(s) {
    if(s.length <= 1)
        return true;
    return s[0]==s[s.length-1] && isPalindrome(s.substring(1, s.length-1));
}

function stringWithout(s, i) {
    return s.substring(0, i) + s.substring(i+1);
}

function longestPalindromeSubseq(s) {
    const candidates = new Set([s]);
    for(const str of candidates) {
        if( isPalindrome(str) ) {
            return str.length;
        }
        for(let i=0; i<str.length; i++) {
            const sub = stringWithout(str, i);
            candidates.add(sub);
        }
        candidates.delete(str);
    }
};
*/

/*
function longestPalindromeSubseq(s) {

    let foundL = 0;

    function find(str) {

        if(str.length < foundL)
            return foundL;

        if( isPalindrome(str) ) {
            foundL = str.length;
            return str.length;
        }

        let maxVal = -Infinity;

        for(let i=0; i<str.length; i++) {
            const sub = stringWithout(str, i);
            maxVal = Math.max( maxVal, find( sub ) );
        }

        // maxVal = Math.max(
        //     // find( stringWithout(str, str.length-1) ),
        //     // find( stringWithout(str, str.length-2) )
        //     find( str.substr(0, str.length-1) ),
        //     find( str.substr(1) )
        //     // find( str.substr(0, str.length-2) + str[str.length-1] )
        // );

        return maxVal;
    }

    return find(s);
};
*/

module.exports = longestPalindromeSubseq;

