import React, { useState } from 'react'
import DisplayKey from '../Classe/DisplayKey';
import FonctionDisplayKey from './FonctionDisplayKey';

const HookContainer = () =>{
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)

    const displayName = show ? "Cacher" :"Afficher"
    const displayName1 = show1 ? "Cacher" :"Afficher"
    return(
        <>
            <div className='displayKey'>
                <div>
                    <h3>UseEffect + nettoyage avec class</h3>
                    <button onClick={()=> setShow(!show)} className='btn'>{displayName}</button>
                    <div>
                        {
                            show && <DisplayKey/>
                        }
                    </div>
                </div>
                <div>
                    <h3>UseEffect + nettoyage avec Hooks</h3>
                    <button onClick={()=> setShow1(!show1)} className='btn'>{displayName1}</button>
                    <div>
                        {
                            show1 && <FonctionDisplayKey/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HookContainer;