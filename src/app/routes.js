import App from 'app/components/App';
import { Test } from 'app/components/modules';

export default [
	{
		component: App,
		childRoutes: [
			{
				component: Test,
				path: '/',
			},
		],
	},
];
