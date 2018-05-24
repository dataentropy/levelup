import fs from 'fs';

import Products from './product'

import { last } from '../../../lib/Fun'

export default {
  Query: {
    products() {
      return Products.find({}).fetch();
    },
  },

  Mutation: {
    addProduct(obj, args, context) {
      const productId = Products.insert({
        name: args.name,
        description: args.description,
        price: args.price,
        category: args.category,
        images: last(args.images[0].split('\\'))
      });

      return Products.findOne(productId);
    },
  },
};
