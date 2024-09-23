TEST AUTOMATION MOBILE - TOKOPEDIA.APK



1. Install Homebrew (if not installed)
   Homebrew is a package manager that simplifies the installation of software on macOS. Open Terminal and run:
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. Install Node.js
   Appium requires Node.js, so install it via Homebrew:
   brew install node

   You can check if Node.js was installed successfully:
   node -v
   npm -v

3. Install Java Development Kit (JDK)
   Appium needs Java to interact with Android. Install it using Homebrew:
   brew install --cask temurin
   Verify installation:
   java -version

4. Install Android SDK
   You can install the Android SDK via Android Studio or directly using Homebrew.
   If you install Android Studio, it will automatically install the SDK during the setup.
   To install via Homebrew, use:
   brew install --cask android-platform-tools
   
   You need to set environment variables for Android SDK in your shell configuration file (~/.bash_profile, ~/.zshrc, etc.):
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools

6. Install Appium
   Install Appium globally using npm:
   npm install -g appium
   To verify installation:
   appium -v

7. Install Appium Doctor
   Appium Doctor helps you verify that all necessary dependencies are installed.
   npm install -g appium-doctor
   appium-doctor --android

8. Install Android Virtual Device (AVD) or Connect a Real Device
   If you want to test on an emulator, you can create a virtual device using Android Studio.
   If testing on a real device, enable Developer Options and USB Debugging on your Android phone.

9. Start Appium Server
   Now you can start the Appium server:
   appium (normal port)
   appium -p4725 --allow-cors (port 4725)

10. Run script & Run Report
    npm run test
    npm run report

