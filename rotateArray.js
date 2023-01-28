function rotateLeft(arr,number){
    let len=arr.length;
    let cutElementOne=arr.slice(0,number);
    let cutElementTwo=arr.slice(number,len);
    let rotateArray=cutElementTwo.concat(cutElementOne);
    console.log(rotateArray);
    
}
rotateLeft([1,2,3,4,5],2);

