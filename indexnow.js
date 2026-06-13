const https = require('https');

const data = JSON.stringify({
  host: "world-cup-schedule-jap.vercel.app",
  key: "85ef602b661f43988cbbbb9e20ef313e",
  keyLocation: "https://world-cup-schedule-jap.vercel.app/85ef602b661f43988cbbbb9e20ef313e.txt",
  urlList: [
    "https://world-cup-schedule-jap.vercel.app/",
    "https://world-cup-schedule-jap.vercel.app/mexico-vs-south-africa.html",
    "https://world-cup-schedule-jap.vercel.app/korea-republic-vs-czechia.html"
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
