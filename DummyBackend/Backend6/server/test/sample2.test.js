import axios from 'axios'
import { expect } from 'chai'
import mongoose from 'mongoose'

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

//clean up the database before and after each test
// before(async () => { 
//     await PostMessage.deleteMany({}, function(err) {})
// });

// after(async (done) => {
//     PostMessage.deleteMany({}, function(err) {})
// });

// beforeEach((done) => {
//     // Drop the collection
//     await mongoose.collection('PostMessages').drop(function(){
//         done();
//     });
// });

// describe('POST /posts', () => {

//     const len = posts.length
//     for(let i = 0; i < len; i++) {
//         it('Test ' + (i + 1), async () => {
//             try {
//                 const res = await SERVER.post(`/posts`, posts[i])
//                 // console.log(res.data)
//                 if(expect(res.data).to.have.status(200)) {
//                     // console.log(res.data)
//                     expect(res.data).to.be.a('array')
//                     const len = res.data.length
//                     expect(res.data).to.equal(len)
//                     for(let j = 0; j < len; j++) {
//                         expect(res.data[j]).to.have.property("title", posts[j].title)
//                         expect(res.data[j]).to.have.property("message", posts[j].message)
//                         expect(res.data[j]).to.have.property("creator", posts[j].creator)
//                         expect(res.data[j]).to.have.property("likes", posts[j].likes)
//                     }
//                 }
//                 else if(expect(res.data).to.have.status(409)) {

//                 }
//             }
//             catch(err) {
//                 console.log(err)
//             }
//         })
//     }
// })


// describe('GET /posts', () => {

//     it('Test 1', async () => {
//         try {
//             const res = await SERVER.get(`/posts`)
//             // console.log(res.data)
//             expect(res.data).to.have.status(200)
//             expect(res.data).to.be.a('array')
//             const len = res.data.length
//             expect(res.data).to.equal(4)
//             for(let i = 0; i < len; i++) {
//                 expect(res.data[i]).to.have.property("title", posts[i].title)
//                 expect(res.data[i]).to.have.property("message", posts[i].message)
//                 expect(res.data[i]).to.have.property("creator", posts[i].creator)
//                 expect(res.data[i]).to.have.property("likes", posts[i].likes)
//             }
//         }
//         catch(err) {
//             console.log(err)
//         }
//     })

// })