export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newB = new ArrayBuffer(length);
  const int8 = new Int8Array(newB, 0, length);
  int8.set([value], position);
  return new DataView(newB);
}
