import { registerWebModule, NativeModule } from 'expo';

import { CustomExpoModuleEvents } from './CustomExpoModule.types';

class CustomExpoModule extends NativeModule<CustomExpoModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(CustomExpoModule);
