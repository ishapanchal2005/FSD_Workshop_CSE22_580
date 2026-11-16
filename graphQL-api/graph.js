const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        Name: String,
        Email: String,
        RollNo: Int
    }
`);
const root = {
    Name: () => {
        return 'Isha';
    },
    Email: () => {
        return 'abc@gmail.com';
    },
    RollNo: () => {
        return 20;
    }
};

const app = express();
app.use('/graphql',graphqlHTTP({
    schemma: schemma,
    rootValue: root,
    graphiql: true
}));
app.listen(4000,()=>{
    console.log('Server running at http://localhost:4000/graphql');
});
             
