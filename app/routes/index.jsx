import { useLoaderData, json, Link } from "remix"

export let loader = () => {
  let data = {
    resources: [
      { name: "A First Look at Remix Blog Post", url: "https://dev.to/ajcwebdev/a-first-look-at-remix-2cp1" },
      { name: "Example Repo", url: "https://github.com/ajcwebdev/ajcwebdev-remix" },
      { name: "Deployed Website", url: "https://ajcwebdev-remix.netlify.app" }
    ],
    demos: [
      { to: "demos/actions", name: "Actions" },
      { to: "demos/about", name: "Nested Routes, CSS loading/unloading" },
      { to: "demos/params", name: "URL Params and Error Boundaries" }
    ]
  }
  return json(data)
}

export let meta = () => {
  return {
    title: "ajcwebdev-remix",
    description: "Welcome to remix!"
  }
}

export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page">
      <main>
        <h2>ajcwebdev-remix</h2>
        <p>Woot!</p>
      </main>

      <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map(demo => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <h2>Resources</h2>
        <ul>
          {data.resources.map(resource => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}