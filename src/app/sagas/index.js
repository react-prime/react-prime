import { authSagas } from 'app/sagas/auth';

export default function* sagas() {
	yield [
		...authSagas,
	];
}
