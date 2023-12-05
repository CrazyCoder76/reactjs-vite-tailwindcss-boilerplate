import { Container } from "components/Layout";

import styles from './Hompage.module.scss';
import { Article1, Article2, DashPage, StatusNumbers } from "components/Homepage";

export function Homepage() {
    return (
        <div>
            <Container>
                <DashPage/>
                <StatusNumbers />
                <Article1 />
            </Container>
            <Article2 />
        </div>
    )
}