type Props = {
    children: React.ReactNode;
};

export function Container({ children }: Props) {
    return (
        <div
        style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
        }}
        >
            {children}
        </div>
    );
}