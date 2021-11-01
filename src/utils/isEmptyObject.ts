export default function isEmpty(obj: Object | null) {
  if (obj) {
    return Object.keys(obj).length === 0;
  }
  return null;
}
