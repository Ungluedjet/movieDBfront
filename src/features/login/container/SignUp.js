import React from 'react';
import {
    Center,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
} from 'native-base';

const SignUp = ({navigation}) => {
    const btnSignUp = () => {
        console.log('momazos mauro');
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                        color: 'warmGray.200',
                    }}
                    fontWeight="medium"
                    size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <Button
                        mt="2"
                        colorScheme="indigo"
                        onPress={() => {
                            btnSignUp();
                        }}>
                        Sign up
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignUp;
