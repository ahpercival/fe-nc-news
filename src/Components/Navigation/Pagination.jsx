import React from 'react'
import { Pagination as BsPagination } from 'react-bootstrap'

const Pagination = ({
    page,
    prevDisabled,
    nextDisabled,
    actions
}) => (
        <BsPagination>
            <BsPagination.Prev
                disabled={prevDisabled}
                onClick={() => actions.prev()}
            > Prev Page
        </BsPagination.Prev>
            <BsPagination.Next
                disabled={nextDisabled}
                onClick={() => { actions.next() }}
            >Next Page
            </BsPagination.Next>
        </BsPagination>
    )

export default Pagination
