

import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_ENDPOINT_CALL_ACTION } from './constants';
import { getEndpointCallActionSuccess, getEndpointCallActionFail } from './actions';
function* getEndPointGenerator() {
    try {

        console.log('inside saga');


        const reponse = yield call(async () => {
            const res = await fetch(
                'https://www.boredapi.com/api/activity',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then((response) => response.json())
                .then((body) => {
                    return body
                })

            return res;
        })
        console.log('@@response :: ', reponse);

        if (reponse) {
            yield put(getEndpointCallActionSuccess(reponse))
        }

    } catch (error) {
        console.log('@@error :: ', error);

    }
}

export default function* getEndpointCallEntry() {

    yield takeLatest(GET_ENDPOINT_CALL_ACTION, getEndPointGenerator);



}