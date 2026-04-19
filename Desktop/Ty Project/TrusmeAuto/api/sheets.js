/* Vercel Serverless — proxy to Google Apps Script (avoids mobile CORS/redirect issues) */
const SCRIPT_URLS = {
  trusme: 'https://script.google.com/macros/s/AKfycbz1S1fOX9aZcrvScrqbVjCcZZhaD8ybXIjCGe6ZrkPRDaEC3mncWyDKnLQ2Hc6zA9U/exec',
};

module.exports = async function handler(req, res) {
  const { brand = 'trusme', ...rest } = req.query;
  const scriptUrl = SCRIPT_URLS[brand];
  if (!scriptUrl) return res.status(400).json({ error: 'Unknown brand' });

  const qs = new URLSearchParams(rest).toString();
  const url = scriptUrl + (qs ? '?' + qs : '');

  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error('Upstream HTTP ' + r.status);
    const data = await r.json();
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
};
