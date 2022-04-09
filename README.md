# SOFTWARE ENGINEERING LAB (SEM 6)

<br>

<br>

## Table of Contents

<br>

1) [Problem](#problem)
2) [Solution](#solution)
    1) [Existing Solutions](#exsting-solution)
    2) [Our Solution](#our-solution)
3) [CWEs planned](#cwes-planned)
    1) [Release 1](#release-1)
    2) [Release 2](#release-2)
4) [Development Requirements](#development-requirements)
    1) [Release 1](#release-1-1)
    2) [Release 2](#release-2-1)
    3) [Not yet decided](#not-yet-decided)
5) [How it Works?](#how-it-works)
    1) [Working](#working)
    2) [Recommendations](#recommendations)
6) [Package Dependencies](#package-dependencies)
7) []()
8) [Repo Folder Structure](#repo-folder-structure)
9) [Team and Contact](#team-and-contact)

<br>

## Problem

<br>

In the modern software development world, APIs are proving to be the most widely used software intermediary that allows two applications to talk to each other. This makes it an essential component in every development project. One professional project implements more than hundreds or thousands of APIs that only continues to scale-up in future releases.

Testing these APIs becomes an essential part of the development process because one single error in design or implementation could lead to a greater issue which may affect security, robustness or may crash the application/tool on an edge case.

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

Coffee-break can test all your REST APIs with auto generated  test cases and edge test cases to fully test all your APIs. This allows you to test and check your APIs in order to make a robust application. Along with this it certifies your APIs through testing them against standard API abuses and vulnerabilities like various Common Weakness Enumerations (CWEs).

<br>

## CWEs planned

<br>

### Release 1

<br>

* `CWE 20 [4]`: Improper Input Validation
The product receives input or data, but it does not validate or incorrectly validates that the input has the properties that are required to process the data safely and correctly.

* `CWE 749`: Exposed Dangerous Method or Function
The software provides an Applications Programming Interface (API) or similar interface for interaction with external actors, but the interface includes a dangerous method or function that is not properly restricted.

* `CWE 209`: Generation of Error Message Containing Sensitive Information
The software generates an error message that includes sensitive information about its environment, users, or associated data.

* `CWE 201`: Insertion of Sensitive Information Into Sent Data
The code transmits data to another actor, but a portion of the data includes sensitive information that should not be accessible to that actor.

<br>

### Release 2

<br>

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

## Development Requirements

<br>

### Release 1

<br>

* Coffee-break will be an npm package.
* Tool would be created for REST APIs and MongoDB.

Setting up
* It requires a file that would implement its functions.
* It requires a schema of data sent in the request object as INPUT (body, params, header, authorization, etc) and a schema of models used in the database that the API will be used for as OUTPUT.
* API routes will also be provided to the user in a js file.
* Set number of test cases for each API route. (Random and Edge)
* Additionally a description can also be provided for individual API routes.

RUNNING TOOL
* Having these inputs, the tool will drop any existing databases and create new ones as mentioned in the OUTPUT schema.

<br>

### Release 2

<br>

SETTING UP
* It also requires MAPPING of INPUT to OUTPUT for each API route. Various other parameters could also be present, like _id being auto as it is generally not specified in schemas and hence need not be value checked.

RUNNING TOOL
* Using the INPUT schema, it will generate random and edge test cases which it will send as a request object and get the resultant response from the server. The MAPPING will also produce a true result and then the 2 results will be checked, value for value, type for type.
* Any errors found would be reported as a failure and will be visible for the user.
* The output will be stored either in a log file (in the same directory as the test file) or in the terminal.
* Execution times will also be recorded.
* Special APIs like signin, auth will also be compatible and respective types of emailIDs and Passwords will also be autogenerated generated for them.
* The tool can also detect whether the incoming keys or passwords are encrypted or not and throw a warning message.

<br>

### Not yet decided

<br>

* Automate the MAPPING process by using ML and directly reading the required API files.
* API files are provided as input to the tool which will identify the APIs.

<br>

## How it Works?

<br>

### Working

<br>

* Coffee-break is a npm package.
* The user of this package has to create a config object.
* The user also needs to import a function from the package and send this config object as a parameter to the function.
* Then run this file using **node**.
* This will create 3 files: **router.test.js**, **server.test.js** and **run.test.js**.
* Add a few scripts in pacakage.json:
    * "npm run test-server": "node path/server.test.js" / "nodemon path/server.test.js"
    * "npm run tests": "node path/run.test.js"
* Open a terminal and run server.test.js file using either node or nodemon (install nodemon package) or script present in pacakge.json.
* Open another terminal and run the run.test.js using node or run the script present in pacakge.json.

<br>

### Recommendations

<br>

* Create a `test` folder in the main backend directory.
* Create a config file in this folder. Recommended name is `test_config.js`.
* While creating a config object, set the destination directory as `test` for all 3 files generated.
* This will ensure the isolation of tests in a single directory.

<br>

## Package Dependencies

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

## Initial Setup

<br>



<br>

## Repo Folder Structure

<br>

> Dummy Backend  
> ProjectFiles  
> TestingGrounds  
> testingfiles  
> tool_name  



<br>

<!-- ## Plan

<br>

### R1 Functionalities

<br>



<br>

### R2 Functionalities

<br>



<br>

### Future plans

<br>



<br> -->

<!-- ## Resources

### Overview

<br>



<br>

### For Developers

<br>



<br> -->

## Team and Contact

<br>

NAME | ROLL NO | EMAIL
-----|---------|------
Harshita Kapa | CS19B021 | cs19b021@iittp.ac.in
Rajendra Kumar | CS19B034 | cs19b034@iittp.ac.in
Saurav Gwalia | CS19B035 | cs19b035@iittp.ac.in
Sagar Singh | CS19B038 | cs19b038@iittp.ac.in
Talha Shamim | CS19B050 | cs19b050@iittp.ac.in 