// Code to access menu library starting on line 18
const menus = []
const menusFiles = fs.readdirSync('./Management/Select Menus').filter(file => file.endsWith('.js'));

// Code for sourcing and pushing menus
for (const mfiles of menusFiles) {
	const commandm = require(`./Select Menus/${mfiles}`);
	menus.push(commandm.data.toJSON());
}