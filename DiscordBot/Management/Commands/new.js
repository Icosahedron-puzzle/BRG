const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new')
		.setDescription('Testing for menus!'),
	async execute(interaction) {
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Target channel')
        .addOptions([
          {
            label: 'Geonosians',
            description: 'Will post in the geonosian monitoring channel',
            value: 'first_option',
          },
          {
            label: 'Padme',
            description: 'Will post in the padme monitoring channel',
            value: 'second_option',
          },
          {
            label: 'Vader',
            description: 'Will post in the vader monitoring channel',
            value: 'third_option',
          },
        ]),
    );
    await interaction.reply({ content: 'Please tell me which channel to post in', components: [row] });
	},
};