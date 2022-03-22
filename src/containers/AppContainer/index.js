import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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

    const loadMore = () => {
        dispatch(getEndpointCallAction())

    }
    return (
        <View style={styles.container}>
            {user && (<Text
               
            > {user.activity}</Text>)}

            <TouchableOpacity style={
                {
                    backgroundColor:"blue" ,
                    paddingHorizontal : 15 , 
                    paddingVertical : 25 , 
                    position : "absolute",
                     bottom : 100 ,
                    elevation : 2 ,
                    borderRadius : 20

                }
            } 
            onPress={loadMore}
            >
                <Text
                 style={{
                    color : "white" , 
                    letterSpacing : 0.8
                }}
                >
                    load more ...
                </Text>
            </TouchableOpacity>
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
