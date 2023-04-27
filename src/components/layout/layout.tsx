import MainHeader from "./mainHeader";

const Layout = (props: { children: any }) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
