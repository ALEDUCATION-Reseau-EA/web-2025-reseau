import { useNavigate } from "@solidjs/router";
import { createResource, createSignal } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import db from "~/db";

export default function Formations() {
    const [value, setValue] = createSignal("");
    return (
        <main class="text-center mx-auto text-gray-800 p-4">
            <title>Nos Formations - Aleducation</title>
            <h1 class="max-6-xs text-6xl text-gray-800 font-thin uppercase my-16">Nos Formations</h1>
            <div class="flex flex-col gap-2">
                <Select
                    value={value()}
                    onChange={setValue}
                    options={["Mathématiques", "Langues", "Développement / Code", "Histoire", "Sciences"]}
                    placeholder="Choisissez une catégorie…"
                    itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
                >
                    <SelectTrigger aria-label="Category" class="w-[180px]">
                        <SelectValue<string>>{(state) => state.selectedOption()}</SelectValue>
                    </SelectTrigger>
                    <SelectContent />
                </Select>
                <div class="grid grid-cols-3 gap-4" >
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 1
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 2
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 3
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 4
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 5
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 6
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                    <Card class="" >
                        <CardHeader>
                            <CardTitle>
                                Formation 7
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat lectus ut erat volutpat varius.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}