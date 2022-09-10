import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface CandidatesContextProviderProps {
  children: ReactNode
}
interface CandidatesSocialProps {
  instagram: string
  facebook: string
  twitter: string
}
interface CandidatesData {
  NM_URNA_CANDIDATO: string
  IM_CANDIDATO: string
  NR_CPF_CANDIDATO: string
  RS_CANDIDATO: CandidatesSocialProps
  NR_CANDIDATO: string
}
interface StatesType {
  id: number
  sigla: string
  nome: string
}

interface CandidatesContextType {
  candidates: CandidatesData[]
  candidatesPresident: CandidatesData[]
  states: StatesType[]
  loading: boolean
  handleFilterCandidateType: (type: string, state: string) => void
}

export const CanditateContext = createContext({} as CandidatesContextType)

export function CandidatesContextProvider({
  children,
}: CandidatesContextProviderProps) {
  const [candidatesPresident, setCandidatesPresident] = useState<
    CandidatesData[]
  >([])
  const [candidates, setCandidates] = useState<CandidatesData[]>([])
  const [loading, setLoading] = useState(false)

  const [states, setState] = useState<StatesType[]>([])

  async function loadCandidates() {
    const response = await api.get(`PA`)

    setCandidates(response.data[3]) // pegaCandidatos
    // setCandidatesPresident(response.data[1]) //pegaPresidente
    setLoading(false)
    console.log(response.data)
  }
  async function loadStates() {
    const response = await api.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
    setState(response.data)
    // console.log(states)
  }

  useEffect(() => {
    setLoading(true)
    loadCandidates()
    loadStates()
    // console.log(candidates)
  }, [])

  async function handleFilterCandidateType(type: string, state: string) {
    console.log(type)
    console.log(state)
    // const response = await api.get(`PA?cdc=${type}`)

    // console.log(response.data[3])
  }

  return (
    <CanditateContext.Provider
      value={{
        candidates,
        candidatesPresident,
        loading,
        states,
        handleFilterCandidateType,
      }}
    >
      {children}
    </CanditateContext.Provider>
  )
}

// cdc (Código do cargo)
// 1 - PRESIDENTE
// 2 - VICE-PRESIDENTE
// 3 - GOVERNADOR
// 4 - VICE-GOVERNADOR
// 5 - SENADOR
// 9 - 1º SUPLENTE
// 10 - 2º SUPLENTE
// 6 - DEPUTADO FEDERAL
// 7 - DEPUTADO ESTADUAL
// 8 - DEPUTADO DISTRITAL
