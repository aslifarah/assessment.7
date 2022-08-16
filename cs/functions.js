function addToZero(arr){
    let returnVal = false
    if(arr.length <= 2){
        return false
    }else{
        for(let i = 0;i < arr.length;i++){
            for(let j = 0;j < arr.length;i++){
                if(j == i*(-1)){
                    returnVal = true
                }
            }
        }
    }
    return returnVal
}
/* complexity of O(1) */

function hasUniqueChars(word){
    let returnVal = true
    if(word.length == 1){
        return true
    }else{
        for(let i = 0; i < word.length - 1; i++){
            for(let j = i + 1; j < word.length; j++){
                if(word.charAt(i) == word.charAt(j)){
                    returnVal = false
                }
            }
        }
    }
    return returnVal
}
/* complexity of O(1) */

function isPangram(sentence){
    sentence = sentence.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let returnVal = true
    if(sentence.length < alphabet.length){
        return false
    }
    for(let i = 0; i < alphabet.length; i++){
        for(let j = 0; j < sentence.length; j++){
            if(alphabet.charAt(i) == sentence.charAt(j)){
                break
            }else{
                returnVal = false
            }
        }
        if(returnVal){
            continue
        }else{
            return false
        }
    }
    return true
}
/* complexity of O(N) */

function findLongestWord(arrayWords){
    let longestWord = arrayWords[0].length
    for(let i = 0; i < arrayWords.length;i++){
        if(arrayWords[i].length > longestWord){
            longestWord = arrayWords[i].length
        }
    }
    return longestWord
}
/* complexity of O(N) */