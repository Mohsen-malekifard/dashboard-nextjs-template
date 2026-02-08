import { TopNav } from "@/components/nav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <TopNav title="Dashboard" />
      <main>{children}</main>
    </>
  );
}
