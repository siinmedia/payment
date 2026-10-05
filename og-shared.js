// Shared, runtime-agnostic helpers for invoice rendering and OG metadata.

const FONT_SOURCES = {
  mono: "https://cdn.jsdelivr.net/npm/@fontsource/dm-mono/files/dm-mono-latin-500-normal.woff",
  script: "https://cdn.jsdelivr.net/npm/@fontsource/caveat/files/caveat-latin-700-normal.woff"
};

let fontCache = null;
let fontLoading = null;

export async function loadInvoiceFonts() {
  if (fontCache) return fontCache;
  if (fontLoading) return fontLoading;

  fontLoading = (async () => {
    const [mono, script] = await Promise.all(
      Object.values(FONT_SOURCES).map((url) =>
        fetch(url).then((response) => {
          if (!response.ok) throw new Error(`Font fetch failed: ${url}`);
          return response.arrayBuffer();
        })
      )
    );

    fontCache = [
      { name: "DM Mono", data: mono, weight: 500, style: "normal" },
      { name: "Caveat", data: script, weight: 700, style: "normal" }
    ];
    fontLoading = null;
    return fontCache;
  })().catch((error) => {
    fontLoading = null;
    throw error;
  });

  return fontLoading;
}

export function rupiah(value) {
  const number = Number(String(value).replace(/[^0-9]/g, "")) || 0;
  return "Rp" + number.toLocaleString("id-ID");
}

export function censorPhone(phone) {
  const raw = String(phone || "");
  if (raw.length <= 5) return raw;
  return raw.slice(0, 3) + "****" + raw.slice(-2);
}

export function invoiceNumber(seed) {
  const text = String(seed || "");
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 900000;
  }
  return String(hash + 100000);
}

function el(type, style, children) {
  return { type, props: { style, children } };
}

// Single visual definition of the social card. Both runtimes render this exact
// tree, so the Node preview and the deployed Worker stay pixel-identical.
export function receiptLayout({ nama, nomor, nominal, invoiceNo }) {
  const ink = "#24211e";
  const red = "#c82531";

  const row = (label, value, isLast = false) =>
    el(
      "div",
      {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        width: "100%",
        padding: "14px 0",
        borderBottom: isLast ? "none" : "1px dashed rgba(36,33,30,.45)"
      },
      [
        el(
          "div",
          { display: "flex", fontSize: 22, letterSpacing: 1.4, color: "rgba(36,33,30,.72)" },
          label
        ),
        el(
          "div",
          { display: "flex", fontSize: 30, fontWeight: 500, color: ink, maxWidth: 560 },
          value
        )
      ]
    );

  const tree = el(
    "div",
    {
      display: "flex",
      width: "100%",
      height: "100%",
      padding: 46,
      backgroundColor: "#d9d5cb",
      fontFamily: "DM Mono"
    },
    [
      el(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "34px 46px 40px",
          backgroundColor: "#f5f0e7",
          border: "1px solid #b6aea1",
          borderRadius: 2
        },
        [
          el(
            "div",
            {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingBottom: 18,
              borderBottom: "1px solid rgba(36,33,30,.3)",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 3,
              color: ink
            },
            [
              el("div", { display: "flex" }, "INVOICE"),
              el("div", { display: "flex", color: red }, `NO. ${invoiceNo}`)
            ]
          ),
          el(
            "div",
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: 22
            },
            [
              el(
                "div",
                {
                  display: "flex",
                  fontFamily: "Caveat",
                  fontSize: 116,
                  lineHeight: 0.9,
                  color: red
                },
                "SIINMedia"
              ),
              el(
                "div",
                {
                  display: "flex",
                  marginTop: 6,
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: 10,
                  color: ink
                },
                "SOFTWARE"
              ),
              el(
                "div",
                {
                  display: "flex",
                  marginTop: 12,
                  fontSize: 19,
                  letterSpacing: 3,
                  color: "rgba(36,33,30,.7)"
                },
                "/ INVOICE LAYANAN SIINMEDIA /"
              )
            ]
          ),
          el(
            "div",
            { display: "flex", flexDirection: "column", width: "100%", marginTop: 26 },
            [row("DITAGIHKAN KEPADA", nama), row("NOMOR KONTAK", censorPhone(nomor), true)]
          ),
          el(
            "div",
            {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "auto",
              paddingTop: 24,
              borderTop: `3px solid ${ink}`
            },
            [
              el(
                "div",
                { display: "flex", fontSize: 26, fontWeight: 500, letterSpacing: 3, color: ink },
                "TOTAL TAGIHAN"
              ),
              el(
                "div",
                { display: "flex", fontSize: 54, fontWeight: 500, color: red },
                rupiah(nominal)
              )
            ]
          ),
          el(
            "div",
            {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: 20
            },
            [
              el(
                "div",
                { display: "flex", fontSize: 19, fontWeight: 500, letterSpacing: 4, color: ink },
                "SCAN QRIS UNTUK MEMBAYAR"
              ),
              el(
                "div",
                {
                  display: "flex",
                  marginTop: 10,
                  fontSize: 18,
                  letterSpacing: 1,
                  color: "rgba(36,33,30,.66)"
                },
                "Terima kasih telah menggunakan layanan SIINMedia"
              )
            ]
          )
        ]
      )
    ]
  );

  return { width: 1200, height: 630, tree };
}

export function invoiceMeta({ nama, nominal }) {
  return {
    title: `Invoice Penagihan atas nama ${nama} · SIINMedia`,
    description: `Invoice layanan SIINMedia untuk ${nama}. Total tagihan ${rupiah(
      nominal
    )}. Scan QRIS untuk membayar.`
  };
}
