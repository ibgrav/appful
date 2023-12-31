import { PageAppSDK } from "@contentful/app-sdk";
import { Heading, Box } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";

export default function Page() {
  const sdk = useSDK<PageAppSDK>();

  return (
    <Box marginTop="spacingXl">
      <Heading>Page Change 2</Heading>
      <pre>{JSON.stringify({ sdk }, null, 2)}</pre>
    </Box>
  );
}
