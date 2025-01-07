const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Fadzz-Xd
 * Follow https://github.com/fadzbot
 * Whatsapp : https://chat.whatsapp.com/ItRU1HK0y6VKUpQd34gDy4
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
//settings owner di ./setown.js
global.packname = 'BOT-MD'
global.owner = ["6282210739170"]
global.botnum = ["6282210739170"]
global.author = 'FADZZ-XD'
global.owname = 'FADZZ-XD'
global.botname = 'BOT-WHATSAPP'
global.themeemoji = '🪀'
global.f = '> '
global.n = '`'
global.videoMenu = fs.readFileSync('./sychMedia/menu/sych.mp4');
global.listv = ['⛏', '●', '■', '✿', '▲', 'ଳ', 'ϟ', '✶', '➤', '✦', '✧', '△', '❀', '⋆𖦹', '□', '𖤓', 'ᨒ', '◇', '𖣂', '々', '〆', 'ᯓ★', '꩜', '✮']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🌵', '🪺', '🪨', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
    tmenu: 'https://i.ibb.co.com/7bVhfhb/3ed349054e5c77cfbebf58293d1e0df0.jpg',
	texz: `${botname}`,
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://i.ibb.co.com/3rqCPX6/fk.jpg',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: 'https://www.youtube.com/sanzkece',
	gh: 'https://github.com/fadzbot',
	gc: 'https://chat.whatsapp.com/ItRU1HK0y6VKUpQd34gDy4',
	ch: '120363383347233294@newsletter',
}
global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}
global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Khusus Owner',
	admin: 'Khusus Admin',
	botAdmin: 'Gua Bukan Admin Bro',
	group: 'Harus Di Group',
	private: 'Harus Di Chat Pribadi',
	prem: 'Khusus Premium',
	wait: 'bentar duluu',
	error: 'eror bro!',
	done: 'udh lunas yh'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});