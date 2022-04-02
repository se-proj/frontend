import createServerFile from "./create_server/index.mjs";

const generate_test_files = (test_settings) => {
    createServerFile(test_settings.server_settings)
}

export default generate_test_files