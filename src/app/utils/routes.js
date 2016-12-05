import App from 'app/components/App';
import { Login } from 'app/components/modules';

export default [
	{
		component: App,
		childRoutes: [
			{
				component: Login,
				path: '/',
			},
		],
	},
];
