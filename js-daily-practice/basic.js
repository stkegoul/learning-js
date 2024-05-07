// ~stkegoul

// --- TEMPLATE ---
// Exercise
    // Code block

// 1 - Display the current day and time in the following format:
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38.

    const myDate = new Date()
    const myDayToday = myDate.toLocaleDateString('en-US', {weekday: "long"})
    const myDayTime = myDate.toLocaleTimeString('en-US', {hour12: 'true', hour: '2-digit', minute: '2-digit', second: '2-digit'})

    let message =`Today is: ${myDayToday}.\nCurrent time is: ${myDayTime}.`

 // 2 - Print the current window contents.
    
    const printWindow = () => {
        // print()          // Remove the comments to see it work.
    }
    printWindow()

// 3 - Write a JavaScript program to get the current date.  
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

    // The date is already declared in line 21
    const currentMonth = myDate.toLocaleDateString('en-US', {month: '2-digit'})
    const currentDate = myDate.toLocaleDateString('en-US', {day: '2-digit'})
    const currentYear = myDate.getFullYear()

    const printDate = (separator) => {
        return `${currentDate}${separator}${currentMonth}${separator}${currentYear}`
    }

    const printedDate = printDate("-") + ", " + printDate("/")

// 4 - Find the area of a triangle where three sides are 5, 6, 7. 

    const sqrtFunction = (input) => {
        // This function calculates the squareroot of a value and returns a simplified square root value
        let multiple = []
        let sqrtValues = []
        const directSqrt = Math.sqrt(input)         // Computes the squareroot; not relevant to this function.

        for (let i = 1; i < input+1; i++) {
            // Computes the LCM of the value
            const checkMultiple = input / i
            if (Number.isInteger(checkMultiple) === true) {
                multiple.push(i)      
            }
        }

        for (let i = 0; i < multiple.length; i++) {
            // Computes the coefficient of the simplified squareroot
            const calcSqrt = Math.sqrt(multiple[i])
            if (Number.isInteger(calcSqrt) === true) {
                sqrtValues.push(calcSqrt)
            }
        }
        const perfectSqrt = Math.max(...sqrtValues)

        // Computes the radicand of the simplified squareroot
        const remainder = input / (perfectSqrt * perfectSqrt)

        // Returns the value.
        if (remainder !== 1) {
            return `${perfectSqrt}sqrt[${remainder}]`
        } else if (perfectSqrt === directSqrt) {
            return `${perfectSqrt}`
        }
    }

    const triangleArea = (a, b, c) => {

        let areaOfTriangle = 0

        try {
            if (a < 0 || b < 0 || c < 0) {      // Checks if the values are positive integers
                throw new Error("A triangle side cannot be a negative number")
            }

                // Find the base of the triangle
                const baseIsoceles = (a + b) === (a * 2) ? (c / 2)
                    : (b + c) === (b * 2) ? (a / 2)
                    : (c + a) === (c * 2) ? (b / 2)
                    : "false"    
                // Note: in baseIsoceles, the value is already halfed. Meaning 0.5 * base has been computed here

                // Find the value of the equal sides
                const equalSides = (a + b) === (a * 2) ? a
                    : (b + c) === (b * 2) ? b
                    : (c + a) === (c * 2) ? c
                    : "false"

                // Calculate the area of the Triangle
                if (a, b, c) {
                    // Heron's formula = sqrt[s*(s-a)*(s-b)*(s-c)]
                    const s = (a + b + c) / 2
                    const sqrtInput = s * (s - a) * (s - b) * (s - c)

                    if (sqrtInput <= 0) {
                        // A zero or negative input means that the values do not satisfy the triangle inequality, and cannot form a triangle, making them invalid.
                        throw new Error("Input values do not satisfy the triangle inequality.")
                    } else {
                        // Final area of Triangle using Heron
                        areaOfTriangle = sqrtFunction(sqrtInput)
                        return areaOfTriangle
                    }
                } else {
                    // Isoceles formula = (1/2) * base * height
                    if (baseIsoceles === true) {
                        // Confirm that there are two equal sides forming an Isoceles triangle

                        // Use Pythagoras theorem to find the height using the halved base (see line 94) and one of the sides
                        let heightIsoceles
        
                        if (equalSides === baseIsoceles) {
                            // If the halved base is equal to the side value, then the height is the hypotenus
                            heightIsoceles = sqrtFunction((equalSides*equalSides)+(baseIsoceles*baseIsoceles))
                        } else {
                            // The side value being the longer side is the hypotenus
                            heightIsoceles = sqrtFunction((equalSides*equalSides)-(baseIsoceles*baseIsoceles))
                        }
        
                        if (Number.isInteger(heightIsoceles)!== true) {
                            // Final area of Triangle
                            // 0.5 has already been computed into the baseIsoceles variable in line 94
                            areaOfTriangle = `${(baseIsoceles)} * ${heightIsoceles}`
                        } else {
                            // If height is not a perfect squareroot
                            areaOfTriangle = baseIsoceles * heightIsoceles
                        }
        
                        return areaOfTriangle
                    } 
                }                
        } catch(err) {
            console.warn(err.stack)
        }
    }

    // PS: This was a little stupid of me to write. Could've just done what the exercise said, but I needed to practice doing it a little harder and not returning the usual float. If you're a math geek, you'd get this.

    // PPS: Expect more of these kind of derails in this page. 

