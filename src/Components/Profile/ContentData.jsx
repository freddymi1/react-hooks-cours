import React, { useContext } from 'react'
import { UserContext, ColorContexr } from '../../Context/MyContext';
const ContentData = () => {
    // Pour eviter de faire des function flecher a chaque fois, on utilise le hooks useContext
    const user = useContext(UserContext)
    const loko = useContext(ColorContexr)
    return(
        <>
        {/* <UserContext.Consumer>
        {
            user =>{
                return(
                    <ColorContexr.Consumer>
                        {
                            loko => {
                                return(
                                    <div>
                                        <ul>
                                            <li>Nom: <i style={{color:loko.color}}>{user.name}</i></li>
                                            <li>Age: <i>{user.age}</i></li>
                                            <li>Taille: <i>{user.taille}</i></li>
                                        </ul>
                                    </div>
                                )
                            }
                        }
                    </ColorContexr.Consumer>
                    
                )
            }
        }
        </UserContext.Consumer> */}
        {/* Or utiliser le hooks useContext et passe apres...> */}
            <div>
                <ul>
                    <li>Nom: <i style={{color:loko.color}}>{user.name}</i></li>
                    <li>Age: <i>{user.age}</i></li>
                    <li>Taille: <i>{user.taille}</i></li>
                </ul>
            </div>
        </>
    )
}

export default ContentData;