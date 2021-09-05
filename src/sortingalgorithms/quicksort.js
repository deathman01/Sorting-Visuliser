export function getQuickSortAnimations(array){
    const animation = [];
    if(array.lenght <= 1)return array;
    const auxiliaryArray = array.slice();
    quickSort(0,array.length-1, auxiliaryArray,animation);
    return animation;
}

function quickSort(
    startIdx,
    endIdx,
    auxiliaryArray,
    animation,
){
    if(startIdx<endIdx){
        let index=partition(auxiliaryArray,startIdx,endIdx,animation);
        if(startIdx<index-1)quickSort(startIdx,index-1,auxiliaryArray,animation);
        if(index-1<endIdx)quickSort(index+1,endIdx,auxiliaryArray,animation);
    }
}

function partition(
    auxiliaryArray,
    left,
    right,
    animation,
){
    let pivot=auxiliaryArray[right];
    animation.push([right,auxiliaryArray[right],2]);
        let i=left-1;
    for(let j=left;j<=right-1;j++){
        animation.push([j,auxiliaryArray[j],1]);
        if(auxiliaryArray[j]<pivot){
            i++;
            animation.push([i,auxiliaryArray[i],3]);
            animation.push([j,auxiliaryArray[j],3]);
            let temp=auxiliaryArray[i];
            auxiliaryArray[i]=auxiliaryArray[j];
            auxiliaryArray[j]=temp;
            animation.push([i,auxiliaryArray[i],4]);
            animation.push([j,auxiliaryArray[j],4]);
            animation.push([i,auxiliaryArray[i],0]);
            animation.push([j,auxiliaryArray[j],0]);
        }else{
            animation.push([j,auxiliaryArray[j],0]);
        }
    }
    animation.push([i+1,auxiliaryArray[i+1],3]);
    animation.push([right,auxiliaryArray[right],3]);
    let temp=auxiliaryArray[i+1];
    auxiliaryArray[i+1]=auxiliaryArray[right];
    auxiliaryArray[right]=temp;
    animation.push([i+1,auxiliaryArray[i+1],4]);
    animation.push([right,auxiliaryArray[right],4]);
    animation.push([i+1,auxiliaryArray[i+1],0]);
    animation.push([right,auxiliaryArray[right],0]);
    i++;

    return i;
}