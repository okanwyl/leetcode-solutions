function replaceWords(dictionary: string[], sentence: string): string {
    const rootSet = new Set(dictionary);
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let prefix = "";

        for (let j = 1; j <= word.length; j++) {
            prefix = word.slice(0, j);
            if (rootSet.has(prefix)) {
                words[i] = prefix;
                break;
            }
        }
    }

    return words.join(" ");

}


const dict = ["a", "aa", "aaa", "aaaa"]
const sent = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
// exptected
// "a a a a a a a a bbb baba a"
console.log(replaceWords(dict, sent));
