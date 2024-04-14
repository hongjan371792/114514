require('dotenv').config();
const { Client } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.MESSAGE] });
const { CommandHandler } = require('djs-commander');

const prefix = '!'; // 你的機器人指令前綴，例如！

('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // 確保消息是由一個用戶發送的，並且不是機器人自己發送的
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // 將消息分解為指令和參數
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // 根據指令執行不同的操作
  if (command === 'fuck') {
    message.channel.send('Damn張雲翔幹你娘');
  } else if (command === 'Damn') {
    message.channel.send('【10分钟纯享Damn】：https://www.bilibili.com/video/BV1L94y167DJ/?share_source=copy_web&vd_source=06383f398b42c323fe67579631cfb844');
  } else if (command === 'time') {
    const currentTime = new Date();
    const currentTimeString = currentTime.toLocaleTimeString();
    message.channel.send('你個腦殘，現在 ${currentTimeString}')
  }
});


client.login(process.env.DISCORD_TOKEN);