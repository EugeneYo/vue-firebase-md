const toolbar = {
	customToolbar: {
		icon: 'v-md-icon-my-icon',
		title: 'title',
		action(editor) {
			editor.insert((selected) => {
				const prefix = '**';
				const suffix = '**';
				const content = selected || '粗体';

				const test =
					'![](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg){{{width="100" height="auto"}}}';
				return {
					// text: `${prefix}${content}${suffix}`,
					text: test,
					selected: content,
				};
			});
		},
	},
	customToolbar2: {
		title: 'menu',
		icon: 'v-md-icon-code',
		menus: [
			{
				name: 'Project structure',
				text: 'Project structure',
				action(editor) {
					console.log('click menu1');
					const content = `\`\`\`
project
│   README.md
│   file001.txt
│
└───folder1
│   │   file011.txt
│   │   file012.txt
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│
└───folder2
│   file021.txt
│   file022.txt
\`\`\``;
					editor.insert(() => {
						return { text: content };
					});
				},
			},
			{
				name: 'menu2',
				text: 'menu2',
				action() {
					console.log('click menu2');
				},
			},
		],
	},
};

const getToolbar = () => {
	return { toolbar };
};

export default getToolbar;
