import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "~/components/ui/card";
import { For } from "solid-js";
import { Separator } from "~/components/ui/separator";
import { readdir } from 'node:fs/promises';
import { createAsync, query } from "@solidjs/router";
import { resolve } from "node:path";

const getImages = query(async () => {
  "use server";
  const path = resolve(__dirname, "../public/images/photos");

  return readdir(path);
}, "images");

export const route = {
  preload: () => getImages(),
};


export default function About() {
  const images = createAsync(() => getImages());

  return (
    <main class="flex flex-col text-center items-center mx-auto text-gray-800 p-4">
      <title>Qui? - Aleducation</title>
      <h1 class="max-6-xs text-6xl text-gray-800 font-thin uppercase my-16">Qui sommes-nous ?</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}>
        <CarouselContent>
          <For each={images()}>
            {(item) =>
              <CarouselItem class="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <img src={`/images/photos/${item}`} class="rounded" />
                </Card>
              </CarouselItem>
            }
          </For>
        </CarouselContent>
      </Carousel>
      <Separator class="m-12 w-36 h-0.5" />
      <span class="w-2/4 text-justify">Nous sommes une équipe dynamique de 19 personnes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius. Ut sit amet nibh ac sem convallis commodo nec ac quam. Aliquam tincidunt ipsum neque. Quisque luctus, libero id venenatis condimentum, eros eros tempor magna, id mollis augue nisi quis magna. Quisque commodo vitae dui non commodo. Quisque sed laoreet dui. Quisque in libero metus. Ut lobortis aliquet nisl, eu vestibulum turpis sodales ut. Vestibulum bibendum, felis in ultricies semper, elit risus euismod enim, ac faucibus tellus ligula nec augue. Ut ut lacus ipsum. Curabitur interdum ex posuere erat rhoncus, non molestie justo mollis. Aenean hendrerit mi a ante interdum auctor. Phasellus viverra arcu et mi placerat, nec elementum lectus posuere.</span>
    </main>
  );
}
