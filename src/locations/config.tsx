import { useEffect } from "react";

import { ConfigAppSDK } from "@contentful/app-sdk";
import { Box, Note } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";

export default function Config() {
  const sdk = useSDK<ConfigAppSDK>();

  useEffect(() => {
    sdk.app.setReady();
  }, []);

  return (
    <Box marginTop="spacingXl">
      <Note>This is an example app, it has no configuration. Hit 'install' in the top right corner to continue.</Note>
    </Box>
  );
}
