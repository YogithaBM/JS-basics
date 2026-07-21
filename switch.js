function rolebased(){
    let role="ADMIN";
    switch (role){
        case "ADMIN":{
            console.log("Full system access");
            break;
        }
        case "USER":{
            console.log("Limited access");
            break;
        }
        case "MANAGER":{
            console.log("Manage team access");
            break;
        }
        case "GUEST":{
            console.log("View only access");
            break;
        }
        default:{
            console.lon("Invalid role");
        }
    }
}
function days(){
let num=3;
    switch (num){
        case"1":{
            console.log("Monday");
            break;
        }
        case"2":{
            console.log("Tuesday");
            break;
        }
        case "3":{
            console.log("YoLo Day");
            break;
        }

        default:{
            console.log("Invalid");
        }
        
    }
}
function paymode(){
    let mode="COD";
    switch (mode){
        case "UPI":{
            console.log("Redirecting to UPI Gateway");
            break;
        }
        case "CARD":{
            console.log("Processing Card Paymen");
            break;
        }
        case "NETBANKING":{
            console.log("Redirecting to Bank");
            break;
        }
        case "COD":{
            console.log("Cash on Delivery Selected");
            break;
        }
        default:{
            console.log("Invalid payment mode");
        }
    }
}
function hTTPS(){
let code=201;
    switch (code){
        case 200:{
            console.log("OK Request Successful");
            break;
        }
        case 201:{
            console.log("Created Successfully");
            break;
        }
        case 400:{
            console.log("Bad Request");
            break;
        }
        case 401:{
            console.log("Unauthorized Access");
            break;
        }
        case 404:{
            console.log("Page Not Found");
            break;
        }
        case 500:{
            console.log("Internal Server Error");
            break;
        }
		
        default :{
            console.log("Unknown Status Code");
        }
				
    }
}
hTTPS();
paymode();
days();
rolebased();


