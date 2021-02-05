import styled from 'styled-components';

export const HomePageGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
    }
`;

export const ItemsGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
`;

export const SingleGridItem = styled.div`
    text-align: center;
    position: relative;
    img {
        height: auto;
    }
    p {
        transform: rotate(-2deg) translateY(-90%);
        position: absolute;
        width: 100%;
        left: 0;
    }
    .mark {
        display: inline;
    }
    @keyframes shine {
        from {
            background-position: 200%
        }
        to {
            background-position: -40px
        }
    }
    img.loading {
        --shine: white;
        --background: var(--grey);
        background-image: linear-gradient(
            90deg,
            var(--background) 0px,
            var(--shine) 40px,
            var(--background) 80px
        );
        background-size: 500px;
        animation: shine 1s infinite linear;
    }
    @media (max-width: 1010px) {
        .itemsDesc {
            font-size: 1.25rem;
        }
    }
    @media (max-width: 600px) {
        .itemsDesc {
            font-size: 2rem;
        }
    }
`;