const a = [1,2,3,4,6];

// callback function 


const result =  a.forEach( b);


function b(el, index, array){
    array[index] = el*2;
    console.log("Element : ", el*2, "Index : ", index, "New array : ", array);
}


console.log("\n result : ",result)

console.log("map function ");

const result2=  a.map((el, index, array)=>{
    array[index] = el*2;
    console.log("Element : ", el*2, "Index : ", index, "New array : ", array);
    return array;
})


console.log("result 2: ",result2);