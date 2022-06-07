<script lang="ts">
    import Container from 'sveltestrap/src/Container.svelte';
    import Button from '$lib/Button.svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Icon from '$lib/Icon.svelte';
    import SearchIcon from '$icons/light/magnifying-glass.svg?raw';
    import clsx from 'clsx';
    import Col from 'sveltestrap/src/Col.svelte';

    let search_box_focus: boolean = false;
    let search_input: HTMLElement;

    const handle_search_box_focus = () => {
        search_box_focus = true;
        search_input.focus();
    };
</script>

<Container fluid>
    <header class="bg-white rounded-xl shadow-md py-1.5 px-4 mt-5">
        <div class="flex justify-between items-center">
            <!-- LOGO -->
            <img src="/vercel.svg" class="w-[100px] h-auto" alt="LOGO" />

            <!-- Search box -->
            <Col lg={5}>
                <form class={clsx('search-box', search_box_focus && 'focus')} on:click={handle_search_box_focus} on:submit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="برای جست و جو ..." bind:this={search_input} on:focus={() => search_box_focus = true} on:blur={() => search_box_focus = false} />
                    <Button size="sm" class="mr-1">
                        <Icon icon={SearchIcon} class="ml-1.5" />
                        <span>جست و جو</span>
                    </Button>
                </form>
            </Col>

            <!-- ‌Tool buttons -->
            <div class="flex">
                <Button>ورود</Button>
                <Button color="secondary" variant="outlined" class="mr-1.5">ثبت نام</Button>
            </div>
        </div>
    </header>
</Container>

<style lang="scss">
    .search-box {
        @apply border border-slate-200 rounded-theme flex items-center pl-1 pr-2 py-1 cursor-text;
        @apply text-sm;
        &.focus {
            @apply border-blue-500;
        }
        input {
            @apply flex-1;
        }
    }
</style>
