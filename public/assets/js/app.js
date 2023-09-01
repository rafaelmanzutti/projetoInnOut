
(function () {
    const menuToggle = document.querySelector('.menu-toggle')
    menuToggle.onclick = function(e) {
        const body = document.querySelector('body')
        body.classList.toggle('hide-sidebar')
    }
})()

function activateClock() {
    const activeClock = document.querySelector('[active-clock]')
    if(!activeClock) return

    function addOneSecond(hours, minutes, seconds) {
        const d = new Date()
        d.setHours(parseInt(hours))
        d.setMinutes(parseInt(minutes))
        d.setSeconds(parseInt(seconds) + 1)
    
        const h = `${d.getHours()}` .padStart(2, 0)
        const m = `${d.getMinutes()}` .padStart(2, 0)
        const s = `${d.getSeconds()}` .padStart(2, 0)
    
        return `${h}:${m}:${s}`
    }

    setInterval(function() {
        // '07:27:19' => ['07', '27', '19'] - o split sobre os dois pontos transforma o horário recebido no valor innerHTML da constante activeClock pego por querySelector em um array de tres partes.
        
        const parts = activeClock.innerHTML.split(':')
        activeClock.innerHTML = addOneSecond(parts[0], parts[1], parts[2])
    }, 1000)
}

activateClock();