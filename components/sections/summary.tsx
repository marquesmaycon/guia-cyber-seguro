import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { sections } from "./sections"

export const Summary = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>Sumário</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="mt-0">
            {Object.values(sections).map(({ htmlId, title, subtitles }) => (
              <li key={htmlId}>
                <a href={`#${htmlId}`} className="underline">
                  {title}
                </a>
                {subtitles?.map((subtitle, i) => (
                  <ul key={`${htmlId}-${i}`}>
                    <li>{subtitle}</li>
                  </ul>
                ))}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
