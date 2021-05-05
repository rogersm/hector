'use strict';

const { Broadcast } = require(process.cwd() + '/core/' + 'ranvier');

module.exports = {
  usage: 'save',
  command: state => (args, player) => {
    player.save(() => {
      Broadcast.sayAt(player, "Saved.");
    });
  }
};
