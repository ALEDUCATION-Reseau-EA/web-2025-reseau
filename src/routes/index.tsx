import { useNavigate } from "@solidjs/router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main class="flex flex-col items-center gap-2 mx-auto text-gray-800 p-4">
      <title>Accueil - Aleducation</title>
      <h1 class="max-6-xs text-6xl text-gray-800 font-thin uppercase my-12">Accueil</h1>
      <Card class="w-3/4">
        <CardContent class="flex flex-row gap-2 p-0">
          <img class="h-96 rounded-l" src="/images/aleducation_picture1.png" alt="Picture 1" />
          <div class="flex flex-col justify-between gap-2 p-2">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius. Ut sit amet nibh ac sem convallis commodo nec ac quam. Aliquam tincidunt ipsum neque. Quisque luctus, libero id venenatis condimentum, eros eros tempor magna, id mollis augue nisi quis magna. Quisque commodo vitae dui non commodo. Quisque sed laoreet dui. Quisque in libero metus. Ut lobortis aliquet nisl, eu vestibulum turpis sodales ut. Vestibulum bibendum, felis in ultricies semper, elit risus euismod enim, ac faucibus tellus ligula nec augue. Ut ut lacus ipsum. Curabitur interdum ex posuere erat rhoncus, non molestie justo mollis. Aenean hendrerit mi a ante interdum auctor. Phasellus viverra arcu et mi placerat, nec elementum lectus posuere.
              Gaetan c'est vraiment le plus beau (mais c'est toujours de sa faute)
            </span>
            <div class="grid justify-items-end place-items-end">
              <Button onClick={() => navigate("/formations")} >Voir les Formations</Button>
            </div>
          </div>
        </CardContent>
      </Card >
    </main >
  );
}
