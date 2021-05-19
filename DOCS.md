# mavka-api v0.0.0



- [Program](#program)
	- [Get Program](#get-program)
	
- [Questions](#questions)
	- [Get Questions](#get-questions)
	- [Get Random Questions](#get-random-questions)
	
- [Subjects](#subjects)
	- [Get Subjects](#get-subjects)
	
- [Tests](#tests)
	- [Get Tests](#get-tests)
	


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

## Get Random Questions



	POST /questions/get


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| subject			| String			| **optional** <p>Subject's id.</p>							|
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


