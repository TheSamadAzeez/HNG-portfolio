import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

interface ContactMethod {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  url: string;
  color: string;
  darkColor: string;
}

export default function Contact() {
  const { isDark } = useTheme();

  const contactMethods: ContactMethod[] = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'azeezsamad@yopmail.com',
      url: 'mailto:azeezsamad@yopmail.com',
      color: '#ef4444',
      darkColor: '#f87171',
    },
    {
      icon: 'call',
      label: 'Phone',
      value: '+234 800 000 0000',
      url: 'tel:+2348000000000',
      color: '#16a34a',
      darkColor: '#4ade80',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Lagos, Nigeria',
      url: '',
      color: '#9333ea',
      darkColor: '#a78bfa',
    },
  ];

  const socialLinks: ContactMethod[] = [
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: '@thesamadazeez',
      url: 'https://github.com/thesamadazeez',
      color: '#1f2937',
      darkColor: '#f9fafb',
    },
    {
      icon: 'logo-linkedin',
      label: 'LinkedIn',
      value: 'Samad Azeez',
      url: 'https://www.linkedin.com/in/thesamadazeez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5',
      darkColor: '#60a5fa',
    },
    {
      icon: 'logo-twitter',
      label: 'Twitter',
      value: '@thesamadazeez',
      url: 'https://twitter.com/thesamadazeez',
      color: '#1da1f2',
      darkColor: '#60a5fa',
    },
    {
      icon: 'logo-instagram',
      label: 'Instagram',
      value: '@thesamadazeez',
      url: 'https://instagram.com/thesamadazeez',
      color: '#e4405f',
      darkColor: '#f472b6',
    },
  ];

  const handlePress = (url: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`} edges={['top']}>
      <ScrollView className={isDark ? 'bg-gray-900' : 'bg-white'}>
        <View className="flex-1 px-6 py-8">
          {/* Header */}
          <Text className={`mb-2 text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </Text>
          <Text className={`mb-8 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to reach out to me for collaborations or just a friendly chat!
          </Text>

          {/* Contact Methods */}
          <Text className={`mb-4 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Contact Information
          </Text>

          {contactMethods.map((method, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(method.url)}
              disabled={!method.url}
              className={`mb-4 flex-row items-center rounded-2xl p-5 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
              <View
                className="mr-4 h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: isDark ? `${method.darkColor}20` : `${method.color}15` }}>
                <Ionicons
                  name={method.icon}
                  size={24}
                  color={isDark ? method.darkColor : method.color}
                />
              </View>
              <View className="flex-1">
                <Text className={`mb-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {method.label}
                </Text>
                <Text
                  className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {method.value}
                </Text>
              </View>
              {method.url && (
                <Ionicons name="chevron-forward" size={20} color={isDark ? '#9ca3af' : '#6b7280'} />
              )}
            </TouchableOpacity>
          ))}

          {/* Social Media */}
          <Text
            className={`mb-4 mt-6 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Connect With Me
          </Text>

          <View className="mb-6 flex-row flex-wrap justify-between">
            {socialLinks.map((social, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(social.url)}
                className={`mb-4 items-center rounded-2xl p-5 ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                }`}
                style={{ width: '48%' }}>
                <View
                  className="mb-3 h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: isDark ? `${social.darkColor}20` : `${social.color}15`,
                  }}>
                  <Ionicons
                    name={social.icon}
                    size={32}
                    color={isDark ? social.darkColor : social.color}
                  />
                </View>
                <Text
                  className={`mb-1 text-base font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  {social.label}
                </Text>
                <Text
                  className={`text-center text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {social.value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Message Section */}
          <View className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
            <View className="items-center">
              <Ionicons name="chatbubbles" size={48} color={isDark ? '#60a5fa' : '#3b82f6'} />
              <Text
                className={`mb-2 mt-4 text-center text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                Let&apos;s Work Together!
              </Text>
              <Text
                className={`mb-4 text-center text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </Text>
              <TouchableOpacity
                onPress={() => handlePress('mailto:azeezsamad@yopmail.com')}
                className={`rounded-full px-6 py-3 ${isDark ? 'bg-blue-600' : 'bg-blue-600'}`}>
                <Text className="font-semibold text-white">Send me an email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
