import 'dotenv/config';

export default {
  expo: {
    name: "Exoskeleton",
    slug: "Exoskeleton",
    version: "1.0.0",
    platforms: ["ios", "android", "web"],
    android: {
      package: "com.krishnanx.Exoskeleton",
      newArchEnabled: true
    },
    ios: {
      bundleIdentifier: "com.krishnanx.Exoskeleton",
      newArchEnabled: true
    },
    extra: {
      SERVER: process.env.SERVER
    }
  }
};
