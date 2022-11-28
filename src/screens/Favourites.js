import React from 'react';
import {
    View, Text, Image, Pressable, FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../assets/Css/AppStyles';
import { removeFromFavourites } from '../redux/actions';


const Favourites = () => {

    // Redux hooks for fetching/dispatch data from/to store.
    const dispatch = useDispatch();
    const { favourites, userList } = useSelector(state => state.dashboard);

    return (
        <>
            <View style={[styles.container, styles.center]}>
                <View style={[styles.header, styles.center]} >
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                    />
                </View>

                <View style={{ flex: 1, width: '100%' }} >

                    <FlatList
                        data={favourites}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <View
                                key={index}
                                style={styles.listItem} >

                                {/* User Avtar */}
                                <View style={styles.imageView}>
                                    <Image
                                        source={{ uri: item?.picture?.thumbnail }}
                                        style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                                    />
                                </View>

                                <View style={[styles.listCard, styles.shadow]} >
                                    <View style={{ flex: 1 }} >
                                        {/* Username :: ( combination of first + last name ) */}
                                        <Text
                                            style={{
                                                fontFamily: 'Poppins-Medium',
                                                fontSize: 14,
                                                fontWeight: '600',
                                                color: '#000'
                                            }}
                                        >
                                            {item?.name?.first} {item?.name?.first}
                                        </Text>

                                        {/* Location  */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }} >
                                            <Image
                                                source={require('../assets/images/pin.png')}
                                                style={{ height: 12, width: 12, resizeMode: 'contain', tintColor: '#acacac' }}
                                            />

                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: '#000',
                                                    marginLeft: 5,
                                                    fontFamily: 'Poppins-Regular'
                                                }}
                                            >
                                                {item?.location?.city}, {item?.location?.country}.
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ height: '100%', padding: 10 }} >
                                        <Pressable
                                            onPress={() => dispatch(removeFromFavourites(item?.login?.uuid))}
                                        >
                                            <Image
                                                source={require('../assets/images/star_fill.png')}
                                                style={{ height: 20, width: 20, resizeMode: 'contain', tintColor: '#fc7676' }}
                                            />
                                        </Pressable>
                                    </View>
                                </View>

                            </View>
                        )}

                        keyExtractor={({ item, index }) => index}
                    />

                </View>
            </View>
        </>
    )
}





export default Favourites;