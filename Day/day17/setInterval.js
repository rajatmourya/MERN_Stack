// -------------------------------------------------------------------setInterval-----------------------------------------------------------

const intervalId = setInterval(increaseCount, 1000);
let count = 0;
function increaseCount() {
    const date = new Date().toTimeString();
    console.log(date);
    
    count += 1;

    if (count == 5) {
        clearInterval(intervalId);
    }
    
}
