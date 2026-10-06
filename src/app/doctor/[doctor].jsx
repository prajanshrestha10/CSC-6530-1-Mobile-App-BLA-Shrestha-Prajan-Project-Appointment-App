import { router, useLocalSearchParams } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, Image, Linking, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../../config/firebaseConfig.js';
import DatePickerComponent from '../../components/doctor/DatePickerComponent.jsx';
import FindSlots from '../../components/doctor/FindSlots.jsx';

export default function Doctor() {
  const { doctor } = useLocalSearchParams();

  const [doctorData, setDoctorData] = useState({});
  const [slotsData, setSlotsData] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [date, setDate] = useState(new Date());

  const getDoctorData = async () => {
    try {
        const doctorQuery = query(
            collection(db, 'doctors'), 
            where('name', '==', doctor)
        );
        const doctorSnapShot = await getDocs(doctorQuery);

        if(doctorSnapShot.empty) {
            console.log('No matching doctor found.');
            return;
        }

        for(const doc of doctorSnapShot.docs) {
            const doctorData = doc.data();
            setDoctorData(doctorData);

            // for slots
            const slotsQuery = query(
                collection(db, 'slots'),
                where('ref_id', '==', doc.ref)
            );

            const slotsSnapShot = await getDocs(slotsQuery);
            if(slotsSnapShot.empty) {
                console.log('No matching slots found for this doctor.');
                setSlotsData([]);
                continue;
            }

            const slots = [];
            slotsSnapShot.forEach((slotDoc) => {
                slots.push(slotDoc.data());
            });
            setSlotsData(slots[0]?.slot);
        }
    } catch (error) {
        console.log('Error while fetching data.', error);
    }
  }

  useEffect(() => {
    getDoctorData();
  }, []);

//   console.log(doctorData, slotsData);

  // Extract slot times safely from state
  const availableTimeSlots = slotsData.length > 0 ? slotsData[0]?.slot || [] : [];

  const openMap = async () => {
    const url = doctorData.locationLink;

    try {
        // Open directly without pre-checking shortened URLs
        await Linking.openURL(url);
    } catch (error) {
        console.log('Failed to open map URL:', error);
        Alert.alert(
            'Unable to Open Map!',
            'Could not open Google Maps. \nPlease check if a web browser or maps app is installed.'
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View className="px-5 mt-4">

          {/* Header Navigation Bar */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity
              onPress={() => router.back()}
              className="h-10 w-10 bg-slate-800/80 rounded-xl border border-slate-700/80 items-center justify-center active:opacity-80"
            >
              <Text className="text-white text-base font-bold">←</Text>
            </TouchableOpacity>

            <View className="items-center">
              <Text className="text-white text-lg font-extrabold tracking-tight">
                Doctor Profile
              </Text>
              <View className="bg-[#0284C7]/10 px-2.5 py-0.5 rounded-full mt-0.5 border border-[#0284C7]/30">
                <Text className="text-[#0284C7] text-[9px] font-bold uppercase tracking-widest">
                  {doctorData?.department || 'Medical Specialist'}
                </Text>
              </View>
            </View>

            <View className="w-10" />
          </View>

          {/* Doctor Overview Hero Card */}
          <View className="w-full bg-slate-800/70 border border-slate-700/80 rounded-2xl p-5 mb-5 shadow-lg shadow-slate-900/50">
            <View className="flex-row items-start">
              <View className="relative">
                <Image
                  source={{ uri: doctorData?.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' }}
                  className="w-24 h-24 rounded-2xl border-2 border-[#0284C7]/50"
                  resizeMode="cover"
                />
                {doctorData?.acceptsInsurance && (
                  <View className="absolute -bottom-2 -left-1 bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.5 rounded">
                    <Text className="text-emerald-400 text-[8px] font-bold uppercase">Insured</Text>
                  </View>
                )}
              </View>

              <View className="flex-1 ml-4 justify-center">
                <View className="flex-row items-center flex-wrap">
                  <Text className="text-white text-xl font-bold mr-1.5">
                    {doctorData?.name || doctor}
                  </Text>
                  {doctorData?.title && (
                    <Text className="text-[#0284C7] text-xs font-semibold">
                      {doctorData.title}
                    </Text>
                  )}
                </View>

                <Text className="text-[#0284C7] text-xs font-semibold mt-0.5">
                  {doctorData?.specialty}
                </Text>

                <Text className="text-slate-400 text-xs font-medium mt-1">
                  🏥 {doctorData?.hospitalAffiliation}
                </Text>

                <TouchableOpacity 
                  onPress={openMap} 
                  activeOpacity={0.7}
                >
                  <Text className="text-xs font-medium mt-0.5">
                    📍 
                    <Text className="underline text-[#0284C7]">{doctorData?.location}</Text>
                  </Text>
                </TouchableOpacity>

                <View className="flex-row items-center mt-2.5">
                  <View className="bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-md flex-row items-center gap-1 self-start mr-2">
                    <Text className="text-amber-400 text-xs font-bold">★ {doctorData?.rating || '5.0'}</Text>
                    <Text className="text-slate-400 text-[10px] font-medium" numberOfLines={1}>({doctorData?.reviewCount || 0})</Text>
                  </View>
                  <Text className="text-slate-400 text-xs font-medium">
                    {doctorData?.experienceYears ? `${doctorData.experienceYears} Years Experience` : ''}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Quick Metrics Bar */}
          <View className="flex-row justify-between w-full mb-5">
            <View className="flex-1 bg-slate-800/50 border border-slate-700/60 rounded-xl p-3 mr-2 items-center">
              <Text className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Fee</Text>
              <Text className="text-white text-sm font-extrabold mt-0.5">
                ${doctorData?.consultationFee || 0}
              </Text>
            </View>

            <View className="flex-1 bg-slate-800/50 border border-slate-700/60 rounded-xl p-3 mr-2 items-center">
              <Text className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Languages</Text>
              <Text className="text-slate-200 text-xs font-bold mt-0.5 text-center" numberOfLines={1}>
                {doctorData?.languages?.join(', ') || 'N/A'}
              </Text>
            </View>

            <View className="flex-1 bg-slate-800/50 border border-slate-700/60 rounded-xl p-3 items-center">
              <Text className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Insurance</Text>
              <Text className="text-emerald-400 text-xs font-bold mt-0.5">
                {doctorData?.acceptsInsurance ? 'Accepted' : 'Self-Pay'}
              </Text>
            </View>
          </View>

          {/* Biography Section */}
          {doctorData?.bio && (
            <View className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 mb-5">
              <Text className="text-white text-sm font-bold mb-1.5">About Specialist</Text>
              <Text className="text-slate-300 text-xs leading-5">
                {doctorData.bio}
              </Text>
            </View>
          )}

          {/* Sub-Specialties & Clinical Focus */}
          {doctorData?.subSpecialties && doctorData.subSpecialties.length > 0 && (
            <View className="mb-5">
              <Text className="text-white text-sm font-bold mb-2">Specializations</Text>
              <View className="flex-row flex-wrap gap-2">
                {doctorData.subSpecialties.map((sub, index) => (
                  <View key={index} className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">
                    <Text className="text-slate-300 text-xs font-medium">{sub}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Education & Qualifications */}
          {doctorData?.education && doctorData.education.length > 0 && (
            <View className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 mb-5">
              <Text className="text-white text-sm font-bold mb-2">Education & Training</Text>
              {doctorData.education.map((edu, index) => (
                <View key={index} className="flex-row items-center mb-1.5 last:mb-0">
                  <Text className="text-[#0284C7] text-xs font-bold mr-2">🎓</Text>
                  <Text className="text-slate-300 text-xs font-medium flex-1">{edu}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Date Picker */}
          <View className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 mb-5">
            <Text className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              Select Appointment Date
            </Text>
            <DatePickerComponent date={date} setDate={setDate} />
          </View>

          {/* Find Slots Section */}
          <View className="flex-1">
            <FindSlots 
              date={date}
              slots={slotsData}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}