import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'
import { StatesType, statesData } from '../services/states'

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
interface CadidateBsProps {
  VR_BEM_CANDIDATO: string
}

interface ViceCadidate {
  NM_URNA_CANDIDATO: string
  IM_CANDIDATO: string
}
interface CandidatesData {
  NM_CANDIDATO: string
  NM_URNA_CANDIDATO: string
  IM_CANDIDATO: string
  NR_CPF_CANDIDATO: string
  RS_CANDIDATO: CandidatesSocialProps | null
  NR_CANDIDATO: string
  PT_CANDIDATO: string
  SG_PARTIDO: string

  DS_OCUPACAO: string
  DS_COR_RACA: string
  DS_ESTADO_CIVIL: string
  DS_GRAU_INSTRUCAO: string
  DS_GENERO: string
  DT_NASCIMENTO: string
  NM_MUNICIPIO_NASCIMENTO: string
  SG_UF_NASCIMENTO: string
  DS_NACIONALIDADE: string
  NM_COLIGACAO: string
  DS_COMPOSICAO_COLIGACAO: string
  BS_CANDIDATO?: CadidateBsProps[]
  VC_CANDIDATO: ViceCadidate
}

interface CandidatesContextType {
  candidates: CandidatesData[]
  cadidate: CandidatesData | undefined
  states: StatesType[]
  loading: boolean
  type: string
  vagas: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  pageCount: number
  isCandidateModalOpen: boolean
  setIsCandidateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleFilterCandidateType: (type: string, state: string) => void
  handleLoadingMoreCandidates: (page: number) => void
  handleOpenModalCadidate: (cadidate: CandidatesData) => void
}

export const CanditateContext = createContext({} as CandidatesContextType)

export function CandidatesContextProvider({
  children,
}: CandidatesContextProviderProps) {
  const [candidates, setCandidates] = useState<CandidatesData[]>([])

  const [cadidate, setCadidate] = useState<CandidatesData>()
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [states, setStates] = useState<StatesType[]>([])
  const [state, setState] = useState('DF')
  const [type, setType] = useState('1')
  const [vagas, setVagas] = useState(0)

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(1)

  async function loadCandidates() {
    const response = await api.get(`${state}?cdc=${type}`)

    setCandidates(response.data[type])
    setVagas(response.data.vagas[type])
    setLoading(false)
  }

  async function loadStates() {
    const response = await statesData
    setStates(response)
  }

  async function handleFilterCandidateType(type: string, state: string) {
    setLoading(true)

    try {
      setVagas(0)

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
        setVagas(response.data.vagas[type])
      } else {
        setCandidates([])
        // setVagas(0)
      }

      setType(type)
      setState(state)
    } catch (error) {
      setCandidates([])
    }

    setLoading(false)
  }

  async function handleLoadingMoreCandidates(page: number) {
    setLoading(true)

    const response = await api.get(`${state}?cdc=${type}&page=${page}`)

    setCandidates(response.data[type])
    setType(type)
    setVagas(response.data.vagas[type])
    setLoading(false)
  }

  async function handleOpenModalCadidate(cadidate: CandidatesData) {
    setCadidate(cadidate)
    setIsCandidateModalOpen(true)
  }
  useEffect(() => {
    setLoading(true)
    loadCandidates()
    loadStates()
    // console.log(candidates)
  }, [])

  return (
    <CanditateContext.Provider
      value={{
        candidates,
        cadidate,
        loading,
        type,
        vagas,
        page,
        setPage,
        pageCount,
        states,
        isCandidateModalOpen,
        setIsCandidateModalOpen,
        handleFilterCandidateType,
        handleLoadingMoreCandidates,
        handleOpenModalCadidate,
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
