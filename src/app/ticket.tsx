import { useState } from "react"
import { 
    StatusBar, 
    Text, 
    View, 
    ScrollView,
    TouchableOpacity, 
    Alert
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'

import { colors } from "@/styles/colors"

import { Header } from "@/components/header"
import { Credential } from "@/components/credential"
import { Button } from "@/components/button"

export default function Ticket() {
    const [image, setImage] = useState('')

    async function handleSelectImage() {
        try {

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4],
            })

            if (result.assets) {
                setImage(result.assets[0].uri)
            }

        } catch(e) {
            console.log(e)
            Alert.alert('Atenção!', 'Não foi possível selecionar a imagem')
        }
    }

    return (
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle='light-content'/>
            <Header title='Minha Credencial' />

            <ScrollView 
                className="-mt-28 -z-10" 
                contentContainerClassName="px-8 pb-8"
                showsVerticalScrollIndicator={false}
            >
                <Credential image={image} onChangeAvatar={handleSelectImage} />

                <FontAwesome 
                    name="angle-double-down" 
                    size={24} 
                    color={colors.gray[300]}
                    className="self-center my-6"
                />

                <Text className="text-white font-bold text-2xl mt-4">
                    Compartilhar Credencial 
                </Text>

                <Text className="text-white font-regular text-basee mt-1 mb-6">
                    Mostre ao mundo que você vai participar do Unitee Summit! 
                </Text>

                <Button title="Compartilhar" />

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{marginTop: 40}}
                >
                    <Text className="text-base text-white font-bold text-center">
                        Remover Ingresso
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}