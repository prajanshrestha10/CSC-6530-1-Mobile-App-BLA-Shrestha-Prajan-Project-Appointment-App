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
        <View className="w-full items-center px-6">
          
          {/* Logo with subtler spacing */}
          <Image source={logo} style={{ width: 220, height: 110 }} resizeMode="contain" />

          {/* Brand Title & Tagline Text */}
          <View className="items-center mb-8 w-full">
            <Text className="text-white text-3xl font-extrabold tracking-tight">
              BreatheWell
            </Text>

            <View className="bg-[#0284C7]/10 px-3 py-1 rounded-full mt-2 border border-[#0284C7]/30">
              <Text className="text-[#0284C7] text-[10px] font-bold uppercase tracking-widest">
                Pulmonology & Oncology Care
              </Text>
            </View>

            {/* Description Text with explicit line expansion */}
            <Text 
              numberOfLines={0}
              ellipsizeMode="none"
              className="text-slate-400 text-xs text-center mt-2.5 w-full"
              style={{ flexWrap: 'wrap' }}
            >
              Connect with leading respiratory & cancer specialists today.
            </Text>
          </View>
          
          {/* Sign Up and Guest User Buttons */}
          <View className="w-full max-w-xs">
            <TouchableOpacity
              onPress={() => router.push('/signup')}
              style={{ backgroundColor: Colors.PRIMARY }}
              className="p-3.5 my-1.5 rounded-xl w-full active:opacity-80 shadow-lg shadow-[#0284C7]/20"
            >
              <Text className="text-base font-bold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => router.push('/home')}
              style={{ 
                backgroundColor: 'transparent', 
                borderColor: '#334155' 
              }}
              className="p-3.5 my-1.5 border rounded-xl w-full active:opacity-80"
            >
              <Text 
                className="text-base font-semibold text-center text-slate-200"
              >
                Guest User
              </Text>
            </TouchableOpacity>
          </View>

          {/* Separator */}
          <View className="flex-row items-center justify-center my-6 w-full max-w-xs">
            {/* Left Line */}
            <View className="flex-1 h-[1px] bg-slate-800" />
            
            {/* Middle Text */}
            <Text className="mx-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
              or
            </Text>
            
            {/* Right Line */}
            <View className="flex-1 h-[1px] bg-slate-800" />
          </View>

          {/* Sign In */}
          <View className="flex-row items-center justify-center">
            <Text className="text-sm font-medium text-slate-400">
              Already a user?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text className="text-sm font-bold text-[#0284C7]">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}