import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('November 4 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `
         〔 llı 𝖣𝗈𝗇𝖺𝗌𝗂 ${namebot} ıll 〕
    
┌─❖
│「 Hi 👋 」
└┬❖ 「 @${name} 」
┌┤✑ Donasi Atau Lirik Doang Anj
│└────────────┈ ⳹
└─「 *Donasi Via Berikut* 」  
│
│ ➪ Gopay : 0882007324217
│ ➪ Dana : 0882007324217
│ ➪ Pulsa : 0882007324217
│ ➪ Pulsa : 0882007324217
│ ➪ ovo : 0882007324217
│ ➪ Saweria : 0882007324217
╰───────────────❏
│
└─「 *Messege* 」       
─────────────┈
𝑇𝑒𝑟𝑖𝑚𝑎𝑘𝑎𝑠𝑖𝒉 𝐴𝑛𝑑𝑎 𝑇𝑒𝑙𝑎𝒉 𝐵𝑎𝑛𝑡𝑢 𝑀𝑒𝑛𝑑𝑢𝑘𝑢𝑛𝑔 𝑆𝑎𝑦𝑎,𝑆𝑒𝑚𝑜𝑔𝑎 𝑅𝑒𝑧𝑒𝑘𝑖 𝑌𝑎𝑛𝑔 𝐷𝑖 𝐾𝑎𝑠𝑖𝒉 𝐴𝑙𝑙𝑎𝒉 𝐴𝑘𝑎𝑛 𝑀𝑒𝑙𝑖𝑚𝑝𝑎𝒉,𝐵𝑒𝑟𝑡𝑎𝑚𝑏𝑎𝒉 𝑇𝑒𝑟𝑢𝑠𝑠 𝐵𝑒𝑟𝑡𝑎𝑚𝑏𝑎𝒉.
─┬────────────┈ ⳹
   └─────────────┈ ⳹
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://telegra.ph/file/9ece00938d66e45718679.jpg`)).buffer(), [["Menu", usedPrefix + "menu"], ["Sewa Bot", usedPrefix + "sewa"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Subscribe YT My Bestie`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/9ece00938d66e45718679.jpg`)).buffer(),
                        sourceUrl: 'https://youtu.be/PeLEpmoiO4U'
            }
        }
    })
}
handler.help = ['donasi']
handler.tags = ['info']

handler.command = /^(donasi)$/i

export default handler
