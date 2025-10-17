# HNG Portfolio App

A beautiful and modern Personal Portfolio App built with React Native, Expo, and NativeWind for HNG Internship Stage 0.

## Features

✨ **Complete Portfolio Sections:**

- 🏠 Home - Profile with introduction and quick stats
- 👤 About - Personal background, experience timeline, and interests
- 💻 Skills - Technical skills with progress bars, tools & technologies
- 📧 Contact - Contact information and social media links

🎨 **Theme Support:**

- Light and Dark mode with smooth toggle
- Theme persistence using Context API
- Beautiful color schemes for both modes

📱 **Navigation:**

- Tab-based navigation for easy access
- Icons for each section
- Smooth transitions

## Tech Stack

- **Framework:** React Native with Expo
- **Styling:** NativeWind (TailwindCSS for React Native)
- **Navigation:** Expo Router (File-based routing)
- **State Management:** React Context API
- **Icons:** @expo/vector-icons (Ionicons)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Expo CLI
- Android Studio (for Android builds) or Xcode (for iOS builds)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <your-repo-url>
   cd HNG-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   yarn install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   yarn start
   \`\`\`

4. Run on your device:
   - Scan the QR code with Expo Go app (Android/iOS)
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator

## Building for Production

### Android APK

1. Configure app.json with your details

2. Build the APK:
   \`\`\`bash

# For development build

eas build --platform android --profile preview

# Or use expo build (legacy)

expo build:android -t apk
\`\`\`

3. The APK will be generated and you can download it

### Uploading to Appetize.io

1. Go to [Appetize.io](https://appetize.io)
2. Click "Upload" and select your APK file
3. Once uploaded, you'll get a public preview link
4. Share this link for testing

## Customization

### Personal Information

Update the following files with your information:

1. **app/index.tsx** - Update name, title, stats
2. **app/about.tsx** - Update bio, experience, interests
3. **app/skills.tsx** - Update skills, tools, certifications
4. **app/contact.tsx** - Update email, phone, social links

### Colors and Styling

All colors are defined inline using NativeWind classes. You can customize:

- Theme colors in each component
- Tab bar colors in `app/_layout.tsx`
- Icon colors throughout the app

## Project Structure

\`\`\`
HNG-portfolio/
├── app/
│ ├── \_layout.tsx # Tab navigation and theme provider
│ ├── index.tsx # Home screen
│ ├── about.tsx # About screen
│ ├── skills.tsx # Skills screen
│ └── contact.tsx # Contact screen
├── context/
│ └── ThemeContext.tsx # Theme management with Context API
├── assets/ # Images and icons
├── components/ # Reusable components (if needed)
└── global.css # Global Tailwind styles
\`\`\`

## Features Checklist

- ✅ Home screen with profile
- ✅ About section with experience
- ✅ Skills section with progress indicators
- ✅ Contact section with social links
- ✅ Light/Dark theme toggle
- ✅ Tab navigation
- ✅ Context API for state management
- ✅ NativeWind styling
- ✅ TypeScript support
- ✅ Responsive design

## Deployment

1. Build the APK using Expo/EAS Build
2. Upload to Appetize.io
3. Get the preview link
4. Submit the link along with your LinkedIn/Twitter posts

## License

MIT

## Author

Your Name - HNG Internship 2025

## Acknowledgments

- HNG Internship Program
- React Native Community
- Expo Team
