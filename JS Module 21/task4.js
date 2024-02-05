function longestText(text){
    const textArr = text.split(' ');
    let largeText = '';
    for(const text of textArr){
        if(text.length>largeText.length){
            largeText = text;
        }
    }
    return largeText;
}

const text = 'I am learning Programming to become a programmer';
const largeText = longestText(text);
console.log(largeText);