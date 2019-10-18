const assert = require('assert');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');
const { list } = require('../contributors/index');
//first time

describe('unit testing the base route', () => {
  it('should return Ok status', () =>
    request(app)
      .get('/')
      .then(res => {
        assert.equal(res.status, 200);
      }));
  it('should return type array', () => {
    expect(list).to.be.an('array');
  });
});
