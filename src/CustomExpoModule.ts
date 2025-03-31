import { NativeModule, requireNativeModule } from 'expo';

import { CustomExpoModuleEvents } from './CustomExpoModule.types';

declare class CustomExpoModule extends NativeModule<CustomExpoModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<CustomExpoModule>('CustomExpoModule');
