import { Card, CardContent } from "~/components/ui/card";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-800 p-4">
      <title>Accueil - Aleducation</title>
      <Card>
        <CardContent class="pl-0 pb-0">
          <img class="h-96" src="/images/aleducation_picture1.png" alt="Picture 1" />
        </CardContent>
      </Card >
    </main >
  );
}
