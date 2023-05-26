export const pages = {
    HOME: 0,
    ABOUT: 1,
    BASE_INFO: 2,
    FRONT_FIRST: 3,
    BACK_FRIST: 4,
    DEPENDENCIES: 5,
    BUILDING: 6,
    FINISHED: 7,
    ERROR: 8
};

export const FrontendFrameworks = [
    {
        label: 'React Versão 18',
        value: 'react@18',
        dependencyName: 'react',
        coDependency: [{name: 'codep', required: true}]
    }
];
export const BackendFrameworks = [
    {
        label: 'Express Versão 18',
        value: 'express@4',
        dependencyName: 'express',
        coDependency: []
    }
];

export const libNames = {
    eslint: 'eslint',
    prettier: 'prettier',
    typescript: 'typescript'
}
