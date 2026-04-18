import { useOnTabCloseAsyncSafe } from "./useOnTabCloseAsyncSafe";

const One = () => {
  useOnTabCloseAsyncSafe(() => {
    navigator.sendBeacon(
      "https://webhook.site/ef743c31-e931-4662-8a5a-d6658965ae67",
      JSON.stringify({ reason: "tab_close" })
    );
  });

  return <>One</>;
};

export default One;
