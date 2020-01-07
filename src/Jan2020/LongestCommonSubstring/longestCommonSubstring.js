/**
 * 
 * @param {string} stringA 
 * @param {string} stringB 
 * 
 * @returns string : Expect to be returned longest substring
 */
export default function longestCommonSubstring(stringA, stringB)
{
    const arrayA = [...stringA];
    const arrayB = [...stringB];

    const substringMatrix = Array(arrayB.length + 1).fill(null).map(() => {
        return Array(arrayA.length + 1).fill(null);
    });

    for(let j = 0; j <= arrayA.length; j++)
    {
        substringMatrix[0][j] = 0;
    }
    for(let i = 0; i <= arrayB.length; i++)
    {
        substringMatrix[i][0] = 0;        
    }

    let CSLongestColumn = 0;
    let CSLongestRow = 0;
    let CSLongestLength = 0;

    for(let i=0; i< arrayB.length ;i++)
    {
        for(let j=0; j < arrayA.length; j++)
        {
            if(arrayA[j] === arrayB[i])
            {
                substringMatrix[i+1][j+1] = substringMatrix[i][j]+1;
            }else{
                substringMatrix[i+1][j+1] = 0;
            }                

            if (substringMatrix[i+1][j+1] > CSLongestLength) {
                CSLongestLength = substringMatrix[i+1][j+1];
                CSLongestColumn = j+1;
                CSLongestRow = i+1;
              }
        }
    }


    if (CSLongestLength === 0) 
    {        
       return '';
    }
    
    let longestSubstring = '';
    
    while (substringMatrix[CSLongestRow][CSLongestColumn] > 0) {
    longestSubstring = arrayA[CSLongestColumn - 1] + longestSubstring; // make sure to append new character in the beginning
    CSLongestRow -= 1; 
    CSLongestColumn -= 1;
    }

    return longestSubstring;

}