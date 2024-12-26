import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "@/app/theme";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "expo-router";

export default function Onboarding() {

    const { toggleOnBoarding } = useUserStore();

    const router = useRouter();

    function handlePress() {
        toggleOnBoarding();
        router.replace("/");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                On Boarding
            </Text>

            <Button onPress={handlePress} title="Finish OnBoarding">
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        color: theme.gray
    },
    heading: {
        fontSize: 40,
        color: theme.white,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center"
    },
    tagLine: {
        fontSize: 20,
        color: theme.black,
        textAlign: "center",
        marginBottom: 24
    }
});