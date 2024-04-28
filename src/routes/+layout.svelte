<script>
  import { ModeWatcher, setMode } from "mode-watcher";
  setMode('dark');
  import "../app.css";
  import Header from "@/Header.svelte";


  /** @type Array<{ name: string, route: string }> */
  let headersRoutes = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Projects", route: "/project" },
    { name: "Posters", route: "/posters" },
  ];
  
</script>

<ModeWatcher defaultMode={"dark"}></ModeWatcher>
<Header/>
<div class="main-black bg-black min-h-fit h-fit relative w-full lg:px-32 md:px-20 px-0">
  <div class="wrapper-main bg-gray-800 h-full relative pt-8 text-white">
    <slot></slot>
    <div class="w-full h-12 flex justify-center items-center">
      <div class="w-[98%] rounded-full h-px bg-gray-500/50"></div>
    </div>
  </div>
  <footer class="w-full bg-gray-800 text-sm text-gray-500 font-semibold pt-2 py-8 px-4 md:px-12 lg:px-24 flex justify-end ">
    &copy; Copyright Mrinmoy Mondal
  </footer>
</div>