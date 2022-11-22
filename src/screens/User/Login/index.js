import React from "react"
import Responsive from "react-native-lightweight-responsive"
import {View, Text, StyleSheet} from "react-native"
import { Input } from "../../../assets/components/Form/Input"
import theme from "../../../globals/theme"


const Login =() => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            
            <View style= {styles.form}>
                <Text style={styles.inputTitle}>Email</Text>
                <Input placeholder="exemplo@email.com" />
                </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    
    },

    title: {
        fontSize: Responsive.font(26),
        color:theme.colors.title,
        fontWeitght: "bold"
    },

    inputTitle:{
        fontSize: Responsive.font(14),
        color:theme.colors.primary,
       fontWeitght: "bold"
    },
    form: {
        with: "100%",
        justifyContent:"center",
        padding:Responsive.font(24)
    }
})
export {Login}