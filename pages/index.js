import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return(
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const profileGit = "hihugo1";
  const pessoasFavoritas = [
    'omariosouto',
    'peas', 
    'rafaballerini',
    'jcntck',
    'filipedeschamps',
    'Zaniquelli'
  ]

  return( 
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser={profileGit} />
          
      </div>

      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1>Bem vindo(a)</h1>
        <OrkutNostalgicIconSet />

        </Box>     
      </div> 
      
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((githubUser) => {
              return( 
                <li>
                <a href={`/users/${githubUser}`} key={githubUser}>
                  <img src={`https://github.com/${githubUser}.png`} />
                  <span>{githubUser}</span>
                </a>
                </li>
                )
            })}
            </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
        Comunidade
        </Box>
      </div>

    </MainGrid>
    </>
  )
}
