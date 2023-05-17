import React from 'react'

export default function PC(props){
    const {id,ref,marque,prix,description} = props.infos
    const setPanier = props.setPanier
    const panier = props.panier 
    const stylePC = {border:'5px solid blue',backgroundColor:'pink',marginBottom:'10px',padding:'20px'}

    function AjouterAuPanier(){
        setPanier([...panier,props.infos])
       
       /* const tmp_panier =[...panier]
        tmp_panier.push(props.infos)
        setPanier(tmp_panier) */
        alert(`le PC de référence :${ref} est bien ajouté dans le modifier`)
    }
    return(
        <div style={stylePC} key={id}>
            <span>ref:{ref},marque:{marque},prix:{prix},description:{description}</span>
            <button onClick={()=> AjouterAuPanier()}>Ajouter au panier</button>
        </div>
    )
}