export type Widget = { id: string; label: string };

const widgets = new Map<string, Widget>();

export function createWidget(id: string, label: string): Widget {
  const widget = { id, label };
  widgets.set(id, widget);
  return widget;
}

export function getWidget(id: string): Widget | undefined {
  return widgets.get(id);
}
