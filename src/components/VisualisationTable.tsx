import { useEffect, useState } from "react"
import "../styles/VisualisationTable.css"



interface Personnage {
    nom: string,
    espece: string,
    genre: string,
    ascendance: string,
    maison: string,
    vivant: boolean,
    couleur_cheveux: string
}

function VisualisationTable() {
   const apiUrl = import.meta.env.VITE_API_URL;
   const [allData, setAllData] = useState<Personnage[]>([])

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setAllData(data)               
        );
    }, []);

    /* Quand on va cliquer sur la barre de recherche => selectionner un personnage 
        Personnage selctionner ce qu'on veut c'est son nom ou carrement l'objet

        const [selectionPerso, setSelectionPerso] = useState()
        onClick setSelectionPerso(lepersonnagecliquer)
    */ 

    if (allData.length === 0) {
        return <p>Chargement des données...</p>;
    }

    const random = allData[Math.floor(allData.length * Math.random())]
    console.log(random)

    const harryPotter = allData.find((personnage) => personnage.nom === "Harry Potter")
    

    return (
        <table id="table-game">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Espèce</th>
                    <th>Genre</th>
                    <th>Ascendance</th>
                    <th>Maison</th>
                    <th>En vie?</th>
                    <th>Cheveux</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={random.nom === harryPotter?.nom ? "box-true" : "box-false"}>{harryPotter?.nom}</td>
                    <td className={random.espece === harryPotter?.espece ? "box-true" : "box-false"}>{harryPotter?.espece}</td> 
                    <td className={random.genre === harryPotter?.genre ? "box-true" : "box-false"}>{harryPotter?.genre}</td> 
                    <td className={random.ascendance === harryPotter?.ascendance ? "box-true" : "box-false"}>{harryPotter?.ascendance}</td> 
                    <td className={random.maison === harryPotter?.maison ? "box-true" : "box-false"}>{harryPotter?.maison}</td> 
                    <td className={random.vivant === harryPotter?.vivant ? "box-true" : "box-false"}>{harryPotter?.vivant ? "oui" : "non"}</td> 
                    <td className={random.couleur_cheveux === harryPotter?.couleur_cheveux ? "box-true" : "box-false"}>{harryPotter?.couleur_cheveux}</td>                   
                </tr>
            </tbody>            
           
        </table>

    )
}
export default VisualisationTable