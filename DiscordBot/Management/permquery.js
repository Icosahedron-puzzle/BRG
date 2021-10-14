const { Permissions } = require("discord.js/src/index.js");

const memberPermissions = member.permissions.serialize();
const rolePermissions = role.permissions.serialize();
/* output: {
SEND_MESSAGES: true,
ADD_REACTIONS: true,
BAN_MEMBERS: false,
...
}
*/
console.log(Permissions.FLAGS)