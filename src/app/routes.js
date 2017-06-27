import App from 'components/App';
import Test from 'modules/Test';

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
