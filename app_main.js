const axios = require("axios");

// 🚨 Intentionally hardcoded for leak detection testing
const OPENAI_API_KEY = "sk-live-9kLx7Qp8mT2rYv5Zc3nH8aBcDeFgHiJkLmNo";

async function test() {
  const res = await axios.get("https://api.example.com/data", {
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`
    }
  });

  console.log(res.data);
}

test();
