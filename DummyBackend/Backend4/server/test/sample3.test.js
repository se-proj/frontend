import axios from 'axios'

import PostMessage from '../models/postMessage.js'

const SERVER = axios.create({baseURL: "http://localhost:5000"})

const posts = [
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

const postPostMessage = async () => {
    console.log("POST description")
    const len = posts.length
    for(let i = 0; i < len; i++) {
        try {
            const res = await SERVER.post(`/posts`, posts[i])
            console.log(res.data)
            // if(expect(res.data).to.have.status(200)) {
            //     // console.log(res.data)
            //     expect(res.data).to.be.a('array')
            //     const len = res.data.length
            //     expect(res.data).to.equal(len)
            //     for(let j = 0; j < len; j++) {
            //         expect(res.data[j]).to.have.property("title", posts[j].title)
            //         expect(res.data[j]).to.have.property("message", posts[j].message)
            //         expect(res.data[j]).to.have.property("creator", posts[j].creator)
            //         expect(res.data[j]).to.have.property("likes", posts[j].likes)
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
    console.log("GET description")
    try {
        const res = await SERVER.get(`/posts`)
        console.log(res.status)
        console.log(res.data)

        if(res.status !== 200)
            console.log("Not 200")
        console.log(typeof(res.data))
        if(typeof(res.data) !== 'array')
            console.log("Not array")
        
        const len = res.data.length
        if(res.data.length !== posts.length)
            console.log("Not same length")
        for(let i = 0; i < len; i++) {
            // expect(res.data[i]).to.have.property("title", posts[i].title)
            // expect(res.data[i]).to.have.property("message", posts[i].message)
            // expect(res.data[i]).to.have.property("creator", posts[i].creator)
            // expect(res.data[i]).to.have.property("likes", posts[i].likes)

        }
    }
    catch(err) {
        console.log("Error while get: PostMessage")
        console.log(err)
    }
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