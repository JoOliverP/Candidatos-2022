import { FormEvent, useContext, useState } from 'react'
import { CanditateContext } from '../../contexts/CandidatesContext'
import { Candidates } from '../../components/Candidates'
import { HomeContainer } from './styles'

export function Home() {
  const { states, handleFilterCandidateType } = useContext(CanditateContext)
  const [typeCandidate, setTypeCandidate] = useState('0')
  const [typeCandidateSelected, setTypeCandidateSelected] = useState('0')

  const [state, setState] = useState('')

  const candidateTypes = {
    '0': 'Presidência da República',
    '1': 'Presidência da República',
    '3': 'Governador',
    '5': 'Senador',
    '6': 'Deputado Federal',
    '7': 'Deputado Estadual',
    '8': 'Deputado Distrital',
  }
  type ObjectKey = keyof typeof candidateTypes

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    handleFilterCandidateType(typeCandidate, state)
    // setTypeCandidateSelected(typeCandidate)
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
          <option value="1">Presidência da República</option>
          <option value="3">Governador</option>
          <option value="5">Senador</option>
          <option value="6">Deputado Federal</option>
          <option value="7">Deputado Estadual</option>
          <option value="8">Deputado Distrital</option>
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
              <option key={state.id} value={state.uf}>
                {state.name}
              </option>
            )
          })}
        </select>
        <button disabled={state === '' || typeCandidate === '0'} type="submit">
          Filtrar
        </button>
      </form>

      {typeCandidateSelected === '8' && state !== 'DF' ? (
        <h1>
          No Distrito Federal existem apenas Deputados distritais e federais
        </h1>
      ) : (
        <>
          <h1>
            Candidatos a {candidateTypes[typeCandidateSelected as ObjectKey]}
          </h1>
          <Candidates />
        </>
      )}
    </HomeContainer>
  )
}
