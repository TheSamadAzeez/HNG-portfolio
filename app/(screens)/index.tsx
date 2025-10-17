import { View, Text, ScrollView, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`} edges={['top']}>
      <ScrollView className={isDark ? 'bg-gray-900' : 'bg-white'}>
        <View className="flex-1 items-center px-6 py-8">
          {/* Theme Toggle */}
          <View className="mb-6 w-full flex-row items-center justify-end">
            <Ionicons name="sunny" size={20} color={isDark ? '#9ca3af' : '#f59e0b'} />
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: '#d1d5db', true: '#60a5fa' }}
              thumbColor={isDark ? '#3b82f6' : '#f3f4f6'}
              className="mx-2"
            />
            <Ionicons name="moon" size={20} color={isDark ? '#60a5fa' : '#6b7280'} />
          </View>

          {/* Profile Image */}
          <Image
            source={require('../../assets/profile-image.jpg')}
            className="mb-6 h-32 w-32 rounded-full"
            style={{ resizeMode: 'center' }}
          />

          {/* Name and Title */}
          <Text className={`mb-2 text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Azeez Samad
          </Text>
          <Text className={`mb-8 text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Mobile Developer
          </Text>

          {/* Introduction */}
          <View className={`mb-6 w-full rounded-2xl p-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Text
              className={`text-center text-base leading-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
              Welcome to my portfolio! I&apos;m a passionate mobile developer specializing in React
              Native and cross-platform app development. I love creating beautiful, performant, and
              user-friendly mobile experiences.
            </Text>
          </View>

          {/* Stats Cards */}
          <View className="mb-6 w-full flex-row justify-between">
            <View
              className={`mr-2 flex flex-1 items-center rounded-xl p-4 ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <Text
                className={`mb-1 text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                5+
              </Text>
              <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Projects
              </Text>
            </View>

            <View
              className={`ml-2 flex flex-1 items-center rounded-xl p-4 ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
              <Text
                className={`mb-1 text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                4+
              </Text>
              <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Years Exp.
              </Text>
            </View>
          </View>

          {/* Quick Links */}
          <View className="w-full">
            <Text
              className={`mb-4 text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </Text>

            <View className="flex-row justify-around">
              <View className="items-center">
                <View
                  className={`mb-2 h-14 w-14 items-center justify-center rounded-full ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <Ionicons name="logo-github" size={28} color={isDark ? '#60a5fa' : '#3b82f6'} />
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  GitHub
                </Text>
              </View>

              <View className="items-center">
                <View
                  className={`mb-2 h-14 w-14 items-center justify-center rounded-full ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <Ionicons name="logo-linkedin" size={28} color={isDark ? '#60a5fa' : '#3b82f6'} />
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  LinkedIn
                </Text>
              </View>

              <View className="items-center">
                <View
                  className={`mb-2 h-14 w-14 items-center justify-center rounded-full ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <Ionicons name="logo-twitter" size={28} color={isDark ? '#60a5fa' : '#3b82f6'} />
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Twitter
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
