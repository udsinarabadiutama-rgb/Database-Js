export default async function handler(req, res) {
  // Izinkan akses dari mana saja (Bypass CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-co-id');

  if (req.method === 'POST') {
    try {
      const { bank_code, account_number } = req.body;
      const response = await fetch("https://use.api.co.id/validation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-co-id": "SxzzQJ3x4o12uK3LrfjgCUTu9mkHTfRyIr3SRWC3cYx1cdlDM3" // Ganti dengan API Key asli lu
        },
        body: JSON.stringify({ bank_code, account_number })
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Harus pake POST' });
  }
        }
