/* Magic Mirror
 * Node Helper: Newsfeed
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var validUrl = require("valid-url");
var Fetcher = require("./fetcher.js");
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
