/* Initialization */

function DoppelError(message) {
    this.message = message;
}

function DoppelClient(applicationID, apiKey) {
    if(!applicationID) {
        throw new DoppelError('Please provide an application ID.')
    }

    if(!apiKey) {
        throw new DoppelError('Please provide an API Key.')
    }

    this.applicationID = applicationID;
    this.apiKey = apiKey;

    //var protocol = 'http:';
    //var timeout = 2000;

    // Not useful for the moment
    /*
    var defaultHosts = ['localhost:8080'];
    this.hosts = {
        read: protocol + '//' + defaultHosts,
        write: protocol + '//' + defaultHosts,
    };*/

    this.host = 'https://api.doppel.io'

    //Util functions

    this._statechangefunction = function(ID, done) {
        return function() {
            if (this.readyState === 4) {
                var err = null
                var content = null
                try {
                    if (this.status >= 200 && this.status < 400) {
                        // Success
                        content = JSON.parse(this.responseText);
                    } 
                    else if ((this.status >= 400 && this.status < 500) && (this.responseText)) {
                        // The server answers a message
                        throw new DoppelError(JSON.parse(this.responseText).message);
                    }
                    else {
                        // The server provides no response
                        throw new DoppelError('Can not connect to the doppel.io API. ' +
                        'Please contact support@doppel.io to report and solve the issue. ' +
                        'Application ID was: ' + ID + '.')
                    }
                } catch (e) {
                    err = e.message
                }
                done(err, content)
            }
        }
    }

    this._performRequest = function(method, path, done, params, data) {
        try {
            var url = this._addParams(this.host + path, params);
            var request = new XMLHttpRequest();
            request.open(method, url, true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('X-Doppel-Application-ID', this.applicationID)
            request.setRequestHeader('X-Doppel-API-Key', this.apiKey)
            request.onreadystatechange = this._statechangefunction(this.applicationID, done);
            request.send(JSON.stringify(data));
            request = null;
        } catch (e) {
            done(e.message, null)
        }
    }

    this._addParams = function(url, params) {
        var s = url
        if (params) {
            s += '?';
            for (key in params) {
                s += key + '=' + params[key] + '&';
            }
            s = s.slice(0, -1)
        }
        return s
    }

	this.getUsers = function(done, params) {
		var path = '/' + 'users/';
		return this._performRequest('GET', path, done, params);
	}

	this.addUser = function(user, done) {
		var path = '/' + 'users/';
		return this._performRequest('POST', path, done, null, user);
	}

	this.getUser = function(userID, done, params) {
		var path = '/' + 'users/' + userID + '/';
		return this._performRequest('GET', path, done, params);
	}

	this.updateUser = function(partialUser, done) {
		var path = '/' + 'users/' + partialUser.userID + '/';
		return this._performRequest('PATCH', path, done, null, partialUser);
	}

	this.saveUser = function(user, done) {
		var path = '/' + 'users/' + user.userID + '/';
		return this._performRequest('PUT', path, done, null, user);
	}

	this.deleteUser = function(userID, done) {
		var path = '/' + 'users/' + userID + '/';
		this._performRequest('DELETE', path, done);
	}

	this.getRatings = function(userID, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'ratings/';
		return this._performRequest('GET', path, done, params);
	}

	this.getRating = function(userID, itemID, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'ratings/' + itemID + '/';
		return this._performRequest('GET', path, done, params);
	}

	this.saveRating = function(rating, done) {
		var path = '/' + 'users/' + rating.userID + '/' + 'ratings/' + rating.itemID + '/';
		return this._performRequest('PUT', path, done, null, rating);
	}

	this.deleteRating = function(userID, itemID, done) {
		var path = '/' + 'users/' + userID + '/' + 'ratings/' + itemID + '/';
		this._performRequest('DELETE', path, done);
	}

	this.getRecommendations = function(userID, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'recommendations/';
		return this._performRequest('GET', path, done, params);
	}

	this.getPrediction = function(userID, itemID, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'predictions/' + itemID + '/';
		return this._performRequest('GET', path, done, params);
	}

	this.getSimilars = function(userID, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'similars/';
		return this._performRequest('GET', path, done, params);
	}

	this.getSimilarity = function(userID, caca, done, params) {
		var path = '/' + 'users/' + userID + '/' + 'similarities/' + caca + '/';
		return this._performRequest('GET', path, done, params);
	}

	this.getItems = function(done, params) {
		var path = '/' + 'items/';
		return this._performRequest('GET', path, done, params);
	}

	this.addItem = function(item, done) {
		var path = '/' + 'items/';
		return this._performRequest('POST', path, done, null, item);
	}

	this.getItem = function(itemID, done, params) {
		var path = '/' + 'items/' + itemID + '/';
		return this._performRequest('GET', path, done, params);
	}

	this.updateItem = function(partialItem, done) {
		var path = '/' + 'items/' + partialItem.itemID + '/';
		return this._performRequest('PATCH', path, done, null, partialItem);
	}

	this.saveItem = function(item, done) {
		var path = '/' + 'items/' + item.itemID + '/';
		return this._performRequest('PUT', path, done, null, item);
	}

	this.deleteItem = function(itemID, done) {
		var path = '/' + 'items/' + itemID + '/';
		this._performRequest('DELETE', path, done);
	}

	this.getSimilars = function(itemID, done, params) {
		var path = '/' + 'items/' + itemID + '/' + 'similars/';
		return this._performRequest('GET', path, done, params);
	}

	this.getSimilarity = function(itemID, itemID, done, params) {
		var path = '/' + 'items/' + itemID + '/' + 'similarities/' + itemID + '/';
		return this._performRequest('GET', path, done, params);
	}


}