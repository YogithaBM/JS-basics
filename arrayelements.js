let nums=[1,2,3,4,5];
function elements(){
    console.log("Elemts of the array = ");
    for(let num of nums){
        console.log(num);
    }
}
elements();

function sum(){
    nums.push(6);
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    console.log("Sum of numbers : "+sum);
}
sum();

function largest(){
    let l=0;
    for(let num of nums){
        if (nums[l]<num){
            nums[l]=num;
        }
    }
    concole.log(num[l]);
}