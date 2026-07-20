let nums=[1,2,3,4,5];
function elements(){
    console.log("Elemts of the array = ");
    for(let num of nums){
        console.log(num);
    }
}
elements();

function sumAndAvg(){
    nums.push(6);
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    console.log("Sum of numbers : "+sum);
    avg=(sum/6);
    console.log("Average of numbers : "+avg)
}
sumAndAvg();

function largestAndSmallest(){
    let large=nums[0];
    let small=nums[0];
    for(let num of nums){
        if (large<num){
            large=num;
        }
        if(small>num){
            small=num;
        }
    }
    console.log("largest numbers is : "+large);
    console.log("smallest element is : "+small);
}
largestAndSmallest();

function evenAndOdd(){
    let count1=0;
    let count2=0;
    nums.push(6,7,8);
    for(let num of nums){
        if(num%2==0){
            count1++;
        }
        else{
            count2++;
        }
    }
    console.log("number of even numbers are: ",count1+"\nnumber of odd numbers are ",count2);
}
evenAndOdd();

function mutatorMethod(){
    nums.pop();
    nums.push(5,7);
    nums.shift();
    nums.unshift(5,9);
    console.log("final array after usage of mutator methods");
    for(num of nums){
        console.log(num);
    }
}
mutatorMethod();

function reverse(){
    console.log("revese array");
    for(let i=(nums.length-1);i>=0;i--){
        console.log(nums[i]);
    }
}
reverse();

function index(){
    let evenSum=0;
    let oddSum=0;
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            console.log("element at even index: "+nums[i]);
            evenSum+=nums[i];
        }
        else{
           console.log("element at odd index: "+nums[i]);
            oddSum+=nums[i]; 
        }
    }
    console.log("sum of elements at even indexs = "+evenSum);
    console.log("sum of elements at odd indexs = "+oddSum);
}
index();

function searchElement(){
    let search=4;
    for(i=0;i<nums.length;i++){
        if(search==nums[i]){
            console.log("the element is at index: "+i);
        }
    }
}
searchElement();

function occurence(){
    let count=0;
    let occur=5;
    for(num of nums){
        if(occur==num){
            count++;
        }
    }
    console.log("the number of times the given element has occured is = "+count);
}
occurence();