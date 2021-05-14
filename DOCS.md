# mavka-api v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Program](#program)
	- [Get Program](#get-program)
	
- [Questions](#questions)
	- [Get Questions](#get-questions)
	
- [Subjects](#subjects)
	- [Get Subjects](#get-subjects)
	
- [Tests](#tests)
	- [Get Tests](#get-tests)
	


# Auth

## Authenticate



	GET /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Program

## Get Program



	POST /program/get


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| subject			| String			| **optional** <p>Subject's id.</p>							|

# Questions

## Get Questions



	POST /questions/get


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| test			| String			| **optional** <p>Test's id.</p>							|
| topic			| String			| **optional** <p>Topic's id.</p>							|

# Subjects

## Get Subjects



	POST /subjects/get


# Tests

## Get Tests



	POST /tests/get


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| subject			| String			| **optional** <p>Subject's id.</p>							|


