import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';
import { SkillsModel } from '../database';

export default new GraphQLObjectType({
  name: 'Skills',
  fields: {
    languages: {
      type: new GraphQLList(GraphQLString),
      resolve: () => SkillsModel.getLanguages(),
    },
    technologies: {
      type: new GraphQLList(GraphQLString),
      resolve: () => SkillsModel.getTechnologies(),
    },
    tools: {
      type: new GraphQLList(GraphQLString),
      resolve: () => SkillsModel.getTools(),
    },
    loves: {
      type: new GraphQLList(GraphQLString),
      resolve: () => SkillsModel.getLoves(),
    },
  },
});