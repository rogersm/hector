'use strict';

const { Broadcast } = require(process.cwd() + '/core/' + 'ranvier');

module.exports = {
  listeners: {
    playerEnter: state => function (player) {
      if (this.following) {
        return;
      }

      Broadcast.sayAt(player, 'The puppy lets out a happy bark and runs to your side.');
      this.follow(player);
    }
  }
};
