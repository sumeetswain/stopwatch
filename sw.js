let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let s = 0
let m = 0
let h = 0
let timer = null
const watchStart = () => {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(() => {
        s++

        if (s == 60) {
            s = 0
            m++
            if (m == 60) {
                m = 0
                h++
            }
        } console.log(`${h}:${m}:${s}`)
        seconds.innerHTML = s < 10 ? "0" + s : s
        minutes.innerHTML = m < 10 ? "0" + m : m
        hours.innerHTML = h < 10 ? "0" + h : h

    }, 1000);

}
const watchReset = () => {
    s = m = h = 0
    clearInterval(timer)
    seconds.innerHTML = s < 10 ? "0" + s : s
    minutes.innerHTML = m < 10 ? "0" + m : m
    hours.innerHTML = h < 10 ? "0" + h : h
}
const watchStop = () => {
    clearInterval(timer)
}