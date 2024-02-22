//Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the name of your friends
//b) Check if the length of each element is even, push elements with even length to a new array and return the result

const friends = ['sajid', 'moheb', 'mahan', 'farah', 'flavia', 'sadiq'];
const evenFriends = [];

const checkEven = (friends) => {
    for(const friend of friends){
        if(friend.length % 2 == 0){
            evenFriends.push(friend);
        }
    }
    return evenFriends;
}

console.log(checkEven(friends));
