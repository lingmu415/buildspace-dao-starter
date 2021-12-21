import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x68be0d74359c41f694fc8F8a6BB2511450a9B453");

(async () => {
    try {
      // Deploy a standard ERC-20 contract.
      const tokenModule = await app.deployTokenModule({
        // What's your token's name? Ex. "Ethereum"
        name: "TranslationDAO Governance Token",
        // What's your token's symbol? Ex. "ETH"
        symbol: "ROSETTA",
      });
      console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address,
      );
    } catch (error) {
      console.error("failed to deploy token module", error);
    }
  })();