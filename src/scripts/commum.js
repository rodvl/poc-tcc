import {prettierContent, typescriptContent, eslintContent, reduxContent, jestContent, knexContent, sequelizeContent, expressServer, babelContent, indexHtml, reactApp, reactIndex} from './files';
export const createFolder = (path, projectName) => `
    cd ${path} &&
    mkdir ${projectName} &&
    cd ${projectName}
    mkdir src`

export const npmInit = () => `npm init -y`

export const installDependencies = (dependencies) => {
    const deps = dependencies.map(e => e.name).join(' ');
    return `npm install ${deps} --loglevel=error`;
}

export const atomicPattern = () => `&& mkdir src/pages &&
    mkdir src/components &&
    mkdir src/components/atoms &&
    mkdir src/components/molecules &&
    mkdir src/components/organisms &&
    mkdir src/components/quarks`;

export const csrPattern = () => `&& mkdir src/controller &&
    mkdir src/service &&
    mkdir src/repository`;

export const createPrettierFile = () => `&& echo "${prettierContent}" > prettier.config.js`;

export const createTypescriptFile = () => `&& echo "${typescriptContent}" > tsconfig.json`;

export const createEslintFile = () => `&& echo "${eslintContent}" > eslintrc.js`;

export const configRedux = () => `&& mkdir src/redux && echo "${reduxContent}" > src/redux/exemple.js`;

export const configJest = () => `&& echo "${jestContent}" > jest.config.js`;

export const configKnex = (client) => `&& echo "${knexContent(client)}" > knexfile.js`;

export const configSequelize = () => `&& echo "${sequelizeContent}" > sequelize.js`;

export const inicializeExpress = () => `&& echo "${expressServer}" > src/server.js`;

export const configBabel = () => `&& npm i @babel/cli @babel/core @babel/node @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev && echo "${babelContent}" > .babelrc`

export const inicializeReact = () => `&& mkdir public && echo "${indexHtml}" > public/index.html && echo "${reactApp}" > src/App.js && echo "${reactIndex}" > src/index.js && npm install @babel/plugin-proposal-private-property-in-object --save-dev`


