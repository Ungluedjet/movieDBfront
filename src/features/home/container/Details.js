import React, {useState, useEffect} from 'react';
import {View, Text, Heading, Center, Image, Button} from 'native-base';

const Details = ({navigation, route}) => {
    const myRef = React.useRef(null);
    const item = route.params;

    return (
        <Center>
            <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                    color: 'warmGray.50',
                }}
                fontWeight="semibold"
            >
                {item.original_title}
            </Heading>
            <Image
                ref={myRef}
                source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
                }}
                alt="Alternate Text"
                size="60%"
            />
            <Text>{item.overview}</Text>
            <Button>add to favourite</Button>
        </Center>
    );
};

export default Details;
