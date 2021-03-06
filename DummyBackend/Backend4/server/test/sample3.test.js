import axios from 'axios'

const SERVER = axios.create({baseURL: "http://localhost:5000"})

const PostMessage_DATA = [
    {
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
    }
    catch(err) {
        console.log("before() function failed")
        // console.log(err)
    }
}

let ERROR = false

const postPostMessage = async () => {
    console.log("POST description")
    const len = PostMessage_DATA.length
    for(let i = 0; i < len; i++) {
        try {
            const res = await SERVER.post(`/posts`, PostMessage_DATA[i])
            console.log(res.data)
            // if(expect(res.data).to.have.status(200)) {
            //     // console.log(res.data)
            //     expect(res.data).to.be.a('array')
            //     const len = res.data.length
            //     expect(res.data).to.equal(len)
            //     for(let j = 0; j < len; j++) {
            //         expect(res.data[j]).to.have.property("title", PostMessage_DATA[j].title)
            //         expect(res.data[j]).to.have.property("message", PostMessage_DATA[j].message)
            //         expect(res.data[j]).to.have.property("creator", PostMessage_DATA[j].creator)
            //         expect(res.data[j]).to.have.property("likes", PostMessage_DATA[j].likes)
            //     }
            // }
            // else if(expect(res.data).to.have.status(409)) {

            // }
        }
        catch(err) {
            console.log("Error while post: PostMessage")
            console.log(err)
        }
    }
}


// console.log(res.method)
// console.log(res.path)
// console.log(res._ended)
// console.log(res.aborted)
// console.log(res.host)

const getPostMessage = async () => {
    let api_log = "\n"
    let error_flag = false
    api_log += "GET description\n"
    try {
        const res = await SERVER.get(`/posts`)

        if(res.status !== 200) {
            api_log += "Incorrect Status:" + res.status + "\n"
            error_flag = true
        }
        api_log += "status: " + res.status + "\n"
        
        const len = res.data.length

        if(typeof(res.data) === 'object' && len !== undefined)
            api_log += "type: array-object\n"
        else {
            api_log += "Object-type mis-match\n"
            error_flag = true
        }
        
        if(len !== undefined) {
            api_log += "length: " + len + "\n"
            if(len !== PostMessage_DATA.length) {
                api_log += "Length Does not match\n"
                error_flag = true
            }
        }
        else {
            api_log += "Length is undefined\n"
            error_flag = true
        }
        
        for(let i = 0; i < len; i++) {
            if(!("_id" in res.data[i])) {
                api_log += "_id" + " is not present in object in position " + i + " of " + "PostMessage"
                api += "\n"
                error_flag = true
            }
            else {
                PostMessage_DATA[i]._id = res.data[i]._id
            }

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

        if(error_flag) {
            ERROR = true
            throw err
        }
    }
    catch(err) {
        api_log += "Error while get: PostMessage\n"
        api_log += err
        api_log += "\n"
    }

    console.log(api_log)
    if(!error_flag)
        console.log("%cAll cases successfully passed", "color: green")
}

// const starterPromise = Promise.resolve(null);

// const asyncTasks = [
//     {task: before},
//     {task: postPostMessage},
//     {task: getPostMessage},
// ]


setTimeout(() => {
    before()
}, 2000)
setTimeout(() => {
    postPostMessage()
}, 4000)
setTimeout(() => {
    getPostMessage()
}, 6000)



// const apiEndpoints = ["first", "second", "third"];

// const apiCall = endpoint => {
//     new Promise(resolve => setTimeout(resolve, 1000))
//     return endpoint
// }

// const reduceApiEndpoints = async (previous, endpoint) => {
//     const a = await previous;
//     console.log(a)
//     return apiCall(endpoint);
//   };
  
// const sequential = await apiEndpoints.reduce(reduceApiEndpoints, Promise.resolve(null));


// const sequentialExecuteAsyncFun = (prom, todo) => {
//     await prom.task
//     return todo
// }

// await asyncTasks.reduce(
//     sequentialExecuteAsyncFun
// )