import { LikeButton } from "../like-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.conclusion.htmlId

export const Conclusion = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>8. Conclusão: A Jornada Contínua da Segurança</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            A segurança digital é um processo contínuo de aprendizado e adaptação. Ao longo deste guia, identificou-se
            que a maioria dos incidentes de segurança para o público leigo está menos relacionada a falhas técnicas
            complexas e mais ligada à exploração da vulnerabilidade humana — a desatenção, a pressa e a confiança
            excessiva.
          </p>
          <p>O cidadão se torna mais seguro quando internaliza três princípios de proteção:</p>
          <ol>
            <li>
              <b>Desconfie Ativamente (Combate à Engenharia Social)</b>: Adote a regra da multi-verificação de
              identidade. Nunca clique em links de urgência e, se receber um pedido de ajuda financeira de um conhecido,
              confirme por um canal diferente (ligação, vídeo).
            </li>
            <li>
              <b>Proteja-se com Camadas (2FA e Atualizações)</b>: A dupla autenticação (2FA) é a defesa mais robusta
              contra a reutilização de senhas. A atualização do software, por sua vez, é a higiene digital básica que
              elimina falhas de segurança já conhecidas e corrigidas.
            </li>
            <li>
              <b>Prepare-se para o Pior (Backup)</b>: O backup regular, idealmente automatizado na nuvem e seguindo o
              princípio 3-2-1, é a única estratégia que transforma uma perda catastrófica de dados (sequestro por
              <i>ransomware</i>) em um inconveniente gerenciável.
            </li>
          </ol>
          <p>
            Ao transformar esses hábitos em rotina e ao utilizar o conhecimento sobre seus direitos (LGPD) e os canais
            de apoio (Polícia Civil e CERT.br), o usuário deixa de ser um alvo passivo e assume o controle de sua vida
            digital com confiança e responsabilidade. O conhecimento contido na Cartilha de Segurança para Internet e em
            outros materiais oficiais serve como um recurso permanente para essa jornada.
          </p>
        </CardContent>
        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
