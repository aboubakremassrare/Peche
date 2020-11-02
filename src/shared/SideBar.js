import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default SideBar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../../assets/background.png")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
             <Image source={require("../../assets/pecheur.jpg")} style={styles.profile} />
             {/* A remplacer par les informations d'utilisateur */}
             <Text style={styles.name}>Massrare aboubakre</Text>
            <View style={{ flexDirection: "row",alignSelf: 'flex-end'  }}>
                <Text style={styles.followers}>734 Followers</Text>
                <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
            </View>
        </ImageBackground>
        <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerNavigatorItems  {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF",
        alignSelf:'flex-end',
        marginRight: 25,
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8,
        textAlign:'right'
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4,
    }
});
