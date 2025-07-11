```js
import axios from "axios";
import cron from "node-cron";

// WhatsApp send function (example, replace with your API)
async function sendWhatsAppMessage(message) {
  // Replace with your WhatsApp API integration code
  console.log("Sending message:", message);
}

async function fetchMarketUpdate() {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,bnb,solana,xrp&vs_currencies=usd&include_24hr_change=true");
    const data = response.data;

    const message = `*📊 Market Update (Last 24h):*\n\n` +
      `- Bitcoin (BTC): 
    data.bitcoin.usd (data.bitcoin.usd_24h_change.toFixed(2)
          `- Ethereum (ETH):
{data.ethereum.usd} (data.ethereum.usd_24h_change.toFixed(2)
      `- BNB:data.bnb.usd ({data.bnb.usd_24h_change.toFixed(2)}%)\n` +
      `- Solana (SOL): 
    data.solana.usd (data.solana.usd_24h_change.toFixed(2)
          `- XRP:
{data.xrp.usd} (${data.xrp.usd_24h_change.toFixed(2)}%)\n\n` +
      `📞 Contact: +94766359869\n` +
      `🤖 Bot: POWER-BUY PASIYA-MD`;

    await sendWhatsAppMessage(message);
  } catch (error) {
    console.error("Error fetching market data:", error);
  }
}

// Schedule task to run every 4 hours
cron.schedule("0 */4 * * *", () => {
  console.log("Running market update...");
  fetchMarketUpdate();
});

// Run immediately on start
fetchMarketUpdate();
```
