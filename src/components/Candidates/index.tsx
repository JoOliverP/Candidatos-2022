import { useContext } from 'react'
import {
  CandidatesContainer,
  CardCandidate,
  CandidateInfo,
  Social,
  NumberCandidate,
  GovernmentPlan,
} from './styles'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CanditateContext } from '../../contexts/CandidatesContext'

import { PulseLoader } from 'react-spinners'
import { Image } from '../Image'
import { Pagination } from '../Pagination'

export function Candidates() {
  const {
    candidates,
    type,
    loading,
    page,
    setPage,
    pageCount,
    handleLoadingMoreCandidates,
  } = useContext(CanditateContext)

  return (
    <>
      <CandidatesContainer>
        {loading ? (
          <PulseLoader color="#00B37E" />
        ) : !candidates.length ? (
          <h1>Dados não encontrados</h1>
        ) : (
          candidates?.map((candidates) => {
            return (
              <CardCandidate key={candidates?.NR_CPF_CANDIDATO}>
                <NumberCandidate>
                  <h1>{candidates?.NR_CANDIDATO}</h1>
                </NumberCandidate>

                <CandidateInfo>
                  <Image src={candidates?.IM_CANDIDATO} />
                  <h1>
                    {candidates?.NM_URNA_CANDIDATO.split(' ')
                      .slice(0, 2)
                      .join(' ')}
                  </h1>
                  <span>{candidates?.SG_PARTIDO}</span>
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
                  {/* <Link to="/social-not-found"></Link> */}
                  <a
                    href={
                      candidates.RS_CANDIDATO?.facebook ?? '/social-not-found'
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaFacebook size={25} />
                  </a>
                  <a
                    href={
                      candidates.RS_CANDIDATO?.instagram ?? '/social-not-found'
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <FaInstagram size={25} />
                  </a>
                  <a
                    href={
                      candidates.RS_CANDIDATO?.twitter ?? '/social-not-found'
                    }
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
