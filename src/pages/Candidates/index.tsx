import {
  CandidatesContainer,
  CardCandidate,
  CandidateInfo,
  Social,
  NumberCandidate,
  PaginateContainer,
} from './styles'
import profileImg from '../../assets/figurinha-cristiano-ronaldo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useContext } from 'react'
import { CanditateContext } from '../../contexts/CandidatesContext'
import ReactPaginate from 'react-paginate'
import { PulseLoader } from 'react-spinners'

export function Candidates() {
  const { candidatesPresident, candidates, loading } =
    useContext(CanditateContext)
  return (
    <>
      {/* <h1>Presidente</h1>
      <CandidatesContainer>
        {candidatesPresident?.map((candidates) => {
          return (
            <CardCandidate key={candidates.NR_CPF_CANDIDATO}>
              <img src={candidates.IM_CANDIDATO} alt="" />

              <h1>
                {candidates.NM_URNA_CANDIDATO.split(' ').slice(0, 2).join(' ')}
              </h1>
              <NumberCandidate>
                <h1></h1>
              </NumberCandidate>
              <Social>
                <a href="">
                  <FaFacebook size={25} />
                </a>
                <a href="">
                  <FaInstagram size={25} />
                </a>
                <a href="">
                  <FaTwitter size={25} />
                </a>
              </Social>
            </CardCandidate>
          )
        })}
      </CandidatesContainer> */}
      <h1>Candidatos a governador</h1>
      <CandidatesContainer>
        {loading ? (
          <PulseLoader color="#36d7b7" />
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

                <Social>
                  <a href={''}>
                    <FaFacebook size={25} />
                  </a>
                  <a href="">
                    <FaInstagram size={25} />
                  </a>
                  <a href="">
                    <FaTwitter size={25} />
                  </a>
                </Social>
              </CardCandidate>
            )
          })
        )}
      </CandidatesContainer>
      <PaginateContainer>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={18}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          // onPageChange={(pagination) => {
          //   // console.log(pagination)
          //   setPage(pagination.selected + 1)
          // }}
          containerClassName="pagination"
          activeClassName="active"
        />
      </PaginateContainer>
    </>
  )
}
