import { ImageResponse } from "workers-og";

import { loadInvoiceFonts, receiptLayout } from "./og-shared.js";

export async function renderReceiptPng(data) {
  const fonts = await loadInvoiceFonts();
  const { width, height, tree } = receiptLayout(data);

  const response = new ImageResponse(tree, { width, height, fonts });
  return new Uint8Array(await response.arrayBuffer());
}
