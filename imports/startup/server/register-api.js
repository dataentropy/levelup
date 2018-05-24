import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';
import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '../../api/goals/resolvers';
import ProductSchema from '../../api/product/Product.graphql';
import ProductResolvers from '../../api/product/resolvers';

//DSFSDF

const typeDefs = [
  ResolutionsSchema,
  UsersSchema,
  GoalsSchema,
  ProductSchema,
];

const resolvers = merge(
  ResolutionsResolvers,
  UsersResolvers,
  GoalsResolvers,
  ProductResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
