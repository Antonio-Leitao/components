
import Home from './lib/Home.svelte';
import NotFound from './lib/NotFound.svelte';
import Toc from './lib/Toc.svelte';
import CopyClipboard from './lib/CopyClipboard.svelte';

export default {
    '/': Home,
    '/copyclipboard':CopyClipboard,
    '/toc':Toc,
    // The catch-all route must always be last
    '*': NotFound
};