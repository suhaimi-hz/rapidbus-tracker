import pako from "pako";

export function gZip2String(strBase64: string): string {
  // Decode base64 (convert ascii to binary)
  const strData: string = atob(strBase64);
  // Convert binary string to character-number array
  const charData: number[] = strData.split("").map((x: string) => {
    return x.charCodeAt(0);
  });
  // Turn number array into byte-array
  const binData: Uint8Array = new Uint8Array(charData);
  // Pako magic
  const nData: Uint8Array = pako.inflate(binData);
  // Convert gunzipped byteArray back to ascii string:
  return new TextDecoder("utf-8").decode(new Uint8Array(nData));
}
