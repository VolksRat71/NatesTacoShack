import styled from 'styled-components';

const OrderStyles = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    fieldset {
        display: grid;
        align-content: start;
        gap: 1rem;
        grid-column: span 2;
        max-height: 600px;
        overflow: auto;
        label {
            display: grid;
            gap: 1rem;
            align-content: start;
        }
        label + label {
            margin-top: 1rem;
        }
        &.menu, &.order {
            grid-column: span 1;
        }
    }
    @media (max-width: 900px) {
        fieldset.menu,
        fieldset.order {
            grid-column: span 2;
        }
    }
    #chiliSyrup {
        display: none;
    }
`;

export default OrderStyles;