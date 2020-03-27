function getConstantVowel(targetString = "하핳핝") {
    const FIRST_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ','ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ','ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const MIDDLE_LIST = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ','ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ','ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const LAST_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ','ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ','ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ','ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const BASE_NUM = 44032, FIRST = 588, LAST = 28;
    
    // targetString = "하핳핝";

    const targetStringArr = targetString.split("");    
    const len = targetStringArr.length;

    const resultArr = [];
    
    let oneWord = "";
    let first=0, middle=0, last=0;

    for(let i = 0; i<len; i++) {
        oneWord = targetStringArr[i];
        if(oneWord != " ") {
            const charCode = oneWord.charCodeAt() - BASE_NUM;

            first = ~~(charCode / FIRST);
            resultArr.push(FIRST_LIST[first]);
            
            middle = ~~((charCode - (FIRST * first)) / LAST);
            resultArr.push(MIDDLE_LIST[middle]);
            
            last = charCode % LAST;
            resultArr.push(LAST_LIST[last]);
        }
    }
    return resultArr.join("");
}