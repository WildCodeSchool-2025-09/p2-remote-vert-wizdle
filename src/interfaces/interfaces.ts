export interface Character {
	id: string;
	nom: string;
	maison: string;
	image: string;
	espece: string;
	genre: string;
	ascendance: string;
	couleur_cheveux: string;
	vivant: boolean;
}

export interface SearchProps {
	setSelected: React.Dispatch<React.SetStateAction<Character | null>>;
	setTableauTry: React.Dispatch<React.SetStateAction<Character[]>>;
	error: string | null;
	data: Character[];
	setError: React.Dispatch<React.SetStateAction<string | null>>;
	selected: Character | null;
}

export interface VisualisationTableProps {
	selected: Character | null;
	tableauTry: Character[];
	setVictory: React.Dispatch<React.SetStateAction<boolean>>;
	data: Character[];
}
