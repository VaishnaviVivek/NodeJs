let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../');

const faker={name:"abc",email:"abc@gmail.com"};
//Our parent block
describe('Podcast', () => {
 describe('/GET media', () => {
     it('it should GET all the podcast', (done) => {
     chai.request(server)
       .get('/media')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             (res.body.podcasts.length).should.be.eql(1);
             done();
          });
       });
  });
describe('/GET message', () => {
     it('it should GET a message', (done) => {
     chai.request(server)
         .get('/message')
         .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               done();
            });
         });
     });

     describe('/POST API test', function () {
 
      // it('Check the api without parameters . failure case', function (done) {
      //   chai.request(server).post('/')
      // //   .send({})
      //   .end((err, res) => {
      //     should.not.exist(err);
      //     res.should.have.status(401);
      //     res.body.should.be.a('object');
      //     res.body.should.have.property('message');
      //     res.body.should.have.property('message').eql('Mandatory params are missing!');
      //     done();
      //   })
      // });
     
      it('Check the API with valid parameters. Success', function (done) { 
        chai.request(server).post('/')
        .send({name:faker.name,email:faker.email})
        .end((err, res) => { 
          should.not.exist(err);
          res.should.have.status(200);
          res.body.should.be.a('object');
         //  res.body.should.have.property('message');
         //  res.body.should.have.property('message').eql('data saved successfully');
          done();
        })
      });
     
    });
     

   //  describe('/Get API test', function () {
 
   //    it('Check the api without user id parameter', function (done) {
   //      chai.request(server).get('/').end((err, res) => {
   //        should.not.exist(err);
   //        res.should.have.status(401);
   //        res.body.should.be.a('object');
   //        res.body.should.have.property('message');
   //       //  res.body.should.have.property('message').eql('User Id parameter is missing');
   //        done();
   //      })
   //    });
     
      
   //  });

  //  describe('/GET Error message', () => {
  //     it('it should GET a err message', (done) => {
  //     chai.request(server)
  //         .get('/')
  //         .end((err, res) => {
  //           should.not.exist(err);
  //           // should.exist(err);
  //               (res).should.have.status(404);
  //              //  (err.body).should.be.a('object');
  //               done();
  //            });
  //         });
      
  //     });
     
  describe('/Get API test', function () {
 
    it('Check the api without user id parameter', function (done) {
      chai.request(server).get('/').end((err, res) => {
        should.not.exist(err);
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        // res.body.should.have.property('message').eql('User Id parameter is missing');
        done();
      })
    });
  });
});