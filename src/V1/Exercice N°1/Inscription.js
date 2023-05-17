import {useState} from 'react';
export default function Inscription(){
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [nomComplet,setNomComplet] = useState('') 

    function handleChangeNom(event){
       setNom(event.target.value)
    }
    function handleChangePrenom(event){
       setPrenom(event.target.value)
    }
    function AfficherInfo(event){
       event.preventDefault();
       if(nom === '' || prenom === '')
          alert('Entrer les infos');
       else
          setNomComplet(`${nom} ${prenom}`)
    }
    const styleInscription= {backgroundColor:'pink',width:'400px'} 
    return (
        <div style = {styleInscription}>
           <form onSubmit={(e) => AfficherInfo(e)}>
               <h3>Composant Inscription </h3>
               <table>
                   <tr><th>Nom :</th><td><input type="text"  value={nom} onChange={e => handleChangeNom(e)}/></td><th>(*)</th></tr>
                   <tr><th>Prenom :</th><td><input type="text"  value={prenom} onChange={e => handleChangePrenom(e)}/></td><th>(*)</th></tr>
               </table>
               <button type="submit">Afficher mot complet</button>
               {nomComplet.length > 0 && <h3>Nom Complet est : {nomComplet}</h3> }
           </form>
        </div>  
    );
}