import { testSagas } from 'sagas/test';

export default function* sagas() {
	yield [
		...testSagas,
	];
}
