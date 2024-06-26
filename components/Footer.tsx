import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Erişim",
      children: [
        { name: "Twitter", href: "https://twitter.com/kemalgencay" },
        { name: "Facebook", href: "https://www.facebook.com/kemal.gencay.5" },
        {
          name: "Youtube",
          href: "https://www.youtube.com/channel/UCKShpdrxhBjWmY1b2tHd5lQ",
        },
        { name: "Instegram", href: "https://www.instagram.com/gencaykemal" },
        { name: "e-posta", href: "mailto:kemalgencay@gmail.com" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Fresh
          </div>
        </div>
        <div class="text-gray-500">
          Full Stack Framework
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © {new Date().getFullYear()} Kemal Gençay<br></br>{" "}
          Tüm hakları saklıdır
        </div>

        <a
          href="https://github.com/kemalgencay/kemal"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
