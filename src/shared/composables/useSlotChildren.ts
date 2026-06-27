import { type Slots, type VNode, type Component } from 'vue'

export function use_slot_children<T>(
  slots: Slots,
  target_component: Component,
  mapper: (vnode: VNode) => T,
): T[] {
  const children = slots.default?.() ?? []

  return children
    .filter((v): v is VNode => typeof v !== 'string' && v != null)
    .filter((v) => v.type === target_component)
    .map(mapper)
}
