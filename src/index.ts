// Reexport the native module. On web, it will be resolved to CustomExpoModule.web.ts
// and on native platforms to CustomExpoModule.ts
export { default } from './CustomExpoModule';
export { default as CustomExpoModuleView } from './CustomExpoModuleView';
export * from  './CustomExpoModule.types';
