import { useLoaderData, json } from "remix"

export let loader = () => {
  let data = {
    resources: [
      { name: "A First Look at Remix Blog Post", url: "https://dev.to/ajcwebdev/a-first-look-at-remix-2cp1" },
      { name: "Example Repo", url: "https://github.com/ajcwebdev/ajcwebdev-remix" },
      { name: "Deployed Website", url: "https://ajcwebdev-remix.netlify.app" }
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
        <h1>ajcwebdev-remix</h1>
        <p>Woot!</p>
      </main>

      <section>        
        <h2>Resources</h2>
        <ul>
          {data.resources.map(resource => (
            <li key={resource.url}>
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}