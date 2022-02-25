let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://www.reddit.com/r/RealGirls/random.json', '', 'sange~an', m)
  
}
handler.help = ['2k']
handler.tags = ['anime']
handler.command = /^(2k)$/i

handler.limit = true
handler.group = true

module.exports = handler
