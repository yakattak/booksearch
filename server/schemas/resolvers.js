const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
  
    

    
  },
  Mutation: {
  }
};
  

module.exports = resolvers;