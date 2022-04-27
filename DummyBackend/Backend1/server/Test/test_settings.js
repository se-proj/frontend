// import generate_test_files from 'tool_name'
import generate_test_files from '../../../../coffee_break/index.mjs'
import path from 'path'
import { NONAME } from 'dns'

// path.resolve() returns pwd

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

let test_settings = {
	mongoose_schema: [],
    server_settings: server_settings,
    router_settings: router_settings,
    n_intentional_right_cases: 20,
    n_intentional_wrong_cases: 20,
    n_edge_cases: 20,
    apis: []
}

let getPostsAPI = {
    description: "GET all posts FROM /posts",
	url: "/posts",
	type: "GET",
    input_schema: null,
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

// export default test_settings; 
generate_test_files(test_settings)