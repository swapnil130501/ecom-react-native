import { Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { theme } from "../theme";
import { useUserStore } from "@/store/useUserStore";

export default function Layout() {

    const { isOnBoardingFinished } = useUserStore();

    if(!isOnBoardingFinished) {
        return (
           <Redirect href="/OnBoarding"></Redirect>
        )
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.lylak
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Home",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color}></Feather>
                    )
                }} />

            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Profile",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color}></Feather>
                    )
                }} />
        </Tabs>
    )
}