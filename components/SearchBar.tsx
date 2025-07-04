import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    onPress?: () => void;
    placeholder: string;
    onChange?: (text: string) => void;
    value?: string;
    autoFocus?: boolean;
}

const SearchBar = ({ onPress, placeholder, onChange, value, autoFocus }: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' tintColor="#ab8bff" resizeMode='contain' />
            <TextInput
                autoFocus={autoFocus}
                onChangeText={(e) => onChange && onChange(e.trim())}
                value={value}
                onPress={onPress}
                placeholder={placeholder}
                placeholderTextColor="#ab8bff"
                className='flex-1 text-white text-base ml-3'

            />
        </View>
    )
}

export default SearchBar