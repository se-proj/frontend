import axios from 'axios'

const SERVER = axios.create({
    baseURL: "http://localhost:5000"
})

const PostMessage_DATA = [{
        title: "Hello",
        message: "Hello Everybody. Having a good day?",
        creator: "SS98",
        likes: 4
    },
    {
        title: "Bye",
        message: "Bye Everyone",
        creator: "SS98",
        likes: 1
    }
]

const filter_column = [
    "title",
    "message",
    "creator",
    "likes"
]

const before = async () => {
    try {
        const res = await SERVER.delete('/', {})
        console.log(res.data)
    } catch (err) {
        console.log("before() function failed")
        // console.log(err)
    }
}

let ERROR = false

const postPostMessage = async () => {
    let api_log = "\n"
    let error_flag = false
    api_log += "POST description" + "\n"
    const length = PostMessage_DATA.length
    for (let i = 0; i < length; i++) {
        api_log += "CASE " + i + ":\n"
        try {
            const res = await SERVER.post(`/posts`, PostMessage_DATA[i])

            if (res.status !== 201) {
                api_log += "Incorrect Status: " + res.status + "\n"
                error_flag = true
            }
            api_log += "status: " + res.status + "\n"

            const len = res.data.length

            if (typeof (res.data) === 'object' && len === undefined)
                api_log += "type: object\n"
            else {
                api_log += "Object-type mis-match\n"
                error_flag = true
            }

            for (let j = 0; j < filter_column.length; j++) {
                if (!(filter_column[j] in res.data)) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                } else {
                    if (PostMessage_DATA[i][filter_column[j]] !== res.data[filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }
        } catch (err) {
            console.log("Error while post: PostMessage")
            console.log(err)
        }
    }

    console.log(api_log)
    if (!error_flag)
        console.log("%cAll cases successfully passed", "color: green")
}

const getPostMessages = async () => {
    let api_log = "\n"
    let error_flag = false
    api_log += "GET description" + "\n"
    try {
        const res = await SERVER.get(`/posts`)

        if (res.status !== 200) {
            api_log += "Incorrect Status:" + res.status + "\n"
            error_flag = true
        }
        api_log += "status: " + res.status + "\n"

        const len = res.data.length

        if (typeof (res.data) === 'object' && len !== undefined)
            api_log += "type: array-object\n"
        else {
            api_log += "Object-type mis-match\n"
            error_flag = true
        }

        if (len !== undefined) {
            api_log += "length: " + len + "\n"
            if (len !== PostMessage_DATA.length) {
                api_log += "Length Does not match\n"
                error_flag = true
            }
        } else {
            api_log += "Length is undefined\n"
            error_flag = true
        }

        for (let i = 0; i < len; i++) {
            if (!("_id" in res.data[i])) {
                api_log += "_id" + " is not present in object in position " + i + " of " + "PostMessage"
                api += "\n"
                error_flag = true
            } else {
                PostMessage_DATA[i]._id = res.data[i]._id
            }

            for (let j = 0; j < filter_column.length; j++) {
                if (!(filter_column[j] in res.data[i])) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                } else {
                    if (PostMessage_DATA[i][filter_column[j]] !== res.data[i][filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }
        }

        if (error_flag) {
            ERROR = true
            throw err
        }
    } catch (err) {
        api_log += "Error while get: PostMessage\n"
        api_log += err
        api_log += "\n"
    }

    console.log(api_log)
    if (!error_flag) {
        console.log("%cAll cases successfully passed", "color: green")
    }
        
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
// updateData(PostMessage_DATA);
// console.log(PostMessage_DATA);
const patchPostMessage = async () => {
    updateData(PostMessage_DATA);
    console.log(PostMessage_DATA);
    let api_log = "\n"
    let error_flag = false
    api_log += "PATCH description" + "\n"
    const length = PostMessage_DATA.length
    for (let i = 0; i < length; i++) {
        api_log += "CASE " + (i + 1) + ":\n"
        try {
            const id = PostMessage_DATA[i]["_id"]
            const res = await SERVER.patch(`/posts/${id}`, PostMessage_DATA[i])

            console.log(res.status)
            if (res.status !== 200) {
                api_log += "Incorrect Status: " + res.status + "\n"
                error_flag = true
            }
            api_log += "status: " + res.status + "\n"

            const len = res.data.length

            if(typeof(res.data) === 'object' && len === undefined)
                api_log += "type: object\n"
            else {
                api_log += "Object-type mis-match\n"
                error_flag = true
            }
			const filter_column = ["title","message","creator","likes"]

            for (let j = 0; j < filter_column.length; j++) {
                if (!(filter_column[j] in res.data[0])) {
                    api_log += filter_column[j] + " is not present in object in position " + i + " of " + "PostMessage"
                    api += "\n"
                    error_flag = true
                } else {
                    if (PostMessage_DATA[i][filter_column[j]] !== res.data[0][filter_column[j]]) {
                        api_log += "Value mis-match between resultant data and actual data in "
                        api += filter_column[j] + " at position " + i + " of " + "PostMessage"
                        api += "\n"
                        error_flag = true
                    }
                }
            }
            if (error_flag) {
                ERROR = true
                throw err
            }
        } catch (err) {
            api_log += "Error while patch: PostMessage\n"
            api_log += err
            api_log += "\n"
            ERROR = true
        }
    }
    console.log(api_log)
    if (!error_flag)
        console.log("%cAll cases successfully passed", "color: green")
}






setTimeout(() => {
    before()
}, 2000)
setTimeout(() => {
    postPostMessage()
}, 4000)
setTimeout(() => {
    getPostMessages()
    
}, 6000)
setTimeout(() => {
    patchPostMessage()
}, 8000)
