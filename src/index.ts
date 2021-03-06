export {
  GraphQLUpload,
  GraphQLOptions,
  GraphQLExtension,
  Config,
  gql,
  // Errors
  ApolloError,
  toApolloError,
  SyntaxError,
  ValidationError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  // playground
  defaultPlaygroundOptions,
  PlaygroundConfig,
  PlaygroundRenderPageOptions
} from "apollo-server-core"

export * from "graphql-tools"

// ApolloServer integration.
export { ApolloServer } from "./ApolloServer"
export type { CreateHandlerOptions } from "./ApolloServer"
