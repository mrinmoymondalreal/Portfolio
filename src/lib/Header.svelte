<script>
  import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';
  import menuDialog from './stores/MenuDialg';
  import Button from './components/ui/button/button.svelte';
  import * as Drawer from "$lib/components/ui/drawer";
    import { base } from '$app/paths';

  /** @type {string | null} */
  let r;

  // @ts-ignore
  $: r = $page.route.id;

  /** @type Array<{ name: string, route: string }> */
  let headersRoutes = [
    { name: "Home", route: base },
    { name: "About Me", route: "about" },
    { name: "Projects", route: "projects" },
    { name: "Posters", route: "posters" },
  ];
  
  </script>
<div class="fixed bg-transparent top-0 z-50 w-full lg:px-32 md:px-28 px-12">
  <div class="wrapper bg-transparent h-12 flex items-center lg:px-12 pt-12 overflow-hidden py-8 text-white">
    <div class="logo flex-1">
      he
    </div>
    <div class="hambuger-menu lg:hidden w-full flex justify-end"> 
      <Button size="icon" variant="ghost" on:click={()=> menuDialog.update(p=>!p)}>
        <Menu class="cursor-pointer" />
      </Button>  
    </div>
    <div class="menu hidden lg:block bg-gray-800 rounded-lg border border-slate-200/15 shadow-sm flex-1 min-w-fit flex-grow px-8 py-2 overflow-hidden">
      <ul class="flex gap-x-8 justify-center w-fit">
        {#each headersRoutes as route}
          <li class="transition-all min-w-fit group {route.route == r && 'active'} relative z-10">
            <div class="z-10 headerIndicator transition-all hidden group-[.active]:block blur-md bg-teal-500/50 w-full
            translate-y-full h-full absolute"/>
            <a href={route.route} class="z-30 absolute group-[.active]:font-bold">{route.name}</a>
            <a href={route.route} class="z-30 group-[.active]:font-bold">{route.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex-1 shrink right flex justify-end">
    </div>
  </div>
</div>

<Drawer.Root bind:open={$menuDialog}>
  <Drawer.Portal>
    <Drawer.Overlay class="fixed z-10 inset-0 bg-black/20" />
    <Drawer.Content class="fixed z-[99] box-border py-4">
        <div class="menu pt-12 box-border px-4 overflow-hidden">
          <ul class="flex flex-col gap-y-2 justify-center">
            {#each headersRoutes as route}
              <a href={route.route} aria-hidden="true" on:click={()=>menuDialog.set(false)} class="group relative px-4 z-10 w-full hover:bg-gray-500/25 rounded-md py-2">
                {route.name}
              </a>
            {/each}
          </ul>
        </div>
        <Drawer.Close class="mt-4 px-8"><Button class="w-full">Close</Button></Drawer.Close>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>