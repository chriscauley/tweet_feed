var NodeHelper = require("node_helper");
var Twitter = require("twitter");

module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
	},

	// Subclass socketNotificationReceived received.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "ADD_FEED") {
		  this.client = new Twitter(payload);
      var params = {screen_name: 'txrxlabs'};
      var self = this;
      this.client.get('statuses/home_timeline', params, function(error, tweets, response){
        if (!error) {
          self.sendSocketNotification("NEW_TWEETS", tweets);
        } else { console.error(error) }
      });
			
			return;
		}
	},
});
