<script lang="ts">
	export let to: string;
	export let cn: string;
	export let active: boolean;
</script>

<a href={to} class={cn} aria-current={active}><slot /></a>
