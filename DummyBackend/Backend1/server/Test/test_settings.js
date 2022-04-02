// import generate_test_files from 'tool_name'
import generate_test_files from './../../../../tool_name/index.mjs'
import path from 'path'

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
    // number_of_test_cases: int [default: 20],
    // wrong_test_case_proportion: String [default: “40%”]
    // apis: array of objects -> api (mandatory)
}


generate_test_files(test_settings)