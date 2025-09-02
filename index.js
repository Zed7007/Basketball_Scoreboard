let h_incr1 = document.getElementById("homeScore");
let g_incr1 = document.getElementById("guestScore");
let count1 = 0;
let count2 = 0;

function increment1(data){
    if (data === "home") {
        count1 += 1
        h_incr1.textContent=count1 
       
    } else if (data === "guest") {
        count2 += 1
        g_incr1.textContent=count2 
        
    } else {
        console.log("popoo")
    }
}

function increment2(data){
    if (data === "home") {
        count1 += 2
        h_incr1.textContent=count1 
       
    } else if (data === "guest") {
        count2 += 2
        g_incr1.textContent=count2 
        
    } else {
        console.log("popoo")
    }
}

function increment3(data){
    if (data === "home") {
        count1 += 3
        h_incr1.textContent=count1 
       
    } else if (data === "guest") {
        count2 += 3
        g_incr1.textContent=count2 
        
    } else {
        console.log("popoo")
    }
}

// Some Stretch Goals

// Change button background color on mouse over
// Not my code.  Found this on a google AI search.
// Though this is a bit advanced for me, I was able to integtrate. 

let buttons = document.querySelectorAll('button'); // Select all buttons

// Loop through each button and add event listeners
buttons.forEach(button => {
    // Store the original background color to revert on mouseout
    const originalColor = button.style.backgroundColor;

    // Add mouseover event listener
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'white'; // Change to desired hover color
    });

    // Add mouseout event listener
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = originalColor; // Revert to original color
    });
});

// New Game

function reset(){
    count1 = 0
    count2 = 0
    h_incr1.textContent=count1 
    g_incr1.textContent=count2 
}