import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface CandidatesContextProviderProps {
  children: ReactNode
}
interface CandidatesSocialProps {
  instagram: string | null
  facebook: string | null
  twitter: string | null
  youtube: string | null
  site: string | null
}
interface CandidatesData {
  NM_URNA_CANDIDATO: string
  IM_CANDIDATO: string
  NR_CPF_CANDIDATO: string
  RS_CANDIDATO: CandidatesSocialProps | null
  NR_CANDIDATO: string
  PT_CANDIDATO: string
}
interface StatesType {
  id: number
  sigla: string
  nome: string
}

interface CandidatesContextType {
  candidates: CandidatesData[]
  states: StatesType[]
  loading: boolean
  type: string
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  pageCount: number
  handleFilterCandidateType: (type: string, state: string) => void
  handleLoadingMoreCandidates: (page: number) => void
}

export const CanditateContext = createContext({} as CandidatesContextType)

export function CandidatesContextProvider({
  children,
}: CandidatesContextProviderProps) {
  const [candidates, setCandidates] = useState<CandidatesData[]>([])
  const [loading, setLoading] = useState(false)

  const [states, setStates] = useState<StatesType[]>([])
  const [state, setState] = useState('DF')
  const [type, setType] = useState('1')

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(1)

  async function loadCandidates() {
    const response = await api.get(`${state}?cdc=${type}`)

    setCandidates(response.data[type])
    setLoading(false)
  }

  async function loadStates() {
    const response = await api.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
    setStates(response.data)
    // console.log(states)
  }

  useEffect(() => {
    setLoading(true)
    loadCandidates()
    loadStates()
    // console.log(candidates)
  }, [])

  async function handleFilterCandidateType(type: string, state: string) {
    setLoading(true)

    try {
      const response = await api.get(`${state}?cdc=${type}&page=${1}`)

      if (['6', '7', '8'].includes(type)) {
        if (response.data.pages[type]) {
          setPageCount(response.data.pages[type].last)
        } else {
          setPageCount(0)
        }
      }

      setPage(1)

      if (response.data[type]) {
        setCandidates(response.data[type])
      } else {
        setCandidates([])
      }
      
      setType(type)
      setState(state)
    } catch (error) {
      // setPage(1)

      setCandidates([])

      // setType(type)
      // setState(state)
    }

    setLoading(false)
    // console.log(response.data[3])
  }

  async function handleLoadingMoreCandidates(page: number) {
    setLoading(true)

    const response = await api.get(`${state}?cdc=${type}&page=${page}`)

    setCandidates(response.data[type])
    setType(type)
    setLoading(false)
    console.log(response.data[3])
  }

  return (
    <CanditateContext.Provider
      value={{
        candidates,
        loading,
        type,
        page,
        setPage,
        pageCount,
        states,
        handleFilterCandidateType,
        handleLoadingMoreCandidates,
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
