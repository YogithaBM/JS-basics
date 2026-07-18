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

