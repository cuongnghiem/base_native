import React from 'react'
import {ActionSheetIOS, Image, Pressable, StyleSheet, View} from 'react-native'
import {chooseFromLibrary, takePhoto} from '../utils/photoFunc'
import {colors} from '../configs/Color'
import EditIcon from '../assets/icons/edit_icon.svg'
import AvatarIcon from '../assets/icons/avatar_icon.svg'

const AvatarUpload = ({setImageUri, setImageType, imageUri,styles}) => {
    const hanldeUploadAvatar = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Photos', 'Camera', 'Cancel'],
                userInterfaceStyle: 'light',
                cancelButtonIndex: 2,
                cancelButtonTintColor: colors.main
            },
            index => {
                if (index === 0) chooseFromLibrary(setImageUri, setImageType)
                if (index === 1) takePhoto(setImageUri, setImageType)
            }
        )
    }

    return (
        <View style={{alignItems: 'center',...styles}}>
            <Pressable style={stylesSheet.avatar} onPress={hanldeUploadAvatar}>
                {imageUri ? (
                    <Image
                        style={{width: '100%', height: '100%', borderRadius: 100}}
                        source={{uri: imageUri}}
                        resizeMode='cover'
                    />
                ) : (
                    <View style={stylesSheet.boxAvatar}>
                        <View style={{position: 'absolute', bottom: 0}}>
                            <AvatarIcon width={100} height={100} />
                        </View>
                    </View>
                )}
                <View style={{position: 'absolute', bottom: 5, right: 15}}>
                    <EditIcon height={25} width={25} style={{backgroundColor: '#fff'}} />
                </View>
            </Pressable>
        </View>
    )
}

const stylesSheet = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        backgroundColor: '#eee',
        borderRadius: 100
    },
    boxAvatar: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    }
})

export default AvatarUpload
