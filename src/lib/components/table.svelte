<script lang="ts">
    export let items: any[] = [];
    export let columns = [
      { key: 'id', label: 'ID' },
      { key: 'type', label: 'TYPE' },
      { key: 'description', label: 'DESCRIPTION' },
      { key: 'attachment', label: 'ATTACHMENT' },
      { key: 'preview', label: 'PREVIEW' }
    ];
</script>

<div class="w-full overflow-hiddenrounded-lg">
    <div class="overflow-x-auto no-scrollbar">
        <table class="min-w-full divide-y divide-gray-200 text-table-text">
            <thead class="bg-gray-50">
                <tr class="font-medium">
                    {#each columns as column}
                        <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">
                            {column.label}
                        </th>
                    {/each}
                </tr>
            </thead>
            <tbody class="bg-white overflow-y-auto">
                {#each items as item (item.id)}
                    <tr class="striped-row">
                        <td class="px-6 py-4 whitespace-nowrap text-sm">{item.id}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">{item.type}</td>
                        <td class="px-6 py-4 text-sm max-w-xs truncate">{item.description}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm underline">{item.attachment}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                            <a href="#" class="text-blue hover:text-blue-hover">View attachment</a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    .overflow-x-auto {
        max-height: 86vh;
        overflow-y: auto;
    }

    .striped-row:nth-child(odd) {
        background-color: #f9f9f9; 
    }

    .striped-row:nth-child(even) {
        background-color: #ffffff; 
    }
</style>
