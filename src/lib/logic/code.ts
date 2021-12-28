// Snake To ...
export const snake = {
	camel: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return snake.split('_').map((each, index) => {
            if (index !== 0) {
                return capitalize(each);
            }
            return each;
        }).join('');
    `,
	pascal: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return snake.split('_').map(capitalize).join('');
    `,
	title: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return snake.split('_').map(capitalize).join(' ');
    `,
	snake: `return snake`,
	kebab: `return snake.replace('_', '-');`,
	lower: `return snake.replace('_', '').toLowerCase();`,
	upper: `return snake.replace('_', '').toUpperCase();`,
	constant: `return snake.toUpperCase();`
};

export const title = {
	camel: `
        return title.split(' ').map((each, index) => {
            if (index === 0) {
                return each.toLowerCse();
            }
            return each;
        }).join('');
    `,
	pascal: `return title.replace(' ', '');`,
	title: ` return title; `,
	snake: `return title.replace(' ', '_').toLowerCase();`,
	kebab: `return title.replace(' ', '-').toLowerCase();`,
	lower: `return title.replace(' ', '').toLowerCase();`,
	upper: `return title.replace(' ', '').toUpperCase();`,
	constant: `return title.replace(' ', '_').toUpperCase();`
};

export const kebab = {
	camel: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
            
        return kebab.split('-').map((each, index) => {
            if (index !== 0) {
                return capitalize(each)
            }
            return each;
        }).join('');
    `,
	pascal: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return kebab.split('-').map(capitalize).join('');
    `,
	title: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return kebab.split('-').map(capitalize).join();
    `,
	snake: `return kebab.replace('-', '_');`,
	kebab: `return kebab;`,
	lower: `return kebab.replace('-', '').toLowerCase();`,
	upper: `return kebab.replace('-', '').toUpperCase();`,
	constant: `return kebab.replace('-', '_').toUpperCase();`
};

export const constant = {
	camel: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
            
        return constant.toLowerCase().split('_').map((each, index) => {
            if (index !== 0) {
                return capitalize(each)
            }
            return each;
        }).join('');
    `,
	pascal: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return constant.toLowerCase().split('_').map(capitalize).join('');
    `,
	title: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return constant.toLowerCase().split('_').map(capitalize).join();
    `,
	snake: `return constant.toLowerCase();`,
	kebab: `return constant.toLowerCase().replace('_', '-');`,
	lower: `return constant.replace('_', '').toLowerCase();`,
	upper: `return constant.replace('_', '').toUpperCase();`,
	constant: `return constant;`
};

export const camel = {
	camel: `  
        return camel;
    `,
	pascal: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return capitalize(camel);
    `,
	title: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return capitalize(camel.replace(/[A-Z]/g, letter => ' ' + letter.toLowerCase()'));
    `,
	snake: `return camel.replace(/[A-Z]/g, letter => '_' + letter.toLowerCase()');`,
	kebab: `return camel.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase()');`,
	lower: `return camel.toLowerCase();`,
	upper: `return camel.toUpperCase();`,
	constant: `return camel.replace(/[A-Z]/g, letter => '_' + letter').toUpperCase();`
};

export const pascal = {
	camel: `
        const decapitalize = (str) => str.charAt(0).toLowerCase() + str.slice(1);
        return decapitalize(pascal);
    `,
	pascal: `
        return pascal;
    `,
	title: `
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        return capitalize(pascal.replace(/[A-Z]/g, letter => ' ' + letter.toLowerCase()'));
    `,
	snake: `return pascal.replace(/[A-Z]/g, letter => '_' + letter.toLowerCase()');`,
	kebab: `return pascal.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase()');`,
	lower: `return pascal.toLowerCase();`,
	upper: `return pascal.toUpperCase();`,
	constant: `return pascal.replace(/[A-Z]/g, letter => '_' + letter').toUpperCase();`
};
