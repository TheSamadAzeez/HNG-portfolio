import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function About() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`} edges={['top']}>
      <ScrollView className={isDark ? 'bg-gray-900' : 'bg-white'}>
        <View className="flex-1 px-6 py-8">
          {/* Header */}
          <Text className={`mb-6 text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </Text>

          {/* Bio Section */}
          <View className={`mb-6 rounded-2xl p-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <Text
              className={`mb-4 text-base leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I&apos;m a dedicated mobile developer with a passion for creating seamless
              cross-platform applications. My journey in mobile development started with a curiosity
              about how apps work, and it has grown into a full-fledged career.
            </Text>
            <Text className={`text-base leading-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I specialize in React Native and have experience building apps from concept to
              deployment. I believe in writing clean, maintainable code and creating intuitive user
              experiences that delight users.
            </Text>
          </View>

          {/* Experience Timeline */}
          <Text className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </Text>

          <View className="mb-6">
            {/* Experience Item 1 */}
            <View className="mb-6 flex-row">
              <View className="mr-4 items-center">
                <View
                  className={`h-12 w-12 items-center justify-center rounded-full ${
                    isDark ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                  <Ionicons name="briefcase" size={24} color={isDark ? '#60a5fa' : '#3b82f6'} />
                </View>
                <View
                  className={`mt-2 w-0.5 flex-1 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
                  style={{ minHeight: 40 }}
                />
              </View>
              <View className="flex-1">
                <Text
                  className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Mobile Developer
                </Text>
                <Text className={`mb-2 text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  VIGORIDE • 2025 - Present
                </Text>
                <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Developing and maintaining mobile applications using React Native. Working with
                  cross-functional teams to deliver high-quality solutions.
                </Text>
              </View>
            </View>

            {/* Experience Item 2 */}
            <View className="mb-6 flex-row">
              <View className="mr-4 items-center">
                <View
                  className={`h-12 w-12 items-center justify-center rounded-full ${
                    isDark ? 'bg-green-900' : 'bg-green-100'
                  }`}>
                  <Ionicons name="code-slash" size={24} color={isDark ? '#4ade80' : '#16a34a'} />
                </View>
                <View
                  className={`mt-2 w-0.5 flex-1 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
                  style={{ minHeight: 40 }}
                />
              </View>
              <View className="flex-1">
                <Text
                  className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Junior Developer
                </Text>
                <Text className={`mb-2 text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  KeenzChilz • 2022 - 2024
                </Text>
                <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Built mobile applications and contributed to open-source projects. Learned best
                  practices in mobile development.
                </Text>
              </View>
            </View>

            {/* Experience Item 3 */}
            <View className="flex-row">
              <View className="mr-4 items-center">
                <View
                  className={`h-12 w-12 items-center justify-center rounded-full ${
                    isDark ? 'bg-purple-900' : 'bg-purple-100'
                  }`}>
                  <Ionicons name="school" size={24} color={isDark ? '#a78bfa' : '#9333ea'} />
                </View>
              </View>
              <View className="flex-1">
                <Text
                  className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Computer Science Degree
                </Text>
                <Text className={`mb-2 text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  University • 2018 - 2022
                </Text>
                <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Studied software engineering, mobile development, and computer science
                  fundamentals.
                </Text>
              </View>
            </View>
          </View>

          {/* Interests */}
          <Text className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Interests & Hobbies
          </Text>

          <View className="mb-4 flex-row flex-wrap">
            {[
              'UI/UX Design',
              'Gaming',
              'Tech Blogs',
              'Reading Novels',
              'Photography',
              'Travel',
            ].map((interest, index) => (
              <View
                key={index}
                className={`mb-2 mr-2 rounded-full px-4 py-2 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                <Text className={isDark ? 'text-gray-300' : 'text-gray-700'}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
