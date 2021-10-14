// The following grants access to officers to use slash commands; should be obsolete once Ralik confirms
if (!client.application?.owner) await client.application?.fetch();

const command = await client.guilds.cache.get('123456789012345678')?.commands.fetch('876543210987654321');

const permissions = [
	{
		id: '865789169531486228',
		type: 'ROLE',
		permission: true,
	},
];

await command.permissions.add({ permissions });