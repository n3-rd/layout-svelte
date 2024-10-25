    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
<script lang="ts">
    export let isOpen = false;
    export let onClose = () => {};

    let type = '';
    let description = '';
    let attachment: File | null = null;

    function closeDialog() {
      onClose();
    }

    function handleSave() {
      // Implement save logic here
      console.log({ type, description, attachment });
      closeDialog();
    }

    function handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        attachment = target.files[0];
      }
    }
</script>
  
{#if isOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]" on:click={closeDialog}>
    <div class="bg-white p-6 rounded-lg shadow-lg w-[517px] flex flex-col gap-4" on:click|stopPropagation>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold text-black-100">Add Item</h2>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={closeDialog} class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    <hr class="w-full border-t border-table-text border-opacity-50 ">

      <form on:submit|preventDefault={handleSave}
      class="flex flex-col gap-4"
      >
        <div>
          <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            id="type"
            bind:value={type}
            class="w-full px-3 py-2 bg-bg-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-black-100 focus:border-black-100"
          >
            <option value="" disabled selected>Select type</option>
            <option value="report">Report</option>
            <option value="proposal">Proposal</option>
            <option value="contract">Contract</option>
            <option value="presentation">Presentation</option>
          </select>
        </div>
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="description"
            bind:value={description}
            rows="3"
            class="w-full px-3 py-2 bg-bg-100  rounded-lg focus:outline-none focus:ring-1 focus:ring-black-100 focus:border-black-100"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div>
          <label for="attachment" class="block text-sm font-medium text-gray-700 mb-1">Attachment</label>
          <div class="border-2 h-[87px] border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-black-100">
            <input
              type="file"
              id="attachment"
              on:change={handleFileUpload}
              class="hidden"
            />
            <label for="attachment" class="cursor-pointer">
              {#if attachment}
                <p class="text-sm text-gray-600">{attachment.name}</p>
              {:else}
                <p class="text-sm text-gray-500">Upload file</p>
              {/if}
            </label>
          </div>
        </div>
        <div>
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="block text-sm font-medium text-gray-700 mb-1">Preview</label>
          <div class="h-52 bg-bg-100 rounded-lg flex items-center justify-center">
            <p class="text-sm text-gray-500">Preview will be shown here</p>
          </div>
        </div>
        <div class="flex justify-end gap-2">
          <button
            type="button"
            on:click={closeDialog}
            class="py-2 w-32 text-sm font-medium text-gray-700 border border-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Refresh
          </button>
          <button
            type="submit"
            class="py-2 w-32 text-sm font-medium text-white bg-black-100 rounded-lg hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
  
  <style>

  </style>
