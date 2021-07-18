'use strict'

const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

const expect = chai.expect

module.exports = { chai, expect }
