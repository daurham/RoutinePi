const io = require('../socket').getIO();
const { EVENTS } = require('../socket');
const {
  postData,
} = require('../controller');

module.exports = () => {
  io.on('connection', (socket) => {
    socket.on(EVENTS.POST_DISARM_RECORDS, (disarmRecord) => {
      postData(disarmRecord);
    });
  });
};
