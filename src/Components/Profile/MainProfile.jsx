import React from 'react'
import { UserContext, ColorContexr } from '../../Context/MyContext'
import Profile from './Profile'

class MainProfile extends React.Component{
    state = {
        user: {
          name: 'Freddy Michel',
          age: 29,
          taille: 1.61
        },
        loko: {
            color: 'rgb(87, 21, 21)'
        }
    }
    render(){
        return(
            <>
                <div>
                    <h3>UseContext using react hooks</h3>
                    <p>On utilise <em>useContext</em> pour eviter de passer des <em>props</em> a chaque fois pour des components</p>
                    <h5>Exemple</h5>
                    <UserContext.Provider value={this.state.user}>
                        <ColorContexr.Provider value={this.state.loko}>
                            <Profile/>
                        </ColorContexr.Provider>
                    </UserContext.Provider>
                </div>
            </>
        )
    }
}

export default MainProfile;