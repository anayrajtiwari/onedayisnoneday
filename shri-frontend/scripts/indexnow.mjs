// IndexNow ping script for shri.org.in
const HOST = 'shri.org.in';
const KEY = '1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/astera`,
  `https://${HOST}/glyph`,
  `https://${HOST}/community`,
  `https://${HOST}/terms`,
  `https://${HOST}/privacy`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`
];

async function pingIndexNow() {
  console.log(`📡 Sending IndexNow notification for ${HOST}...`);
  
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow notification successful! Status: ${response.status}`);
      console.log(`Notified engines (Bing, Yandex, DuckDuckGo, Yahoo, Seznam, Naver) of ${URLS.length} URLs.`);
    } else {
      console.error(`⚠️ IndexNow returned status ${response.status}`);
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error('❌ IndexNow ping failed:', error.message);
  }
}

pingIndexNow();
