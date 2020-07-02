export function getMergeSortAnimations(array){
    const animation = [];
    if(array.lenght <= 1)return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array,0,array.length - 1, auxiliaryArray,animation);
    return animation;
}

function mergeSortHelper(
    mainArray,
    startIndex,
    endIndex,
    auxiliaryArray,
    animation,
){
    if(startIndex === endIndex) return;
    const midIndex=Math.floor((startIndex+endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, midIndex, mainArray,animation);
    mergeSortHelper(auxiliaryArray,midIndex + 1, endIndex, mainArray,animation);
    doMerge(mainArray, startIndex, midIndex,endIndex, auxiliaryArray,animation);
}

function doMerge(
    mainArray,
    startIdx,
    midIdx,
    endIdx,
    auxiliaryArray,
    animation,
) {
    let k=startIdx;
    let i=startIdx;
    let j=midIdx+1;
    while(i<=midIdx && j<=endIdx){
        animation.push([i, j]);
        animation.push([i, j]);
        if(auxiliaryArray[i] <= auxiliaryArray[j]){
            animation.push([k, auxiliaryArray[i]]);
            mainArray[k++]=auxiliaryArray[i++];
        }else{
            animation.push([k, auxiliaryArray[j]]);
            mainArray[k++]=auxiliaryArray[j++];
        }
    }

    while(i<=midIdx){
        animation.push([i, i]);
        animation.push([i, i]);
        animation.push([k, auxiliaryArray[i]]);
        mainArray[k++]=auxiliaryArray[i++];
    }

    while(j<=endIdx){
        animation.push([j, j]);
        animation.push([j, j]);
        animation.push([k, auxiliaryArray[j]]);
        mainArray[k++]=auxiliaryArray[j++];
    }
}