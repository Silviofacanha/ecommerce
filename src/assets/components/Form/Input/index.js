import React from "react"
import Responsive from "react-native-lightweight-responsive"
import { TextInput, View , StyleSheet} from "react-native"
import theme from "../../../../globals/theme"

const Input =({...props}) => {
return(
    <View style={styles.container}>
        <TextInput {...props}/>
    </View>
)
}

const styles = StyleSheet.create({
    with: "100%",
    paddingVertical: Responsive.font(18),
    paddingBottom: Responsive.font(2),
    fontSize: Responsive.font(13),
    BorderBottomWidth: Responsive.font(1),
    BorderColor: theme.colors.primary,
    marginBottom:Responsive.font(16)
})

export {Input}