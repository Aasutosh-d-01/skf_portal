export async function createOrderDraft(items: Array<{ id: string; quantity: number }>, source = "website") {
  const suffix=Math.random().toString(36).slice(2,6).toUpperCase();
  const reference=`SKF-${Date.now().toString(36).toUpperCase()}-${suffix}`;
  void items;void source;
  return {reference,listedTotal:0};
}
