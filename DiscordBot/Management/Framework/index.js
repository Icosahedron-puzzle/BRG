// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./Management/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// The following allows the bot to access slash command responses
client.on('interactionCreate', async interaction => {
	// The following two lines enable select menu responses
	if (interaction.isSelectMenu()) return;
	console.log(interaction);
	// The following line enables other commands
	if (!interaction.isCommand()) return;
	// Next 3 lines are instructions for accessing and acting on commands
	const { commandName } = interaction;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(token);
