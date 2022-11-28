import { StyleSheet } from "react-native";

// Common Styles 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#d3d3d3',
        paddingTop: 40
    },

    header: {
        height: 60,
        width: '100%',
    },

    imageView: {
        position: 'absolute',
        zIndex: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden'
    },

    listItem: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        height: 100,
        justifyContent: 'center',
        marginVertical: 10
    },

    listCard: {
        width: '95%',
        height: 100,
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        paddingLeft: 50,
        paddingRight: 5
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});