import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-0 w-full h-full overflow-x-hidden">
        <Introduction />
      </div>
    </main>
  );
}
