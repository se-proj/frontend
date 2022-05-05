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

const post1_PostMessage = async () => {
	let api_log = "\n"
	let error_flag = false
	api_log += "CREATE posts IN /posts" + "\n"
	const length = PostMessage_DATA.length
	for(let i = 0; i < length; i++) {
		api_log += "CASE " + (i + 1) + ":\n"
		try {
			const res = await SERVER.post(`/posts`, PostMessage_DATA[i])

            if(res.status !== 201) {
                api_log += "Incorrect Status: " + res.status + "\n"
                error_flag = true
            }
            else
                api_log += "status: " + res.status + "\n"

			const len = res.data.length

            if(typeof(res.data) === 'object' && len === undefined)
                api_log += "type: object\n"
            else {
                api_log += "Object-type mis-match\n"
                error_flag = true
            }
			const filter_column = ["title","message","creator","likes"]

            for(let j = 0; j < filter_column.length; j++) {
                if(!(filter_column[j] in res.data)) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                }
                else {
                    if(PostMessage_DATA[i][filter_column[j]] !== res.data[filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }

            if(!("_id" in res.data)) {
                api_log += "_id" + " is not present in object in position " + i + " of " + "PostMessage"
                api += "\n"
                error_flag = true
            }
            else {
                PostMessage_DATA[i]._id = res.data._id
            }
        }
        catch(err) {
            error_flag = true
            console.log("Error while post: PostMessage")
            console.log(err)
        }
    }

    console.log(api_log)
    if(!error_flag)
        console.log("All cases successfully passed")
    else
        ERROR = true

    if(!ERROR)
        get2_PostMessage()
    else
        console.log("TEST TERMINATED")
}

const get2_PostMessage = async () => {
	let api_log = "\n"
	let error_flag = false
	api_log += "GET posts FROM /posts" + "\n"
	try {
		const res = await SERVER.get(`/posts`)

        if(res.status !== 200) {
            api_log += "Incorrect Status: " + res.status + "\n"
            error_flag = true
        }
        else
            api_log += "status: " + res.status + "\n"

		const len = res.data.length

        if(typeof(res.data) === 'object' && len !== undefined)
            api_log += "type: array-object\n"
        else {
            api_log += "Object-type mis-match\n"
            error_flag = true
        }

		const filter_column = ["title","message","creator","likes"]

        for(let i = 0; i < len; i++) {
            for(let j = 0; j < filter_column.length; j++) {
                if(!(filter_column[j] in res.data[i])) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                }
                else {
                    if(PostMessage_DATA[i][filter_column[j]] !== res.data[i][filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }
        }
    }
    catch(err) {
        error_flag = true
        console.log("Error while get: PostMessage")
        console.log(err)
    }

    console.log(api_log)
    if(!error_flag)
        console.log("All cases successfully passed")
    else
        ERROR = true

    if(!ERROR)
        patch3_PostMessage()
    else
        console.log("TEST TERMINATED")
}


const changeAttributesvalue = (query_data) => {
    Object.keys(query_data).forEach(function (key) {
        if (typeof (query_data[key]) === 'string') {
            const randomstring = Math.random().toString(36).substring(7);
            query_data[key] = query_data[key] + randomstring
        }
        if (typeof (query_data[key]) === 'object') {
            changeAttributesvalue(query_data[key]);
        }
        if (typeof (query_data[key]) === 'array') {
            for (let i = 0; i < query_data[key].length; i++) {
                changeAttributesvalue(query_data[key][i]);
            }
        }
        if (typeof (query_data[key]) === 'number') {
            const randomnum = Math.floor(Math.random() * 10);
            query_data[key] = query_data[key] + randomnum
        }
    });
}

const updateData = (query_data) => {
    for (let i = 0; i < query_data.length; i++) {
        changeAttributesvalue(query_data[i]);
    }
}

const patch3_PostMessage = async () => {
	updateData(PostMessage_DATA)
	// console.log(PostMessage_DATA)
	let api_log = "\n"
	let error_flag = false
	api_log += "UPDATE posts FROM /posts" + "\n"
	const length = PostMessage_DATA.length
	for(let i = 0; i < length; i++) {
		api_log += "CASE " + (i + 1) + ":\n"
		try {
			const id = PostMessage_DATA[i]["_id"]
			const res = await SERVER.delete(`/posts/${id}`, PostMessage_DATA[i])

            if(res.status !== 200) {
                api_log += "Incorrect Status: " + res.status + "\n"
                error_flag = true
            }
            else
                api_log += "status: " + res.status + "\n"

			const len = res.data.length

            if(typeof(res.data) === 'null' && len === undefined)
                api_log += "type: object\n"
            else {
                api_log += "Object-type mis-match\n"
                error_flag = true
            }
			const filter_column = []

            for(let j = 0; j < filter_column.length; j++) {
                if(!(filter_column[j] in res.data)) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                }
                else {
                    if(PostMessage_DATA[i][filter_column[j]] !== res.data[filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }

        }
        catch(err) {
            error_flag = true
            console.log("Error while patch: PostMessage")
            console.log(err)
        }
    }

    console.log(api_log)
    if(!error_flag)
        console.log("All cases successfully passed")
    else
        ERROR = true

    if(!ERROR)
        delete4_PostMessage()
    else
        console.log("TEST TERMINATED")
}

const delete4_PostMessage = async () => {
	let api_log = "\n"
	let error_flag = false
	api_log += "DELETE posts FROM /posts" + "\n"
	const length = PostMessage_DATA.length
	for(let i = 0; i < length; i++) {
		api_log += "CASE " + (i + 1) + ":\n"
		try {
			const id = PostMessage_DATA[i]["_id"]
			const res = await SERVER.delete(`/posts/${id}`)

            if(res.status >= 200 && res.status <= 299) {
                api_log += "status: " + res.status + "\n"
            }
            else {
                error_flag = true
            }

        }
        catch(err) {
            error_flag = true
            console.log("Error while delete: PostMessage")
            console.log(err)
        }
    }

    console.log(api_log)
    if(!error_flag)
        console.log("All cases successfully passed")
    else
        ERROR = true
}

// ///////////////////////
// END TESTS
// ///////////////////////

before()