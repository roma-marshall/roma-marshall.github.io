function clockTick() {
    let currentTime = new Date(), hours, minutes, seconds

    currentTime.getHours() < 10 ? hours = '0' + currentTime.getHours() : hours =  currentTime.getHours()
    currentTime.getMinutes() < 10 ? minutes = '0' + currentTime.getMinutes() : minutes =  currentTime.getMinutes()
    currentTime.getSeconds() < 10 ? seconds = '0' + currentTime.getSeconds() : seconds =  currentTime.getSeconds()
    document.getElementById('date').innerHTML = (hours + ':' + minutes + ':' + seconds)
}
setInterval(clockTick, 1000);


function copyEmail() {
    let copyText = document.getElementById("email");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    // alert("Copied the text: " + copyText.value);
}