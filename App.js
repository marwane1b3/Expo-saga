import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './src/providers/AppPorivder';
import AppContainer from './src/containers/AppContainer'
export default function App() {
    return (
        <AppProvider>
            <AppContainer />
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
