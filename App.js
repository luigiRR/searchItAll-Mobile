import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Button,Alert, ScrollView,Touchable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import tw from 'twrnc';

// nativewind approach
export default function App() {
  return (
    
    <View className="flex-1 justify-center items-center bg-gray-900 ">
      <TouchableOpacity className="flex flex-row justify-between">
        <AntDesign name="home" size={24} color="white"/>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} className="bg-teal-600 p-3 rounded-lg shadow-md shadow-yellow-500">
        <Text className="text-white text-3xl font-bold ">Todo lo que Necesites</Text>
      </TouchableOpacity>
    </View>
  );
}


// // twrnc approach
// export default function App() {
//   return (
//     <View style={tw`flex-1 justify-center items-center bg-white`}>
//       <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-l`}>
//         <Text style={tw`text-white text-3xl font-bold`}>Hello World</Text>
//       </TouchableOpacity>
      
//       <StatusBar style="dark" />
//     </View>
//   );
// }
