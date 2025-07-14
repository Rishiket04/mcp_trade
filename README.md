# MCP-Driven Trading Automation

A proof-of-concept trading server that lets AI agents place real Zerodha orders via the Model‑Context Protocol (MCP).

---

## 📦 Tech Stack

- **Language & Runtime:** Node.js (v16+), TypeScript  
- **Trading API:** [KiteConnect](https://www.npmjs.com/package/kiteconnect)  
- **Protocol SDK:** @modelcontextprotocol/sdk (MCP server + Stdio transport)  
- **Validation:** Zod  
- **Build Tools:** npm, ts-node / tsc  

---

## 🚀 Features

- **MCP Server**  
  Runs a bidirectional MCP server over STDIO to expose custom “tools” for AI-driven workflows.

- **OAuth Integration**  
  Uses KiteConnect’s requestToken → accessToken flow to authenticate with Zerodha and place real MARKET orders.

- **Custom MCP Tools**  
  - `add` – simple addition  
  - `placeOrder` – triggers BUY/SELL on KiteConnect  
  *(easily extendable: getQuote, cancelOrder, etc.)*

- **Type-safe Schemas**  
  All tool inputs are validated against Zod schemas before execution.

---

## ⚙️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/mcp-trading-automation.git
cd mcp-trading-automation
npm install
```

### 2. Configure Credentials  
Create a `.env` in the project root with your KiteConnect keys & tokens:

```env
KITE_API_KEY=your_api_key_here
KITE_API_SECRET=your_api_secret_here
REQUEST_TOKEN=your_request_token_here
ACCESS_TOKEN=your_access_token_here
```

### 3. Run in Dev Mode

```bash
npm run dev
```
This will compile TypeScript on the fly and start the MCP server listening on STDIO.

### 4. Build & Run (Production)

```bash
npm run build
node dist/index.js
```

---

## 🔍 Project Structure

```
.
├── src/
│   ├── index.ts         # MCP server setup & transport
│   └── trade.ts         # placeOrder tool + KiteConnect integration
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## 🛠️ Extending

1. **Register more tools** in `src/index.ts` (e.g. `getQuote`, `cancelOrder`, `getPortfolio`).  
2. **Wire up AI agents** to talk MCP over STDIO or sockets.  
3. **Add persistence** (e.g. Redis or DB) to track orders & positions.

---

