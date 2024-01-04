// Develop a simple countdown timer that updates every second and displays the
// remaining time


function startCountdown(durationInSeconds) {
    let remainingTime = durationInSeconds;

    const countdownInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown finished!");
        } else {
            console.log("Remaining time:", remainingTime, "seconds");
            remainingTime--;
        }
    }, 1000);
}

const duration = 10; // 10 seconds
startCountdown(duration);
