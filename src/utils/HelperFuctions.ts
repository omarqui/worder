
export function capitalizeWord(word: String) {
    return word[0].toUpperCase() + word.substr(1);
}

export function makeUrlSearchWord(word: string) {
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
} 