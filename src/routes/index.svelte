<script lang="ts">
    import Button from '$lib/Button.svelte';
    import Icon from '$lib/Icon.svelte';
    import UserIcon from '$icons/duotone/user.svg?raw';
</script>

<h1>Hello World</h1>

<Button href="/" size="sm" variant="contained">لینک</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="primary" variant="contained">عباسزاده سامورایی</Button>
<Button size="md" color="primary" variant="contained">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="contained">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="contained" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="primary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="md" color="primary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="outlined" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="primary" variant="flat">عباسزاده سامورایی</Button>
<Button size="md" color="primary" variant="flat">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="flat">عباسزاده سامورایی</Button>
<Button size="lg" color="primary" variant="flat" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="secondary" variant="contained">عباسزاده سامورایی</Button>
<Button size="md" color="secondary" variant="contained">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="contained">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="contained" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="secondary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="md" color="secondary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="outlined">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="outlined" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Button size="sm" color="secondary" variant="flat">عباسزاده سامورایی</Button>
<Button size="md" color="secondary" variant="flat">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="flat">عباسزاده سامورایی</Button>
<Button size="lg" color="secondary" variant="flat" disabled>عباسزاده سامورایی</Button>

<br />
<div class="mt-10"></div>

<Icon icon={UserIcon} size={100} class="text-primary-500" />
