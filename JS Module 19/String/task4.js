/*
 * If a given string has either x, replace x by y. if the given string has X, replace it by Y. 
*/

let sentense = 'MySelfX Mahbubx';

for(let i=0; i<sentense.length; i++){
    if(sentense[i]=='x'){
        sentense=sentense.replace('x','y');
        console.log(sentense[i])
    }
    else if(sentense[i]=='X'){
        sentense=sentense.replace('X','Y');
    }
}
console.log(sentense);