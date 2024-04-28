<script>

  import { GithubIcon, InstagramIcon, Link, LinkedinIcon, TwitterIcon } from "lucide-svelte";

  /** @type Array<{ name: string, link: string, icon: any }> */
  let socialLinks = [
    { name: "Github", link: "https://github.com/mrinmoymondalreal", icon: GithubIcon },
    { name: "Twitter", link: "https://github.com/mrinmoymondalreal", icon: TwitterIcon },
    { name: "Instagram", link: "https://github.com/mrinmoymondalreal", icon: InstagramIcon },
    { name: "LinkedIn", link: "https://github.com/mrinmoymondalreal", icon: LinkedinIcon },
  ];

  let projects = [
    { name: "SocialTable", link: "https://socialtable.vercel.app/", imgSrc: "/projects/socialtable.webp", description: "Social Media website with a fancy looks lets you uplaod pictures and comments others posts" },
    { name: "NextJsMovies", link: "https://nextjsmovies-kappa.vercel.app/", imgSrc: "/projects/nextmovies.webp", description: "NextJsMovies recommends hollywood random movies with a no style layout" },
  ];

</script>
<svelte:head>
    <title>Home</title> 
</svelte:head>

<div class="h-14 md:h-28 w-full" />
<div class="flex flex-col-reverse xl:flex-row pt-12 px-8 md:px-14">
  <div class="social-links pt-14 lg:hidden block">
    <ul class="flex flex-col gap-y-6">
      {#each socialLinks as social}
        <li class="relative w-fit">
          <a class="flex gap-x-3 relative z-[2] before:z-[-1] before:block before:absolute before:transition-[1.5s] before:-inset-1 before:hover:-skew-y-3 before:bg-pink-500 before:w-0 before:hover:w-[110%]" href={social.link}>
            <span><svelte:component this={social.icon} size="25"/></span>
            <span class="font-bold relative">Follow On {social.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="description flex-[2] lg:px-10 lg:pr-32 space-y-8 pt-20 lg:pt-10">
    <div class="tracking-tight font-black text text-5xl/snug ">
      I’m Mrinmoy Mondal. I live in Kolkata, India. I love creating new stuff.
    </div>
    <div class="tracking-tight font-semibold text text-2xl/snug ">
      Projects I Made
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
      <a href="/projects" class="project z-[2] p-3 md:p-4 box-border relative group cursor-pointer
        before:z-[-1] before:absolute before:block before:rounded-xl before:origin-center before:scale-95 before:opacity-0 hover:before:scale-100 hover:before:opacity-50 before:transition-[0.1s] before:-inset-1 before:bg-gray-400/20">
        <div class="picture aspect-video w-full -space-x-12 bg-gray-900 rounded-xl flex justify-center items-center">
          <div class="circle aspect-square w-20 rounded-full bg-gray-950 border-4 border-gray-900"></div>
          <div class="circle aspect-square w-20 rounded-full bg-gray-950 border-4 border-gray-900"></div>
          <div class="circle aspect-square w-20 rounded-full bg-gray-950 border-4 border-gray-900
          flex justify-center items-center font-bold text-2xl/snug">+3</div>
        </div>
      </a>
    </div>
  </div>
  <div class="picture flex-1 lg:pr-10 h-fit flex items-center flex-col">
    <div class="picture-wrapper w-80 md:w-96 aspect-square bg-gray-950 rounded-2xl rotate-[6deg] overflow-hidden">
      <img src="profile_picture.webp" class="rotate-[-6deg] scale-[1.1]" alt="">
    </div>
    <div class="social-links pt-14 hidden lg:block">
      <ul class="flex flex-col gap-y-6">
        {#each socialLinks as social}
          <li class="relative w-fit">
            <a target="_blank" class="flex gap-x-3 relative z-[2] before:z-[-1] before:block before:absolute before:transition-[1.5s] before:-inset-1 before:hover:-skew-y-3 before:bg-pink-500 before:w-0 before:hover:w-[110%]" href={social.link}>
              <span><svelte:component this={social.icon} size="25"/></span>
              <span class="font-bold relative">Follow On {social.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>