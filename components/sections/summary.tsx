import { ChevronDown } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
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
          <ul className="">
            {Object.values(sections).map(({ htmlId, title, subtitles }) => (
              <li key={htmlId} className="break-inside-avoid">
                <Collapsible className="group">
                  <span className="flex items-center gap-4">
                    <a href={`#${htmlId}`} className="hover:underline">
                      {title}
                    </a>
                    {!!subtitles.length && (
                      <CollapsibleTrigger>
                        <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                    )}
                  </span>

                  <CollapsibleContent>
                    {subtitles?.map((subtitle, i) => (
                      <ul key={`${htmlId}-${i}`}>
                        <li>{subtitle}</li>
                      </ul>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
