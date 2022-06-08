<script lang="ts">
    import Icon from './Icon.svelte';
    import MoonIcon from '$icons/duotone/moon.svg?raw';
    import SunIcon from '$icons/solid/brightness.svg?raw';
    import { onMount } from 'svelte';

    let isDarkMode: boolean;

    onMount(() => {
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }

        isDarkMode = localStorage.getItem('theme') === 'dark';

        isDarkMode && document.documentElement.classList.add('dark');
    });

    const handleToggleTheme = () => {
        // isDarkMode = !isDarkMode;

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    };
</script>

<div class="ml-2">
    <input type="checkbox" class="checkbox" id="checkbox" bind:checked={isDarkMode} on:change={handleToggleTheme} />
    <label for="checkbox" class="checkbox-label">
        <Icon icon={SunIcon} class="text-yellow-400" size={19} />
        <Icon icon={MoonIcon} class="text-white" size={19} />
        <span class="ball" />
    </label>
</div>

<style lang="scss">
    .checkbox {
        @apply opacity-0 absolute;
        &:checked {
            + .checkbox-label {
                .ball {
                    @apply translate-x-[30px];
                }
            }
        }
    }

    .checkbox-label {
        @apply bg-indigo-500 w-14 h-[26px] rounded-full relative p-[5px] cursor-pointer flex;
        @apply justify-between items-center;

        .ball {
            @apply bg-white w-[22px] h-[22px] rounded-full absolute top-0.5 left-0.5 duration-200 ease-linear transition-transform;
        }
    }
</style>
