export function toggleFaq(currentId: string | null, selectedId: string): string | null {
  return currentId === selectedId ? null : selectedId
}
