<script lang="ts">
    import { navigating } from '$app/stores';
    import NProgress from 'nprogress';
    import '../styles/global.scss';
    import '../styles/nprogress.scss';

    // @ts-ignore
    NProgress.configure({ rtl: true, parent: 'body' });

    $: {
        if ($navigating) {
            NProgress.start();
        }
        if(!$navigating) {
            NProgress.done();
        }
    }
</script>

<slot />
