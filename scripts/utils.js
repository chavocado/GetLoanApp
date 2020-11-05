function simpleSwitch() {
    let productId = 2;
    
    switch (productId) {
        case 1:{
            let message = "woah"
            console.log("Product 1");
        
        }    break;
        case 2: {
            let message = "NOOOO"
            break
        }
        case 3:
            console.log("Product 2 or 3");
            break;
        default:
            console.log("Unknown Product")
            break;
    }
}

