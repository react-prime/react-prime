import App from 'app/components/App';
import Login from 'app/components/Login';

const getRoutes = () => (
	[
		{
			component: App,
			childRoutes: [
				{
					component: Login,
					path: '/',
				},
			],
		},
	]
);

export default getRoutes;
