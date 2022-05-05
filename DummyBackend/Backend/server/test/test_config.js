import generate_test_files from 'coffee-break-api'
import path from 'path'

let server_settings = {
    server_path: path.resolve(),
    server_file_name: "server.test.js",
    dependency_imports: [
        {package_import: "express", package_name: "express"},
        {package_import: "bodyParser", package_name: "body-parser"},
        {package_import: "mongoose", package_name: "mongoose"},
        {package_import: "cors", package_name: "cors"},
    ],
    user_imports: [
        {user_import: "postRoutes", user_import_name: "./../routes/posts.js"},
    ],
    data_post_limit: "30mb",
    user_routes: [
        {use_routes_base_url: "/posts", use_routes_import_name: "postRoutes"}
    ],
    mongoDBURI: "mongodb+srv://iitsemproject:iitsemproject889@cluster0.mpfjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    port: "5100",
    mocha_testing_enabled: true, 
}

let router_settings = {
    router_path: path.resolve(),
    router_file_name: "router.test.js",
    dependency_imports: [
        {package_import: "express", package_name: "express"},
    ],
    mongoose_model: [
        {name: "PostMessage", path: "../models/postMessage.js"},
    ],
}

let post_schema = `{
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "message": {
            "type": "string"
        },
        "creator": {
            "type": "string"
        },
        "likes": {
            "type": "integer",
            "minimum": 0
        }
    },
    "required": [
        "title",
        "message",
        "creator",
        "likes"
    ]
}`

// API config

let createPostAPI = {
    description: "CREATE posts IN /posts",
	url: "/posts",
	http_type: "POST",
    mongo_collection: "PostMessage",
    mongoose_action: "save",
    request_schema: {
        params: null,
        auth: null,
        header: null,
        body: {
            property: [
                "title",
                "message",
                "creator",
                "likes"
            ],
            schema: post_schema
        }
    },
    response_schema: {
        type: "object",
        filter_row: [],
        filter_column: [
            "title",
            "message",
            "creator",
            "likes"
        ],
        right_status: 201,
		wrong_occurence: [
			{status: 409, message: "#error.message"},
		]
    },
}

let getPostsAPI1 = {
    description: "GET posts FROM /posts",
	url: "/posts",
	http_type: "GET",
    mongo_collection: "PostMessage",
    mongoose_action: "find",
    request_schema: {
        params: null,
        auth: null,
        header: null,
        body: null,
    },
    response_schema: {
        type: "object",
        filter_row: [],
        filter_column: [
            "title",
            "message",
            "creator",
            "likes"
        ],
        right_status: 200,
		wrong_occurence: [
			{status: 404, message: "#error.message"},
		]
    },
}

let deletePostsAPI = {
    description: "DELETE posts FROM /posts",
	url: "/posts",
	http_type: "DELETE",
    mongo_collection: "PostMessage",
    mongoose_action: "findByIdAndRemove",
    request_schema: {
        params: null,
        auth: null,
        header: null,
        body: null,
    },
    response_schema: {
        type: null,
        filter_row: [],
        filter_column: [],
        right_status: 200,
		wrong_occurence: [
			{status: 404, message: "#error.message"},
		]
    },
}

let test_settings = {
    mongoose_schema: [
        {name: "PostMessage", schema: post_schema}
    ],
    server_settings: server_settings,
    router_settings: router_settings,
    n_intentional_right_cases: 20,
    n_intentional_wrong_cases: 0,
    n_edge_cases: 0,
    apis: [createPostAPI, getPostsAPI1, deletePostsAPI]
}
generate_test_files(test_settings)