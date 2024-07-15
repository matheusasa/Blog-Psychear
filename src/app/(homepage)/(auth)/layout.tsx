import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-full bg-gray-100 dark:bg-gray-900">
        {children}
      </div>
      <Footer />
    </div>
  );
}
