<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import clsx from 'clsx';

    const dispatch = createEventDispatcher();

    function slideDraw(node: HTMLElement, params: any) {
		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			easing: params.easing || elasticOut,
            tick: () => {
                if (params.in) {
                    node.style.transform = 'none';
                } else {
                    position == 'right' ? node.style.transform = 'translate(100%, 0)': node.style.transform = 'translate(-100%, 0)';
                }
            },
		};
	}
    
    export let open = false;
    export let position = 'right';
    const left_or_right = position == 'right' ? 'right' : 'left';
</script>

{#if open}
    <div class="container">
        <div class="backdrop" transition:fade={{ delay: 0, duration: 300 }} on:click={() => dispatch('close', false)} />
        <div class={clsx('content', left_or_right, 'bg-white', $$props.class)} in:slideDraw={{ in: true, delay: 0, duration: 300 }} out:slideDraw={{ out: true, delay: 0, duration: 300 }}>
            <slot />
        </div>
    </div>
{/if}

<style lang="scss">
    .container {
        position: fixed;
        inset: 0px;
        z-index: 1200;
    }
    .backdrop {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        inset: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
    .content {
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1 0 auto;
        z-index: 1200;
        position: fixed;
        top: 0px;
        outline: 0px;
        &.right {
            right: 0px;
            transform: translate(100%, 0);
        }
        &.left {
            left: 0px;
            transform: translate(-100%, 0);
        }
    }
</style>