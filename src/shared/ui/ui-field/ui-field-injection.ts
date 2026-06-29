import { type InjectionKey, type Ref } from 'vue'

export interface FieldInjectionState {
  id: Ref<string>  
}

export const FIELD_STATE_KEY: InjectionKey<FieldInjectionState> = Symbol('fieldState')