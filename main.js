function clockTick() {
    let date = new Date()

    date = date.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    
    document.getElementById('date').innerHTML = date

    
    // let currentTime = new Date(), hours, minutes, seconds
    // currentTime.getHours() < 10 ? hours = '0' + currentTime.getHours() : hours =  currentTime.getHours()
    // hours =  currentTime.getHours()
    // currentTime.getMinutes() < 10 ? minutes = '0' + currentTime.getMinutes() : minutes =  currentTime.getMinutes()
    // currentTime.getSeconds() < 10 ? seconds = '0' + currentTime.getSeconds() : seconds =  currentTime.getSeconds()
    // document.getElementById('date').innerHTML = (hours + ':' + minutes + ':' + seconds)
}
setInterval(clockTick, 1000);


function copyEmail() {
    let copyText = document.getElementById("email");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    // alert("Copied the text: " + copyText.value);
}

addEventListener('DOMContentLoaded', async () => {
    const urlAlfa = `https://api.ipify.org?format=json`
    const responseAlfa = await fetch(urlAlfa)
    const data = await responseAlfa.json()

    const urlBeta = `http://ip-api.com/json/${data['ip']}?fields=status,message,country,countryCode`
    const responseBeta = await fetch(urlBeta)
    const ipInfo = await responseBeta.json()

    if (data['ip'] && (ipInfo['countryCode'] !== 'DE'
        && ipInfo['countryCode'] !== 'CH'
        && ipInfo['countryCode'] !== 'AT')) {
        document.querySelector('div[data-aria="contact"]').innerHTML = null
    }
})