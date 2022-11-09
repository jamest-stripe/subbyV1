import { Box, ContextView, Inline, Link } from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

import BrandIcon from "./subby.svg";

/**
 * This is a view that is rendered in the Stripe dashboard's customer detail page.
 * In stripe-app.json, this view is configured with stripe.dashboard.customer.detail viewport.
 * You can add a new view by running "stripe apps add view" from the CLI.
 */
const AddPhase = ({ userContext, environment }: ExtensionContextValue) => {
  return (
    <Box>Add phase view</Box>
  );
};

export default AddPhase;
