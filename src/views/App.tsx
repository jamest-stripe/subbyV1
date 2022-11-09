import { Box, ContextView, Inline, Link } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

import BrandIcon from "./subby.svg";
import AddPhase from "./components/addPhase";

/**
 * This is a view that is rendered in the Stripe dashboard's customer detail page.
 * In stripe-app.json, this view is configured with stripe.dashboard.customer.detail viewport.
 * You can add a new view by running "stripe apps add view" from the CLI.
 */
const App = ({ userContext, environment }: ExtensionContextValue) => {
  return (
    <ContextView
      title="Hello world"
      brandColor="#F6F8FA" // replace this with your brand color
      brandIcon={BrandIcon} // replace this with your brand icon
      externalLink={{
        label: "View docs",
        href: "https://stripe.com/docs/stripe-apps"
      }}
    >
    <AddPhase 
    options={({userContext, environment})}
    />
    </ContextView>
  );
};

export default App;
