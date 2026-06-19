import type {ReactNode} from "react";
import {Header} from "./Header";
import {Container} from "./Container";

type Props = {
    children: ReactNode;
};

export function AppLayout({ children }: Props) {
    return (
        <>
            <Header />

            <Container>
                {children}
            </Container>
        </>
    );
}
