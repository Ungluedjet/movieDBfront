import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {
    ScrollView,
    View,
    FlatList,
    Center,
    Skeleton,
    VStack,
    Text,
    Box,
    Image,
    Button,
} from 'native-base';
import startPopularList from '../actions/popularList';

const Home = ({navigation}) => {
    const myRef = React.useRef(null);
    const dispatch = useDispatch();
    const { popularList } = useSelector(state => state);

    useEffect(() => {
        startPopularList(dispatch);
    }, []);

    useEffect(() => {
        console.log(JSON.stringify(popularList));
    }, [popularList]);

    const renderSkeleton = () => (
        <View>
            <Center w="100%">
                <VStack
                    w="90%"
                    maxW="400"
                    borderWidth="1"
                    space={8}
                    overflow="hidden"
                    rounded="md"
                    _dark={{
                        borderColor: 'coolGray.500',
                    }}
                    _light={{
                        borderColor: 'coolGray.200',
                    }}
                >
                    <Skeleton h="40" />
                    <Skeleton.Text px="4" />
                    <Skeleton
                        px="4"
                        my="4"
                        rounded="md"
                        startColor="primary.100"
                    />
                </VStack>
            </Center>
        </View>
    );

    const renderBody = () => (
        <View flex={1}>
            <FlatList
                flex={1}
                data={popularList.data.results}
                keyExtractor={(item, index) => item + index}
                renderItem={item => (
                    <Box
                        borderBottomWidth="1"
                        _dark={{
                            borderColor: 'muted.50',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Details', item.item)
                            }
                        >
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                ref={myRef}
                                source={{
                                uri: 'https://image.tmdb.org/t/p/w500' + item.item.poster_path,
                                }}
                                alt="Alternate Text"
                                size="xl"
                            />
                            <View style={{marginLeft: 10}}>
                                <Text
                                accessibilityLabel={item.item.original_title}
                                testId={item.item.original_title}
                                >
                                {item.item.original_title}
                                </Text>
                                <Text>{item.item.overview}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </Box>
                )}
                style={{ flex: 1 }}
            />
        </View>
    );
    
    return popularList.success ? renderBody() : renderSkeleton();
};

export default Home;
