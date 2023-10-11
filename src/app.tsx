import { locations } from "@contentful/app-sdk";
import { useSDK } from "@contentful/react-apps-toolkit";
import { useMemo } from "react";
import { Config } from "./locations/config";
import { Page } from "./locations/page";

const appLocations = {
  [locations.LOCATION_APP_CONFIG]: Config,
  [locations.LOCATION_PAGE]: Page
};

export function App() {
  const sdk = useSDK();

  const Component = useMemo(() => {
    for (const [location, component] of Object.entries(appLocations)) {
      if (sdk.location.is(location)) return component;
    }
  }, [sdk.location]);

  return Component ? <Component /> : null;
}
