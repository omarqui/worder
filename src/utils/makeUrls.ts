const makeUrlSearchWord = (word: string)=>{
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
} 

export {
    makeUrlSearchWord
}