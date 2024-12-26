import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";
import HapticButton from "@/components/HapticButton";
import { useUserStore } from "@/store/useUserStore";

export default function ProfileScreen() {
    
    const {toggleOnboarding} = useUserStore();

    return (
        <View style={styles.container}>
            <HapticButton title="Back to onBoarding" onPress={toggleOnboarding} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 20,
        color: theme.gray
    }
})