<script>
  // Sample data array
  const items = [
    { no: 1, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 2, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 3, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 4, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 5, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 6, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 7, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 8, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 9, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 10, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 11, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 12, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 13, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 14, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 15, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 16, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 17, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 18, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 19, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 20, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 21, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 22, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 23, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 24, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 25, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 26, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 27, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 28, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 29, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" },
    { no: 30, type: "Lorem ipsum", description: "Lorem ipsum dolor sit amet consectetur. Libero in lacus eges...", attachment: "doc1.pdf" }
  ];
</script>
<div class="flex items-center w-full max-w-full flex-col gap-6">
    <div class="relative w-full">
      <input
        type="text"
        placeholder="Enter prompt here"
        class="w-full py-5 px-4 pl-4 pr-10  bg-bg-100 border border-foreground rounded-lg focus:outline-none focus:border-black-100 focus:border-transparent"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
          type="submit"
          class="w-32 h-11 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center
          hover:text-white transition-colors
          "
        >
          Search
        </button>
        </div>
    </div>
<div class="w-full overflow-hidden border border-gray-200 rounded-lg ">
  <div class="overflow-x-auto no-scrollbar">
    <table class="min-w-full divide-y divide-gray-200 text-table-text">
      <thead class="bg-gray-50">
        <tr class="font-medium">
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">NO</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">TYPE</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">DESCRIPTION</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">ATTACHMENT</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gray-50">PREVIEW</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 overflow-y-auto">
        {#each items as item}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm ">{item.no}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm ">{item.type}</td>
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
</div>

<style>
  .overflow-x-auto {
    max-height: 86vh; /* Adjust this value as needed */
    overflow-y: auto;
  }
</style>
