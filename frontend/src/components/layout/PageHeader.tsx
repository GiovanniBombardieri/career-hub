type Props = {
    title: string;
    actions?: React.ReactNode;
};

export function PageHeader({ title, actions }: Props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
            }}
        >
            <h1>{title}</h1>

            {actions && <div>{actions}</div>}
        </div>
    );
}