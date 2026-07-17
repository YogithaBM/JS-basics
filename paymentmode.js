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