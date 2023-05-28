interface DefaultLayoutProps {
  children: React.ReactElement;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className="h-[100vh] w-[100vw]  bg-gradient-to-r from-cyan-900 to-pink-900">{children}</div>;
};
export default DefaultLayout;
