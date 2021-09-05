import React from 'react';
import {getMergeSortAnimations}  from '../sortingalgorithms/mergesort.js'
import {getBubbleSortAnimations} from '../sortingalgorithms/bubblesort.js'
import {getQuickSortAnimations}  from '../sortingalgorithms/quicksort.js'
import {getHeapSortAnimations}   from '../sortingalgorithms/heapsort.js'

import './sortingVisuliser.css';

const animationSpeed = 3;
const PRIMARY = 'turquoise';
const SECONDARY = 'red';
const TERTIARY = 'yellow';


export default class sortingVisuliser extends React.Component {
   
  constructor(props){
        super(props);
        
        this.state = {
            array: [],
        };
    }


    componentDidMount(){
        this.resetArray();
    }


    resetArray(){

        const array = [];

        for(let i=0;i<10; i++){
            array.push(randomIntFromInterval(10,550));
        }
        //const arrayBars= document.getElementsByClassName('array-bar');
        array.backgroundColor='blue';
        this.setState({array});
    }



    mergeSort() {

        const animation=getMergeSortAnimations(this.state.array);

        for(let i=0;i< animation.length ; i++){
            const arrayBars= document.getElementsByClassName('array-bar');
            const colorChange = i%3 !==2;

            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'black' : 'red';
                
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * 600);

              } else {
                
                setTimeout(() => {
                  const [barOneIdx, newHeight] = animation[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                  barOneStyle.height = `${newHeight}px`;
                  barOneStyle.backgroundColor = 'green';
                }, i * 600);

              }
        }
    }



    heapSort() {

        const animation=getHeapSortAnimations(this.state.array);

        for(let i=0;i< animation.length ; i++){

            const arrayBars= document.getElementsByClassName('array-bar');
               
            setTimeout(() => {
                  const p = animation[i];
                  //console.log(p[0],p[1],p[2]);
                  const barOneStyle = arrayBars[p[0]].style;

                  if(p[2]===2){
                    barOneStyle.backgroundColor= SECONDARY;
                  }else if(p[2]===0){
                    barOneStyle.backgroundColor=PRIMARY;
                  }else if(p[2] === 1){
                    barOneStyle.backgroundColor= TERTIARY;
                  } else if(p[2] === 3){
                    barOneStyle.backgroundColor= PRIMARY;
                  }else if(p[2] === 4){
                    barOneStyle.backgroundColor= '#00e500';
                  }
                  barOneStyle.height = `${p[1]}px`;

                }, i * 200);
        }
        //console.log(animation.length);
    }



    quickSort(){

        const animation=getQuickSortAnimations(this.state.array);

        for(let i=0;i< animation.length ; i++){

            const arrayBars= document.getElementsByClassName('array-bar');
                
            setTimeout(() => {
                  const p = animation[i];
                  const barOneStyle = arrayBars[p[0]].style;
                  
                  if(p[2]===2){
                    barOneStyle.backgroundColor= SECONDARY;
                  }else if(p[2]===0){
                    barOneStyle.backgroundColor=PRIMARY;
                  }else if(p[2] === 1){
                    barOneStyle.backgroundColor= TERTIARY;
                  } else if(p[2] === 3){
                    barOneStyle.backgroundColor= 'blue';
                  }else if(p[2] === 4){
                    barOneStyle.backgroundColor= 'green';
                  }
                  barOneStyle.height = `${p[1]}px`;

                }, i * 800 );

        }
    }



    bubbleSort() {
       
      const animation=getBubbleSortAnimations(this.state.array);
      
      for(let i=0;i< animation.length ; i++){
            
        const arrayBars= document.getElementsByClassName('array-bar');
        const colorChange = i%4 !==1 && i%4!==2;
            
        if (colorChange) {
                const [barOneIdx, barTwoIdx] = animation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY : PRIMARY;
                
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * 800 );
              
              } else {
               
                setTimeout(() => {
                  const [barOneIdx, newHeight] = animation[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                  barOneStyle.height = `${newHeight}px`;
                }, i * 800);
              
              }
        }
    }



    testSortingAlgorithm(){
        const array = [];
        const length = randomIntFromInterval(1,1000);

        for(let i=0; i<length; i++){
            array.push(randomIntFromInterval(-1000,1000));
        }

        const javaScriptSortedArray = array.slice().sort((a,b) => a-b);
        const mergeSortArray = getMergeSortAnimations(array.slice());
        
        //console.log(arrayAreEqual(javaScriptSortedArray,mergeSortArray));
    }




    render(){
        const {array}= this.state;
       
        return(
            <div className="array-container">
            <h1 className="head">Sorting Visuliser</h1>
            <br/>
            
            {array.map((value, idx)=>(
               
               <div className="array-bar"
                 key={idx}
                 style={{
                     backgroundColor: PRIMARY,
                     height: `${value}px`,
                 }}> 
                </div>
            ))}

            <br/>
            
            <button onClick={()=>this.resetArray()} className="button">Generate New Array</button> &nbsp;
            <button onClick={()=>this.mergeSort()}className="button">Merge Sort</button> &nbsp;
            <button onClick={() => this.quickSort()}className="button">Quick Sort</button> &nbsp;
            <button onClick={() => this.heapSort()}className="button">Heap Sort</button> &nbsp;
            <button onClick={()=>this.bubbleSort()}className="button">Bubble Sort</button>&nbsp;
            {/*<button onClick={() => this.testSortingAlgorithm()}>TEST ALGO</button>*/}
            </div>
        );
    }
}


//gernerating random no.
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
function arrayAreEqual(
    arrayOne,
    arrayTwo,
){
    if(arrayOne.length!==arrayTwo.length)return false;
    for(let i=0 ;i<arrayTwo.length;i++){
        if(arrayOne[i]!==arrayTwo[i]){
            return false;
        }
    }
    return true;
}