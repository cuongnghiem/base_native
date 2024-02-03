import ImagePicker from "react-native-image-picker"
import { uploadImage } from "../firebase/api"
import ActivityIndicator from '../components/GlobalComponent/ActivityIndicatorApp'

export const chooseFromLibrary = (setImageUri,setImageType,uploadNow = false) => {
    ImagePicker.launchImageLibrary({mediaType: 'photo'}, async response => {
        if (response.didCancel) {
            console.log('User cancelled choosing from library')
        } else if (response.error) {
            console.log('Library Error: ', response.error)
        } else {
            if(uploadNow) {
                try {
                    const url = await uploadImage(response.uri,response.type.split('/')[1])
                    setImageUri(url)
                } catch (error) {
                    console.log(error);
                }
            }else {
                setImageUri(response.uri)
                setImageType(response.type.split('/')[1])
            }
        }
    })
}

export const takePhoto = (setImageUri,setImageType) => {
    ImagePicker.launchCamera({mediaType: 'photo'}, response => {
        if (response.didCancel) {
            console.log('User cancelled taking photo')
        } else if (response.error) {
            console.log('Camera Error: ', response.error)
        } else {
            setImageUri(response.uri)
            setImageType(response.type.split('/')[1])
        }
    })
}