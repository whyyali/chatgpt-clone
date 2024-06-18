import { StyleSheet, View } from 'react-native';
import AnimatedIntro from '@/components/AnimatedIntro';
import BottomLoginSheet from '@/components/BottomLoginSheet';

const Page = () => {
  return (
    <View style={styles.container}>
        <AnimatedIntro />
        <BottomLoginSheet />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})