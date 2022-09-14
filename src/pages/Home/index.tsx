import { FormEvent, useContext, useState } from 'react'
import Select from 'react-select'
import { CanditateContext } from '../../contexts/CandidatesContext'
import { Candidates } from '../../components/Candidates'
import { HomeContainer } from './styles'

export function Home() {
  const { states, vagas, handleFilterCandidateType } = useContext(CanditateContext)
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

  const stateOptions = [
    // { value: '1', label: 'Presidência da República' },
    // { value: '3', label: 'Governador' },
    // { value: '5', label: 'Senador' },
    // { value: '6', label: 'Deputado Federal' },
    // { value: '7', label: 'Deputado Estadual' },
    // { value: '8', label: 'Deputado Distrital' },
  ]

  for (let state of states) {
    stateOptions.push({ value: state.uf, label: <div className='option__state'><img src={state.img.circle.svg}/>{state.name}</div> });
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <Select 
          // styles={customStyles}
          // styles={{ width: 200 }}
          // width='220px'
          id="candidate_type"
          name="candidate_type"
          // value={typeCandidate}
          options={options}
          onChange={(data: any) => {
            setTypeCandidate(data.value)
            // console.log(typeCandidate)
          }}
          className="select"
          classNamePrefix="option"
          placeholder="Tipo de canditatura"
          isSearchable={false}
          // menuIsOpen={true}
          // styles={{
          //   width: 500,
          // }}
        />

        {/* <select
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
        </select> */}

        <Select 
          id="state"
          name="state"
          // getOptionLabel="name"
          // value={typeCandidate}
          options={stateOptions}
          onChange={(data: any) => {
            setState(data.value)
            // console.log(data)
          }}
          className="select"
          classNamePrefix="option"
          placeholder="Estado"
          isSearchable={false}
          // menuIsOpen={true}
          // menuShouldBlockScroll={false}
          // menuShouldScrollIntoView={false}
        />

        {/* <select
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
                <di>
                  <img src={state.img.circle.svg} alt="" />
                </di>
                {state.name}
              </option>
            )
          })}
        </select> */}
        <button disabled={state === '' || typeCandidate === '0'} type="submit">
          Filtrar
        </button>
      </form>

      <h1>Candidatos a {candidateTypes[typeCandidateSelected as ObjectKey]} ({vagas} {vagas == 1 ? "vaga" : "vagas"})</h1>
      <Candidates />
    </HomeContainer>
  )
}
