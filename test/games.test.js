"use strict";

const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const { describe } = mocha;
const expect = chai.expect;

const Game = require('../models/game');

const game_properties = [
    'genre',
    'imgURL',
    'subgenre',
    'title',
    'pid',
    'rating',
    'rCount'
];

// I made this one, safe to change or delete as needed
const known_game_id = '5d1e1bf815d1106d54fd0af4';

chai.use(chaiHttp);
chai.should();  // todo using this or just expect?
describe("Testing game Routes/Controller", () => {
    describe("GET /*", () => {
        // TODO timeout for below. Too many instances in db?
        // it("should get all game instances", (done) => {
        //     chai.request(app)
        //         .get('/games/list')
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.be.a('array').lengthOf.greaterThan(0);
        //             done();
        //         });
        // });

        it("should get a single game instance", (done) => {
            chai.request(app)
                .get(`/games/${known_game_id}/detail`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    game_properties.forEach(prop => {
                        //expect(res.body).haveOwnProperty(prop);
                        expect(res.body).have.property(prop);
                    });
                    done();
                });
        });

        it("should not get a single game instance", (done) => {
            const id = '5d1792f46c6634681776fda5';  // incorrect _id
            chai.request(app)
                .get(`/games/${id}/detail`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});