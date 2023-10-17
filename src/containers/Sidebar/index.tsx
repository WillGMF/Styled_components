import Avatar from '../components/Avatar'
import Paragrafo from '../components/Paragrafo'
import Titulo from '../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Willian Gabriel</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        WillGMF
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante de front-end
      </Descricao>
      <BotaoTema> Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
