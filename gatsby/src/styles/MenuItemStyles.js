import styled from 'styled-components';

const MenuItemStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
    .image-wrapper {
        grid-row: span 2;
        height: 100%;
        margin-bottom: 0.25rem;
    }
    p {
        margin: 0;
    }
    button {
        font-size: 1.5rem;
    }
    button + button {
        margin-left: 0.25rem
    }
    .remove {
        background: none;
        color: 	#FF6347;
        font-size: 3rem;
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: none;
        line-height: 1rem;
    }
`;

export default MenuItemStyles;