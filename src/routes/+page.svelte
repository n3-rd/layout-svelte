<script>
  import Table from '$lib/components/table.svelte';
  import { writable } from 'svelte/store';
  

  // Create a unique set of items
  const uniqueItems = [
    { id: 1, type: "Report", description: "Annual financial report for 2023", attachment: "finance_2023.pdf" },
    { id: 2, type: "Proposal", description: "New product launch proposal", attachment: "product_launch.docx" },
    { id: 3, type: "Contract", description: "Client service agreement", attachment: "service_contract.pdf" },
    { id: 4, type: "Presentation", description: "Q4 sales performance overview", attachment: "q4_sales.pptx" },
    { id: 5, type: "Budget", description: "2024 departmental budget plan", attachment: "budget_2024.xlsx" },
    { id: 6, type: "Report", description: "Customer satisfaction survey results", attachment: "csat_results.pdf" },
    { id: 7, type: "Memo", description: "Internal policy update", attachment: "policy_update.docx" },
    { id: 8, type: "Invoice", description: "Monthly service invoice - March 2024", attachment: "invoice_mar2024.pdf" },
    { id: 9, type: "Proposal", description: "Marketing campaign strategy", attachment: "marketing_strategy.pptx" },
    { id: 10, type: "Contract", description: "Vendor agreement for office supplies", attachment: "vendor_contract.pdf" },
    { id: 11, type: "Report", description: "Monthly IT infrastructure status", attachment: "it_status_report.docx" },
    { id: 12, type: "Presentation", description: "New employee onboarding process", attachment: "onboarding.pptx" },
    { id: 13, type: "Budget", description: "Q2 project budget allocation", attachment: "q2_budget.xlsx" },
    { id: 14, type: "Memo", description: "Upcoming office renovation plans", attachment: "renovation_memo.pdf" },
    { id: 15, type: "Invoice", description: "Equipment purchase - laptops", attachment: "laptop_invoice.pdf" },
    { id: 16, type: "Proposal", description: "Employee wellness program initiative", attachment: "wellness_proposal.docx" },
    { id: 17, type: "Report", description: "Annual environmental impact assessment", attachment: "environmental_report.pdf" },
    { id: 18, type: "Contract", description: "Software licensing agreement", attachment: "software_license.pdf" },
    { id: 19, type: "Presentation", description: "Quarterly investor meeting slides", attachment: "investor_presentation.pptx" },
    { id: 20, type: "Budget", description: "Annual marketing budget forecast", attachment: "marketing_budget.xlsx" }
  ];

  let searchTerm = writable('');
  $: filteredItems = uniqueItems.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes($searchTerm.toLowerCase())
    )
  );

  function handleSearch() {
    // The filtering is reactive, so we don't need to do anything here
    // This function is just a placeholder for any additional search logic
  }
</script>

<div class="flex items-center w-full max-w-full flex-col gap-6">
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Enter prompt here"
      bind:value={$searchTerm}
      class="w-full py-5 px-4 pl-4 pr-10 bg-bg-100 border border-foreground rounded-lg focus:outline-none focus:border-black-100 focus:border-transparent"
    />
    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
      <button
        on:click={handleSearch}
        class="w-32 h-11 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center hover:text-white transition-colors"
      >
        Search
      </button>
    </div>
  </div>

  <Table items={filteredItems} />
</div>

<style>
  .overflow-x-auto {
    max-height: 86vh; /* Adjust this value as needed */
    overflow-y: auto;
  }
</style>
