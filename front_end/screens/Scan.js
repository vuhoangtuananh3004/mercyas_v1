import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import SwitchButton from '../components/ScanReceipt/SwitchButton'
import Checkbox from 'expo-checkbox';
import MyCamera from '../components/Camera/MyCamera';
import Manually from '../components/ScanReceipt/Manually';

const Scan = () => {
    const [isStore, setStore] = useState(false);
    const [isDate, setDate] = useState(false);
    const [isTotal, setTotal] = useState(false);
    const [isManual, setManual] = useState(false);


    onWitchClick = () => {
        setManual(!isManual)
    }
    return (
        <SafeAreaView className="flex-1 items-center">
            <SwitchButton onClickManual={onWitchClick} />

            <View className="px-2 mt-4">
                <Text className="text-center">
                    Kindly position the receipt within the designated frame
                </Text>
            </View>

            {isManual ?
                <Manually />
                :
                <View className=" mt-4 w-4/5 h-4/6 ">
                    <MyCamera />

                    <View className="flex flex-row w-full justify-evenly mt-4">
                        <View className="flex flex-row gap-2">
                            <Checkbox value={isStore} onValueChange={setStore} />
                            <Text>Store</Text>
                        </View>
                        <View className="flex flex-row gap-2">
                            <Checkbox value={isDate} onValueChange={setDate} />
                            <Text>Date</Text>
                        </View>
                        <View className="flex flex-row gap-2">
                            <Checkbox value={isTotal} onValueChange={setTotal} />
                            <Text>Total</Text>
                        </View>
                    </View>
                </View>
            }


        </SafeAreaView>
    )
}

export default Scan