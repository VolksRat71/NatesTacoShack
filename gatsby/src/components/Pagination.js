import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    border: 1px solid var(--grey);
    margin: 2rem 0;
    border-radius: 5px;
    text-align: center;
    & > * {
        padding: 1rem;
        flex: 1;
        border-right: 1px solid var(--grey);
        border-left: 1px solid var(--grey);
        text-decoration: none;
        &[aria-current],
        .current {
            border: 1px solid var(--purple);
            transform: scale(1.02);
            box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }
        &[disabled] {
            pointer-events: none;
            color: var(--grey);
        }
    }
    @media (max-width: 800px) {
        .word {
            display: none;
        }
        font-size: 1.4rem;
    }
`;

function Pagination({
    pageCount,
    currentPage,
    base
}) {

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const disablePrevPage = currentPage === 1;
    const disableNextPage = nextPage > pageCount;

    return (
        <PaginationStyles>
            <Link
                title="Prev Page"
                disabled={disablePrevPage}
                to={`${base}/${prevPage}`}
            >
                ←  <span className="word">Prev</span>
            </Link>
            {Array.from({ length: pageCount }).map((_, i) => (
                <Link key={i} to={`${base}/${i + 1}`}>{i + 1}</Link>
            ))}
            <Link
                title="Next Page"
                disabled={disableNextPage}
                to={`${base}/${nextPage}`}
            >
                <span className="word">Next</span> →
            </Link>
        </PaginationStyles>
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