import createServerFile from "./create_server/index.mjs";
import createRouterFile from "./create_router/index.mjs";

const generate_test_files = (test_settings) => {
    createRouterFile(test_settings.router_settings)
    createServerFile(test_settings.server_settings, test_settings.router_settings.router_file_name)
}

export default generate_test_files