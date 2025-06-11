export interface Pet {
    id: number,
    name: string,
    speciesId: number,
    breedId: number,
    tutorId: number,
    age: number
}

export interface Breed {
    id: number,
    breedName: string
}

export interface Species {
    id: number,
    speciesName: string
}