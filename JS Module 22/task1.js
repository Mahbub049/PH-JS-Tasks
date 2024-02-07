/**
 * Find the lowest number in the array below.
 * const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(heights){
    let lowest = heights[0];
    for(const height of heights){
        if(height<lowest)
            lowest = height;
    }
    return lowest;
}

console.log('Lowest Number is: ',lowestNumber(heights2));