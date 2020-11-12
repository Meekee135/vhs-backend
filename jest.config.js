module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    moduleNameMapper: {
        '^config(.*)$': '<rootDir>/config$1',
        '^database/(.*)$': '<rootDir>/database/$1',
        '^gateway/(.*)$': '<rootDir>/config/$1',
        '^services/(.*)$': '<rootDir>/services/$1',
    },
    globals: {
        'ts-jest': { tsConfig: './tsconfig.json', diagnostics: false },
    },
    transform: { '^.+\\.(t|j)s$': 'ts-jest' },
    rootDir: 'src',
    testRegex: '.spec.ts$',
    testEnvironment: 'node',
    coverageDirectory: './coverage',
    collectCoverageFrom: ['**/services/**/*.ts', '!**/*.d.ts', '!**/domain/**', '!**/__test__/**'],
    collectCoverage: true,
};
