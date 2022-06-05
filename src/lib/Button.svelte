<script lang="ts">
    import clsx from 'clsx';
    export let href: string | undefined = undefined;
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    export let color: 'primary' | 'secondary' = 'primary';
    export let variant: 'flat' | 'outlined' | 'contained' = 'contained';
    let classNames: string = '';
    export {classNames as class};

    let tag: string = 'button';
    let color_pallate: string = color + '-' + variant;

    tag = href === undefined ? 'button' : 'a';
    
</script>

<svelte:element this={tag} {href} class={clsx('btn', size, color_pallate, classNames)} on:click {...$$restProps} >
    <slot />
</svelte:element>

<!-- <br /> -->

<!-- <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra small</button>
<button type="button" class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Small</button>
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Base</button>
<button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Large</button>
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Extra large</button> -->
<style lang="scss">
    .btn {
        -webkit-tap-highlight-color: transparent;
        @apply inline-flex min-w-[64px] rounded-theme duration-300 justify-center items-center;
        @apply font-medium leading-[1.75] tracking-[0.02857em];

        // Sizing

        &.sm {
            @apply text-[0.8125rem] py-1 px-2.5;
        }

        &.md {
            @apply text-[0.875rem] py-1.5 px-4;
        }

        &.lg {
            @apply text-[0.9375rem] py-2 px-[22px];
        }

        // Colors

        &.primary {

            &-contained {
                @apply bg-primary-500 text-white;
                &:active {
                    @apply bg-primary-600;
                }
                &:disabled {
                    @apply bg-primary-300;
                }
            }

            &-outlined {
                @apply border-primary-500 border text-primary-500;
                &:not(:disabled):hover {
                    @apply bg-primary-500 text-white;
                }
                &:not(:disabled):active {
                    @apply bg-primary-600;
                }
                &:disabled {
                    @apply border-primary-300 text-primary-300;
                    &:hover {
                        @apply bg-none;
                    }
                }
            }

            &-flat {
                @apply bg-primary-50 text-primary-500;
                &:not(:disabled):hover {
                    @apply bg-primary-100;
                }
                &:disabled {
                    @apply text-primary-300;
                }
            }
        }

        &.secondary {

            &-contained {
                @apply bg-secondary-500 text-white;
                &:active {
                    @apply bg-secondary-600;
                }
                &:disabled {
                    @apply bg-secondary-300;
                }
            }

            &-outlined {
                @apply border-secondary-500 border text-secondary-500;
                &:not(:disabled):hover {
                    @apply bg-secondary-500 text-white;
                }
                &:not(:disabled):active {
                    @apply bg-secondary-600;
                }
                &:disabled {
                    @apply border-secondary-300 text-secondary-300;
                    &:hover {
                        @apply bg-none;
                    }
                }
            }

            &-flat {
                @apply bg-secondary-50 text-secondary-500;
                &:not(:disabled):hover {
                    @apply bg-secondary-100;
                }
                &:disabled {
                    @apply text-secondary-300;
                }
            }
        }
    }
</style>
