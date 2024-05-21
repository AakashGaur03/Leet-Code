// 165. Compare Version Numbers
// Medium
// Topics
// Companies
// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

// Example 1:

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
// Example 2:

// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".
// Example 3:

// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.


const compareVersion =(version1, version2)=> {
    console.log(version1)
    console.log(version2)
    version1=version1.split('.')
    version2=version2.split('.')

    if(version1.length != version2.length){
        var length = Math.max(version1.length,version2.length) || version2.length 
    }else length= version1.length
    console.log(length)
    console.log(version1)
    console.log(version2)
    for (let i = 0; i < length; i++) {
        if(version1[i]==undefined) version1.push('0')        
        if(version2[i]==undefined) version2.push('0')        
    }


    for (let i = 0; i < length; i++) {
        console.log("s")
        if(Number(version1[i])>Number(version2[i])) return 1        
        else if(Number(version1[i])<Number(version2[i])) return -1        
    }

    console.log(version1)
    console.log(version2)
    return 0

}

const compareVersion2 = (version1, version2) => {
    version1 = version1.split('.').map(Number);
    version2 = version2.split('.').map(Number);
    
    const maxLength = Math.max(version1.length, version2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = version1[i] || 0;
        const num2 = version2[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }

    return 0;
}

// (version1 = "7.5.2.4"), (version2 = "7.5.3");
version1 = "1.01", version2 = "1.001"
// version1 = "1.2", version2 = "1.10"
// version1 = "1.0", version2 = "1.001.0"
// version1 = "0.1", version2 = "1.1"
// version1 = "1.0.1", version2 = "1"

console.log(compareVersion(version1, version2));
