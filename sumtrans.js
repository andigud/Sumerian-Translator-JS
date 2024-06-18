function svoToSov(sentence) {
    const words = sentence.split(' ');
    const verbs = ['eats', 'eat', 'are', 'was', 'were', 'has', 'have', 'had', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'shall', 'should', 'may', 'might', 'must',
                   'make', 'made', 'come', 'came', 'take', 'took', 'give', 'gave', 'get', 'got', 'go', 'went', 'say', 'said', 'see', 'saw', 'know', 'knew', 'think', 'thought',
                   'want', 'wanted', 'work', 'worked', 'call', 'called', 'try', 'tried', 'need', 'needed', 'feel', 'felt', 'become', 'became', 'leave', 'left', 'put', 'put',
                   'mean', 'meant', 'keep', 'kept', 'let', 'lets', 'begin', 'began', 'show', 'showed', 'hear', 'heard', 'play', 'played', 'run', 'ran', 'move', 'moved', 'live',
                   'lived', 'believe', 'believed', 'bring', 'brought', 'happen', 'happened', 'write', 'wrote', 'sit', 'sat', 'stand', 'stood', 'lose', 'lost', 'pay', 'paid',
                   'meet', 'met', 'include', 'included', 'continue', 'continued', 'set', 'sets', 'learn', 'learned', 'change', 'changed', 'win', 'won', 'understand', 'understood', 'hate'];

    let verbIndex = -1;

    // Find the index of the verb in the sentence
    for (let i = 0; i < words.length; i++) {
        if (verbs.includes(words[i].toLowerCase())) {
            verbIndex = i;
            break;
        }
    }

    // If verb is found, move it to the end of the sentence
    if (verbIndex !== -1) {
        const verb = words.splice(verbIndex, 1)[0];
        words.push(verb);
    }

    // Reconstruct the sentence
    const sovSentence = words.join(' ');
    return sovSentence;
}

function sumConvert(sentence) {
    const wordMap = {
        'the ': '',
        'one': '𒁹',
        'two': '𒈫',
        'three': '𒐈',
        'four': '𒐉',
        'five': '𒐊',
        // Add more mappings as needed
    };

    const words = sentence.split(' ');
    const newSentence = words.map(word => wordMap[word.toLowerCase()] || word);
    return newSentence.join(' ');
}

function translate(sentence) {
    sentence = sentence.toLowerCase();
    sentence = svoToSov(sentence);
    const sumSentence = sumConvert(sentence);
    console.log(sumSentence);
}