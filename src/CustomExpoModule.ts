import { requireNativeModule, EventSubscription } from 'expo-modules-core';

export interface Subscription {
  remove: () => void;
}

// Define the interface for your native module
interface CustomExpoModuleInterface {
  getTheme(): string;
  setTheme(theme: string): void;

  addListener(eventName: string, listener: (event: any) => void): EventSubscription;
  removeAllListeners(eventName: string): void;
}

// This loads the native module object from the JSI
const CustomExpoModule = requireNativeModule<CustomExpoModuleInterface>('CustomExpoModule');

export default CustomExpoModule;
