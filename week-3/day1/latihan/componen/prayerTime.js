export default async function prayerTime() {
    const city = 1201
    const date = new Date().toISOString().split("T")[0]

    const getLocations = await fetch("https://api.myquran.com/v2/sholat/kota/semua")
    const getPrayerTime = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${city}/${date}`)

    const dataLocation = await  getLocations.json()
    const dataPrayerTime = await  getPrayerTime.json()

    return {
        location: dataLocation,
        jadwal: dataPrayerTime
    }
}
prayerTime()

