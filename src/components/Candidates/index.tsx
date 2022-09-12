import {
  CandidatesContainer,
  CardCandidate,
  CandidateInfo,
  Social,
  NumberCandidate,
  PaginateContainer,
  GovernmentPlan,
} from './styles'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useContext } from 'react'
import { CanditateContext } from '../../contexts/CandidatesContext'

import { PulseLoader } from 'react-spinners'
import { Pagination } from '../Pagination'

export function Candidates() {
  const {
    candidates,
    type,
    loading,
    setPage,
    pageCount,
    handleLoadingMoreCandidates,
  } = useContext(CanditateContext)

  return (
    <>
      <CandidatesContainer>
        {loading ? (
          <PulseLoader color="#00B37E" />
        ) : (
          candidates?.map((candidates) => {
            return (
              <CardCandidate key={candidates?.NR_CPF_CANDIDATO}>
                <NumberCandidate>
                  <h1>{candidates?.NR_CANDIDATO}</h1>
                </NumberCandidate>
                <img src={candidates?.IM_CANDIDATO} alt="" />
                <CandidateInfo>
                  <h1>
                    {candidates?.NM_URNA_CANDIDATO.split(' ')
                      .slice(0, 2)
                      .join(' ')}
                  </h1>
                </CandidateInfo>

                {['1', '3'].includes(type) ? (
                  <GovernmentPlan
                    href={candidates.PT_CANDIDATO}
                    target="__blank"
                  >
                    Plano de governo
                  </GovernmentPlan>
                ) : (
                  <></>
                )}

                <Social>
                  <a
                    href={candidates.RS_CANDIDATO?.facebook ?? ''}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaFacebook size={25} />
                  </a>
                  <a
                    href={candidates.RS_CANDIDATO?.instagram ?? ''}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaInstagram size={25} />
                  </a>
                  <a
                    href={candidates.RS_CANDIDATO?.twitter ?? ''}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaTwitter size={25} />
                  </a>
                </Social>
              </CardCandidate>
            )
          })
        )}
      </CandidatesContainer>
      {!loading && ['6', '7', '8'].includes(type) ? <Pagination /> : <></>}
    </>
  )
}
