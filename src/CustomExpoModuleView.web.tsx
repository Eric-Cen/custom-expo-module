import * as React from 'react';

import { CustomExpoModuleViewProps } from './CustomExpoModule.types';

export default function CustomExpoModuleView(props: CustomExpoModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
