import { RedirectButton } from "@/components/client/buttons";

export default async function Home() {
  return (
    <main>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Code Cabinet</h1>
            <RedirectButton className="btn-primary btn" url="/app">
              Get Started
            </RedirectButton>
          </div>
        </div>
      </div>
    </main>
  );
}
