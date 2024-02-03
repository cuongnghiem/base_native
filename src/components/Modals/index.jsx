import React from 'react'
import {Alert, View} from 'react-native'
import ReactNativeModal from 'react-native-modal'
import {ModalIds} from '../../configs/NavId'
import {useSelector} from 'react-redux'

const modals = {}

const Modal = () => {
    const {modalId, modalProps} = useSelector(state => state.modalReducer)
    const ModalComponent = modals[modalId]

    return (
        <ReactNativeModal
            style={{margin: 0, justifyContent: 'flex-end'}}
            testID={'modal'}
            isVisible={Boolean(modalId)}
            swipeDirection={['up', 'left', 'right', 'down']}
        >
            <View style={{flex: 1, backgroundColor: 'white'}}>
                {modalId ? <ModalComponent {...modalProps} /> : null}
            </View>
        </ReactNativeModal>
    )
}

export default Modal
