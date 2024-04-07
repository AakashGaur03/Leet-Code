// 678. Valid Parenthesis String
// Medium
// Topics
// Companies
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true
 

const checkValidString =(s)=> {
    let stack=[]
    let star=[]
    for(let i=0;i<s.length;i++){
        if(s[i]=='(') stack.push(i)
        else if(s[i]=='*') star.push(i)
        else{
            if(stack.length) stack.pop()
            else if(star.length) star.pop()
            else return false
        }
    }
    
    while(stack.length&&star.length){
        if(stack.pop()>star.pop()) return false
    }
    return stack.length==0
};