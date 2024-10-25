<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Sidebar from "$lib/components/sidebar.svelte";

</script>
<div class="h-screen min-w-screen flex items-center p-4 gap-6">
    <Sidebar />
<div class="flex-1 h-full ">
	{@render children()}
</div>
</div>
