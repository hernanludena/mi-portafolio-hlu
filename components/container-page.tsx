interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <div className="w-full max-w-6xl px-4 pt-6 pb-24 mx-auto sm:pt-8 md:px-6 md:pb-16">
            {children}
        </div>
    );
}

export default ContainerPage;