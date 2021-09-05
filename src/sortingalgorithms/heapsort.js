export function getHeapSortAnimations(array){
    const animation = [];
    if(array.lenght <= 1)return array;
    const auxiliaryArray = array.slice();
    heapSort(auxiliaryArray,array.length, animation);
    return animation;
}

function heap_root(auxiliaryArray, i , len, animation) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    var array_length=len
    if(left<len){
        animation.push([left, auxiliaryArray[left],1]);
    }
    if(right<len){
        animation.push([right, auxiliaryArray[right],1]);
    }
    animation.push([max, auxiliaryArray[max],1]);

    if (left < array_length && auxiliaryArray[left] > auxiliaryArray[max]) {
        max = left;
    }

    if (right < array_length && auxiliaryArray[right] > auxiliaryArray[max])     {
        max = right;
    }

    if (max !== i) {
        swap(auxiliaryArray, i, max ,animation);
        heap_root(auxiliaryArray, max, len, animation);
    }

    if(left<len){
        animation.push([left, auxiliaryArray[left],0]);
    }
    if(right<len){
        animation.push([right, auxiliaryArray[right],0]);
    }
    animation.push([max, auxiliaryArray[max],0]);
}

function swap(auxiliaryArray, i, max, animation) {
    
    animation.push([max, auxiliaryArray[max],2]);
    animation.push([i, auxiliaryArray[i],2]);

    let temp = auxiliaryArray[i];
    auxiliaryArray[i] = auxiliaryArray[max];
    auxiliaryArray[max] = temp;

    animation.push([max, auxiliaryArray[max],3]);
    animation.push([i, auxiliaryArray[i],3]);
}

function swap1(auxiliaryArray, i, max, animation) {
    
    animation.push([max, auxiliaryArray[max],2]);
    animation.push([i, auxiliaryArray[i],2]);

    let temp = auxiliaryArray[i];
    auxiliaryArray[i] = auxiliaryArray[max];
    auxiliaryArray[max] = temp;

    animation.push([max, auxiliaryArray[max],4]);
    animation.push([i, auxiliaryArray[i],0]);
}

function heapSort(auxiliaryArray,len,animation) {
    
     var array_length = len;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(auxiliaryArray, i, len ,animation);
      }

    for (let i = len - 1; i > 0; i--) {
        swap1(auxiliaryArray, 0, i, animation);
        array_length--;
        heap_root(auxiliaryArray, 0, array_length, animation);
    }
    animation.push([0,auxiliaryArray[0],4]);
}




