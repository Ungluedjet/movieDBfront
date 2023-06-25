import React, {useState, useEffect} from 'react';
import {
    Center,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    View,
} from 'native-base';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const btnSignUp = () => {
        
    };

    return (
        <View>
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
                            <Input
                                testID='email'
                                accessibilityLabel='email'
                                placeholder='Email'
                                value={email}
                                onChangeText={(val)=>setEmail(val)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input
                                testID='password'
                                accessibilityLabel='password'
                                placeholder='Password' 
                                type="password"
                                value={password}
                                onChangeText={(value)=>setPassword(value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input
                                testID='confirmPassword'
                                accessibilityLabel='confirmPassoword'
                                placeholder='Confirm Password' 
                                type="password"
                                value={confPassword}
                                onChangeText={(value)=>setConfPassword(value)}
                            />
                        </FormControl>
                        <Button
                            testID='signUpBtn'
                            accessibilityLabel='signUpBtn'
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
        </View>
    );
};

export default SignUp;
