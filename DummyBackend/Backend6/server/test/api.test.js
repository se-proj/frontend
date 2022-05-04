import axios from 'axios'

import { PostMessage_DATA } from './data.PostMessage.js'

const SERVER = axios.create({baseURL: "http://localhost:5100"})

let ERROR = false

const before = async () => {
    try {
        const res = await SERVER.delete('/', {})
        console.log(res.data)
    }
    catch(err) {
        ERROR = true
        console.log("before() function failed")
        console.log(err)
    }
    finally {
        if(!ERROR)
            post1_PostMessage()
        else
            console.log("TEST TERMINATED")
    }
}

// ///////////////////////
// BEGIN TESTS
// ///////////////////////

PPP2

PPP1

// ///////////////////////
// END TESTS
// ///////////////////////

before()