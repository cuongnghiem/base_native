import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
        <BaseToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
        <ErrorToast
            {...props}
            style={{top:10,borderLeftColor:'red',width:'90%'}}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),
}

export const errorMessage = (title = 'Error', msg = 'An error occurred!!!') => {
    Toast.show({
        type: 'error',
        text1: title,
        text2: msg
    })
}
