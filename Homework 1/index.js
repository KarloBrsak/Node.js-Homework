// Function expression - Celsius to Fahrenheit

const c2f = function(celsius){
    return celsius * (9/5) + 32
}

console.log(c2f(35))


// Fat Arrow Function - Fahrenheit to Celsius + Info

let f2c = (fahrenheit) =>{
    let celsius = ((fahrenheit) - 32) * 5/9
        if (celsius < 0){
            console.log(`It's ${celsius}°. It's freezing!`)
        } else if(celsius >= 0 && celsius <= 22){
            console.log(`It's ${celsius}°. The temperature is normal.`)
        } else{
            console.log(`It's ${celsius}°. It's hot!`)
        }
}

f2c(95)

// Method inside object

let numbers = {
    number1: 10,
    number2: 15,

    addNumbers: function(){
        return this.number1 + this.number2;
        
    }

}

console.log(numbers['addNumbers']())