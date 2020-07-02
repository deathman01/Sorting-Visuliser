export function getBubbleSortAnimations(array){
    const animation = [];
    if(array.lenght <= 1)return array;
    const auxiliaryArray = array.slice();
    bubbleSort(array.length, auxiliaryArray,animation);
    return animation;
}

function bubbleSort(
    arraylen,
    auxiliaryArray,
    animation,
){

    for(let i=0;i<arraylen ; i++){

        for(let j=0;j<(arraylen-i-1); j++){

            animation.push([j,j+1]);

            if(auxiliaryArray[j]>auxiliaryArray[j+1]){
                let temp=auxiliaryArray[j];
                auxiliaryArray[j]=auxiliaryArray[j+1];
                auxiliaryArray[j+1]=temp;
            }

            animation.push([j,   auxiliaryArray[j]]);
            animation.push([j+1, auxiliaryArray[j+1]]);
            animation.push([j,j+1]);
        }
       // animation.push([arraylen-i-1,arraylen-i-1]);
    }
}