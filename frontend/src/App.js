import React, { useState } from "react";
import { ethers } from "ethers";
import BCC from "./abi/BlueCarbonCredit.json";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);

  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAccount(addr);

      const contract = new ethers.Contract(contractAddress, BCC.abi, signer);
      const bal = await contract.balanceOf(addr);
      setBalance(ethers.formatUnits(bal, 18));
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Blue Carbon Registry</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Wallet: {account}</p>
      <p>Balance: {balance} BCC</p>
    </div>
  );
}

export default App;
