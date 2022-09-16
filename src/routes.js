
import Home from './lib/Home.svelte';
import NotFound from './lib/NotFound.svelte';
import Toc from './lib/Toc.svelte';
import CopyClipboard from './lib/CopyClipboard.svelte';
import ModalCard from './lib/ModalCard.svelte';
import FlipCard from './lib/FlipCard.svelte';
import OpenStack from './lib/OpenStack.svelte';
import Stack from './lib/Stack.svelte';
import Layout from './lib/Layout.svelte';
import Glass from './lib/Glass.svelte';
import Desktop from './lib/Desktop.svelte';

export default {
    '/': Home,
    '/stack': Stack,
    '/layout':Layout,
    '/glass':Glass,
    '/desktop':Desktop,
    '/copyclipboard':CopyClipboard,
    '/modalcard':ModalCard,
    '/flipcard':FlipCard,
    '/toc':Toc,
    '/openstack': OpenStack,
    // The catch-all route must always be last
    '*': NotFound
};