import { useEffect, useState } from "react";

const FonctionDisplayKey = () =>{
    const [keyCode, setkeyCode] = useState(null)

    const handleKeyCode = (e) => {
        setkeyCode(e.code)
        console.log("addEventListener in hooks active");
    }
    // mount composant 
    useEffect(()=>{
        document.addEventListener("keyup", handleKeyCode)
        // nettoyer la composant
        return (()=>{
            console.log("addEventListener in hooks arrete");
            document.removeEventListener("keyup", handleKeyCode)
        })
    },[])

    
    return(
        <div>
            <h3>Display key Name</h3>
            <h4>Key code <em>{keyCode}</em></h4>
        </div>
    )
}

export default FonctionDisplayKey;