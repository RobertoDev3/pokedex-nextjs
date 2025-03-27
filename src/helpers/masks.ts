export function maskThreeDigits(value: string | number) {
  if (!value) return value;
  const strValue = String(value);
  const onlyNumbers = strValue.replace(/[^\d]+/g, '');
  return onlyNumbers.padStart(3, '0');
}
