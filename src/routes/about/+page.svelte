<script>

  import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-svelte";

  /** @type Array<{ name: string, link: string, icon: any }> */
  let socialLinks = [
    { name: "Github", link: "https://github.com/mrinmoymondalreal", icon: GithubIcon },
    { name: "Twitter", link: "https://twitter.com/themrinmoyreal", icon: TwitterIcon },
    { name: "Instagram", link: "https://www.instagram.com/themrinmoymondal/", icon: InstagramIcon },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/mrinmoy-mondal-319861167/", icon: LinkedinIcon },
  ];

</script>
<svelte:head>
    <title>About Me</title> 
</svelte:head>

<div class="h-14 md:h-28 w-full" />
<div class="flex flex-col-reverse lg:flex-row pt-12 px-8 md:px-14">
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
    <div>
      Greetings! I'm Mrinmoy Mondal, currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering at Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex, Kolkata, India.
    </div>
    <div>
      I find immense joy in the process of creation and innovation, whether it involves crafting elegant lines of code or engaging in hands-on projects.
    </div>
    <div>
      The boundless potential of technology never ceases to amaze me, and I am on a relentless quest to explore and harness this potential in unique and meaningful ways. My enthusiasm for transforming abstract ideas into concrete realities serves as the driving force behind my continuous pursuit of knowledge and skills.
    </div>
    <div>
      In addition to my academic endeavors, I often find myself engrossed in various artistic and creative pursuits, drawing inspiration from diverse sources. By chronicling my journey through the realm of Computer Science and Engineering, I aim to connect with like-minded individuals and contribute to the dynamic landscape of innovation. Join me as I share my experiences, insights, and projects on this platform. Let's collaborate, innovate, and together, let's shape a future where technology knows no bounds
    </div>
  </div>
  <div class="picture flex-1 lg:pr-10 h-fit flex items-center flex-col">
    <div class="picture-wrapper w-80 md:w-96 aspect-square bg-gray-950 rounded-2xl rotate-[6deg] overflow-hidden">
      <img src="/profile_picture.webp" class="rotate-[-6deg] scale-[1.1]" alt="">
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