# SOFTWARE ENGINEERING LAB (SEMESTER 6)

<br>

<br>

## Table of Contents

<br>

1) [Problem](#problem)
2) [Solution](#solution)
    1) [Existing Solutions](#existing-solutions)
    2) [Our Solution](#our-solution)
3) [CWEs Implemented](#cwes-implemented)
4) [About the Package](#about-the-package)
5) [How it Works?](#how-it-works)
    1) [Internally](#internally)
    2) [Running the tool](#running-the-tool)
    3) [Recommendations](#recommendations)
    4) [Restrictions](#restrictions)
6) [Future Work](#future-work)
7) [Dependencies](#dependencies)
8) [Repo Folder Structure](#repo-folder-structure)
9) [For Developers](#for-developers)
9) [Team and Contact](#team-and-contact)
10) [List of implementable CWEs](#list-of-implementable-cwes)

<br>

## Problem

<br>

In the modern software development world, APIs are proving to be the most widely used software intermediary that allows two applications to talk to each other. This makes it an essential component in every development project. One professional project implements more than hundreds or thousands of APIs that only continues to scale-up in future releases.

Testing these APIs becomes an essential part of the development process because a single error in design or implementation could lead to a greater issue which may affect security, robustness or may crash the application/tool on an edge case.

<br>

## Solution

<br>

### Existing Solutions

<br>

* HTTP request handlers: Tools like REST Client vscode extension (CLI) or Postman (GUI) can be used to send HTTP requests to APIs in hosted servers and the response generated is again presented by these tools. :tired_face:
* Testing Packages: Packages like npm/mocha with assertion libraries like npm/chai are used a lot for any general testing, not just APIs. All the test cases have to be hard coded and individually asserted in order to get tested. :rage:
* Katalon Studio: It is a complete development office suite used for noting down requirements, creating uml, user stories, etc, diagrams, design, implementation and testing. But even here manually test cases has to be written in order to test modules. :dizzy_face:

<br>

### Our Solution

<br>

Coffee-break can test all your REST APIs with auto generated test cases and edge test cases to fully test all your APIs. This allows you to test and check your APIs in order to make a robust application. Along with this it certifies your APIs through testing them against standard API abuses and vulnerabilities like various Common Weakness Enumerations (CWEs).

<br>

## CWEs Implemented

<br>

* `CWE 20 [4]`: Improper Input Validation
The product receives input or data, but it does not validate or incorrectly validates that the input has the properties that are required to process the data safely and correctly.

<br>

## About the package

<br>

* Coffee-break will be an npm package.
* It is created for REST APIs and MongoDB that will be used in java script primariliy in ES6 format.
* It will work by generating necessary javascript files that can be run using the node command and will be readable by the user for trust and transparnecy of the test cases and test functions.
* Normally, writing test data and test function for each api can take hours and hours of time but with this package, tens of thousands of test cases can be created for hundereds of apis by simply running a command.
* The only requirement for it would be a test configurations file.
* This test configuration file would ask for server, router, collection schema and api details inorder to create accurate functions for the testing purposes.
* The configuration takes as minimal data as possible. It basically asks about the settings for the server, basic info for inserting one router, schema for various collections used in the database and activity of an api based on its request and response format. 

<br>

## How it Works?

<br>

### Internally

<br>

* There are 2 main parts to the project: `Server Generation` and `Test Generation`.
* Server generation includes creating server and creating router.
* A server_settings object is required to create a server.

```
server_settings = {
    server_path: String, [default: same dir as test_config.js] (mandatory),
    server_file_name: String [default: “server.test.js”],
    dependency_imports: array of objects {package_import: String, package_name: String}
        [(mandatory and default): [
            {package_import: "express", package_name: "express"},
            {package_import: "bodyParser", package_name: "body-parser"},
            {package_import: "mongoose", package_name: "mongoose"},
            {package_import: "cors", package_name: "cors"},
        ]],
    user_imports: array of objects (mandatory) {user_import: String, user_import_name: String},
    data_post_limit: String, [default: "64mb"],
    user_routes: array of objects
        {use_routes_base_url: String, use_routes_import_name: String}
    mongoDBURI: String (mandatory)
    port: String, [default: "5100"],
}
```

* A router_serttings object is required to create a router.

```
router_settings = {
    router_path: path.resolve(),
    router_file_name: "router.test.js",
    dependency_imports: [
        {package_import: "express", package_name: "express"},
    ],
    mongoose_model: [
        {name: "PostMessage", path: "../models/postMessage.js"},
    ],
}
```

* 
* 
* 

Type:		GET  
Input:	None, Id, List of conditions  
Output:	None, Array of Objects, Object, Primitive Data type  

Type:		POST  
Input:	Id, List of conditions  
Output:	None, Array of Objects, Object, Primitive Data type  

Type:		PATCH  
Input:	Id, Object  
Output:	None, Array of Objects, Object, Primitive Data type  

Type:		DELETE  
Input:	None, Id, List of conditions  
Output:	None, Array of Objects, Object, Primitive Data type  

<br>

### Running the tool

<br>

* Coffee-break is a npm package published on the internet.
* The name of the package is `coffee-break-api`.
* This can be installed in a package using `npm i coffee-break-api`.
* The user can dedicate a file with any name for running this tool.
* In this file, he/she can import `generate_test_files()` function and provide `test_settings` object as an argument.
* Then just run this file using `node`.
* This will create (3 + n) files: `router.test.js`, `server.test.js`, `api.test.js` and n data set files for n collections with nomenclature as `data.schema_name.js`.
* Open 2 terminals.
* Run server.test.js using node. This will instantiate the server.
* Run api.test.js using node. This will run all the test cases generated.
* Any errors found would be reported as a failure and will be visible for the user.
* The output will be displayed in the terminal.

<br>

### Recommendations

<br>

* Create a `test` folder in the main backend directory.
* Create a config file in this folder. Recommended name is `test_config.js`.
* While creating a config object, set the destination directory as `test` for all (3 + n) files that is to be generated.
* This will ensure the isolation of tests in a single directory.
* You can also add a few scripts in pacakage.json to run these files:
    * "npm run test-server": "node path/server.test.js" / "nodemon path/server.test.js"
    * "npm run tests": "node path/api.test.js"

<br>

### Restrictions

<br>

* GET, POST, PATCH and DELETE APIs **only** can be tested using the tool.
* Use only mongodb database (MongoDB Atlas) for server settings.
* One api can modify only one collection in a database. There can be any number of collections in the database.
* No different API response can be sent on the same provided condition.
* Collections/Mongoose models should have no foreign keys. 

<br>

## Future Work

<br>

* Automate the MAPPING process by scanning and directly reading the required API files.
* API files are provided as input to the tool which will identify the APIs.

<br>

## Dependencies

<br>

Config File  
* test_config.js
    * [path](https://www.npmjs.com/package/path) (recommended)

Generated Files
* server.test.js :
    * [express](https://www.npmjs.com/package/express), 
    * [body-parser](https://www.npmjs.com/package/body-parser), 
    * [mongoose](https://www.npmjs.com/package/mongoose), 
    * [cors](https://www.npmjs.com/package/cors)
* router.test.js : []()
* run.test.js : []()

Coffee-break Files
* create_server.js : [fs](https://www.npmjs.com/package/fs)
* create_router.js : 

<br>

## Repo Folder Structure

<br>

> Dummy Backend  
> ProjectFiles  
> TestingGrounds  
> testingfiles  
> tool_name  

* **Dummy Backend:** This folder contains multiple backends taken from many public repositories used for testing puroposes with tool.
* **ProjectFiles:** Contains all the documentation for the project.
* **TestingGrounds:** Used for minor testing purposes of individual components.
* **testingfiles:** Used for minor testing purposes of individual components.
* **coffee_break:** Temporary file storage for our tool used for importing direct files and functions into Dummy Backend for testing.

<br>

### For Developers

<br>



<br>

## Team and Contact

<br>

NAME | ROLL NO | EMAIL
-----|---------|------
Harshita Kapa | CS19B021 | cs19b021@iittp.ac.in
Rajendra Kumar | CS19B034 | cs19b034@iittp.ac.in
Saurav Gwalia | CS19B035 | cs19b035@iittp.ac.in
Sagar Singh | CS19B038 | cs19b038@iittp.ac.in
Talha Shamim | CS19B050 | cs19b050@iittp.ac.in 

<br>

### List of implementable CWEs

<br>

* `CWE 20 [4]`: Improper Input Validation
The product receives input or data, but it does not validate or incorrectly validates that the input has the properties that are required to process the data safely and correctly.

* `CWE 749`: Exposed Dangerous Method or Function
The software provides an Applications Programming Interface (API) or similar interface for interaction with external actors, but the interface includes a dangerous method or function that is not properly restricted.

* `CWE 209`: Generation of Error Message Containing Sensitive Information
The software generates an error message that includes sensitive information about its environment, users, or associated data.

* `CWE 201`: Insertion of Sensitive Information Into Sent Data
The code transmits data to another actor, but a portion of the data includes sensitive information that should not be accessible to that actor.

* `CWE 650`: Trusting HTTP Permission Methods on the Server Side
Safe methods like GET modifying the state of the server, i.e., deleting, adding or updating data on the server.

* `CWE 312`: Cleartext Storage of Sensitive Information
The application stores sensitive information in cleartext within a resource that might be accessible to another control sphere.

* `CWE 732 [22]`: Incorrect Permission Assignment for Critical Resource
The product specifies permissions for a security-critical resource in a way that allows that resource to be read or modified by unintended actors. (e.g. Incorrect JWT Authentication)

* `CWE 306 [11]`: Missing Authentication for Critical Function
The software does not perform any authentication for functionality that requires a provable user identity or consumes a significant amount of resources. (e.g. No JWT Authentication)

* `CWE 285`: Improper Authorization
The software does not perform or incorrectly performs an authorization check when an actor attempts to access a resource or perform an action.

* `CWE 287 [14]`: Improper Authentication
When an actor claims to have a given identity, the software does not prove or insufficiently proves that the claim is correct.

* `CWE 120`: Buffer Copy without Checking Size of Input ('Classic Buffer Overflow')
The program copies an input buffer to an output buffer without verifying that the size of the input buffer is less than the size of the output buffer, leading to a buffer overflow.

* `CWE 522 [21]`: Insufficiently Protected Credentials
The product transmits or stores authentication credentials, but it uses an insecure method that is susceptible to unauthorized interception and/or retrieval.

* `CWE 862 [18]`: Missing Authorization
The software does not perform an authorization check when an actor attempts to access a resource or perform an action.

* `CWE 276 [19]`: Incorrect Default Permissions
During installation, installed file permissions are set to allow anyone to modify those files.

* `CWE 1270`: Generation of Incorrect Security Tokens
The product implements a Security Token mechanism to differentiate what actions are allowed or disallowed when a transaction originates from an entity. However, the Security Tokens generated in the system are incorrect.

* `CWE 434`: Unrestricted Upload of File with Dangerous Type
The software allows the attacker to upload or transfer files of dangerous types that can be automatically processed within the product's environment.

* `CWE 256`: Plaintext Storage of a Password
Storing a password in plaintext may result in a system compromise.

* `CWE 639`: Authorization Bypass Through User-Controlled Key
The system's authorization functionality does not prevent one user from gaining access to another user's data or record by modifying the key value identifying the data.

* `CWE 326`: Inadequate Encryption Strength
The software stores or transmits sensitive data using an encryption scheme that is theoretically sound, but is not strong enough for the level of protection required.

<br>