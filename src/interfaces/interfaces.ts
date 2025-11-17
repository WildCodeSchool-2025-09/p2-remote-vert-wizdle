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
	setSelectedCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
	setTableauTry: React.Dispatch<React.SetStateAction<Character[]>>;
	errorApi: string | null;
	dataApi: Character[];
	setErrorApi: React.Dispatch<React.SetStateAction<string | null>>;
	tableauTry: Character[];
}

export interface VisualisationTableProps {
	selectedCharacter: Character | null;
	tableauTry: Character[];
	setVictory: React.Dispatch<React.SetStateAction<boolean>>;
	dataApi: Character[];
}
