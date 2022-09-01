import { Canditates } from '../Canditates'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <h1>Canditados</h1>

      <form action="">
        <select id="candidate_type" name="candidate_type">
          <option value="">Tipo de canditatura</option>
          <option value="president">Presidencia da republica</option>
          <option value="gov">Governadores</option>
          <option value="sen">Senadores</option>
          <option value="dep_fed">Deputados federais</option>
          <option value="dep_est">Deputados estaduais</option>
        </select>
        <select id="state" name="state">
          <option value="">Estado</option>
          <option value="">Pará</option>
          <option value="">Brasilia</option>
          <option value="">Rio grande do sul</option>
        </select>
        <input type="submit" value="Filtrar" />
      </form>
      <Canditates />
    </HomeContainer>
  )
}
