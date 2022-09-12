import { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import { CanditateContext } from '../../contexts/CandidatesContext'
import { PaginateContainer } from './styles'

export function Pagination() {
  const { type, page, setPage, pageCount, handleLoadingMoreCandidates } =
    useContext(CanditateContext)
  return (
    <>
      <PaginateContainer>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          forcePage={page - 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={(pagination) => {
            console.log(pagination)
            setPage(pagination.selected + 1)
            handleLoadingMoreCandidates(pagination.selected + 1)
          }}
          containerClassName="pagination"
          activeClassName="active"
        />
      </PaginateContainer>
    </>
  )
}
