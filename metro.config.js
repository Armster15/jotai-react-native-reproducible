// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// See https://reactnative.dev/blog/2023/06/21/0.72-metro-package-exports-symlinks#package-exports-support-beta
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
