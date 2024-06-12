import { ContextProvider } from "../../SocketContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ContextProvider>     
            <div className="mx-auto h-full w-full">
              {children}
            </div>
      </ContextProvider>
  );
}
