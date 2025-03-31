import { requireNativeView } from 'expo';
import * as React from 'react';

import { CustomExpoModuleViewProps } from './CustomExpoModule.types';

const NativeView: React.ComponentType<CustomExpoModuleViewProps> =
  requireNativeView('CustomExpoModule');

export default function CustomExpoModuleView(props: CustomExpoModuleViewProps) {
  return <NativeView {...props} />;
}
