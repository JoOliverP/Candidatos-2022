import { FormEvent, useContext, useState } from 'react'
import Select from 'react-select'
import { CanditateContext } from '../../contexts/CandidatesContext'
import { Candidates } from '../../components/Candidates'
import { HomeContainer } from './styles'

interface CandidatesData {
  NM_URNA_CANDIDATO: string
  IM_CANDIDATO: string
  NR_CPF_CANDIDATO: string
  NR_CANDIDATO: string
  PT_CANDIDATO: string
  SG_PARTIDO: string
}

export function Home() {
  const { states, vagas, handleFilterCandidateType } =
    useContext(CanditateContext)
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
    setTypeCandidateSelected(typeCandidate)
  }

  const options = [
    { value: '1', label: 'Presidência da República' },
    { value: '3', label: 'Governador' },
    { value: '5', label: 'Senador' },
    { value: '6', label: 'Deputado Federal' },
    { value: '7', label: 'Deputado Estadual' },
    { value: '8', label: 'Deputado Distrital' },
  ]

  const stateOptions = []

  for (const state of states) {
    stateOptions.push({
      value: state.uf,
      label: (
        <div className="option__state">
          <img src={state.img.circle.svg} />
          {state.name}
        </div>
      ),
    })
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <Select
          id="candidate_type"
          name="candidate_type"
          options={options}
          onChange={(data: any) => {
            setTypeCandidate(data.value)
          }}
          className="select"
          classNamePrefix="option"
          placeholder="Tipo de canditatura"
          isSearchable={false}
        />
        <Select
          id="state"
          name="state"
          options={stateOptions}
          onChange={(data: any) => {
            setState(data.value)
          }}
          className="select"
          classNamePrefix="option"
          placeholder="Estado"
          isSearchable={false}
        />

        <button disabled={state === '' || typeCandidate === '0'} type="submit">
          Filtrar
        </button>
      </form>

      <h1>
        Candidatos a {candidateTypes[typeCandidateSelected as ObjectKey]} (
        {vagas} {vagas === 1 ? 'vaga' : 'vagas'})
      </h1>
      <Candidates />
    </HomeContainer>
  )
}
