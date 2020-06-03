let localConfig = {};

if (process.env.LOCAL_CONFIG_FILE) {
  localConfig = require(process.env.LOCAL_CONFIG_FILE);
}

let {
  bundleIdentifier,
  googleServicesPlist = "./GoogleService-Info.plist",
  googleServicesJson = "./google-services.json",
  googleReservedClientId = "com.googleusercontent.apps.682793596171-i7d7f566bivop6gronrpcc67fqdecg3t",
  uriScheme = "plogalong",
  ...extra
} = localConfig;

if (!bundleIdentifier) {
  try {
    const googleConfig = require(googleServicesJson);
    bundleIdentifier = googleConfig.client[0].client_info.android_client_info.package_name;
  } catch (_) {
    bundleIdentifier = "com.plogalong.Plogalong";
  }
}

export default ({config}) => {
  return {
    "expo": {
      "name": "Plogalong",
      "slug": "plogalong",
      "privacy": "public",
      "sdkVersion": "36.0.0",
      "platforms": [
        "ios",
        "android"
      ],
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/images/icon.png",
      "splash": {
        "image": "./assets/images/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "infoPlist": {
          "NSLocationWhenInUseUsageDescription": "ABC"
        },
        "bundleIdentifier": bundleIdentifier,
        "supportsTablet": false,
        "config": {
          "googleSignIn": {
            "reservedClientId": googleReservedClientId
          }
        },
        "googleServicesFile": googleServicesPlist,
        "usesAppleSignIn": true
      },
      "android": {
        "package": bundleIdentifier,
        // "googleServicesFile": googleServicesJson
      },
      "packagerOpts": {
        "config": "metro.config.js",
        "sourceExts": ["expo.ts", "expo.tsx", "expo.js", "expo.jsx", "ts", "tsx", "js", "jsx", "json", "wasm", "svg"]
      },
      "scheme": uriScheme,
      "extra": extra
    }
  };
};
