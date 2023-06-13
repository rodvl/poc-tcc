export const prettierContent = 
`module.exports = {
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    tabWidth: 2,
    semi: true,
    arrowParens: 'avoid'
};  
`;

export const eslintContent = 
`module.exports = {
  \\"env\\": {
    \\"browser\\": true,
    \\"es2021\\": true
  },
  \\"extends\\": \\"eslint:recommended\\",
  \\"parserOptions\\": {
    \\"ecmaVersion\\": \\"latest\\",
    \\"sourceType\\": \\"module\\"
  },
}
`;

export const typescriptContent = 
`{
  \\"compilerOptions\\": {
    \\"target\\": \\"es5\\",                          
    \\"module\\": \\"commonjs\\",                    
    \\"lib\\": [\\"es6\\"],                     
    \\"allowJs\\": true,
    \\"outDir\\": \\"build\\",                          
    \\"rootDir\\": \\"src\\",
    \\"strict\\": true,         
    \\"noImplicitAny\\": true,
    \\"esModuleInterop\\": true,
    \\"resolveJsonModule\\": true
  }
}`;

export const reduxContent = 
`import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to dispatch, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
`;

export const jestContent = 
`/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

module.exports = config;
`;

export const knexContent = (client) =>
`const knex = require('knex')({
  client: '${client || 'CLIENT_NAME'}',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
`;

export const sequelizeContent = 
`const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
`;