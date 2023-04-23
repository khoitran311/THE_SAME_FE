interface DefaultLayoutProps {
    children: React.ReactElement;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return <div className="w-[100vw] h-[100vh]">{children}</div>;
};
export default DefaultLayout;
