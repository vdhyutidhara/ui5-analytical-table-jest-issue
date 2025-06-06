module.exports = {
	roots: ['./src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.jsx?$': 'babel-jest'
	},
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json'
		}
	},
	testEnvironment: 'jsdom',
	verbose: true,
	setupFiles: ['<rootDir>/enzyme.config.js'],
	preset: 'ts-jest/presets/js-with-ts'
};