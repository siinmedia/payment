import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

import { loadInvoiceFonts, receiptLayout } from "./og-shared.js";

const require = createRequire(import.meta.url);

let resvgReady = null;

async function ensureResvg() {
  if (!resvgReady) {
    resvgReady = (async () => {
      const wasm = await readFile(require.resolve("@resvg/resvg-wasm/index_bg.wasm"));
      await initWasm(wasm);
    })().catch((error) => {
      resvgReady = null;
      throw error;
    });
  }
  return resvgReady;
}

export async function renderReceiptPng(data) {
  const [fonts] = await Promise.all([loadInvoiceFonts(), ensureResvg()]);
  const { width, height, tree } = receiptLayout(data);

  const svg = await satori(tree, { width, height, fonts });
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    background: "#d9d5cb"
  });

  return resvg.render().asPng();
}
