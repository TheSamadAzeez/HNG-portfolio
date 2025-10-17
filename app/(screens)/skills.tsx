import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

interface Skill {
  name: string;
  level: number;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  darkColor: string;
}

interface Tool {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  darkColor: string;
}

export default function Skills() {
  const { isDark } = useTheme();

  const technicalSkills: Skill[] = [
    { name: 'React Native', level: 90, icon: 'logo-react', color: '#3b82f6', darkColor: '#60a5fa' },
    {
      name: 'JavaScript',
      level: 85,
      icon: 'logo-javascript',
      color: '#f59e0b',
      darkColor: '#fbbf24',
    },
    { name: 'TypeScript', level: 80, icon: 'code-slash', color: '#3b82f6', darkColor: '#60a5fa' },
    { name: 'React', level: 85, icon: 'logo-react', color: '#06b6d4', darkColor: '#22d3ee' },
    { name: 'Node.js', level: 75, icon: 'logo-nodejs', color: '#16a34a', darkColor: '#4ade80' },
    { name: 'Git', level: 80, icon: 'git-branch', color: '#ef4444', darkColor: '#f87171' },
  ];

  const tools: Tool[] = [
    { name: 'Expo', icon: 'rocket', color: '#1f2937', darkColor: '#f9fafb' },
    { name: 'VS Code', icon: 'code-working', color: '#3b82f6', darkColor: '#60a5fa' },
    { name: 'Firebase', icon: 'flame', color: '#f59e0b', darkColor: '#fbbf24' },
    { name: 'Zustand', icon: 'beer', color: '#9333ea', darkColor: '#a78bfa' },
    { name: 'REST API', icon: 'cloud', color: '#06b6d4', darkColor: '#22d3ee' },
    { name: 'GraphQL', icon: 'git-network', color: '#ec4899', darkColor: '#f472b6' },
    { name: 'Docker', icon: 'cube', color: '#06b6d4', darkColor: '#22d3ee' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
  ];

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`} edges={['top']}>
      <ScrollView className={isDark ? 'bg-gray-900' : 'bg-white'}>
        <View className="flex-1 px-6 py-8">
          {/* Header */}
          <Text className={`mb-6 text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </Text>

          {/* Technical Skills */}
          <Text className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </Text>

          {technicalSkills.map((skill, index) => (
            <View key={index} className="mb-6">
              <View className="mb-2 flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Ionicons
                    name={skill.icon}
                    size={20}
                    color={isDark ? skill.darkColor : skill.color}
                  />
                  <Text
                    className={`ml-2 text-base font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {skill.name}
                  </Text>
                </View>
                <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.level}%
                </Text>
              </View>
              <View className={`h-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <View
                  className="h-2 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: isDark ? skill.darkColor : skill.color,
                  }}
                />
              </View>
            </View>
          ))}

          {/* Tools & Technologies */}
          <Text
            className={`mb-4 mt-8 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Tools & Technologies
          </Text>

          <View className="mb-8 flex-row flex-wrap">
            {tools.map((tool, index) => (
              <View
                key={index}
                className={`mb-3 mr-3 flex-row items-center rounded-xl px-4 py-3 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                <Ionicons name={tool.icon} size={20} color={isDark ? tool.darkColor : tool.color} />
                <Text
                  className={`ml-2 text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {tool.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Soft Skills */}
          <Text className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Soft Skills
          </Text>

          <View className="mb-4 flex-row flex-wrap">
            {softSkills.map((skill, index) => (
              <View
                key={index}
                className={`mb-3 mr-2 rounded-full px-5 py-3 ${
                  isDark ? 'border border-gray-700 bg-gray-800' : 'border border-gray-200 bg-white'
                }`}>
                <Text className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  ✓ {skill}
                </Text>
              </View>
            ))}
          </View>

          {/* Certifications */}
          <Text
            className={`mb-4 mt-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </Text>

          <View className={`mb-4 rounded-2xl p-5 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <View className="mb-2 flex-row items-center">
              <Ionicons name="ribbon" size={24} color={isDark ? '#fbbf24' : '#f59e0b'} />
              <Text
                className={`ml-3 text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                React Native Certification
              </Text>
            </View>
            <Text className={`ml-9 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Issued by: FrontEnd Masters • 2024
            </Text>
          </View>

          <View className={`rounded-2xl p-5 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <View className="mb-2 flex-row items-center">
              <Ionicons name="ribbon" size={24} color={isDark ? '#60a5fa' : '#3b82f6'} />
              <Text
                className={`ml-3 text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Mobile Development Bootcamp
              </Text>
            </View>
            <Text className={`ml-9 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Issued by: Code of School • 2023
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
