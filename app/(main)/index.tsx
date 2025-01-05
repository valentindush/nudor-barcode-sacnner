import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import twrnc from 'twrnc'

const Home = () => {

    return (
        <ThemedView style={twrnc`flex-1 p-6`}>
            <ThemedView style={twrnc`py-4`}>
                <ThemedView style={twrnc`flex flex-row gap-2`}>
                    <ThemedText style={twrnc`text-2xl font-semibold`}>BARCODE</ThemedText>
                    <ThemedText style={twrnc`text-2xl font-semibold text-[#615EFC]`}>SCANNER</ThemedText>
                </ThemedView>
                
            </ThemedView>
        </ThemedView>
    )
}

export default Home