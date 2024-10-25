<div class="w-[267px] h-full bg-black-100 sidebar rounded-lg p-2 flex flex-col gap-4 text-white">
    <div class="header w-full flex items-center justify-between">
        <div class="app-title font-space  leading-5 font-bold p-2">
            Simple Proj
        </div>
        <img src="/icons/sidebar.svg" alt="menu" class="w-6 h-6 cursor-pointer">
    </div>

    <button class="w-full bg-black-200 h-9 flex items-center justify-center rounded-lg hover:bg-gray-200 hover:text-black-100 transition-colors border border-black-300 group">
        <div class="flex items-center gap-2">
            <img src="/icons/plus.svg" alt="plus" class="w-4 h-4 group-hover:filter group-hover:invert">
            <span class="font-inter text-xs leading-5 font-medium">Add Item</span>
        </div>
    </button>

    <hr class="w-full border-t border-black-200">

    <div class="list-view font-inter">
        <h3 class="text-xs leading-3 pb-3">List View</h3>
        <div class="list-items flex flex-col gap-2">
            {#each Array.from({ length: 10 }, (_, i) => i) as number}
            <button class="list__item w-full rounded-lg bg-black-200 text-[#E3E3E3] h-9 flex items-center justify-center hover:bg-gray-200 hover:text-black-100 transition-colors">
                <span class="text-xs leading-4 ">Listview item 1</span>
            </button>
            {/each}
        </div>
    </div>
</div>
