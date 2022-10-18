import Home from "./lib/Home.svelte";
import NotFound from "./lib/NotFound.svelte";
import { wrap } from "svelte-spa-router/wrap";

export default {
  "/": Home,

  "/stack": wrap({
    asyncComponent: () => import("./lib/Stack.svelte"),
  }),
  "/layout": wrap({
    asyncComponent: () => import("./lib/Layout.svelte"),
  }),
  "/glass": wrap({
    asyncComponent: () => import("./lib/Glass.svelte"),
  }),
  "/desktop": wrap({
    asyncComponent: () => import("./lib/Desktop.svelte"),
  }),
  "/scroll": wrap({
    asyncComponent: () => import("./lib/ScrollAnimations.svelte"),
  }),
  "/mosaic": wrap({
    asyncComponent: () => import("./lib/Mosaic.svelte"),
  }),
  "/control": wrap({
    asyncComponent: () => import("./lib/UI_componets/UI_example.svelte"),
  }),
  "/copyclipboard": wrap({
    asyncComponent: () => import("./lib/CopyClipboard.svelte"),
  }),
  "/modalcard": wrap({
    asyncComponent: () => import("./lib/ModalCard.svelte"),
  }),
  "/flipcard": wrap({
    asyncComponent: () => import("./lib/FlipCard.svelte"),
  }),
  "/toc": wrap({
    asyncComponent: () => import("./lib/Toc.svelte"),
  }),
  "/openstack": wrap({
    asyncComponent: () => import("./lib/OpenStack.svelte"),
  }),
  "/holdbutton": wrap({
    asyncComponent: () => import("./lib/UI_componets/HoldButton.svelte"),
  }),
  "/fullstack": wrap({
    asyncComponent: () => import("./lib/FullStack.svelte"),
  }),

  "*": NotFound,
};
