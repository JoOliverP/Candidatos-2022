import moment from 'moment'
import { useContext } from 'react'
import {
  FaBriefcase,
  FaCalendarDay,
  FaDollarSign,
  FaFolderOpen,
  FaMale,
  FaRegCircle,
  FaRegMap,
  FaTimes,
  FaUserAlt,
  FaUserGraduate,
  FaUserPlus,
  FaUsers,
  FaVenusMars,
} from 'react-icons/fa'
import Modal from 'react-modal'
import { CanditateContext } from '../../contexts/CandidatesContext'
import {
  Container,
  ContentContainer,
  ButtonClose,
  Content,
  ContentInfo,
} from './styles'

export function CadidateInfoModal() {
  const { cadidate, isCandidateModalOpen, setIsCandidateModalOpen } =
    useContext(CanditateContext)

  const yearBirth = cadidate?.DT_NASCIMENTO?.slice(
    cadidate?.DT_NASCIMENTO?.length - 4,
  )
  const age = moment().diff(yearBirth, 'years')

  const total = cadidate?.BS_CANDIDATO?.reduce((totalBs, bs) => {
    return totalBs + parseFloat(bs?.VR_BEM_CANDIDATO)
  }, 0)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function closeModal() {
    setIsCandidateModalOpen(false)
  }
  return (
    <div>
      <Modal
        isOpen={isCandidateModalOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <Container>
          <ButtonClose onClick={closeModal}>
            <FaTimes size={30} color={'#202024'} />
          </ButtonClose>

          <ContentContainer>
            <h1>{cadidate?.NM_CANDIDATO}</h1>
            <Content>
              <ContentInfo>
                <span>
                  <FaCalendarDay /> Data de nascimento
                </span>
                <p>{cadidate?.DT_NASCIMENTO}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaUserPlus /> Idade
                </span>
                <p>{age} Anos</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaVenusMars /> Gênero
                </span>
                <p>{cadidate?.DS_GENERO}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaRegCircle /> Estado Civil
                </span>
                <p>{cadidate?.DS_ESTADO_CIVIL}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaRegMap /> Nacionalidade/ Naturalidade
                </span>
                <p>{cadidate?.DS_NACIONALIDADE}</p>
                <p>
                  {cadidate?.NM_MUNICIPIO_NASCIMENTO} |{' '}
                  {cadidate?.SG_UF_NASCIMENTO}
                </p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaMale /> Cor/Raça
                </span>
                <p>{cadidate?.DS_COR_RACA}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaBriefcase /> Ocupação
                </span>
                <p>{cadidate?.DS_OCUPACAO}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaUserGraduate /> Grau de instrução
                </span>
                <p>{cadidate?.DS_GRAU_INSTRUCAO} </p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaFolderOpen /> Coligação
                </span>
                <p>{cadidate?.NM_COLIGACAO}</p>
              </ContentInfo>
              <ContentInfo>
                <span>
                  <FaUsers /> Composição da coligação
                </span>
                <p>{cadidate?.DS_COMPOSICAO_COLIGACAO}</p>
              </ContentInfo>
              {cadidate?.BS_CANDIDATO ? (
                <ContentInfo>
                  <span>
                    <FaDollarSign /> Patrimônio
                  </span>
                  <p>{formatter.format(Number(total))}</p>
                </ContentInfo>
              ) : (
                <></>
              )}

              {cadidate?.VC_CANDIDATO ? (
                <>
                  <ContentInfo>
                    <span>
                      <FaUserAlt /> Vice/Suplente
                    </span>
                    <p>{cadidate?.VC_CANDIDATO?.NM_URNA_CANDIDATO}</p>
                  </ContentInfo>
                  <img
                    src={cadidate?.VC_CANDIDATO?.IM_CANDIDATO}
                    alt={`Imagem do vice Canditato : ${cadidate?.NM_CANDIDATO} `}
                  />
                </>
              ) : (
                <></>
              )}
            </Content>
          </ContentContainer>
        </Container>
      </Modal>
    </div>
  )
}
