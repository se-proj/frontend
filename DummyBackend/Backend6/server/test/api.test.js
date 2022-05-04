import axios from 'axios'

import { PostMessage_DATA } from './data.PostMessage.js'

const SERVER = axios.create({baseURL: "http://localhost:5100"})

const before = async () => {
    try {
        const res = await SERVER.delete('/', {})
        console.log(res.data)
    }
    catch(err) {
        console.log("before() function failed")
        console.log(err)
    }
}
    
let ERROR = false

// ///////////////////////
// BEGIN TESTS
// ///////////////////////

PPP2

PPP1

// ///////////////////////
// END TESTS
// ///////////////////////
