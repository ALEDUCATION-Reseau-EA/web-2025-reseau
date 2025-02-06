import { useNavigate } from "@solidjs/router";
import { createResource, createSignal, For } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

export default function Formations() {
    const [formations, { refetch }] = createResource(
        async () => {
            const f = fetch("api/formations");
            return f;
        }
    );
    console.log(formations);
    const [value, setValue] = createSignal("");
    return (
        <main class="text-center mx-auto text-gray-800 p-4">
            <title>Nos Formations - Aleducation</title>
            <h1 class="max-6-xs text-6xl text-gray-800 font-thin uppercase my-16">Nos Formations</h1>
            <div class="flex flex-col gap-4 items-center">
                <Select
                    value={value()}
                    onChange={setValue}
                    options={["Mathématiques", "Langues", "Développement / Code", "Histoire", "Sciences"]}
                    placeholder="Choisissez une catégorie…"
                    itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                >
                    <SelectTrigger aria-label="Category">
                        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                </Select>
                {/* <div class="grid grid-cols-3 gap-4" >
                    <For each={formations}>
                        {(formation) =>
                            <Card class="" >
                                <CardHeader>
                                    <CardTitle>
                                        Formation {formation}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                                </CardContent>
                            </Card>
                        }
                    </For>
                </div> */}
                <div class="grid grid-cols-3 gap-4" >
                    <For each={[...Array(10).keys()].map(foo => foo + 1)}>
                        {(item) =>
                            <Card class="" >
                                <CardHeader>
                                    <CardTitle>
                                        Formation {item}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                                </CardContent>
                            </Card>
                        }
                    </For>
                </div>
            </div>
        </main>
    );
}