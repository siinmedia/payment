const htmlAdmin = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Group%2063-958b6HNLF5qoQkgnDpEQvEGUy16GdB.png">
  <title>Admin - Buat Link QRIS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F2P3BLQEH7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F2P3BLQEH7');
</script>

  <!-- Open Graph untuk Facebook, WhatsApp, LinkedIn -->
  <meta property="og:title" content="Bayar Praktis Pakai QRIS">
  <meta property="og:description" content="Transaksi cepat, aman, dan praktis hanya dengan scan QRIS. Cocok buat bisnis dan kebutuhan harianmu.">
  <meta property="og:image" content="https://siin.lol/payment.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bayar Praktis Pakai QRIS">
  <meta name="twitter:description" content="Transaksi cepat, aman, dan praktis hanya dengan scan QRIS. Cocok buat bisnis dan kebutuhan harianmu.">
  <meta name="twitter:image" content="https://siin.lol/payment.png">
  
  <style>
  :root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --accent-color: #ffe66d;
    --background-color: #f7f5e6;
    --text-color: #2d3436;
    --border-color: #333333;
    --box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    --hover-shadow: 0 10px 25px rgba(0,0,0,0.18);
    --active-shadow: 0 6px 15px rgba(0,0,0,0.15);
    --border-radius: 8px;
    --input-radius: 6px;
    --button-radius: 6px;
    --retro-pattern: repeating-linear-gradient(45deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 10px, transparent 10px, transparent 20px);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'RetroFont';
    src: url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    font-family: 'DM Mono', 'Courier New', monospace;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: var(--retro-pattern), radial-gradient(circle, rgba(247,245,230,1) 0%, rgba(235,231,202,1) 100%);
  }

  .container {
    width: 90%;
    max-width: 500px;
    margin: 20px auto;
    background-color: #ffffff;
    border: 3px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow), 0 0 0 10px rgba(255,255,255,0.2);
    padding: 30px;
    position: relative;
    background-image: linear-gradient(0deg, rgba(255,255,255,0.8) 50%, rgba(247,245,230,0.8) 50%);
    background-size: 100% 4px;
  }

  .header-ribbon {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 5px 15px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    border: 2px solid var(--border-color);
    border-radius: 4px;
    z-index: 10;
  }

  h1, h2 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 700;
    color: var(--primary-color);
    text-shadow: 1px 1px 0 var(--border-color);
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    font-family: 'DM Mono', 'Courier New', monospace;
    border: 2px solid var(--border-color);
    background-color: #f9f9f9;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border-radius: var(--input-radius);
  }

  input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1), 0 0 0 3px rgba(255,107,107,0.2);
  }

  button {
    display: block;
    width: 100%;
    padding: 16px;
    margin-top: 25px;
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: 'DM Mono', 'Courier New', monospace;
    border: 2px solid var(--border-color);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: var(--button-radius);
    letter-spacing: 1px;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: var(--hover-shadow);
    background-color: #ff5252;
  }

  button:active {
    transform: translateY(0);
    box-shadow: var(--active-shadow);
  }

  .output {
    margin-top: 30px;
    word-break: break-word;
    background: #f9f9f9;
    padding: 20px;
    border: 2px solid var(--border-color);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-size: 0.95rem;
    border-radius: var(--input-radius);
    position: relative;
  }

  .output-title {
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 0.85rem;
    color: #555;
  }

  .dashed-border {
    border-top: 2px dashed var(--border-color);
    margin: 25px 0;
  }

  #result {
    margin-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border: 2px solid var(--border-color);
    border-radius: var(--input-radius);
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  #result a {
    color: var(--primary-color);
    font-weight: bold;
    text-decoration: none;
  }

  #result a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .container {
      width: 95%;
      margin: 20px auto;
      padding: 25px 15px;
    }

    h1, h2 {
      font-size: 1.5rem;
    }

    input, button {
      padding: 12px;
    }
  }

  @media (max-width: 400px) {
    body {
      padding: 10px;
    }

    .container {
      width: 100%;
      padding: 20px 12px;
      border-radius: 6px;
    }

    h1, h2 {
      font-size: 1.3rem;
    }

    .header-ribbon {
      font-size: 0.8rem;
    }
  }

  /* Match the vintage invoice receipt */
  html, body { height: auto; min-height: 100%; }
  body {
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #d9d5cb;
    background-image: radial-gradient(rgba(62, 52, 43, .09) .55px, transparent .65px), radial-gradient(rgba(255, 255, 255, .34) .55px, transparent .65px), linear-gradient(105deg, rgba(255,255,255,.2), transparent 42%, rgba(98,80,58,.05));
    background-position: 0 0, 3px 3px, 0 0;
    background-size: 5px 5px, 7px 7px, 100% 100%;
    font-family: 'DM Mono', 'Courier New', monospace;
  }
  .container {
    width: min(100%, 620px);
    max-width: 620px;
    margin: 24px auto;
    padding: 34px 42px 40px;
    border: 1px solid #b6aea1;
    border-radius: 2px;
    background-color: rgba(245, 240, 231, .88);
    background-image: radial-gradient(rgba(62, 52, 43, .065) .5px, transparent .6px);
    background-size: 5px 5px;
    box-shadow: 0 18px 40px rgba(50, 44, 35, .2);
  }
  .header-ribbon { display: none; }
  .admin-meta { display: flex; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid rgba(36,33,30,.25); color: #24211e; font-size: .7rem; font-weight: 600; letter-spacing: .12em; }
  .admin-meta span:last-child { color: #b6222c; }
  h1, h2 {
    margin: 26px 0 10px;
    color: #c82531;
    font-family: 'Caveat', 'Brush Script MT', cursive;
    font-size: clamp(3.6rem, 11vw, 5.8rem);
    font-weight: 700;
    letter-spacing: -.035em;
    line-height: .8;
    text-align: center;
    text-shadow: none;
    text-transform: none;
  }
  .admin-lede { max-width: 42ch; margin: 0 auto; color: #665e55; font-size: .8rem; line-height: 1.7; text-align: center; }
  .dashed-border { margin: 24px 0; border-top: 3px solid transparent; border-image: repeating-linear-gradient(to right, #24211e 0 10px, transparent 10px 17px) 1; }
  #generate-form { margin-top: 28px; }
  .form-group { margin-bottom: 20px; }
  label { color: #24211e; font-size: .76rem; font-weight: 600; letter-spacing: .08em; }
  input {
    padding: 13px 14px;
    border: 1px solid #8e8579;
    border-radius: 2px;
    background: rgba(255, 252, 246, .55);
    box-shadow: inset 0 1px 2px rgba(55, 45, 35, .08);
    color: #24211e;
    font-family: 'DM Mono', 'Courier New', monospace;
  }
  input:focus { border-color: #b6222c; box-shadow: 0 0 0 3px rgba(182,34,44,.12); }
  button[type="submit"] {
    margin-top: 8px;
    padding: 14px;
    border: 1px solid #8f1e27;
    border-radius: 2px;
    background: #b6222c;
    box-shadow: 0 8px 16px rgba(89, 31, 25, .18);
    font-family: 'DM Mono', 'Courier New', monospace;
    letter-spacing: .04em;
  }
  button[type="submit"]:hover { background: #941c25; }
  #result { border: 1px solid #b6aea1; border-radius: 2px; background: rgba(255,252,246,.6); color: #24211e; }
  #result a { color: #b6222c; }
  .output-title { color: #b6222c; letter-spacing: .08em; }

  @media (max-width: 560px) {
    body { padding: 0; display: block; }
    .container { width: 100%; margin: 0; padding: 24px 22px 30px; border: 0; border-radius: 0; box-shadow: none; }
    h1, h2 { font-size: 3.6rem; }
  }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-ribbon">Admin Panel</div>
    <div class="admin-meta"><span>SIINMEDIA</span><span>ADMIN / QRIS</span></div>
    <h1>Buat link QRIS</h1>
    <p class="admin-lede">Buat invoice pembayaran untuk pelanggan yang menggunakan layanan SIINMedia.</p>
    <div class="dashed-border"></div>
    <form id="generate-form">
      <div class="form-group">
        <label for="nama">Nama pelanggan</label>
        <input type="text" id="nama" required>
      </div>
      <div class="form-group">
        <label for="nomor">Nomor HP pelanggan</label>
        <input type="text" id="nomor" required>
      </div>
      <div class="form-group">
        <label for="nominal">Total tagihan (Rp)</label>
        <input type="text" id="nominal" inputmode="numeric" placeholder="Contoh: 25.000" required>
      </div>
      <button type="submit">Buat invoice QRIS</button>
    </form>
    <div class="dashed-border"></div>
    <p id="result"></p>
  </div>

  <script>
    const form = document.getElementById('generate-form');
    const nominalInput = document.getElementById('nominal');
    const rupiahFormatter = new Intl.NumberFormat('id-ID');

    nominalInput.addEventListener('input', function() {
      const digits = this.value.replace(/[^0-9]/g, '');
      this.value = digits ? rupiahFormatter.format(Number(digits)) : '';
    });

    form.onsubmit = function(e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value;
      const nomor = document.getElementById('nomor').value;
      const nominal = nominalInput.value.replace(/[^0-9]/g, '');
      const data = btoa(JSON.stringify({ nama, nomor, nominal }));
      const link = location.origin + "/pay/" + data;
      document.getElementById('result').innerHTML = "<div class='output-title'>INVOICE SIAP DIBAGIKAN</div><a href='" + link + "' target='_blank' rel='noopener'>" + link + "</a>";
    };
  </script>
</body>
</html>
`;

function censorPhone(phone) {
  const raw = String(phone || "");
  if (raw.length <= 5) return raw;
  return raw.slice(0, 3) + '****' + raw.slice(-2);
}

function rupiah(value) {
  const number = Number(String(value).replace(/[^0-9]/g, '')) || 0;
  return 'Rp' + number.toLocaleString('id-ID');
}

function generatepayPage(nama, nomor, nominal, origin) {
  const total = rupiah(nominal);
  const invoiceNo = invoiceNumber(`${nama}|${nomor}|${nominal}`);
  const pageTitle = `Invoice Penagihan atas nama ${nama} · SIINMedia`;
  const pageDescription = `Invoice layanan SIINMedia untuk ${nama}. Total tagihan ${total}. Scan QRIS untuk membayar.`;
  const encoded = Buffer.from(JSON.stringify({ nama, nomor, nominal })).toString("base64");
  const ogImage = `${origin}/og/${encoded}.png`;
  const shareUrl = `${origin}/pay/${encoded}`;

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="https://h2rsi9anqnqbkvkf.public.blob.vercel-storage.com/Group%2063-958b6HNLF5qoQkgnDpEQvEGUy16GdB.png">
  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>

  <!-- Open Graph untuk Facebook, WhatsApp, LinkedIn -->
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDescription}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Invoice ${nama} - ${total}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${shareUrl}">
  <meta property="og:site_name" content="SIINMedia">
  <meta property="og:locale" content="id_ID">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${pageDescription}">
  <meta name="twitter:image" content="${ogImage}">

  <style>
    :root {
      --primary-color: #ff6b6b;
      --secondary-color: #4ecdc4;
      --accent-color: #ffe66d;
      --background-color: #f7f5e6;
      --text-color: #2d3436;
      --border-color: #333333;
      --box-shadow: 0 8px 20px rgba(0,0,0,0.12);
      --hover-shadow: 0 10px 25px rgba(0,0,0,0.18);
      --active-shadow: 0 6px 15px rgba(0,0,0,0.15);
      --border-radius: 8px;
      --input-radius: 6px;
      --button-radius: 6px;
      --retro-pattern: repeating-linear-gradient(45deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 10px, transparent 10px, transparent 20px);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @font-face {
      font-family: 'RetroFont';
      src: url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'DM Mono', 'Courier New', monospace;
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 20px;
      min-height: 100vh;
      background-image: var(--retro-pattern), radial-gradient(circle, rgba(247,245,230,1) 0%, rgba(235,231,202,1) 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .receipt-container {
      width: 90%;
      max-width: 500px;
      margin: 20px auto;
      padding: 0;
      position: relative;
      background-color: #fff;
      border: 3px solid var(--border-color);
      box-shadow: var(--box-shadow), 0 0 0 10px rgba(255,255,255,0.2);
      border-radius: var(--border-radius);
    }
    

    .receipt-header {
      background-color: var(--accent-color);
      padding: 15px;
      text-align: center;
      border-bottom: 3px solid var(--border-color);
      position: relative;
    }

    .receipt-title {
      font-size: 1.6rem;
      font-weight: bold;
      margin: 0;
      text-transform: uppercase;
      color: var(--text-color);
      letter-spacing: 1px;
      text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
    }

    .receipt-number {
      font-size: 0.8rem;
      margin-top: 5px;
      color: var(--text-color);
      opacity: 0.8;
    }

    .receipt-content {
      padding: 25px 20px;
      background-image: linear-gradient(0deg, rgba(255,255,255,0.8) 50%, rgba(247,245,230,0.8) 50%);
      background-size: 100% 4px;
    }

    .receipt-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px dashed var(--border-color);
    }

    .receipt-label {
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: uppercase;
    }

    .receipt-value {
      font-size: 0.9rem;
      text-align: right;
    }

    .receipt-total-section {
      background-color: var(--secondary-color);
      padding: 15px 20px;
      border-top: 3px solid var(--border-color);
    }

    .receipt-total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .receipt-total-label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.1rem;
    }

    .receipt-total-value {
      font-size: 1.3rem;
      font-weight: bold;
      background-color: white;
      padding: 5px 15px;
      border: 2px solid var(--border-color);
      border-radius: var(--input-radius);
    }

    .receipt-qr {
      text-align: center;
      padding: 20px 0;
      background-color: white;
    }

    .qr-container {
      display: inline-block;
      padding: 15px;
      background-color: white;
      border: 2px solid var(--border-color);
      border-radius: var(--input-radius);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .tips-section {
      margin: 20px 0;
      text-align: center;
    }

    .tips-title {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }

    .tips-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tip-btn {
      background-color: var(--background-color);
      border: 2px solid var(--border-color);
      color: var(--text-color);
      padding: 8px 15px;
      font-family: 'DM Mono', 'Courier New', monospace;
      font-weight: bold;
      font-size: 0.85rem;
      cursor: pointer;
      border-radius: var(--button-radius);
      transition: all 0.2s ease;
    }

    .tip-btn:hover {
      background-color: var(--primary-color);
      color: white;
    }

    .tip-btn.active {
      background-color: var(--primary-color);
      color: white;
    }

    .receipt-footer {
      text-align: center;
      padding: 15px;
      font-size: 0.8rem;
      border-top: 1px dashed var(--border-color);
      background-color: white;
    }

    .tear-line {
      height: 15px;
      background-image: linear-gradient(45deg, transparent 0%, transparent 45%, var(--border-color) 49%, var(--border-color) 51%, transparent 55%, transparent 100%);
      background-size: 20px 20px;
      background-repeat: repeat-x;
      margin: 0;
      position: relative;
    }

    .tear-circle-left, .tear-circle-right {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: var(--background-color);
      border: 3px solid var(--border-color);
      border-radius: 50%;
      top: -8px;
    }

    .tear-circle-left {
      left: -15px;
    }

    .tear-circle-right {
      right: -15px;
    }

    .store-badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: var(--primary-color);
      color: white;
      font-weight: bold;
      padding: 5px 10px;
      border: 2px solid var(--border-color);
      border-radius: 50%;
      box-shadow: 0 3px 8px rgba(0,0,0,0.15);
      z-index: 10;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 0.7rem;
      transform: rotate(15deg);
    }

    @media (max-width: 800px) {
      body {
        padding: 10px;
      }

      .receipt-container {
        width: 100%;
        max-width: 500px;
      }

      .receipt-title {
        font-size: 1.4rem;
      }

      .receipt-content {
        padding: 15px;
      }

      .receipt-total-value {
        font-size: 1.2rem;
        padding: 4px 10px;
      }

      .tips-buttons {
        gap: 5px;
      }

      .tip-btn {
        padding: 6px 10px;
        font-size: 0.8rem;
      }
    }

    /* Vintage thermal receipt treatment */
    body {
      background: #d9d5cb;
      background-image: radial-gradient(rgba(40, 35, 29, .09) .7px, transparent .7px), radial-gradient(rgba(255, 255, 255, .28) .7px, transparent .7px);
      background-position: 0 0, 3px 3px;
      background-size: 6px 6px;
      color: #24211e;
      overflow-x: hidden;
    }

    .receipt-container {
      width: min(100%, 560px);
      max-width: 560px;
      margin: 24px auto;
      border: 1px solid #b6aea1;
      border-radius: 2px;
      background: #f5f0e7;
      box-shadow: 0 18px 40px rgba(50, 44, 35, .2);
      overflow: hidden;
    }

    .receipt-header {
      padding: 30px 34px 24px;
      background: #f5f0e7;
      border-bottom: 0;
    }

    .receipt-topline { display: flex; justify-content: space-between; align-items: baseline; color: #b6222c; font-size: 1.35rem; font-weight: 700; letter-spacing: .04em; }
    .receipt-topline span:last-child { color: #24211e; font-size: 1rem; letter-spacing: .02em; }
    .brand-mark { margin-top: 34px; color: #c82531; font-size: clamp(2.8rem, 10vw, 5.4rem); font-style: italic; font-weight: 700; letter-spacing: -.1em; line-height: .8; text-align: center; }
    .brand-subtitle { margin-top: 14px; color: #c82531; font-size: 1.25rem; font-weight: 700; letter-spacing: .08em; text-align: center; }
    .receipt-tagline { margin-top: 20px; color: #24211e; font-size: .85rem; font-weight: 700; letter-spacing: .05em; text-align: center; }
    .tear-line { display: none; }
    .receipt-content { padding: 0 34px 24px; background: transparent; background-image: none; }
    .receipt-date { padding: 16px 0; color: #24211e; font-size: .95rem; font-weight: 700; letter-spacing: .05em; text-align: center; }
    .receipt-date span { margin-left: 8px; }
    .receipt-rule { height: 3px; margin: 0 0 20px; background: repeating-linear-gradient(to right, #24211e 0 10px, transparent 10px 17px); }
    .receipt-line { display: flex; align-items: end; justify-content: space-between; gap: 18px; margin: 16px 0; font-size: .92rem; line-height: 1.35; }
    .receipt-line > div { min-width: 0; }
    .receipt-line strong, .receipt-line span { display: block; }
    .receipt-line strong { margin-bottom: 3px; font-size: .74rem; letter-spacing: .08em; }
    .receipt-line span { overflow-wrap: anywhere; }
    .receipt-line b { flex: 0 0 auto; font-size: .95rem; }
    .tips-section { margin: 24px 0 0; text-align: left; }
    .tips-title { margin-bottom: 10px; font-size: .74rem; font-weight: 700; letter-spacing: .1em; }
    .tips-buttons { justify-content: flex-start; gap: 8px; }
    .tip-btn { padding: 8px 11px; border: 1px solid #6d665d; border-radius: 2px; background: transparent; color: #24211e; font-family: inherit; font-size: .78rem; }
    .tip-btn:hover, .tip-btn.active { border-color: #b6222c; background: #b6222c; color: #fff; }
    .receipt-total-section { padding: 20px 34px; border-top: 0; background: #f5f0e7; }
    .receipt-total-row { align-items: baseline; }
    .receipt-total-label { color: #24211e; font-size: 1.6rem; letter-spacing: .04em; }
    .receipt-total-value { padding: 0; border: 0; border-radius: 0; background: transparent; color: #24211e; font-size: 1.65rem; }
    .receipt-qr { padding: 22px 34px 28px; background: #f5f0e7; text-align: center; }
    .qr-label { margin-bottom: 12px; color: #24211e; font-size: .72rem; font-weight: 700; letter-spacing: .16em; }
    .qr-container { padding: 14px; border: 1px solid #24211e; border-radius: 0; box-shadow: none; }
    .receipt-footer { padding: 24px 34px 30px; border-top: 0; background: #f5f0e7; text-align: center; }
    .thank-you { color: #c82531; font-size: 2.2rem; font-style: italic; font-weight: 700; letter-spacing: -.05em; }
    .footer-detail { margin-top: 10px; font-size: .73rem; }
    .footer-brand { margin-top: 24px; font-size: .7rem; font-weight: 700; letter-spacing: .1em; }
    .payment-methods { padding: 20px 34px 24px; border-top: 1px dashed rgba(36,33,30,.55); background: rgba(245,240,231,.8); text-align: center; }
    .methods-title { color: #24211e; font-size: .72rem; font-weight: 700; letter-spacing: .09em; }
    .methods-subtitle { margin-top: 6px; color: #756d64; font-size: .68rem; }
    .methods-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; margin-top: 16px; }
    .payment-logo { display: flex; min-height: 42px; align-items: center; justify-content: center; padding: 7px 5px; border: 1px solid rgba(36,33,30,.22); background: rgba(255,252,246,.48); }
    .payment-logo img { display: block; width: 100%; height: 28px; object-fit: contain; }

    .receipt-container, .receipt-container button {
      font-family: 'DM Mono', 'Courier New', monospace;
      font-variant-numeric: tabular-nums;
    }
    .brand-mark, .thank-you {
      font-family: 'Caveat', 'Brush Script MT', cursive;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -.035em;
    }
    .brand-mark { font-size: clamp(3.25rem, 11vw, 5.8rem); line-height: .72; }
    .thank-you { font-size: 2.8rem; line-height: .9; }
    .receipt-topline, .receipt-total-label, .receipt-total-value { font-weight: 600; }
    .receipt-date, .receipt-line, .receipt-footer { letter-spacing: .035em; }

    /* Paper grain + reliable mobile scrolling */
    html, body { height: auto; min-height: 100%; }
    body { overflow-x: hidden; overflow-y: auto; }
    .receipt-container {
      background-color: #f5f0e7;
      background-image: radial-gradient(rgba(62, 52, 43, .09) .55px, transparent .65px), radial-gradient(rgba(255, 255, 255, .34) .55px, transparent .65px), linear-gradient(105deg, rgba(255,255,255,.2), transparent 42%, rgba(98,80,58,.05));
      background-position: 0 0, 3px 3px, 0 0;
      background-size: 5px 5px, 7px 7px, 100% 100%;
    }
    .receipt-header, .receipt-content, .receipt-total-section, .receipt-qr, .receipt-footer {
      background-color: rgba(245, 240, 231, .8);
      background-image: radial-gradient(rgba(62, 52, 43, .065) .5px, transparent .6px);
      background-size: 5px 5px;
    }

    @media (max-width: 560px) {
      body { display: block; padding: 0; overflow-y: auto; }
      .receipt-container { width: 100%; margin: 0; border: 0; box-shadow: none; }
      .receipt-header, .receipt-content, .receipt-total-section, .receipt-qr, .receipt-footer, .payment-methods { padding-left: 22px; padding-right: 22px; }
      .receipt-header { padding-top: 26px; }
      .receipt-topline { font-size: 1.05rem; }
      .receipt-topline span:last-child { font-size: .82rem; }
      .brand-mark { margin-top: 30px; font-size: 4rem; }
      .receipt-line { font-size: .82rem; }
      .receipt-total-label, .receipt-total-value { font-size: 1.35rem; }
      .tips-buttons { flex-wrap: nowrap; }
      .tip-btn { flex: 1; padding-left: 6px; padding-right: 6px; font-size: .7rem; }
      .thank-you { font-size: 2.5rem; }
      .methods-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 7px; }
      .payment-logo img { height: 30px; }
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
</head>
<body>
  <div class="receipt-container">
    <div class="receipt-header">
      <div class="receipt-topline"><span>INVOICE</span><span>NO. ${invoiceNo}</span></div>
      <div class="brand-mark">SIINMedia</div>
      <div class="brand-subtitle">SOFTWARE</div>
      <div class="receipt-tagline">/ INVOICE LAYANAN SIINMEDIA /</div>
    </div>

    <div class="receipt-content">
      <div class="receipt-date">DATE: ${new Date().toLocaleDateString('id-ID')} <span>${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span></div>
      <div class="receipt-rule"></div>

      <div class="receipt-line">
        <div><strong>DITAGIHKAN KEPADA</strong><span>${nama}</span></div>
        <b>Rp${parseInt(nominal).toLocaleString('id-ID')}</b>
      </div>
      <div class="receipt-line">
        <div><strong>NOMOR KONTAK</strong><span>${censorPhone(nomor)}</span></div>
        <b>QRIS</b>
      </div>
      <div class="receipt-rule"></div>

      <div class="tips-section">
        <div class="tips-title">TAMBAHAN PEMBAYARAN (OPSIONAL)</div>
        <div class="tips-buttons">
          <button class="tip-btn" onclick="setTips(2000)">+Rp2.000</button>
          <button class="tip-btn" onclick="setTips(7000)">+Rp7.000</button>
          <button class="tip-btn" onclick="setTips(10000)">+Rp10.000</button>
        </div>
      </div>
    </div>

    <div class="receipt-total-section">
      <div class="receipt-total-row">
        <div class="receipt-total-label">TOTAL TAGIHAN</div>
        <div class="receipt-total-value" id="total"></div>
      </div>
    </div>

    <div class="receipt-qr">
      <div class="qr-label">SCAN QRIS UNTUK MEMBAYAR</div>
      <div class="qr-container" id="qrcode"></div>
    </div>

    <section class="payment-methods" aria-label="Metode pembayaran yang didukung">
      <div class="methods-title">SCAN MENGGUNAKAN BANK &amp; E-WALLET</div>
      <div class="methods-subtitle">Gunakan aplikasi pembayaran yang kamu punya</div>
      <div class="methods-grid">
        <div class="payment-logo"><img src="https://companieslogo.com/img/orig/BBCA.JK_BIG-ebc1fcbe.png" alt="Logo BCA"></div>
        <div class="payment-logo"><img src="https://companieslogo.com/img/orig/BBRI.JK_BIG-77d169b0.png" alt="Logo Bank BRI"></div>
        <div class="payment-logo"><img src="https://companieslogo.com/img/orig/BMRI.JK-9759531a.png" alt="Logo Bank Mandiri"></div>
        <div class="payment-logo"><img src="https://companieslogo.com/img/orig/ARTO.JK_BIG-2295dbe9.png" alt="Logo Bank Jago"></div>
        <div class="payment-logo"><img src="https://companieslogo.com/img/orig/BDMN.JK-fab6521f.png" alt="Logo Bank Danamon"></div>
      </div>
    </section>

    <div class="receipt-footer">
      <div class="thank-you">Terima kasih</div>
      <div class="footer-detail">Terima kasih telah menggunakan layanan SIINMedia.<br>Simpan invoice ini sebagai bukti pembayaran.</div>
      <div class="footer-brand">SIINMEDIA · LAYANAN DIGITAL</div>
    </div>
  </div>

  <script>
  let nominal = ${parseInt(nominal)};
  let tips = 0;
  let activeButton = document.querySelector("button.active");
  
  const qrisStatic = "00020101021126610014COM.GO-JEK.WWW01189360091432840999140210G2840999140303UMI51440014ID.CO.QRIS.WWW0215ID10253780771980303UMI5204573453033605802ID5918SIINMedia Software6006JEPARA61055946262070703A0163046905";
  
  function pad(number) {
    return number < 10 ? '0' + number : number.toString();
  }

  function toCRC16(input) {
    let crc = 0xFFFF;
    for (let i = 0; i < input.length; i++) {
      crc ^= input.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    let hex = (crc & 0xFFFF).toString(16).toUpperCase();
    return hex.length === 3 ? "0" + hex : hex;
  }

  function makeDynamicQRIS(qris, nominal) {
    let qrisModified = qris.slice(0, -4);
    qrisModified = qrisModified.replace("010211", "010212");
    let qrisParts = qrisModified.split("5802ID");
    let amount = "54" + pad(nominal.toString().length) + nominal;
    amount += "5802ID";
    let output = qrisParts[0].trim() + amount + qrisParts[1].trim();
    output += toCRC16(output);
    return output;
  }

  function setTips(value) {
    tips = value;
    const total = nominal + tips;
    document.getElementById("total").innerText = "Rp" + total.toLocaleString("id-ID");
    
    // Update active button state
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].onclick.toString().includes("setTips(" + value + ")")) {
        buttons[i].classList.add("active");
        activeButton = buttons[i];
        break;
      }
    }
    
    const finalQRIS = makeDynamicQRIS(qrisStatic, total);
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    if (!window.QRCode || typeof window.QRCode.toCanvas !== "function") {
      qrContainer.textContent = "QR tidak dapat dimuat. Refresh halaman.";
      return;
    }

    const canvas = document.createElement("canvas");
    qrContainer.appendChild(canvas);
    QRCode.toCanvas(canvas, finalQRIS, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 220,
      scale: 8
    }, function (err) {
      if (err) {
        console.error("QR generation failed:", err);
        qrContainer.textContent = "QR tidak dapat dibuat. Refresh halaman.";
      }
    });
  }

  // Inisialisasi
  setTips(0);
</script>
</body>
</html>
`;
}

import { renderReceiptPng } from "./og-worker.js";
import { invoiceNumber } from "./og-shared.js";

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}

function pngResponse(bytes) {
  return new Response(bytes, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable"
    }
  });
}

function base64ToUtf8(base64) {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function decodePayload(base64) {
  const data = JSON.parse(base64ToUtf8(base64));
  if (!data?.nama || !data?.nomor || !data?.nominal) {
    throw new Error("invalid payload");
  }
  return { nama: data.nama, nomor: data.nomor, nominal: data.nominal };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const { pathname, origin } = url;

    if (pathname === "/" || pathname === "/admin") {
      return htmlResponse(htmlAdmin);
    }

    if (pathname.startsWith("/og/")) {
      const base64 = pathname.slice("/og/".length).replace(/\.png$/, "");
      let payload;
      try {
        payload = decodePayload(base64);
      } catch (error) {
        return new Response("Data tidak valid", {
          status: 400,
          headers: { "content-type": "text/plain; charset=UTF-8" }
        });
      }

      try {
        const png = await renderReceiptPng({
          nama: payload.nama,
          nomor: payload.nomor,
          nominal: payload.nominal,
          invoiceNo: invoiceNumber(`${payload.nama}|${payload.nomor}|${payload.nominal}`)
        });
        return pngResponse(png);
      } catch (error) {
        return new Response(`Gagal membuat gambar: ${error?.stack || error?.message || String(error)}`, {
          status: 500,
          headers: { "content-type": "text/plain; charset=UTF-8" }
        });
      }
    }

    if (pathname.startsWith("/pay/")) {
      const base64 = pathname.slice("/pay/".length);
      try {
        const payload = decodePayload(base64);
        return htmlResponse(
          generatepayPage(payload.nama, payload.nomor, payload.nominal, origin)
        );
      } catch (error) {
        return htmlResponse("Data tidak valid atau terjadi kesalahan", 400);
      }
    }

    return new Response("404 Not Found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
