const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with Success!')
    .addChannelOption(channel => {
      return channel // Add return here
          .setName("channel")
          .setDescription("Channel you want to send message in")
          .setRequired(true)
  }),

	async execute(interaction) {
		await interaction.reply('Success!');
	},
};