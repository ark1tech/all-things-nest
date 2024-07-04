interface Skillset {
    strength: number;
    speed: number;
    intelligence: number;
    fighting: number;
}

export class CreateNinja {
    id: string;
    name: string;
    nickname?: string;
    species: string;
    gender: string;
    weapons: string[];
    color: string;
    role: string;
    skills: Skillset;
    personality: string[];
}
