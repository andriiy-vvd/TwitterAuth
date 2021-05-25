import {Button, TextInput, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BAERER_TOKEN} from '@env';

type userData = {
  id: string;
  name: string;
  username: string;
};

const Auth = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<userData | null>(null);

  useEffect(() => {}, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.twitter.com/2/users/by/username/${value.trim()}`,
        {
          headers: {
            Authorization: `Bearer ${BAERER_TOKEN}`,
          },
        },
      );
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{}}>
        <View style={{width: 300, backgroundColor: '#aeaeae', margin: 10}}>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={'Enter your Nickname'}
          />
        </View>
        <View>
          <Button title={'Log in'} onPress={getUserData} />
        </View>
        {data && (
          <>
            <View>
              <Text>id: {data.id}</Text>
            </View>
            <View>
              <Text>name: {data.name}</Text>
            </View>
            <View>
              <Text>username: {data.username}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;
