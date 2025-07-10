import { KiteConnect } from "kiteconnect";


const apiKey = "bu0rq0v0ott9ze11";
const apiSecret = "5yipbgx91egd8ikdxq4jr3fdjmlw0ch1";
const requestToken = "3QVF70qjSkqun24fypHyWuC1bXemTsyd";
let accessToken = "Lg3Tgcu0kIdoPGvUbgAyEjMR7uByHWa4";
const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());
// console.log(JSON.stringify({ loginUrl: kc.getLoginURL() }));


// async function init() {
//   try {
//     await generateSession();
//     await getProfile();
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

// export async function getProfile() {
//   try {
//     const profile = await kc.getProfile();
//     console.log("Profile:", profile);
//   } catch (err) {
//     console.error("Error getting profile:", err);
//   }
// }
// // Initialize the API calls
// getProfile();

export async function placeOrder(tradingsymbol:string, transactionType:"BUY"|"SELL", quantity:number) {
//   try{const allowedTypes = ["BUY", "SELL"];
//   if (!allowedTypes.includes(transactionType)) {
//     throw new Error(`Invalid transactionType: ${transactionType}. Must be 'BUY' or 'SELL'.`);
//   }

  try {
    kc.setAccessToken(accessToken);
    console.log("Access token set:", accessToken);

    await getProfile();

    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: tradingsymbol,
      transaction_type: transactionType,
      quantity: quantity,
      order_type: "MARKET",
      product: "CNC",
    });
  } catch (err) {
    console.error("Error placing order:", err);
  }
  
}




async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
// Example usage: placeOrder("RELIANCE", "BUY", 10);
// placeOrder("RELIANCE", "BUY", 10);