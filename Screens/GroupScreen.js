

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function GroupScreen() {
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={
                styles.header
            }>
                <Text style={styles.headerText}>Bills ScreenX</Text>
            </View>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#26272d',
    },
    header: {
        flex: 0.2,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        backgroundColor: '#31304D',
        marginBottom: 30,
        paddingTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 32,
        flex: 1,
        textAlignVertical: 'center',
          backgroundColor: '#31304D',
    },
    billsHeader: {
        color: '#fff',
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#26272d'
    },
    recentBills: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600'
    },
    seeAll: {
        color: '#594887',
        fontSize: 24,
        fontWeight: '600'
    },
    recentBillsContainer: {
        flex: 0.7,
        paddingLeft: 20,
        paddingRight: 20,
    },
    groupContainer: {
        color: '#594887',
        backgroundColor: '#292b33',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin: 5,
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topTextBills: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5
    },
    bottomTextBills: {
        color: '#61636b',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    textRight: {
        textAlign: 'right',
    }


});

