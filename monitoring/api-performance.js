const axios = require('axios');


async function checkApiPerformance() {
const start = Date.now();
try {
const res = await axios.get(process.env.API_URL || 'http://localhost:5000/healthz');
const duration = Date.now() - start;
console.log(`API responded with status ${res.status} in ${duration}ms`);
} catch (err) {
console.error('API check failed:', err.message);
}
}


checkApiPerformance();