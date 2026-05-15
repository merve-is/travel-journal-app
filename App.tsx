import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SeyahatScreen from '@/Screens/TravelScreen';

export default function App() {
  return (
    <SafeAreaProvider >
      <StatusBar style="auto" />
      <SeyahatScreen />
    </SafeAreaProvider>
  );
}
