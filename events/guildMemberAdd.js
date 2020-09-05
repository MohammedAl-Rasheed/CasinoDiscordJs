module.exports = (client, member) => {

    let userLogs = member.guild.channels.find(c => c.name === 'user_logs');

    userLogs.send(`${member.user.tag} has joined **${member.guild}**!`);
};