// 5 - Reverse the string 'w3resource'.  

    const rotateString = (str) => {
        const strArr = Array.from(str)              // Convert string to an array
        strArr.reverse()                            // Reverse the order of the array
        const newString = strArr.join("")           // Join the array back into string
        return newString                            // Return new string
    }

// 6 - Determine whether a given year is a leap year in the Gregorian calendar. 

    const determineLeapYear = (input) => {
        const givenYear = input

        if (Number.isInteger(givenYear / 4)) {
            return `${input} is a leap year`
        } else {
            return `${input} is not a leap year`
        }
    }

// 7 - Find out if 1st January will be a Sunday between 2014 and 2050.  

    const sundayArray = []

    for (let year = 2014; year <= 2050; year++ ) {
        const janSunday = new Date(year, 0, 1)
    
        if (janSunday.getDay() === 0) {
            const message = `Jan 1 is a Sunday in ${year}`
        }
    }

// 8 - Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

    const randomNumber = Math.floor((Math.random() * 10) + 1)
    // Commented out to not affect the rest of the file
    const inputRandomNumber = "" // prompt("Guess a number between 1 and 10") // Delete the "" before the prompt

    if (randomNumber === inputRandomNumber) {
        const alert = "Good work!"
    } else {
        const alert = "Not matched"
    }

// 9 - Calculate the days left before Christmas.

    const newDate = new Date ()
    const christmasDate = new Date (newDate.getFullYear(), 11, 25)

    const timeRemaining = () => {
        // Number of days between both days
        const timeLeft = newDate.getTime() - christmasDate.getTime()
        // Convert answer from milliseconds to days
        const daysLeft = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
        return daysLeft
    }

    // Is Christmas day this year?
    if (newDate.getMonth() == 11 && newDate.getDate() > 25) {
        christmasDate = new Date (newDate.getFullYear + 1, 11, 25)

        const finalAnswer = timeRemaining()
        const daysLeft = `${finalAnswer} days left before next Christmas — ${christmasDate.toLocaleDateString('en-US', {month: 'short', year: 'numeric', weekday: 'long', day: 'numeric'})}`
    } else {
        const finalAnswer = timeRemaining() * -1        // Converts negative value to positive value
        const daysLeft = `${finalAnswer} days left before next Christmas — ${christmasDate.toLocaleDateString('en-US', {month: 'short', year: 'numeric', weekday: 'long', day: 'numeric'})}`
    }

// 10 - Calculate multiplication and division of two numbers (input from the user)

    document.getElementById("btn-multiply").addEventListener("click", () => {
        const a = document.getElementById("number-1").value
        const b = document.getElementById("number-2").value

        event.preventDefault()

        const result = parseInt(a) * parseInt(b)
        document.getElementById("result").innerText = result
    })

    document.getElementById("btn-divide").addEventListener("click", () => {
        const a = document.getElementById("number-1").value
        const b = document.getElementById("number-2").value

        event.preventDefault()

        const result = parseInt(a) / parseInt(b)
        document.getElementById("result").innerText = result
    })