import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    FlatList,
    RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../assets/Css/AppStyles';
import { fetchListData, addToFavourite, removeFromFavourites } from '../redux/actions';
import { ON_REFRESH } from '../redux/types';


const Dashboard = () => {

    // Redux dispatch
    const dispatch = useDispatch();

    // Redux hooks for fetching data from store.
    const { userList, refreshing, favourites } = useSelector(state => state.dashboard);

    // Fetch Data on dashboard load
    const fetchData = () => {
        dispatch(fetchListData())
    }

    // React hooks
    useEffect(() => {
        fetchData();
    }, []);

    const isFavourite = (id) => (
        favourites.some((e, i) => e?.login?.uuid === id)
    )

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

                    {/* List of User's with Pull to refresh and Pagination  */}
                    <FlatList
                        data={userList}
                        enableEmptySections={true}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => {
                            dispatch(fetchListData());
                        }}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => {
                                    dispatch({ type: ON_REFRESH });
                                    dispatch(fetchListData());
                                }}
                                tintColor="#000000"
                            />
                        }
                        onEndReachedThreshold={0.8}
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
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: 5
                                            }}
                                        >
                                            <Image
                                                source={require('../assets/images/pin.png')}
                                                style={{ height: 12, width: 12, resizeMode: 'contain', tintColor: '#acacac' }}
                                            />

                                            <Text style={styles.text2}>
                                                {item?.location?.city}, {item?.location?.country}.
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{ height: '100%', padding: 10 }} >
                                        <Pressable
                                            onPress={() => {
                                                !isFavourite(item)
                                                    ? dispatch(addToFavourite(item))
                                                    : dispatch(removeFromFavourites(item?.login?.uuid))
                                            }}
                                        >
                                            <Image
                                                source={
                                                    isFavourite(item?.login?.uuid)
                                                        ? require('../assets/images/star_fill.png')
                                                        : require('../assets/images/star.png')
                                                }
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

export default Dashboard;