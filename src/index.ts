// Reexport the native module. On web, it will be resolved to CustomExpoModule.web.ts

import { EventSubscription } from 'expo-modules-core';

import CustomExpoModule, { Subscription } from './CustomExpoModule';

export type Theme = 'light' | 'dark' | 'system';

export type ThemeChangeEvent = {
  theme: Theme;
};

export function getTheme(): string {
  return CustomExpoModule.getTheme();
}

export function setTheme(theme: string): void {
  CustomExpoModule.setTheme(theme);
}

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): EventSubscription {
  return CustomExpoModule.addListener('onChangeTheme', listener);
}

export function addListener(
  eventName: string,
  listener: (event: any) => void
): EventSubscription {
  return CustomExpoModule.addListener(eventName, listener);
}

export function removeAllListeners(eventName: string): void {
  CustomExpoModule.removeAllListeners(eventName);
}
