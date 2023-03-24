import React, {useState} from 'react';
import {
    Center,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Alert,
} from 'native-base';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const goToHome = () => {
        navigation.navigate('app');
    };

    const doLogin = () => {
        setLoading(true);
        goToHome();
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                        color: 'warmGray.50',
                    }}
                    fontWeight="semibold"
                >
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                        color: 'warmGray.200',
                    }}
                    fontWeight="medium"
                    size="xs"
                >
                    Sign In to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            isDisabled={loading}
                            isInvalid={error}
                            value={email}
                            onChangeText={val => setEmail(val)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            isDisabled={loading}
                            isInvalid={error}
                            value={password}
                            onChangeText={val => setPassword(val)}
                            type="password"
                        />
                    </FormControl>
                    <Button

                        isDisabled={!email || !password || loading}
                        mt="2"
                        colorScheme="indigo"
                        onPress={() => {
                            doLogin();
                        }}>
                        Sign In
                    </Button>
                    <Link onPress={() => goToSignUp()}>
                        not an User?, Sign Up now!!!
                    </Link>
                    {error ? (
                        <Alert w="100%" status={'error'} is={error}>
                            Wrong Email or Password, please try again.
                        </Alert>
                    ) : null}
                </VStack>
            </Box>
        </Center>
    );
};

export default Login;
