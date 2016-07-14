# Module: Tweet Feed

The `tweet_feed` displays your twitter home statuses. Copy and paste the module config below and then add your Twitter keys to the key dictionary in the config.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'twitter',
		position: 'bottom_bar',	// This can be any of the regions. Best results in center regions.
		config: {
			keys: {
				
			}
		}
	}
]
````
