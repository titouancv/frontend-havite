import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function BottomTabBar({ state, descriptors, navigation }) {
    return (
      <View className="h-24 w-full border-t-2 border-secondary absolute bottom-0 left-0 z-10" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
        <BlurView intensity={100} style={styles.blurContainer}>
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
                    <TouchableOpacity
                    key={route.key}
                    accessibilityRole="button"
                    accessibilityState={{ selected: isFocused ? true : false }}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className="flex-1 justify-center items-center bg-primary rounded-lg border-2"
                    style={{ borderColor: isFocused ? '#ff7d72' : '#eedfc2' }}
                    >
                    <Text style={{ color: isFocused ? '#ff7d72' : '#eedfc2' }} className="font-bold">
                        {label}
                    </Text>
                    </TouchableOpacity>
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