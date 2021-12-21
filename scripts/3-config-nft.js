import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x68be0d74359c41f694fc8F8a6BB2511450a9B453",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Translation community",
        description: "This NFT will give you access to TranslationDAO!",
        image: readFileSync("scripts/assets/translation.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()