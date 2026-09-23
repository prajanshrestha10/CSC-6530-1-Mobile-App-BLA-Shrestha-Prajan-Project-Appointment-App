import { collection, getDocs, query } from 'firebase/firestore';
import { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import banner from '../../../assets/images/home-banner.jpeg';
import { db } from '../../../config/firebaseConfig';
// import uploadData from '../../../config/bulkUpload.js';
// import { doctors } from '../../../store/doctors.ts';

export class Home extends Component {
  componentDidMount() {
    // uploadData();
    this.getDoctors();
  }

  // Helper to determine greeting based on current local hour
  getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  state = { doctors: [] };

  getDoctors = async () => {
    const q = query(collection(db, 'doctors'));
    const res = await getDocs(q);

    try {
      const q = query(collection(db, 'doctors'));
      const res = await getDocs(q);

      // 1. Map all documents into a clean array first
      const doctorList = res.docs.map((doc) => ({
        id: doc.id, // Includes Firestore document ID
        ...doc.data(),
      }));

      // 2. Update state ONCE with the complete array
      this.setState({ 
        doctors: doctorList
        });
    } catch (error) {
      console.log('Error fetching doctors:', error);
      this.setState({
        error: error.message
      });
    }
  };

  renderItem = ({item}) => (
    <TouchableOpacity 
      activeOpacity={0.8}
      className="w-72 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 mr-4 shadow-xl justify-between"
    >
      <View>
        {/* Header Row: Doctor Image + Main Info */}
        <View className="flex-row items-center">
          <Image 
            source={{ uri: item.image }} 
            resizeMode="cover" 
            className="w-16 h-16 rounded-xl bg-slate-700" 
          />
          <View className="ml-3 flex-1">
            <Text className="text-white font-bold text-base" numberOfLines={1}>
              {item.name}
            </Text>
            <Text className="text-[#0284C7] text-xs font-semibold mt-0.5" numberOfLines={1}>
              {item.specialty} • {item.title}
            </Text>
            <Text className="text-slate-400 text-[11px] mt-1" numberOfLines={1}>
              {item.hospitalAffiliation}
            </Text>
          </View>
        </View>

        {/* Clinical Sub-Specialty Focus Badge */}
        {item.subSpecialties?.[0] && (
          <View className="bg-slate-700/50 border border-slate-600/40 self-start px-2 py-1 rounded-md mt-3">
            <Text className="text-slate-300 text-[10px] font-medium" numberOfLines={1}>
              🎯 {item.subSpecialties[0]}
            </Text>
          </View>
        )}
      </View>

      {/* Footer Section: Meta Stats + Booking Slot */}
      <View className="mt-3 pt-3 border-t border-slate-700/50">
        
        {/* Rating, Experience, and Fee */}
        <View className="flex-row items-center justify-between mb-2.5">
          <View className="flex-row items-center gap-x-1.5">
            <Text className="text-slate-300 text-xs font-medium">
              ⭐ {item.rating}
            </Text>
            <Text className="text-slate-500 text-xs">({item.reviewCount})</Text>
            <Text className="text-slate-600 text-xs">•</Text>
            <Text className="text-slate-400 text-xs" numberOfLines={1}>
              {item.experienceYears} yrs experi
            </Text>
          </View>

          <Text className="text-white text-xs font-bold">
            ${item.consultationFee}
          </Text>
        </View>

        <View className="bg-[#0284C7]/10 border border-[#0284C7]/30 px-2.5 py-1.5 rounded-lg flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-slate-300 text-[11px] font-medium">
              🎗️ {item.department}
            </Text>
          </View>
          <Text className="text-[#0284C7] text-[10px] font-bold uppercase tracking-wide">
            Book
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const greeting = this.getGreeting();
    const { doctors } = this.state;

    return (
      <SafeAreaView className="flex-1 bg-[#0F172A]">
        <View className="px-5 pt-4">
          
          {/* Header Card */}
          <View className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-xl">
            <View className="flex-row items-center justify-between">
              
              {/* Dynamic Time-Based Greeting */}
              <View className="flex-col">
                <Text className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  {greeting} !
                </Text>
                <Text className="text-white text-xl font-bold mt-0.5">
                  Guest User
                </Text>
              </View>

              {/* App Brand Logo */}
              {/* <Image 
                source={logo} 
                style={{ width: 80, height: 36 }} 
                resizeMode="contain" 
              /> */}

              {/* Right Side: Quick Profile Badge */}
              <View className="w-10 h-10 rounded-full bg-[#0284C7]/20 border border-[#0284C7] items-center justify-center">
                <Text className="text-[#0284C7] font-bold text-base">
                  GU
                </Text>
              </View>
            </View>

            {/* Sub-greeting for Clinical Context */}
            <View className="mt-3 pt-3 border-t border-slate-700/50">
              <Text className="text-slate-200 text-sm font-semibold">
                Find Your Specialist Today
              </Text>
              <Text className="text-slate-400 text-xs mt-0.5">
                Book consultations with oncology & respiratory experts.
              </Text>
            </View>
          </View>
          
          {/* Banner */}
          <ImageBackground
            source={banner}
            imageStyle={{ borderRadius: 16 }}
            className="my-3 shadow-lg overflow-hidden rounded-2xl"
          >
            {/* Dark Slate Overlay for High Text Readability */}
            <View className="bg-[#0F172A]/85 p-5 border border-slate-700/60 rounded-2xl">
              {/* Category Badge */}
              <View className="bg-[#0284C7]/20 border border-[#0284C7]/50 self-start px-2.5 py-1 rounded-md mb-2">
                <Text className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">
                  Specialized Care
                </Text>
              </View>

              <View className="w-4/5">
                <Text className="text-white text-lg font-bold leading-tight">
                  Early Lung Cancer Screening & Diagnostics
                </Text>
                <Text className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                  Connect with top thoracic surgeons and pulmonologists for low-dose CT reviews.
                </Text>

                {/* Learn More Button to Filter the Doctor List directly */}
                <TouchableOpacity 
                  activeOpacity={0.8}
                  className="bg-[#0284C7] self-start px-4 py-2 rounded-xl mt-4 shadow-md shadow-[#0284C7]/30"
                >
                  <Text className="text-white text-xs font-semibold">
                    Learn More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Scrollable Content */}
        <ScrollView>
          {/* FlatList Doctor Information */}
          {
            doctors.length > 0 ?
              <FlatList 
                data={doctors} 
                renderItem={this.renderItem}
                horizontal
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
              /> 
              : <ActivityIndicator animating color={'#0284C7'} />
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;