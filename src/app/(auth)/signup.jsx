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
    const handleSignUp = () => {

    };

    return (
      <SafeAreaView className="flex-1 bg-[#0F172A]">
        <StatusBar barStyle={"light-content"} backgroundColor={"#0F172A"} />
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View className="w-full items-center px-6 my-6">
            
            {/* Logo */}
            <Image source={logo} style={{ width: 220, height: 110 }} resizeMode="contain" /> 
            
            {/* Brand Title & Tagline Badge */}
            <View className="items-center mb-8 w-full">
                <Text className="text-white text-3xl font-extrabold tracking-tight">
                    Join BreatheWell
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
                    Create an account to book specialist appointments and track your health.
                </Text>
            </View>

            <View className="w-full max-w-xs">
              <Formik initialValues={{ email:'', password:'' }} validationSchema={validationSchema} onSubmit={handleSignUp}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                  return (
                    <View className="w-full">
                      {/* Email Label & Input */}
                      <Text className="text-slate-300 text-xs font-medium mb-1.5">
                        Email
                      </Text>
                      <TextInput 
                        className="h-12 bg-slate-800/80 border border-slate-700/80 text-white rounded-xl px-4 text-sm focus:border-[#0284C7] mb-1" 
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

                      {/* Password Label & Input */}
                      <Text className="text-slate-300 text-xs font-medium mb-1.5">
                        Password
                      </Text>
                      <TextInput 
                        className="h-12 bg-slate-800/80 border border-slate-700/80 text-white rounded-xl px-4 text-sm focus:border-[#0284C7] mb-1" 
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
                        <Text className="text-base font-bold text-center text-white">
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              </Formik>

              {/* Already a User Link */}
              <View className="flex-row items-center justify-center mt-6">
                <Text className="text-sm font-medium text-slate-400">
                  Already a user?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push('/signin')}>
                  <Text className="text-sm font-bold text-[#0284C7]">
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Separator Divider */}
              <View className="flex-row items-center justify-center my-5 w-full">
                <View className="flex-1 h-[1px] bg-slate-800" />
                <Text className="mx-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  or
                </Text>
                <View className="flex-1 h-[1px] bg-slate-800" />
              </View>

              {/* Guest User Option */}
              <View className="flex-row items-center justify-center">
                <Text className="text-sm font-medium text-slate-400">
                  Continue as a{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push('/home')}>
                  <Text className="text-sm font-bold text-[#0284C7]">
                    Guest User
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SignUp;