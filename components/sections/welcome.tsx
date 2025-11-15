import { ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "../ui/card"
import { db } from "@/db"
import { likes, section } from "@/db/schema"
import { count, eq } from "drizzle-orm"
import { toggleLike } from "@/lib/actions"

export default async function Welcome() {
  const sectionHtmlId = "welcome"

  const [row] = await db
  .select({ likesCount: count(likes.id) })
  .from(likes)
  .innerJoin(section, eq(likes.sectionId, section.id))
  .where(eq(section.htmlId, sectionHtmlId))

  const likesCount = Number(row?.likesCount ?? 0)

  return (
    <Card id={sectionHtmlId}>
      <CardHeader>
        <CardTitle>
          <h2>0. Introdução: Bem-Vindo à Sua Internet Segura</h2>
        </CardTitle>
        <CardAction>
          <Button onClick={() => toggleLike(sectionHtmlId)}>
            <ThumbsUp /> {likesCount}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          A internet faz parte integral da vida moderna, conectando-nos a informações, serviços bancários, entretenimento e relacionamentos. No entanto, assim como
          aprendemos a trancar a porta de casa ou usar o cinto de segurança ao dirigir, é essencial adotar hábitos que protejam nossa vida digital. A segurança
          cibernética não é uma complicação exclusiva de grandes corporações; é um conjunto de medidas diárias necessárias para proteger o patrimônio, a identidade e as
          memórias de cada cidadão.
        </p>
        <p>
          O propósito deste guia é desmistificar a segurança digital, transformando termos técnicos em ações práticas e acessíveis à comunidade. As recomendações aqui
          apresentadas são embasadas nas melhores práticas e orientações de instituições oficiais brasileiras, como o Centro de Estudos, Resposta e Tratamento de
          Incidentes de Segurança no Brasil (CERT.br). A chave para uma vida online tranquila está no conhecimento e na adoção de um comportamento proativo de
          desconfiança e proteção.
        </p>
      </CardContent>
    </Card>
  )
}
