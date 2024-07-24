import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        {children}
      </div>
      <Footer />
    </div>
  );
}
