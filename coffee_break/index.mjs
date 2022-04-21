import createServerFile from "./create_server/index.mjs";
import createRouterFile from "./create_router/index.mjs";

const generate_test_files = (test_settings) => {
    createServerFile(test_settings.server_settings)
    createRouterFile(test_settings.router_settings)
}

export default generate_test_files