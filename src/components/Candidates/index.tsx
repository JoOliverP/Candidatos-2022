import { useState, useContext } from 'react'
import {
  CandidatesContainer,
  CardCandidate,
  CandidateInfo,
  Social,
  NumberCandidate,
  GovernmentPlan,
} from './styles'

import noImage from '../../assets/no-image.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CanditateContext } from '../../contexts/CandidatesContext'

import { PulseLoader } from 'react-spinners'
import { Pagination } from '../Pagination'

export function Candidates() {
  const [hasError, setHasError] = useState(false)
  const {
    candidates,
    type,
    loading,
    page,
    setPage,
    pageCount,
    handleLoadingMoreCandidates,
  } = useContext(CanditateContext)

  function imageError(e: any) {
    console.log(e)
    setHasError(true)
  }
  return (
    <>
      <CandidatesContainer>
        {loading ? (
          <PulseLoader color="#36d7b7" />
        ) : !candidates.length ? (
          <h1>Dados não encontrados</h1>
        ) : (
          candidates?.map((candidates) => {
            return (
              <CardCandidate key={candidates?.NR_CPF_CANDIDATO}>
                <NumberCandidate>
                  <h1>{candidates?.NR_CANDIDATO}</h1>
                </NumberCandidate>

                <img
                  src={hasError ? noImage : candidates?.IM_CANDIDATO}
                  onError={imageError}
                  alt=""
                />
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

      {!loading && candidates.length && ['6', '7', '8'].includes(type) ? (
        <Pagination />
      ) : (
        <></>
      )}
    </>
  )
}
