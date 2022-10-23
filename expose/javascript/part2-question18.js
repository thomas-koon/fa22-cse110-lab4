function logTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let interval = setInterval(logTime, 1000);