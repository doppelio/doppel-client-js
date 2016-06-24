# Doppel API Client for JavaScript

[doppel.io](http://doppel.io) is a hosted recommendation engine.

Please visit our website to know more about us.

Contact support@doppel.io, if you find an issue.

## Table of Contents

**Getting Started**

Work in progress

**Commands Reference**

1. [List your users](#list-your-users)
2. [Create an user](#create-an-user)
3. [Get an user](#get-an-user)
4. [Save an user](#save-an-user)
5. [Update an user](#update-an-user)
6. [Delete an user](#delete-an-user)
7. [Get ratings of an user](#get-ratings-of-an-user)
8. [Get a rating](#get-a-rating)
9. [Save a rating](#save-a-rating)
10. [Delete a rating](#delete-a-rating)
11. [Get a prediction](#get-a-prediction)
12. [Get recommendations for an user](#get-recommendations-for-an-user)
13. [Get similar users](#get-similar-users)
14. [Get similarity between users](#get-similarity-between-users)
15. [List your items](#list-your-items)
16. [Create an item](#create-an-item)
17. [Get an item](#get-an-item)
18. [Save an item](#save-an-item)
19. [Update an item](#update-an-item)
20. [Delete an item](#delete-an-item)
21. [Get ratings of an item](#get-ratings-of-an-item)
22. [Get recommendations for an item](#get-recommendations-for-an-item)
23. [Get similar items](#get-similar-items)
24. [Get similarity between items](#get-similarity-between-items)


# Quick Start



# Commands Reference

## List your users

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

## Create an user

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

## Get an user

Return the user corresponding to the ID.

Example to retrieve the user 'myUserID':
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

## Save an user

Save an user at a particular ID.

Example to save an user at the ID 'myUserID' with some ratings:
```javascript
client.saveUser({'userID': 'myUserID', 'ratings': {'myItemID': 5}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Update an user

Update an user at a particular ID.

Example to update an user at the ID 'myUserID' with new ratings:
```javascript
client.updateUser({'userID': 'myUserID', 'ratings': {'myItemID': 2}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Delete an user

Delete a particular user.

Example to delete the user at the ID 'myUserID':
```javascript
client.deleteUser('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Get ratings of an user

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

## Get a rating

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

## Save a rating

Get the rating of a particular user on a particular item.

Example to save the rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.saveRating({'userID': 'myItemID', 'itemID': 'myUserID', 'rating': 5}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Delete a rating

Delete the rating of a particular user on a particular item.

Example to delete the rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.deleteRating('myItemID', 'myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Get a prediction

Return the prediction of the rating of an user on an item.

Example to retrieve the predicted rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.getPrediction('myUserID', 'myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Get recommendations for an user

Get recommendations of items for an user.

Example to retrieve and display recommendations for an user 'myUserID':
```javascript
client.getUserRecommendations('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Get similar users

Retrieve users that are similar to a given user.

Example to retrieve and display similar users with user 'myUserID':
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

## Get similarity between users

Return the similarity between two users. 
				The similarity is a number between -1 and 1. A similarity near -1 means that the two users are not similar. On the contrary, a similarity close 1 means that the two users are similar. 
				Moreover, the similarity is symmetric, that is to say the similarity between an user 1 and an user 2 is equal to the similarity between an user 2 and an user 1.

Example to retrieve and display the similarity between the user 'myUserID1' and the user 'myUserID2':
```javascript
client.getUsersSimilarity('myUserID1', 'myUserID2', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## List your items

Return a list which contains the IDs of your items.

Example to list your items:
```javascript
client.getItems(function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content.users);
	}
});
```

## Create an item

Create a new item and return its ID.

Example to create a new item and print its ID:
```javascript
client.addItem(function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content.itemID);
	}
});
```

## Get an item

Return the item corresponding to the ID.

Example to retrieve the item 'myItemID':
```javascript
client.getItem('myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Save an item

Save an item at a particular ID.

Example to save an item at the ID 'myItemID' with some ratings:
```javascript
client.saveItem({'itemID': 'myItemID', 'ratings': {'myUserID': 5}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Update an item

Update an item at a particular ID.

Example to update an item at the ID 'myItemID' with new ratings:
```javascript
client.updateItem({'itemID': 'myItemID', 'ratings': {'myUserID': 2}}, function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Delete an item

Delete a particular item.

Example to delete the item at the ID 'myItemID':
```javascript
client.deleteItem('myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
});
```

## Get ratings of an item

Get all the ratings of an item.

Example to retrieve the ratings of the item 'myItemID':
```javascript
client.getItemRatings('myUserID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Get recommendations for an item

Get recommendations of users for an item.

Example to retrieve and display recommendations for an item 'myItemID':
```javascript
client.getItemRecommendations('myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Get similar items

Retrieve items that are similar to a given item.

Example to retrieve and display similar items with item 'myItemID':
```javascript
client.getSimilarItems('myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```

## Get similarity between items

Return the similarity between two items. 
				The similarity is a number between -1 and 1. A similarity near -1 means that the two items are not similar. On the contrary, a similarity close 1 means that the two items are similar. 
				Moreover, the similarity is symmetric, that is to say the similarity between an item 1 and an item 2 is equal to the similarity between an item 2 and an item 1.

Example to retrieve and display the similarity between the item 'myItemID1' and the item 'myItemID2':
```javascript
client.getItemsSimilarity('myItemID1', 'myItemID2', function(err, content) {
	if(err) {
		console.log(err);
	}
	else {
		console.log(content);
	}
});
```





