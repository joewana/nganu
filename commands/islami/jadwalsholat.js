const { fetchUrl } = require("../../lib/Function")

if (!text) throw `Which City Name\nExample : ${prefix + command} Yogyakarta`
get_result = await fetchJson(`https://api.zenz.xyz/api/sholat/${text}?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `🌏 Wilayah : ${get_result.wilayah}\n`
txt_nya += `💌 Date : ${get_result.tanggal}\n`
txt_nya += `🍴 Sahur : ${get_result.sahur}\n`
txt_nya += `🎑 Imsak : ${get_result.imsak}\n`
txt_nya += `🌅 Subuh : ${get_result.subuh}\n`
txt_nya += `🌅 Terbit : ${get_result.terbit}\n`
txt_nya += `🌝 Dhuha : ${get_result.dhuha}\n`
txt_nya += `🌞 Dzuhur : ${get_result.dzuhur}\n`
txt_nya += `🌇 Ashar : ${get_result.ashar}\n`
txt_nya += `🌆 Maghrib : ${get_result.imsak}\n`
txt_nya += `🌃 Isya : ${get_result.isya}`
m.reply(txt_nya)
}
