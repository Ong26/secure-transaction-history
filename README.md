# YTL Digital Bank Mobile App

A React Native mobile banking application built with Expo that demonstrates secure authentication and transaction management.

## Features

- Local authentication using biometrics (fingerprint)
- Masking of sensitive data
  - It will not trigger local authentication as local authentication will be triggered everytime the app is opened
- Skeleton loading state
- Transaction list with infinite scroll pagination
- Transaction details view
- Error handling and fallback UI
- Theme support with light/dark mode

## Tech Stack

- React Native with Expo
- TypeScript
- React Query for data fetching and caching
- Expo Router for navigation
- Expo Local Authentication for biometric auth

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ong26/secure-transaction-history
   cd secure-transaction-history
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run ios
   ```

4. Run on your device:
   - Install the Expo Go app on your iOS/Android device
   - Scan the QR code shown in the terminal
   - Or press 'i' for iOS simulator / 'a' for Android emulator

### Development Requirements

- PNPM
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator
- Expo Go app (for physical devices)

### Note

- First Item in transaction list is to showcase scenario of transaction not found so it will throw error
- Theme (light/dark) can be toggled in top right corner of the app
- Reload button and action button in the homepage are not functional, they are just for UI purposes
- This app was tested on iOS Simulator
