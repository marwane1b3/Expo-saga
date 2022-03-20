import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
    makeSelectData,
    makeSelectError,
    makeSelectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getEndpointCallAction } from './actions';

const key = 'appContainer';

const stateSelector = createStructuredSelector({
    error: makeSelectError,
    loading: makeSelectLoading,
    user: makeSelectData,
});
const AppContainer = () => {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });
    const dispatch = useDispatch()
    const { error, loading, user } = useSelector(stateSelector);

    useEffect(() => {
        dispatch(getEndpointCallAction())
    }, [])
    return (
        <View style={styles.container}>
            {user && (<Text> {user.activity}</Text>)}
        </View>
    )
}

export default AppContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
