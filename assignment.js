

// kilometer to meter convert
function kilometerToMeter(kilometer){
    let meter = kilometer * 1000;    // 1 kilometer == 1000 meter;
    return meter;
}

// budget calculator
function budgetCalculator(clockUnit, mobileUnit, laptopUnit){
    let clockPrice = clockUnit * 50;       //  total  price of clock
    let mobilePrice = mobileUnit * 100;    //  total  price of mobile
    let laptopPrice = laptopUnit * 500;    //  total  price of clock
    if(clockUnit > 0 && mobileUnit > 0 && laptopUnit > 0){  
        const totalPrice = clockPrice + mobilePrice + laptopPrice; //   calculate total price of clock & mobile & laptop
        return totalPrice;
    }
    else{
        return "Product price should be positive number";
    }
}

// calculate hotel cost
function hotelCost(days){
    let totalcost = 0;
    let firstPhase = 0;
    let secondPhase = 0;
    let finalPhase = 0;
    if(days<=10){      //check valid input
        firstPhase = days * 100; // calculate firstPhase
        totalcost = firstPhase;
        return totalcost;
    }
    else if(days<=20){
        firstPhase = 10 * 100;
        let remaining = days - 10;   
        secondPhase = remaining * 80;   // calculate secondPhase
        totalcost = firstPhase + secondPhase;
        return totalcost;
    }
    else{
        firstPhase = 10 * 100;
        secondPhase = 10 * 80;
        remaining = days - 20;
        finalPhase = remaining * 50;    // calculate finalPhase
        totalcost = finalPhase + secondPhase + finalPhase;
        return totalcost;
    }

}



// searching largest element in array
function megaFriend(arr){
    let biggest ; 
    let lngth = 0;
        for(var i = 0; i<arr.length; i++){     // check valid input
            if(arr[i].length>lngth){           // check valid length
                lngth = arr[i].length;         // declares the length
                biggest = arr[i];              // finds the biggest string
            }
        }
        return biggest;
}


