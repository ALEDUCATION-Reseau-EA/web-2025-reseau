import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-red-500" : "border-transparent hover:border-red-400";
  return (
    <nav class="bg-gray-800 fixed w-full z-50">
      <ul class="container flex justify-between w-full items-center p-3 text-gray-200">
        <li>
          <a href="/">
            <div class="flex flex-row gap-2 items-center">
              <img src="/images/aleducation_logo.png" alt="Logo" class="w-11 h11" />
              <span class={`border-b-2 ${active("/")}`}><span class="text-red-500">ALED</span>UCATION</span>
            </div>
          </a>
        </li>
        <div class="flex flex-row">
          <li class={`border-b-2 ${active("/formations")} mx-1.5 sm:mx-6 hover:text-red-400`}>
            <a href="/formations">Nos Formations</a>
          </li>
          <li class={`border-b-2 ${active("/formateurs")} mx-1.5 sm:mx-6 hover:text-red-400`}>
            <a href="/formateurs">Nos Formateurs</a>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6 hover:text-red-400`}>
            <a href="/about">Qui?</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
