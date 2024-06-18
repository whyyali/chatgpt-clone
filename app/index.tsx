import { StyleSheet, View } from 'react-native';
import AnimatedIntro from '@/components/AnimatedIntro';

const Page = () => {
  return (
    <View style={styles.container}>
        <AnimatedIntro />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})