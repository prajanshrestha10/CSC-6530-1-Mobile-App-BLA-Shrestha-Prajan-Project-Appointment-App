import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function FindSlots({date, slots, selectedSlot, setSelectedSlot}) {
    const [slotsVisible, setSlotsVisible] = useState(false);

    const handlePress = () => {
        setSlotsVisible(!slotsVisible);
    }

    const handleSlotPress = (slot) => {
        let prevSlot = selectedSlot;
        if (prevSlot == slot) {
            setSelectedSlot(null);
        } else {
            setSelectedSlot(slot);
        }
    };

    const handleBooking = () => {
        console.log('Handle Booking');
    }

    return (
        <View className="flex-1">
            <View className="flex-row items-center gap-3">
                {/* "Find Available Slots" Button */}
                <View className="flex-1">
                    <TouchableOpacity 
                        onPress={handlePress}
                        activeOpacity={0.8}
                        className="bg-slate-800 border border-slate-700/80 py-3 px-4 rounded-xl active:bg-slate-700 flex-row items-center justify-center shadow-sm"
                    >
                        <Text className="text-center text-slate-200 text-sm font-semibold tracking-wider">
                            Find Slots
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* "Book Slot" Button — Primary Accent CTA (shown when a slot is selected) */}
                {selectedSlot != null && (
                <View className="flex-1">
                    <TouchableOpacity 
                        onPress={handleBooking}
                        activeOpacity={0.8}
                        className="bg-[#0284C7] py-3 px-4 rounded-xl active:bg-[#0284C7]/80 flex-row items-center justify-center shadow-md shadow-[#0284C7]/20"
                    >
                        <Text className="text-center text-white text-sm font-bold tracking-wider">
                            Book Slot
                        </Text>
                    </TouchableOpacity>
                </View>
                )}
            </View>
            {/* {slotsVisible && (
                <View className="flex-row flex-wrap gap-2.5 p-3.5 bg-slate-800/40 border border-slate-700/60 rounded-xl my-2">
                    {slots && slots.length > 0 ? (
                        slots.map((slot, index) => {
                            const isSelected = selectedSlot === slot;
                            const isDisabled = selectedSlot != null && !isSelected;
    
                            return (
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={0.7}
                                    onPress={() => handleSlotPress(slot)}
                                    disabled={isDisabled}
                                    className={`px-4 py-2.5 rounded-lg border items-center justify-center ${
                                        isSelected
                                            ? "bg-[#0284C7] border-[#0284C7]"
                                            : "bg-slate-800 border-slate-700"
                                    } ${isDisabled ? "opacity-30" : "opacity-100"}`}
                                >
                                    <Text
                                        className={`text-xs font-bold tracking-wide ${
                                            isSelected ? "text-white" : "text-slate-300"
                                        }`}
                                    >
                                        {slot}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })
                    ) : (
                        <View className="w-full py-4 items-center justify-center">
                            <Text className="text-slate-400 text-xs font-semibold tracking-wide">
                                No available slots for this date.
                            </Text>
                        </View>
                    )}
                </View>
            )} */}
            {slotsVisible && (
                <View className="p-3.5 bg-slate-800/40 border border-slate-700/60 rounded-xl my-2">
                    {/* Header Section: Total Slots Counter */}
                    {slots && slots.length > 0 && (
                        <View className="flex-row items-center justify-between mb-3 px-1">
                            <Text className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                                Available Slots
                            </Text>
                            <View className="bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                            <Text className="text-[#0284C7] text-xs font-bold">
                                {slots.length} {slots.length === 1 ? 'Slot' : 'Slots'}
                            </Text>
                            </View>
                        </View>
                    )}

                    {/* Slots Grid */}
                    {slots && slots.length > 0 ? (
                        <View className="flex-row flex-wrap gap-2.5">
                            {slots.map((slot, index) => {
                                const isSelected = selectedSlot === slot;
                                const isDisabled = selectedSlot != null && !isSelected;

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={0.7}
                                        onPress={() => handleSlotPress(slot)}
                                        disabled={isDisabled}
                                        className={`px-4 py-2.5 rounded-lg border items-center justify-center ${
                                            isSelected
                                            ? "bg-[#0284C7] border-[#0284C7]"
                                            : "bg-slate-800 border-slate-700"
                                        } ${isDisabled ? "opacity-30" : "opacity-100"}`}
                                    >
                                    <Text
                                        className={`text-xs font-bold tracking-wide ${
                                        isSelected ? "text-white" : "text-slate-300"
                                        }`}
                                    >
                                        {slot}
                                    </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ) : (
                        <View className="w-full py-4 items-center justify-center">
                            <Text className="text-slate-400 text-xs font-semibold tracking-wide">
                                No available slots for this date.
                            </Text>
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}

