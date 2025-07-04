import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'


const TabBarIcon = ({ focused, icon, text }: any) => {
    if (focused) {
        return (
            <>
                <ImageBackground
                    source={images.highlight}
                    className=' flex flex-row flex-1 items-center justify-center rounded-full mt-3 w-full h-full min-w-[112px] min-h-16 overflow-hidden'
                >
                    <Image source={icon} className='size-5' tintColor="#151312" />

                    <Text className='text-secondary text-base font-semibold ml-2'>{text}</Text>

                </ImageBackground>
            </>
        )
    }
    return (
        <View className='justify-center items-center size-full rounded-full mt-3'>
            <Image
                source={icon}
                className='size-5'
                tintColor="#A8b5db"
            />
        </View>
    )

}


const _layout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }
                    ,
                    tabBarStyle: {
                        backgroundColor: "#0f0D23",

                        position: 'absolute',
                        // bottom: 10,
                        height: 52,
                        marginBottom: 20,
                        borderRadius: 50,
                        marginHorizontal: 20,
                        overflow: 'hidden',
                        borderColor: '#0f0D23',




                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon
                                focused={focused}
                                icon={icons.home}
                                text='Home'
                            />
                        )
                    }}

                /> <Tabs.Screen
                    name='search'
                    options={{
                        title: 'Search',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon
                                focused={focused}
                                icon={icons.search}
                                text='Search'
                            />
                        )
                    }}
                /><Tabs.Screen
                    name='saved'
                    options={{
                        title: 'Saved',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon
                                focused={focused}
                                icon={icons.save}
                                text='Saved'
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabBarIcon
                                focused={focused}
                                icon={icons.person}
                                text='Profile'
                            />
                        )
                    }}
                />
            </Tabs>
        </>

    )
}

export default _layout