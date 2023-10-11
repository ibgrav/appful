import { locations } from "@contentful/app-sdk";
import { useSDK } from "@contentful/react-apps-toolkit";
import { Suspense, lazy, useMemo } from "react";

const appLocations = {
  [locations.LOCATION_APP_CONFIG]: lazy(() => import("./locations/config")),
  [locations.LOCATION_PAGE]: lazy(() => import("./locations/page")),
  [locations.LOCATION_HOME]: lazy(() => import("./locations/home"))
};

export function App() {
  const sdk = useSDK();

  const Component = useMemo(() => {
    for (const [location, component] of Object.entries(appLocations)) {
      if (sdk.location.is(location)) return component;
    }
  }, [sdk.location]);

  return Component ? (
    <Suspense>
      <Component />
    </Suspense>
  ) : null;
}
