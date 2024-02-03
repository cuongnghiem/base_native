import {Provider} from 'react-redux'
import store from './src/store'
import Routers from './src/routers'
import {LogBox} from 'react-native'
import './GlobalFont'
import ActivityIndicator from './src/components/GlobalComponent/ActivityIndicatorApp'
import Toast from 'react-native-toast-message'
import {toastConfig} from './src/utils/toast'
import Modal from './src/components/Modals'

LogBox.ignoreLogs(['Warning: ...'])
LogBox.ignoreAllLogs()
export default function App() {
    return (
        <Provider store={store}>
            <Routers />
            <ActivityIndicator
                ref={c => {
                    if (!ActivityIndicator.instance) ActivityIndicator.instance = c
                }}
            />
            <Toast config={toastConfig} />
            <Modal />
        </Provider>
    )
}
