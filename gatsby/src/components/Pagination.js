import React from 'react';
import { Link } from 'gatsby';

function Pagination({
    pageSize,
    pageCount,
    currentPage,
    skip,
    base
}) {
    return (
        <>
            <Link to={`/${base}/${currentPage - 1}`}>
                <p>If I change this, it reflects on top and bottom</p>
            </Link>
        </>
    )
}

export default function PaginationLayout(props) {
    return (
        <>
            <Pagination {...props} />
            {props.children}
            <Pagination {...props} />
        </>
    )
}