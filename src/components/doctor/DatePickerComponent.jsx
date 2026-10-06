import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

export default function DatePickerComponent({date, setDate}) {
  const [show, setShow] = useState(false);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  // Triggered when user selects a date and presses OK
  const handleValueChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Triggered when user dismisses or cancels the picker
  const handleDismiss = () => {
    setShow(false);
  };

  const togglePicker = () => {
    setShow((prev) => !prev);
  };

  return (
    <View>
      {Platform.OS === 'web' ? (
        /* Web Styled Date Input */
        <View className="flex-row items-center bg-slate-800/90 border border-slate-700/80 rounded-xl px-3 py-2 self-start shadow-sm">
          <View className="p-1.5 rounded-lg bg-[#0284C7]/10 mr-2 border border-[#0284C7]/20">
            <Ionicons name="calendar-outline" size={16} color="#0284C7" />
          </View>
          <input
            type="date"
            value={date.toISOString().split('T')[0]}
            min={new Date().toISOString().split('T')[0]}
            max={maxDate.toISOString().split('T')[0]}
            onChange={(e) => {
              if (e.target.value) {
                setDate(new Date(e.target.value));
              }
            }}
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              colorScheme: 'dark',
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'inherit',
            }}
          />
        </View>
      ) : (
        /* Mobile Native Picker Button */
        <View className="w-full">
          <TouchableOpacity
            onPress={togglePicker}
            activeOpacity={0.8}
            className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-3 flex-row items-center justify-between shadow-lg shadow-slate-900/40"
          >
            <View className="flex-row items-center">
              <View className="p-1.5 rounded-lg bg-[#0284C7]/10 mr-3 border border-[#0284C7]/20">
                <Ionicons name="calendar" size={18} color="#0284C7" />
              </View>
              <Text className="text-white text-sm font-bold">
                {date.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
            </View>

            <Ionicons name="chevron-down" size={18} color="#94A3B8" />
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              minimumDate={new Date()}
              maximumDate={maxDate}
              onValueChange={handleValueChange}
              onDismiss={handleDismiss}
              accentColor="#0284C7"
              textColor="#FFFFFF"
            />
          )}
        </View>
      )}
    </View>
  );
}