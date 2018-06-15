const { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    mew: String
  }
`);

const root = { mew: () => 'Hello world!' };

graphql(schema, '{ mew }', root).then((response) => {
  console.log(response);
  /*
  {data: { mew: 'Hello world!'}}
  */
});