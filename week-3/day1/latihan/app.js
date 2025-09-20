import prayerTime from "./componen/prayerTime.js"

const apiprayerTime = await prayerTime()
const jadwals = apiprayerTime.jadwal.data.jadwal
const lokasi = apiprayerTime.location

const prayerTimes = [
    {name: "shubuh", jadwal: jadwals.subuh},
    {name: "dzuhur",jadwal: jadwals.dzuhur},
    {name: "ashar", jadwal: jadwals.ashar},
    {name: "magrib",jadwal: jadwals.maghrib},
    {name: "isya",  jadwal: jadwals.isya},
]
function render() {
    const prayerTime = document.getElementById("prayerTimes")
    prayerTime.innerHTML = ""

    for ( let i = 0; i < prayerTimes.length; i++){
        const div = document.createElement("div")

        div.innerHTML =`
            <div className=name>${prayerTimes[i].name}</div>,
            <div className=jadwal>${prayerTimes[i].jadwal}</div>
            `
        prayerTime.appendChild(div)
    }

}
render()