import {View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Pressable} from 'react-native'
import {colors} from '../configs/Color'
import HomeIcon from '../assets/icons/home_icon.svg'
import MediaIcon from '../assets/icons/media_icon.svg'
import ProfileIcon from '../assets/icons/profile_icon.svg'
import MediaIconActive from '../assets/icons/media_icon_active.svg'
import ProfileIconActive from '../assets/icons/profile_icon_active.svg'
import SearchIcon from '../assets/icons/search_icon.svg'
import HomeIconActive from '../assets/icons/home_icon_active.svg'
import SearchIconActive from '../assets/icons/search_icon_active.svg'
import GridIcon from '../assets/tabbar/grid_icon.svg'
import PlayIcon from '../assets/tabbar/play_icon.svg'
import PlusBookIcon from '../assets/tabbar/plus_book_icon.svg'
import VideoIcon from '../assets/tabbar/video_icon.svg'
import NavId, {ModalIds} from '../configs/NavId'
import {Fragment, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {openModal} from '../store/modal/slice'

const TabBarIcon = ({name, focused}) => {
    switch (name) {
        case NavId.feed:
            return focused ? <HomeIconActive width={25} height={25} /> : <HomeIcon width={25} height={25} />
        case NavId.search:
            return focused ? (
                <SearchIconActive width={25} height={25} />
            ) : (
                <SearchIcon width={25} height={25} />
            )
        case NavId.shorts:
            return focused ? <MediaIconActive width={25} height={25} /> : <MediaIcon width={25} height={25} />
        case NavId.profile:
            return focused ? (
                <ProfileIconActive width={25} height={25} />
            ) : (
                <ProfileIcon width={25} height={25} />
            )
        default:
            return null
    }
}

function TabBar({state, descriptors, navigation}) {
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setShowMenu(false)
    }, [state.index])

    const hanldeOpenModal = modalId => {
        dispatch(openModal({modalId}))
        setShowMenu(false)
    }

    return (
        <Fragment>
            {showMenu ? (
                <View style={styles.menu}>
                    <View style={styles.menuList}>
                        <TouchableOpacity
                            onPress={hanldeOpenModal.bind(this, ModalIds.createPost)}
                            style={{...styles.menuItem, marginBottom: 15}}
                        >
                            <Text style={{fontSize: 17, width: 80, fontWeight: '500'}}>Post</Text>
                            <GridIcon width={18} height={18} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.menuItem, marginBottom: 15}}>
                            <Text style={{fontSize: 17, width: 80, fontWeight: '500'}}>Story</Text>
                            <PlusBookIcon width={24} height={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.menuItem, marginBottom: 15}}>
                            <Text style={{fontSize: 17, width: 80, fontWeight: '500'}}>Shorts</Text>
                            <VideoIcon width={24} height={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Text style={{fontSize: 17, width: 80, fontWeight: '500'}}>Live</Text>
                            <PlayIcon width={24} height={24} />
                        </TouchableOpacity>
                        <View style={styles.menuRow} />
                    </View>
                    <Pressable onPress={() => setShowMenu(false)} style={styles.menuBlur}></Pressable>
                </View>
            ) : null}
            <View
                style={{
                    ...styles.tabbar,
                    backgroundColor: state.index === 2 ? '#000' : '#fff',
                    borderWidth: state.index === 2 ? 0 : 1,
                    borderTopRightRadius: state.index === 2 ? 0 : 15,
                    borderTopLeftRadius: state.index === 2 ? 0 : 15
                }}
            >
                <View style={styles.postBtnWap}>
                    <TouchableOpacity style={styles.postBtn} onPress={() => setShowMenu(!showMenu)}>
                        <Text style={{color: 'white', fontSize: 22}}>+</Text>
                    </TouchableOpacity>
                </View>
                {state.routes.map((route, index) => {
                    let options
                    if (route.key) options = descriptors[route.key]?.options
                    const label =
                        options?.tabBarLabel !== undefined
                            ? options?.tabBarLabel
                            : options?.title !== undefined
                            ? options?.title
                            : route.name

                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params)
                        }
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key
                        })
                    }

                    return (
                        <TouchableOpacity
                            accessibilityRole='button'
                            accessibilityState={isFocused ? {selected: true} : {}}
                            accessibilityLabel={options?.tabBarAccessibilityLabel}
                            testID={options?.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            key={index}
                            style={{
                                ...styles.routerItem,
                                paddingRight: route.name == NavId.search ? 50 : 0,
                                paddingLeft: route.name == NavId.shorts ? 50 : 0
                            }}
                        >
                            <TabBarIcon focused={isFocused} name={route.name} />
                            <Text
                                style={{
                                    color: isFocused ? colors.main : colors.text.gray,
                                    textTransform: 'capitalize',
                                    fontSize: 11
                                }}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#eee',
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    routerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    postBtnWap: {
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        zIndex: 100,
        bottom: 15
    },
    postBtn: {
        width: 45,
        height: 45,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: colors.main
    },
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 70,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    menuBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    menuList: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 25,
        marginBottom: 45,
        alignItems: 'center',
        zIndex: 100
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuRow: {
        borderRadius: 5,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        bottom: -14
    }
})

export default TabBar
