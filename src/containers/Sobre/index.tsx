import Paragrafo from '../components/Paragrafo'
import Titulo from '../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}> Sobre mim </Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam
      dolores explicabo quas inventore eos consequatur nihil itaque sapiente
      alias deleniti enim, veritatis praesentium iusto odit at ipsam, deserunt
      minima?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=WillGMF&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=WillGMF&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
