import React, {useState, useEffect} from 'react';
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
    Checkbox,
    Text,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';
import key from '../../../../key';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [saveUserCheck, setSaveUserCheck] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkData = async () => {
            const storedData = await checkStore();
            if (storedData) {

            }
        };
        checkData();
    }, []);

    const checkStore = async () => {
        try {
            const value = await AsyncStorage.getItem('email')
            if (value !== null) {
                // valor encontrado
                return value
                }
            } catch(e) {
                console.log('Error al recuperar datos', e)
                return false;
            }
        return false;
    };

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const goToHome = () => {
        navigation.navigate('app');
    };

    const doLogin = async () => {
        setLoading(true);
        // const emailCipher = await saveUserData(email);
        // const passCipher = await saveUserData(password);

        // if (saveUserCheck) {
        //     await storeData('email',emailCipher);
        //     await storeData('password',passCipher);
        // }

        goToHome();
    };

    const saveUserData = async (Text) => {
        const cipherText = CryptoJS.AES.encrypt(Text, key).toString();
        console.log('frase encriptada' + cipherText);
        return cipherText;
    };

    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          console.log('Error al almacenar datos', e)
        }
      }      

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
                            testID='email'
                            accessibilityLabel='email'
                            isDisabled={loading}
                            isInvalid={error}
                            value={email}
                            onChangeText={val => setEmail(val)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            testID='password'
                            accessibilityLabel='password'
                            isDisabled={loading}
                            isInvalid={error}
                            value={password}
                            onChangeText={val => setPassword(val)}
                            type="password"
                        />
                    </FormControl>
                    <Checkbox
                        value={saveUserCheck}
                        onChange={setSaveUserCheck}
                        defaultIsChecked={false}
                        accessibilityLabel="This is a dummy checkbox" 
                    />
                    <Text>check if you want to keep your session</Text>
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
