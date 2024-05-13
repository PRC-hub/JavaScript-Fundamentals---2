function UniqueCharacter(str){
    const charSet = new Set();

    for (const char of str) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}
UniqueCharacter("Pritam")
UniqueCharacter("Aanurag")