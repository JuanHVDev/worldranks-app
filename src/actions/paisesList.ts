"use server";

import { Paises, PaisesData as PaisesResponse } from "@/interfaces/paises";
import { Flags, Name } from "../interfaces/paises";
import { revalidatePath } from "next/cache";

export const getPaisesAll = async (status: string): Promise<Paises[]> => {
    const res = await fetch(
        `https://restcountries.com/v3.1/${
            status
                ? `independent?status=${
                      status === "independent" ? "true&" : "false&"
                  }`
                : "all?"
        }fields=region,name,flags,population,area,unMember`
    );
    const paisesData = await res.json();

    const paises = paisesData.map((pais: PaisesResponse) => ({
        flag: pais.flags["svg"].toString(),
        name: pais.name["common"],
        population: pais.population,
        area: pais.area,
        region: pais.region,
        unMember: pais.unMember,
    }));

    return paises;
};

export const paisesbySort = async (
    sortDirection: string,
    regions: string[],
    member: string,
    independent: string
) => {
    let paises = await getPaisesAll(independent);

    if (member === "member") {
        paises = paises.filter((pais) => pais.unMember);
    }
    if (sortDirection === "name") {
        paises = paises
            .sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            })
            .filter((pais) =>
                regions.length > 0
                    ? regions.includes(pais.region.toLowerCase())
                    : true
            );
    }
    if (sortDirection === "area") {
        paises = paises
            .sort((a, b) => b.area - a.area)
            .filter((pais) =>
                regions.length > 0
                    ? regions.includes(pais.region.toLowerCase())
                    : true
            );
    }
    if (sortDirection === "population") {
        paises = paises
            .sort((a, b) => b.population - a.population)
            .filter((pais) =>
                regions.length > 0
                    ? regions.includes(pais.region.toLowerCase())
                    : true
            );
    }

    return paises;
};
