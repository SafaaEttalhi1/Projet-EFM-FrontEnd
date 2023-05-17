import {useState} from 'react';
export default function Concatenation(){
    const [mot1,setMot1] = useState('')
    const [mot2,setMot2] = useState('')
    const [motComplet,setMotComplet] = useState('') 

    function handleChangeMot1(event){
       setMot1(event.target.value)
    }
    function handleChangeMot2(event){
       setMot2(event.target.value)
    }
    function AfficherInfo(event){
       event.preventDefault();
       if(mot1 === '' || mot2 === '')
          alert('Entrer les infos');
       else
         setMotComplet(`${mot1} ${mot2}`)
    }
    const styleConcatenation= {backgroundColor:'pink',width:'400px'} 
    return (
        <div style = {styleConcatenation}>
           <form onSubmit={(e) => AfficherInfo(e)}>
               <h3>Composant Concatenation </h3>
               <table>
                   <tr><th>Mot1:</th><td><input type="text"  value={mot1} onChange={e => handleChangeMot1(e)}/></td><th>(*)</th></tr>
                   <tr><th>Mot2 :</th><td><input type="text"  value={mot2} onChange={e => handleChangeMot2(e)}/></td><th>(*)</th></tr>
               </table>
               <button type="submit">Afficher mot complet</button>
               {motComplet.length > 0 && <h3>Mot Complet est : {motComplet}</h3> }
           </form>
        </div>  
    );
}