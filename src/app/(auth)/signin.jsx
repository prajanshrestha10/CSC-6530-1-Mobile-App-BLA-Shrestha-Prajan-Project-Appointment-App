import { router } from 'expo-router';
import { Formik } from 'formik';
import { Component } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from '../../../assets/Colors';
import logo from '../../../assets/images/logo.png';
import validationSchema from '../../../utils/signupSchema';

export class SignUp extends Component {
  render() {
    const handleSignIn = () => {

    };

    return (
        <SafeAreaView className="flex-1 bg-[#0F172A]">
            <StatusBar barStyle={"light-content"} backgroundColor={"#0F172A"} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View className="w-full items-center px-6">
                    <Image source={logo} style={{ width: 220, height: 120 }} resizeMode="contain" /> 
                    
                    <Text className="text-2xl text-center text-white font-bold mt-2">
                        Sign In to Care
                    </Text>
                    <Text 
                        className="text-sm text-[#94A3B8] text-center mt-1 mb-6"
                        adjustsFontSizeToFit
                        numberOfLines={1}
                    >
                        Access your medical appointments and clinical records.
                    </Text>

                    <View className="w-full max-w-sm">
                        <Formik initialValues={{ email:'', password:'' }} validationSchema={validationSchema} onSubmit={handleSignIn}>
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                                return (
                                    <View className="w-full">
                                        {/* Email */}
                                        <Text className="text-slate-300 text-sm font-medium mb-1.5">
                                            Email
                                        </Text>
                                        <TextInput 
                                            className="h-12 bg-slate-800/80 border border-slate-700 text-white rounded-xl px-4 text-base focus:border-[#0284C7] mb-1" 
                                            keyboardType='email-address'
                                            onChangeText={handleChange('email')}
                                            value={values.email}
                                            onBlur={handleBlur('email')}
                                            placeholder='john.doe@gmail.com'
                                            placeholderTextColor='#64748B'
                                            autoCapitalize='none'
                                        />
                                        {touched.email && errors.email ? (
                                            <Text className='text-red-400 text-xs mb-3 ml-1'>
                                                {errors.email}
                                            </Text>
                                        ) : (
                                            <View className="mb-4" />
                                        )}

                                        {/* Password */}
                                        <Text className="text-slate-300 text-sm font-medium mb-1.5">
                                            Password
                                        </Text>
                                        <TextInput 
                                            className="h-12 bg-slate-800/80 border border-slate-700 text-white rounded-xl px-4 text-base focus:border-[#0284C7] mb-1" 
                                            secureTextEntry
                                            onChangeText={handleChange('password')}
                                            value={values.password}
                                            onBlur={handleBlur('password')}
                                            placeholder='••••••••'
                                            placeholderTextColor='#64748B'
                                        />
                                        {touched.password && errors.password ? (
                                            <Text className='text-red-400 text-xs mb-3 ml-1'>
                                                {errors.password}
                                            </Text>
                                        ) : (
                                            <View className="mb-6" />
                                        )}

                                        {/* Sign Up Button */}
                                        <TouchableOpacity
                                            onPress={handleSubmit}
                                            style={{ backgroundColor: Colors.PRIMARY }}
                                            className="h-12 rounded-xl justify-center items-center w-full active:opacity-80 shadow-lg shadow-[#0284C7]/20"
                                        >
                                            <Text className="text-base font-semibold text-center text-white">
                                                Sign In
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        </Formik>
                        <View className="flex-row items-center justify-center mt-6">
                            <Text className="text-sm font-medium text-[#94A3B8]">
                                New User?{" "}
                            </Text>
                            <TouchableOpacity onPress={() => router.push('/signup')}>
                                <Text className="text-sm font-bold text-[#0284C7] underline">
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* Separator */}
                        <View className="flex-row items-center justify-center my-5 w-full">
                            {/* Left Line */}
                            <View className="flex-1 h-[1px] bg-slate-700" />
                            
                            {/* Middle Text */}
                            <Text className="mx-4 text-base font-semibold text-white">
                            or
                            </Text>
                            
                            {/* Right Line */}
                            <View className="flex-1 h-[1px] bg-slate-700" />
                        </View>

                        {/* Guest User */}
                        <View className="flex-row items-center justify-center">
                            <Text className="text-sm font-medium text-[#94A3B8]">
                                Continue as a{" "}
                            </Text>
                            <TouchableOpacity onPress={() => router.push('/home')}>
                                <Text className="text-sm font-bold text-[#0284C7] underline">
                                    Guest User
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
  }
}

export default SignUp