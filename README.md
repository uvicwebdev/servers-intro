# Intro to Servers and API's

## Our simple API:

### GET /<username>

Returns data about specified user. If user is not found, return 404.
Response:
```
{
    "username": "John Smith",
    "user_id": "123",
    "description": "Swell guy"
}
```

### POST /<username>/update
Updates a given user, takes as a POST body the new user information.

Request:
```
{
    "username": "John Smith",
    "user_id": "123",
    "description": "meh"
}
```
Response:
`status_code` reflecting if the server properly handled the data