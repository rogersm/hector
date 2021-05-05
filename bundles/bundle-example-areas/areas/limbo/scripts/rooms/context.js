'use strict';

const { Broadcast } = require(process.cwd() + '/core/' + 'ranvier');

module.exports = {
  listeners: {
    command: state => function (player, commandName, args) {
      Broadcast.sayAt(player, `You just executed room context command '${commandName}' with arguments ${args}`);
    }
  }
};
