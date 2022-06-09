<script lang="ts">
    import clsx from 'clsx';
    import Icon from '$lib/Icon.svelte';
    export let href: string | undefined = undefined;
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let color: 'primary' | 'secondary' | 'danger' = 'primary';
    export let variant: 'flat' | 'outlined' | 'contained' = 'contained';
    export let icon: string;
    let classNames: string = '';
    export { classNames as class };

    let tag: string = 'button';
    let color_pallate: string = color + '-' + variant;

    tag = href === undefined ? 'button' : 'a';

    let icon_size: number;

    switch (size) {
        case 'sm':
            icon_size = 18;
            break;
        case 'md':
            icon_size = 20;
            break;
        case 'lg':
            icon_size = 24;
            break;
        default:
            icon_size = 20;
            break;
    }
</script>

<svelte:element this={tag} {href} class={clsx('btn-icon', size, color_pallate, classNames)} on:click {...$$restProps}>
    <Icon {icon} size={icon_size} />
</svelte:element>

<style lang="scss">
    .btn-icon {
        -webkit-tap-highlight-color: transparent;
        @apply inline-flex rounded-full duration-300 justify-center items-center;

        // Sizing

        &.sm {
            @apply p-2;
        }

        &.md {
            @apply p-3;
        }

        &.lg {
            @apply p-4;
        }

        &.primary {
            &-contained {
                @apply bg-primary-500 text-white;
                &:hover {
                    @apply bg-primary-600;
                }
                &:active {
                    @apply bg-primary-700;
                }
            }

            &-outlined {
                @apply border border-primary-500 text-primary-500;
                &:hover {
                    @apply bg-primary-500 border-primary-500 text-white;
                }
                &:active {
                    @apply border-primary-600 bg-primary-600;
                }
            }

            &-flat {
                @apply text-primary-500;
                &:hover {
                    @apply bg-primary-100;
                }
                &:active {
                    @apply bg-primary-200;
                }
            }
        }

        &.secondary {
            &-contained {
                @apply bg-secondary-500 text-white;
                &:hover {
                    @apply bg-secondary-600;
                }
                &:active {
                    @apply bg-secondary-700;
                }
            }

            &-outlined {
                @apply border border-secondary-500 text-secondary-500;
                &:hover {
                    @apply bg-secondary-500 border-secondary-500 text-white;
                }
                &:active {
                    @apply border-secondary-600 bg-secondary-600;
                }
            }

            &-flat {
                @apply text-secondary-500;
                &:hover {
                    @apply bg-secondary-100;
                }
                &:active {
                    @apply bg-secondary-200;
                }
            }
        }

        &.danger {
            // &-contained {
            //     @apply bg-secondary-500 text-white;
            //     &:hover {
            //         @apply bg-secondary-600;
            //     }
            //     &:active {
            //         @apply bg-secondary-700;
            //     }
            // }

            // &-outlined {
            //     @apply border border-secondary-500 text-secondary-500;
            //     &:hover {
            //         @apply bg-secondary-500 border-secondary-500 text-white;
            //     }
            //     &:active {
            //         @apply border-secondary-600 bg-secondary-600;
            //     }
            // }

            &-flat {
                @apply text-red-500;
                &:hover {
                    @apply bg-red-100;
                }
                &:active {
                    @apply bg-red-200;
                }
            }
        }
    }
</style>
