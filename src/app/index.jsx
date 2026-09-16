import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from '../../assets/Colors';
import logo from '../../assets/images/logo.png';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <StatusBar barStyle={"light-content"} backgroundColor={"#0F172A"} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View className="w-full items-center px-4">
          <Image source={logo} style={{ width: 250, height: 250 }} resizeMode="contain" /> 
          
          {/* Sign Up and Guest User Buttons */}
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push('/signup')}
              style={{ backgroundColor: Colors.PRIMARY }}
              className="p-3 my-2 rounded-lg w-full active:opacity-80"
            >
              <Text className="text-lg font-semibold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => router.push('/home')}
              style={{ 
                backgroundColor: Colors.light.card || '#FFFFFF', 
                borderColor: Colors.PRIMARY 
              }}
              className="p-3 my-2 border rounded-lg w-full active:opacity-80"
            >
              <Text 
                style={{ color: Colors.PRIMARY }} 
                className="text-lg font-semibold text-center"
              >
                Guest User
              </Text>
            </TouchableOpacity>
          </View>

          {/* Separator */}
          <View className="flex-row items-center justify-center my-4 w-3/4">
            {/* Left Line */}
            <View className="flex-1 h-[1px] bg-[#0284C7]" />
            
            {/* Middle Text */}
            <Text className="mx-4 text-base font-semibold text-white">
              or
            </Text>
            
            {/* Right Line */}
            <View className="flex-1 h-[1px] bg-[#0284C7]" />
          </View>

          {/* Sign In Button */}
          <View className="flex-row items-center justify-center mt-2">
            <Text className="text-sm font-medium text-[#94A3B8]">
              Already a user?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text className="text-sm font-bold text-[#0284C7] underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}