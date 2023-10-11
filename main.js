setInterval(() => {
    let date = new Date()
    date = date.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    document.getElementById('date').innerHTML = date
}, 1000)


const copyEmail = () => {
    let copyText = document.getElementById("email")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
}

addEventListener('DOMContentLoaded', async () => {
    const urlAlfa = `https://api.ipify.org?format=json`
    const responseAlfa = await fetch(urlAlfa)
    const data = await responseAlfa.json()

    const urlBeta = `https://api.ipbase.com/v1/json/${data['ip']}`
    const responseBeta = await fetch(urlBeta)
    const ipInfo = await responseBeta.json()

    if (data['ip'] && (ipInfo['country_code'] !== 'DE'
        && ipInfo['country_code'] !== 'CH'
        && ipInfo['country_code'] !== 'AT')) {
        document.querySelectorAll('p[data-aria="contact"]').forEach(item => item.remove())
    }
})