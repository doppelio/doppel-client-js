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
10. [Delete a rating](delete-a-rating)


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
client.getRatings('myUserID', function(err, content) {
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

## 10. Delete a rating

Delete the rating of a particular user on a particular item.

Example to delete the rating of the user 'myUserID' on the item 'myItemID':
```javascript
client.deleteRating('myUserID', 'myItemID', function(err, content) {
	if(err) {
		console.log(err);
	}
});
```





