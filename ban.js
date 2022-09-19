const Discord = require ('discord.js');

module.exports = {
    name: "ban",
    /**
     * 
     * @param {Discord.message} message 
     */
    async execute(message) {
     if (!message.member.hasPermission('BAN_MEMBERS')) {

        return message.channel.send(`${message.author.username}, Tu n'est pas autorisé à bannir quelqu'un.`)
     }

     const guild = message.guild
     const user = message.mentions.user.first();
     console.log(user);
   }
}