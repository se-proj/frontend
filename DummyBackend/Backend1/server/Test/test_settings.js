// import generate_test_files from 'tool_name'
import generate_test_files from './../../../../tool_name/index.mjs'
import path from 'path'
import { NONAME } from 'dns'

// path.resolve() returns pwd

let server_settings = {
    server_path: path.resolve(),
    server_file_name: "test_server.js",
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

let test_settings = {
	// // mongoose_schema: array of schemas/items (mandatory),
    server_settings: server_settings,
    number_of_test_cases: 10,
    wrong_test_case_proportion: "40%",
    apis: [
        getPostsAPI,
        createPostAPI,
        getPostAPI,
        updatePostAPI,
        deletePostAPI,
        likePostAPI
    ]
}

let getPostsAPI = {
    description: "GET all posts FROM /posts",
	url: "/posts",
	type: "GET",
    input_schema: undefined,
    output_schema: {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
    }
}

let createPostAPI = {
    description: "CREATE a post IN /posts",
	url: "/posts",
	type: "POST",
}

let getPostAPI = {
    description: "GET a post with a specific id FROM /posts/:id",
	url: "/posts/:id",
	type: "GET",
}

let updatePostAPI = {
    description: "UPDATE a post with a specific id IN /posts/:id",
	url: "/posts/:id",
	type: "PATCH",
}

let deletePostAPI = {
    description: "DELETE a post with a specific id FROM /posts/:id",
	url: "/posts/:id",
	type: "DELETE",
}

let likePostAPI = {
    description: "UPDATE the amount a likes a specific post gets IN /posts/:id/likePost",
	url: "/posts/:id/likePost",
	type: "PATCH",
}


generate_test_files(test_settings)