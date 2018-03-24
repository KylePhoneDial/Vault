import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    headerContainer: {
        display: 'flex',
        backgroundColor: '#616161',
    },
    headerUpperRow: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 30,
        left: 15
    },
    headerLowerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 3,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        borderTopColor: '#BDBDBD'
    },
    headerTitleFont: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    labelFont: {
        fontSize: 16
    }
});

export default styles;