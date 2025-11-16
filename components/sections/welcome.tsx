import { LikeButton } from "../like-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { sections } from "./sections"

const sectionHtmlId = sections.welcome.htmlId

export async function Welcome() {
  return (
    <div className="relative">
      <Card id={sectionHtmlId}>
        <CardHeader>
          <CardTitle>
            <h2>Introdução: Bem-Vindo à Sua Internet Segura</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            A internet faz parte integral da vida moderna, conectando-nos a informações, serviços bancários,
            entretenimento e relacionamentos. No entanto, assim como aprendemos a trancar a porta de casa ou usar o
            cinto de segurança ao dirigir, é essencial adotar hábitos que protejam nossa vida digital. A segurança
            cibernética não é uma complicação exclusiva de grandes corporações; é um conjunto de medidas diárias
            necessárias para proteger o patrimônio, a identidade e as memórias de cada cidadão.
          </p>
          <p>
            O propósito deste guia é desmistificar a segurança digital, transformando termos técnicos em ações práticas
            e acessíveis à comunidade. As recomendações aqui apresentadas são embasadas nas melhores práticas e
            orientações de instituições oficiais brasileiras, como o Centro de Estudos, Resposta e Tratamento de
            Incidentes de Segurança no Brasil (CERT.br). A chave para uma vida online tranquila está no conhecimento e
            na adoção de um comportamento proativo de desconfiança e proteção.
          </p>
        </CardContent>
        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </div>
  )
}
