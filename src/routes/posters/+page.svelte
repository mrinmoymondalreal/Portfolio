<script>
    let poster_list = [
        'poster_animal_wWatermark.webp',
        '321149821_695771948583108_7778914859218720435_n.webp',
        'animal_poster.webp',
        '331456533_716873656653237_1039833855898413008_n.webp',
        '342189904_237948368783075_3844090518767593643_n.webp',
        '342245108_680568900540162_1294057552691516017_n.webp',
        '368151370_1180711253320787_6936658274674187325_n.webp',
        '369036344_809451827329160_850586536644219569_n.webp',
        '377881280_177862805336701_8745078900656133171_n.webp',
        '331454570_593267349344815_8839571063098499344_n.webp',
        '400264917_306046935527440_2961709343918868732_n.webp',
        '331951067_3000210433607373_6769785995582987443_n.webp',
    ];

    const n = 3

    poster_list = poster_list.reduce((r, e, i) =>
        // @ts-ignore
        (i % n ? r[r.length - 1].push(e) : r.push([e])) && r
    , []);
</script>
<svelte:head>
    <title>Posters</title> 
</svelte:head>

<div class="h-14 md:h-28 w-full" />
<div class="main pt-12 px-8 md:px-14">
<div class="content md:w-[65%] space-y-4">
  <div class="heading font-black text-5xl/tight">
    Sometimes I get Creative
  </div>
  <div class="p text-gray-400 text-semibold">
    In my free time I like to design movie posters. I'm still an Amateur. Trying to learn new things 
  </div>
</div>

<div class="w-full h-24"></div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each poster_list as poster}
        <div class="grid gap-4">
            {#each poster as p}
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={p} alt="">
                </div>
            {/each}
        </div>
    {/each}
</div>

</div>