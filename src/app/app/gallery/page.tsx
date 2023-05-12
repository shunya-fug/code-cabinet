import SnippetCard from "@/components/server/SnippetCard"

export default function Home() {
  return (
    <main>
      <div className="columns-3 gap-8 space-y-3">
        <SnippetCard title="npm install error" language="npm" code={"npm i daisyui\ninstalling...\nError!"} />
        <SnippetCard title="npm install daisy ui" language="npm" code="npm i daisyui" />
        <SnippetCard title="npm install error" language="npm" code={"npm i daisyui\ninstalling...\nError!"} />
        <SnippetCard title="npm install daisy ui" language="npm" code="npm i daisyui" />
        <SnippetCard title="npm install daisy ui" language="npm" code="npm i daisyui" />
        <SnippetCard title="npm install daisy ui" language="npm" code="npm i daisyui" />
        <SnippetCard title="npm install error" language="npm" code={"npm i daisyui\ninstalling...\nError!"} />
      </div>
    </main>
  );
}
