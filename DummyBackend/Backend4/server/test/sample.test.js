import chai from 'chai'
import chaiHttp from 'chai-http'
import mongoose from 'mongoose';

import server from '../index.js'
import PostMessage from '../models/postMessage.js'

// //clean up the database before and after each test
// before((done) => { 
//     PostMessage.deleteMany({}, function(err) {})
//     done()
// });

// after(async (done) => {
//     PostMessage.deleteMany({}, function(err) {})
//     await mongoose.disconnect()
// });

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

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

// describe('POST /posts', () => {

//     const len = posts.length
//     for(let i = 0; i < len; i++) {
//         it('Test ' + (i + 1), async () => {
//             chai.request(server)
//                 .post('/posts')
//                 .send(posts[i])
//                 .end((err, res) => {
//                     if(err) console.log(err)
//                     else {
//                         if(expect(res.body).to.have.status(200)) {
//                             console.log(res.body)
//                             expect(res.body).to.be.a('array')
//                             const len = res.body.length
//                             expect(res.body).to.equal(len)
//                             for(let j = 0; j < len; j++) {
//                                 expect(res.body[j]).to.have.property("title", posts[j].title)
//                                 expect(res.body[j]).to.have.property("message", posts[j].message)
//                                 expect(res.body[j]).to.have.property("creator", posts[j].creator)
//                                 expect(res.body[j]).to.have.property("likes", posts[j].likes)
//                             }
//                         }
//                         else if(expect(res.body).to.have.status(409)) {

//                         }
//                     }
//                 })
//         })
//     }

// })

// describe('GET /posts', () => {

//     it('Test 1', (done) => {
//         chai.request(server)
//             .get('/posts')
//             .end((err, res) => {
//                     console.log(res.body)
//                     expect(res.body).to.have.status(200)
//                     expect(res.body).to.be.a('array')
//                     const len = res.body.length
//                     expect(res.body).to.equal(4)
//                     for(let i = 0; i < len; i++) {
//                         expect(res.body[i]).to.have.property("title", posts[i].title)
//                         expect(res.body[i]).to.have.property("message", posts[i].message)
//                         expect(res.body[i]).to.have.property("creator", posts[i].creator)
//                         expect(res.body[i]).to.have.property("likes", posts[i].likes)
//                     }
//                     done()
//                     if(err) console.log(err)
//             })
//     })

// })