import {prettierContent, typescriptContent, eslintContent, reduxContent, jestContent, knexContent, sequelizeContent} from './files';
export const createFolder = (path, projectName) => `
    cd ${path} &&
    mkdir ${projectName} &&
    cd ${projectName}
    mkdir src`

export const npmInit = () => `npm init -y`

export const installDependencies = (dependencies) => {
    const deps = dependencies.map(e => e.name).join(' ');
    return `npm install ${deps}`;
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




