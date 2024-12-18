# LineaVote

### Installing Dependencies

Navigate into your project directory:

```bash
cd voting-dapp-starter

```

Install all the necessary dependencies:

```bash
pnpm install

```

This command will install all packages for both the frontend and backend components.

To ensure everything is set up correctly, let's run the development servers.

**For the Frontend:**

1. Navigate to the `site` directory:
    
    ```bash
    cd packages/site
    
    ```
    
2. Start the Next.js development server:
    
    ```bash
    pnpm dev
    
    ```
    
3. Open your browser and go to `http://localhost:3000` to see the frontend running.

**For the Backend:**

1. Open a new terminal window.
2. Navigate to the `blockchain` directory:
    
    ```bash
    cd packages/blockchain
    
    ```

Before deploying, compile the contract by running the following command in the `blockchain` directory:

```bash
npx hardhat compile

```

This will compile your Solidity code and prepare it for deployment.

### Setting Up Environment Variables

Before deploying the smart contract, ensure that your `.env` file in the `packages/blockchain` directory is updated with the necessary environment variables:

```bash
# Infura API key for connecting to Ethereum networks
INFURA_API_KEY=your_infura_api_key_here

# Private key of the account to be used for deployments and transactions
ACCOUNT_PRIVATE_KEY=your_account_private_key_here

```

- Replace `your_infura_api_key_here` with your actual Infura API key.
- Replace `your_account_private_key_here` with the private key of the Ethereum account you will use for deploying the contract

To deploy the smart contract to the Linea testnet, run the following command from the `blockchain` directory:

```bash
npx hardhat ignition deploy ignition/modules/Voting.ts --network linea-testnet

```

This command tells Hardhat to use Ignition to deploy the `Voting` module to the `linea-testnet` network.

Alternatively, you can add a deployment script to your `package.json` to simplify the process. Add the following line under the `"scripts"` section:


```json
"scripts": {
  "deploy:testnet": "npx hardhat ignition deploy ignition/modules/Voting.ts --network linea-testnet"
}

```

Now you can deploy the contract by simply running:

```bash
pnpm run deploy:testnet

```

After deployment, you'll receive the contract address. Keep this address safe, as we'll need it when integrating with the frontend.