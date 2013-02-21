// http://www.usa.gov/About/developer-resources/social-media-registry.shtml
var request = require('request');

// Social Media Registry API
var SMR = function(){
	this.baseURI = '';
};

SMR.prototype.request = function(url, callback){
	request.get(url, function(err, res, body){
		callback(err, body);
	});
};

SMR.prototype.getRecentDatasets = function(count, callback){
	count = count || false;
	var endpoint = 'get_recent_datasets';
	endpoint = count ? endpoint+'?count='+count : endpoint;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback);
};

module.exports = SMR;

