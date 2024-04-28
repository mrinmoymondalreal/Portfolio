<script>
  import { Link } from "lucide-svelte";

  let projects = [
    { name: "SocialTable", link: "https://socialtable.vercel.app/", imgSrc: "projects/socialtable.webp", description: "Social Media website with a fancy looks lets you uplaod pictures and comments others posts" },
    { name: "NextJsMovies", link: "https://nextjsmovies-kappa.vercel.app/", imgSrc: "projects/nextmovies.webp", description: "NextJsMovies recommends hollywood random movies with a no style layout" },
    { name: "Expense Tracker (PWA)", link: "https://expensetracker-roan.vercel.app/", imgSrc: "projects/expensetracker.webp", description: "Native like PWA to tracker all your expense needs" },
    { name: "Movie Buff", link: "https://moviebuff-five.vercel.app/", imgSrc: "projects/moviebuff.webp", description: "Ultimate website to search and gather infomation about movies and get recommendation in your interest" },
    { name: "SnapShare", link: "https://snapshare-two.vercel.app/home", imgSrc: "projects/snapshare.webp", description: "Photo sharing app with explore and profile options" },
  ];
</script>
<svelte:head>
    <title>Projects</title> 
</svelte:head>

<div class="h-14 md:h-28 w-full" />
<div class="main pt-12 px-8 md:px-14">
  <div class="content md:w-[65%] space-y-4">
    <div class="heading font-black text-5xl/tight">
      Things I’ve made trying to put my dent in the universe.
    </div>
    <div class="p text-gray-400 text-semibold">
      I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
    </div>
  </div>
  <div class="project-list box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-2 py-8">
    {#each projects as project}
      <a href={project.link} target="_blank" class="project z-[2] p-3 md:p-4 box-border relative group cursor-pointer
        before:z-[-1] before:absolute before:block before:rounded-xl before:origin-center before:scale-95 before:opacity-0 hover:before:scale-100 hover:before:opacity-50 before:transition-[0.1s] before:-inset-1 before:bg-gray-400/20">
        <div class="picture w-full bg-gray-900 rounded-xl overflow-hidden">
          <img src={project.imgSrc} alt="">
        </div>
        <div class="pt-2 pl-2 space-y-1 ">
          <div class="title">{project.name}</div>
          <div class="descrip">{project.description}</div>
          <div class="link *:inline-block space-x-2 font-semibold group-hover:text-teal-500"><Link size="18"/><span>{project.link.slice(0, 25)}{project.link.length > 25 && "..."}</span></div>
        </div>
      </a>
    {/each}
  </div>
</div>