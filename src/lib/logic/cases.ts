export const allCases = {
	camel: 'camelCase',
	pascal: 'PascalCase',
	title: 'Title Case',
	snake: 'snake_case',
	kebab: 'kebab-case',
	lower: 'lowercase',
	upper: 'UPPERCASE',
	constant: 'CONSTANT_CASE'
};

export const cases = [
	{ caseName: '', case: 'Select one' },
	...Object.keys(allCases).map((caseName) => ({
		caseName,
		case: allCases[caseName]
	}))
];
