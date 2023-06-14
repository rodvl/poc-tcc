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
        value: 'react',
        dependencyName: 'react@18',
        coDependency: [
            {
                required: true,
                name: 'react-dom@18'
            },
            {
                required: true,
                name: 'react-scripts'
            }]
    }
];
export const BackendFrameworks = [
    {
        label: 'Express Versão 4',
        value: 'express',
        dependencyName: 'express@4',
        coDependency: []
    }
];

export const frontPattern = [
    {
        label: 'Atomic Design + Pages',
        value: 'atomic',
    }
]

export const backPattern = [
    {
        label: 'Controller, service, repository',
        value: 'csr',
    }
]

export const databaseLibs = [
    {
        label: 'Knex',
        value: 'knex',
        dependencyName: 'knex',
        availableDb: [
            {
                label: 'PostgreSQL, CockroachDB or Amazon Redshift',
                value: 'pg'
            },
            {
                label: 'MySQL or MariaDB',
                value: 'mysql'
            },
            {
                label: 'SQLite3',
                value: 'sqlite3'
            },
            {
                label: 'oracleDB',
                value: 'oracledb'
            }
        ]
    },
    {
        label: 'Sequelize',
        value: 'sequelize',
        dependencyName: 'sequelize',
        availableDb: [
            {
                label: 'PostgreSQL, CockroachDB or Amazon Redshift',
                value: 'pg'
            },
            {
                label: 'MySQL',
                value: 'mysql2'
            },
            {
                label: 'MariaDB',
                value: 'mariadb'
            },
            {
                label: 'SQLite3',
                value: 'sqlite3'
            },
            {
                label: 'oracleDB',
                value: 'oracledb'
            }
        ]
    }
];


export const StyleLibs = [
    {
        label: 'styled-components',
        value: 'styled-components',
        dependencyName: 'styled-components@5.3.10'
    },
    {
        label: 'Emotion',
        value: '@emotion/react',
        dependencyName: '@emotion/react'
    },
    {
        label: 'tailwindcss',
        value: 'tailwindcss',
        dependencyName: 'tailwindcss'
    }
];

export const ComponentLibs = [
    {
        label: 'Material-UI',
        value: '@mui/material',
        dependencyName: '@mui/material'
    },
    {
        label: 'Ant Design',
        value: 'antd',
        dependencyName: 'antd'
    }
];

export const HTTPLibs = [
    {
        label: 'Axios',
        value: 'axios',
        dependencyName: 'axios'
    },
    {
        label: 'GOT',
        value: 'got',
        dependencyName: 'got'
    },
    {
        label: 'Node-Fetch',
        value: 'node-fetch',
        dependencyName: 'node-fetch'
    }
];

export const IconLibs = [
    {
        label: 'Material Icons',
        value: '@mui/icons-material',
        dependencyName: '@mui/icons-material'
    },
    {
        label: 'Feather Icons',
        value: 'react-feather',
        dependencyName: 'react-feather'
    }
]

export const libNames = {
    eslint: 'eslint',
    prettier: 'prettier',
    typescript: 'typescript'
}
