import React from 'react'
import {
  View,
  ActivityIndicator as NativeActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native'
import { colors } from '../../configs/Color'

class ActivityIndicator extends React.Component {
  static instance = null

  static defaultProps = {
    size: 'small',
    color: colors.main,
  }

  static show(option) {
    if (!this.instance) return
    const backgroundColor =
      option && option.backgroundColor
        ? option.backgroundColor
        : 'rgba(255, 255, 255, 0.5)'
    this.instance.setState({ hidden: false, backgroundColor })
  }

  static hide() {
    if (!this.instance) return
    this.instance.setState({ hidden: true })
  }

  state = {
    hidden: true,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }

  render() {
    if (this.state.hidden) return <View />

    return (
      <View
        style={[
          styles.wrapper,
          { backgroundColor: this.state.backgroundColor },
        ]}
      >
        <NativeActivityIndicator {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 100000,
  },
})

export default ActivityIndicator
