import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { CanditateContext } from '../../contexts/CandidatesContext'
import { Candidates } from '../Candidates'
import { HomeContainer } from './styles'

export function Home() {
  const { states, handleFilterCandidateType } = useContext(CanditateContext)
  const [typeCandidate, setTypeCandidate] = useState('')
  const [state, setState] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    handleFilterCandidateType(typeCandidate, state)
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <select
          id="candidate_type"
          name="candidate_type"
          value={typeCandidate}
          onChange={(event) => setTypeCandidate(event.target.value)}
        >
          <option defaultValue="typeCanditate" style={{ display: 'none' }}>
            Tipo de canditatura
          </option>
          <option value="1">Presidencia da republica</option>
          <option value="3">Governador</option>
          <option value="5">Senador</option>
          <option value="6">Deputado federal</option>
          <option value="7">Deputado estadual</option>
        </select>
        <select
          id="state"
          name="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
        >
          <option defaultValue="state" style={{ display: 'none' }}>
            Estado
          </option>
          {states?.map((state) => {
            return (
              <option key={state.id} value={state.sigla}>
                {state.nome}
              </option>
            )
          })}
        </select>
        <button type="submit">Filtrar</button>
      </form>
      <Candidates />
    </HomeContainer>
  )
}
