<script lang="ts">
    import Container from 'sveltestrap/src/Container.svelte';
    import Button from '$lib/Button.svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Icon from '$lib/Icon.svelte';
    import SearchIcon from '$icons/light/magnifying-glass.svg?raw';
    import clsx from 'clsx';
    import Col from 'sveltestrap/src/Col.svelte';
    import ThemeButton from '$lib/ThemeButton.svelte';
    import BarsIcon from '$icons/solid/bars.svg?raw';
    import UserIcon from '$icons/solid/user.svg?raw';
    import Drawer from '$lib/Drawer.svelte';
    import XMarkIcon from '$icons/regular/xmark-large.svg?raw';

    let search_box_focus: boolean = false;
    let search_input: HTMLElement;
    let isMenuOpen: boolean = false;
    let isUserMenuOpen: boolean = false;

    const handle_search_box_focus = () => {
        search_box_focus = true;
        search_input.focus();
    };

    const handle_close_menu = () => {
        isMenuOpen = false;
    };

    const handle_close_user_menu = () => {
        isUserMenuOpen = false;
    };

    
</script>

<Container fluid>
    <header class="bg-white dark:bg-slate-700 dark:text-white rounded-xl shadow-md py-1.5 px-4 mt-5">
        <div class="flex justify-between items-center">
            <!-- Start Mobile -->
            <!-- Hamburger menu icon -->
            <IconButton icon={BarsIcon} class="md:!hidden" on:click={() => (isMenuOpen = true)} />
            <!-- Hamburger menu section -->
            <Drawer open={isMenuOpen} class="w-64 dark:bg-slate-700" on:close={handle_close_menu}>
                <div class="flex justify-end pt-1 pl-1">
                    <IconButton icon={XMarkIcon} color="danger" variant="flat" on:click={handle_close_menu} />
                </div>

                <div class="mt-2 flex justify-center flex-col items-center">
                    <ThemeButton />
                    <span class="mt-0.5 text-xs text-slate-800 dark:text-white font-medium">طرح زمینه</span>
                </div>

                <div class="flex flex-col px-2 mt-3">
                    <a href="/" class="menu-item dark:!bg-slate-600"> صفحه اصلی </a>
                    <a href="/blog" class="menu-item dark:!bg-slate-600"> وبلاگ </a>
                    <a href="/about" class="menu-item dark:!bg-slate-600"> درباره ما </a>
                    <a href="/contact" class="menu-item dark:!bg-slate-600"> تماس باما </a>

                    <Button class="mt-5">مدرس شوید</Button>
                </div>
            </Drawer>
            <!-- End Mobile -->

            <!-- LOGO -->
            <img src="/vercel.svg" class="w-[100px] h-auto" alt="LOGO" />

            <!-- Search box -->
            <Col lg={5} md={6} class="hidden md:block">
                <form class={clsx('search-box', search_box_focus && 'focus')} on:click={handle_search_box_focus} on:submit={(e) => e.preventDefault()}>
                    <input type="text" class="bg-transparent" placeholder="برای جست و جو ..." bind:this={search_input} on:focus={() => (search_box_focus = true)} on:blur={() => (search_box_focus = false)} />
                    <Button size="sm" class="mr-1">
                        <Icon icon={SearchIcon} class="ml-1.5" />
                        <span>جست و جو</span>
                    </Button>
                </form>
            </Col>

            <!-- ‌Tool buttons -->
            <div class="hidden md:flex items-center">
                <ThemeButton class="ml-2" />
                <Button>ورود</Button>
                <Button color="secondary" variant="outlined" class="mr-1.5">ثبت نام</Button>
            </div>

            <!-- Start Mobile -->
            <!-- User menu icon -->
            <IconButton icon={UserIcon} class="md:!hidden" on:click={() => (isUserMenuOpen = true)} />
            <!-- User menu section -->
            <Drawer class="w-64 dark:bg-slate-700" position="left" open={isUserMenuOpen} on:close={handle_close_user_menu}>
                <div class="flex flex-col bg-indigo-500 h-60 border-b-4 border-secondary-500">
                    <div class="pt-1 pr-1 w-full">
                        <IconButton icon={XMarkIcon} color="danger" variant="flat" on:click={handle_close_user_menu} />
                    </div>

                    <div class="flex flex-col justify-center items-center mt-5 text-white">
                        <img src="/img/Amir-developer-avatar.jpg" class="w-20 h-20 rounded-full border-2 border-white" alt="User-Avatar" />
                        <span class="text-sm font-medium mt-1">امیرحسین فضلی</span>
                        <span class="text-xs mt-1">عضویت : 1400/03/25</span>
                    </div>
                </div>
            </Drawer>
            <!-- End Mobile -->
        </div>
    </header>
</Container>

<style lang="scss">
    .search-box {
        @apply border border-gray-300 rounded-theme flex items-center pl-1 pr-2 py-1 cursor-text;
        @apply text-sm duration-300;
        &.focus {
            @apply border-blue-500;
        }
        input {
            @apply flex-1;
        }
    }

    .menu-item {
        @apply bg-gray-100 text-center shadow-sm duration-300 mt-3 px-2 py-1.5 rounded-theme text-base;
        &:hover {
            background-color: theme('colors.primary.500') !important;
            @apply text-white;
        }
    }

</style>
