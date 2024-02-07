/**
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']

function smallestName(names){
    let smallest = names[0].length;
    let smallName;
    for(const name of names){
        if(name.length<smallest){
            smallName = name;
        }
    }
    return smallName;
}

console.log('Smallest Name: ', smallestName(heights2));