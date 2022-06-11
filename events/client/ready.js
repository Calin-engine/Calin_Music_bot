const figlet = require('figlet');
const chalk = require('chalk');

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data));
  });

  const _botinfo = "music bot 24-7";
  const _developer = "Developer : 𝕩𝕏𝕩 | 𝒯𝑒𝓃𝓉𝒶𝒸𝒾𝑜𝓃#8064";
  let guilds = client.guilds.cache.size;
  let users = client.users.cache.size;
  let channels = client.channels.cache.size;

  const activities = [
      `${client.prefix}help | ${guilds} servers`,
      `music | ${users} users`,
      `filterlist | ${channels} channels`,
      `${_botinfo}`,
      `${_developer}`,
  ]

  setInterval(() => {
      client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: 'PLAYING' });
client.user.setStatus('idle');
  }, 5000)
}
