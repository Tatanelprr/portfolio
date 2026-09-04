const admin = require('firebase-admin');
const fs    = require('fs');
const path  = require('path');

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) {
  console.error('Missing FIREBASE_SERVICE_ACCOUNT env var');
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(raw))
});

const db   = admin.firestore();
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/library.json'), 'utf-8')
);

async function seed() {
  const batch = db.batch();
  for (const [section, payload] of Object.entries(data)) {
    batch.set(db.collection('portfolio').doc(section), payload);
  }
  await batch.commit();
  console.log(`Seeded ${Object.keys(data).length} sections to Firestore`);
}

seed().catch(err => { console.error(err); process.exit(1); });
