import 'dotenv/config';

export default {
  expo: {
    name: "ExoSense",
    slug: "ExoSense",
    version: "1.0.0",
    platforms: ["ios", "android", "web"],
    android: {
      package: "com.krishnanx.ExoSense",
      newArchEnabled: true
    },
    ios: {
      bundleIdentifier: "com.krishnanx.ExoSense",
      newArchEnabled: true
    },
    extra: {
      SERVER: process.env.SERVER,
      WEBSOC: process.env.WEBSOC
    }
  }
};
