
function minDistance(word1, word2) {
    const [m, n] = [word1.length, word2.length];
    const dp = Array(m + 1).fill().map(_ => Array(n + 1).fill(0));

    for(let i = 0; i <= m; i++) dp[i][0] = i;
    for(let j = 0; j <= n; j++) dp[0][j] = j;

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i-1][j-1], // replace last character of word1 with last character of word2
                    dp[i][j-1],   // append last character of word2 to word1
                    dp[i-1][j]    // remove last character from word1
                );
            }
        }
    }
    return dp[m][n];
}


/*
function minDistance(word1, word2) {
    const memo = Array.from( Array(word1.length + 1), _ => Array(word2.length + 1) );

    for(let m = 0; m <= word1.length; m++) {
        for(let n = 0; n <= word2.length; n++) {
            if( m == 0 && n == 0 ) {
                memo[m][n] = 0;
            } else {
                let minVal = Infinity;

                if(m > 0 && n > 0) {
                    let val = memo[m-1][n-1];
                    if(word1[m-1] != word2[n-1])
                        val++; // replace last character of word1 with last character of word2
                    minVal = val;
                }

                if(n > 0) {
                    // append last character of word2 to word1
                    let val = 1 + memo[m][n-1];
                    minVal = Math.min(minVal, val);
                }

                if(m > 0) {
                    // remove last character from word1
                    let val = 1 + memo[m-1][n];
                    minVal = Math.min(minVal, val);
                }

                // const minVal = Math.min(...vals);
                memo[m][n] = minVal;
            }

        }
    }
    return memo[word1.length][word2.length];
}
*/

/*

function minDistance(word1, word2) {
    const memo = new Array(word1.length + 1);
    for(let i=0; i<memo.length; i++)
        memo[i] = new Array(word2.length + 1).fill(undefined);

    function minDistanceRec(word1, word2) {
        let m = word1.length;
        let n = word2.length;

        if(memo[m][n] != undefined)
            return memo[m][n];

        if( m == 0 && n == 0 ) {
            memo[m][n] = 0;
            return 0;
        }

        const vals = [];

        if(m > 0 && n > 0) {
            let val = minDistanceRec(word1.substring(0, m-1), word2.substring(0, n-1));
            if(word1[m-1] != word2[n-1])
                val++; // replace last character of word1 with last character of word2
            vals.push(val);
        }

        if(n > 0) {
            // append last character of word2 to word1
            let val = 1 + minDistanceRec(word1, word2.substring(0, n-1));
            vals.push(val);
        }

        if(m > 0) {
            // remove last character from word1
            let val = 1 + minDistanceRec(word1.substring(0, m-1), word2);
            vals.push(val);
        }

        const minVal = Math.min(...vals);
        memo[m][n] = minVal;

        return minVal;
    };

    const result = minDistanceRec(word1, word2);

    return result;

};
*/

module.exports = minDistance;
