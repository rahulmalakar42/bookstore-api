# API Design
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/28483047-bfeca7d3-cb39-4e70-af2b-8b08daea75f5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D28483047-bfeca7d3-cb39-4e70-af2b-8b08daea75f5%26entityType%3Dcollection%26workspaceId%3D1210b2c3-1407-4e61-bf7e-df458d586af7)
---
Introduction : The API consists of different HTTP requests which provide information related to the books, authors and location of the stores. One can also post books’ information and delete in case there are any updates.


# Endpoints paths, HTTP Method and Description


- POST single or multiple books
HTTP method : POST
Endpoints: /add-books
Request Body: [ {keys:values} ]
Response Body:
		Status code:200
		Books created : {content}


- POST single or multiple customers
HTTP method : POST
Endpoints: /add-customers
Request Body: [ {keys:values} ]
Response Body:
		Status code:200
		Customers created : {content}


- GET all book
HTTP method : GET
API endpoint: /books
Request body : None
Response:
Response Code: 200, 404 Not found
Response Body: 
[ {keys:values} ]


- GET a book
HTTP method : GET
API endpoint: /book/:id
Request body : None
Response:
Response Code: 200/404 Book doesn’t exist
Response Body: 
{keys:values}

- UPDATE a book
HTTP method : PATCH
Endpoints: /books/:id
Request Body: [ {keys:values} ]
Response Body:
		Status code:200
		Feedback : Book updated
		
- DELETE a book
HTTP method : DELETE
Endpoints: /books/:id
Request Body: NA
Response Body: Status code 200 (if successfully deleted), {Deleted book details}
			    Status code 400 (if no deletion possible : id not found)
