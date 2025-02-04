import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "~/components/ui/card";
import { For } from "solid-js";

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-800 p-4">
      <title>Qui? - Aleducation</title>
      <h1 class="max-6-xs text-6xl text-gray-800 font-thin uppercase my-16">Qui sommes-nous ?</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}>
        <CarouselContent>
          <For each={[...Array(10).keys()].map(foo => foo + 1)}>
            {(item) =>
              <CarouselItem class="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <img src={`/images/photos/${item}.jpg`} class="rounded" />
                </Card>
              </CarouselItem>
            }
          </For>
        </CarouselContent>
      </Carousel>
    </main>
  );
}
