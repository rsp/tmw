export function factorial(n: u32): u32 {
  return n < 1 ? 1 : n * factorial(n - 1);
}
