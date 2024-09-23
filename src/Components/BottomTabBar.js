import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function BottomTabBar({ state, descriptors, navigation }) {
    const addIcon = require('./../assets/icons/addIcon.png');
    const addIconPink = require('./../assets/icons/addIconPink.png');
    const homeIcon = require('./../assets/icons/homeIcon.png');
    const homeIconPink = require('./../assets/icons/homeIconPink.png');
    const profilIcon = require('./../assets/icons/profilIcon.png');
    const profilIconPink = require('./../assets/icons/profilIconPink.png');

    return (
      <View className="h-24 w-full absolute bottom-0 left-0 z-10 border-t border-light-1" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
        <BlurView intensity={100} style={styles.blurContainer} className="">
            <View className="h-full w-full flex-row justify-around p-2">
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
                const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                });
    
                if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
                }
            };
    
            const onLongPress = () => {
                navigation.emit({
                type: 'tabLongPress',
                target: route.key,
                });
            };
    
            return (
                <View className="w-[25%] h-2/3">
                {label === "Post" && (
                  <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={{ selected: isFocused ? true : false }}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className="flex-1 justify-center items-center"
                    style={{ borderColor: isFocused ? '#ff7d72' : '#eedfc2' }}
                    >
                      <View className="w-full h-full">
                        <Image source={(isFocused ? addIconPink : addIcon)}  style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}/>
                      </View>
                    </TouchableOpacity>
                ) || (label === "Home" && (
                  <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={{ selected: isFocused ? true : false }}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className="flex-1 justify-center items-center"
                    style={{ borderColor: isFocused ? '#ff7d72' : '#eedfc2' }}
                    >
                      <View className="w-full h-full">
                        <Image source={(isFocused ? homeIconPink : homeIcon)}  style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}/>
                      </View>
                    </TouchableOpacity>
                ) || (
                  <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={{ selected: isFocused ? true : false }}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className="flex-1 justify-center items-center"
                    style={{ borderColor: isFocused ? '#ff7d72' : '#eedfc2' }}
                    >
                      <View className="w-full h-full">
                        <Image source={(isFocused ? profilIconPink : profilIcon)}  style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}/>
                      </View>
                    </TouchableOpacity>
                ))}
                </View>
            );
            })}
            </View>
        </BlurView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    blurContainer: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }});

export default BottomTabBar