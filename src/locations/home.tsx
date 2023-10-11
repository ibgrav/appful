import { HomeAppSDK } from "@contentful/app-sdk";
import { Heading, Box } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";

export default function Home() {
  const sdk = useSDK<HomeAppSDK>();

  return (
    <Box marginTop="spacingXl">
      <Heading>Home!</Heading>
      <pre>{JSON.stringify({ sdk }, null, 2)}</pre>
    </Box>
  );
}
