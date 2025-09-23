# Blue Carbon Registry

A blockchain-based platform to register, track, and verify blue carbon projects and carbon credits efficiently and transparently.

## 📝 Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## 🔹 About

Blue Carbon Registry is a decentralized application (dApp) built on Ethereum to securely register carbon offset projects in coastal and marine ecosystems. It leverages smart contracts to automate transparency and accountability.

## ⚡ Features

* Register new blue carbon projects
* Track carbon credits in real-time
* Transparent and immutable blockchain records
* Integration with Ethereum testnets and mainnet

## 🛠️ Tech Stack

* **Blockchain**: Ethereum (Hardhat)
* **Language**: Solidity
* **Frontend**: (if any)
* **Testing**: Hardhat, Chai
* **Package Manager**: NPM

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/aibhavesh/Blue-Carbon-registery.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PRIVATE_KEY="your_wallet_private_key"
ALCHEMY_SEPOLIA_URL="your_alchemy_key"
```

## 🚀 Usage

1. Start Hardhat node:

```bash
npx hardhat node
```

2. Deploy contracts:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

3. Interact with your smart contracts using Hardhat console or frontend.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

MIT License
