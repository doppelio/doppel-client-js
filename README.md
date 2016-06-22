# Doppel API Client for JavaScript

[doppel.io](http://doppel.io) is a hosted recommendation engine.

Please visit our website to know more about us.

Contact support@doppel.io, if you find an issue.

## Table of Contents

**Getting Started**

Work in progress

**Commands Reference**

1. [List your users](list-your-users)
2. [Create an user](create-an-user)
3. [Get an user](get-an-user)
4. [Save an user](save-an-user)
5. [Update an user](update-an-user)
6. [Delete an user](delete-an-user)
7. [Get user's ratings](get-user-s-ratings)
8. [Get a rating](get-a-rating)
9. [Save a rating](save-a-rating)
10. [Get a prediction for an user](get-a-prediction-for-an-user)
11. [Get recommendations](get-recommendations)
12. [Get similar users](get-similar-users)
13. [Get similarity between users](get-similarity-between-users)


# Quick Start



# Commands Reference

## 1. List your users

Return a list which contains the IDs of your users.

Example to list your users:
```javascript
client.getUsers(function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content.users);
	}
});
```

## 2. Create an user

Create a new user and return its ID.

Example to create a new user and print its ID:
```javascript
client.addUser(function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content.userID);
	}
});
```

## 3. Get an user

Return the user corresponding to the ID.

Example to retrieve the users 'myUserID':
```javascript
client.getUser('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 4. Save an user

Save an user at a particular ID.

Example to save an user at the ID 'myUserID' with some ratings:
```javascript
client.saveUser({'userID': 'myUserID', 'ratings': {'myItemID': 5}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## 5. Update an user

Update an user at a particular ID.

Example to update an user at the ID 'myUserID' with new ratings:
```javascript
client.updateUser({'userID': 'myUserID', 'ratings': {'myItemID': 2}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## 6. Delete an user

Delete a particular user.

Example to delete the user at the ID 'myUserID':
```javascript
client.deleteUser('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## 7. Get user's ratings

Get all the ratings of an user.

Example to retrieve the ratings of the user 'myUserID':
```javascript
client.getUserRatings('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 8. Get a rating

Get the rating of a particular user on a particular item.

Example to retrieve the rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.getRating('myUserID', 'myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 9. Save a rating

Get the rating of a particular user on a particular item.

Example to save the rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.saveRating({'userID': 'myItemID', 'itemID': 'myUserID', 'rating': 5}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## 10. Get a prediction for an user

Return the prediction of the rating of an user on an item.

Example to retrieve the predicted rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.getUserPrediction('myUserID', 'myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 11. Get recommendations

Get recommendations of items for an user.

Example to retrieve and display recommendations for an user 'myUserID':
```javascript
client.getRecommendations('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 12. Get similar users

Retrieve users that are similar to a given user.

Example to retrieve and display similar users of user 'myUserID':
```javascript
client.getSimilarUsers('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## 13. Get similarity between users

Return the similarity between two users. The similarity is a number between -1 and 1. A similarity near -1 means that the two users are not similary. On the contrary, a similarity close 1 means that the two users are similar. Moreover, the similarity is symmetric, that is to say the similarity between the between an user 1 and an user 2 is equal to the similarity between an user 2 and an user 1.

Example to retrieve and display the similarity between the user 'myUserID1' and the user 'myUserID2':
```javascript
client.getSimilarUsers('myUserID1', 'myUserID2', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```





