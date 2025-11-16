import { LikeButton } from "../like-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.supportChannels.htmlId

const heads = ["Finalidade da Denúncia	", "Canais de Contato	", "Quando Usar"]

const rows = [
  {
    finalidade: "Crimes contra Direitos Humanos (incluindo virtuais).",
    canais: "Disque 100 / Ligue 180.",
    quandoUsar: "Para crimes como extorsão sexual, ameaça, perseguição e crimes contra a infância."
  },
  {
    finalidade: "Registro Formal de Cibercrime (fraudes, invasão, ransomware).",
    canais: "Polícia Civil (Delegacias, Núcleos Especializados).",
    quandoUsar:
      "Após ser vítima de golpe (phishing, contas invadidas, falso pagamento, etc.) para fins de investigação e B.O."
  },
  {
    finalidade: "Tentativa de Fraude Financeira e Reversão de Valores.",
    canais: "Seu Banco/Operadora de Cartão.",
    quandoUsar:
      "Imediatamente, para bloquear contas e contestar transações fraudulentas (único canal que pode estornar valores)."
  },
  {
    finalidade: "Incidentes de Segurança e Vulnerabilidades Técnicas.",
    canais: "CERT.br - Centro de Resposta a Incidentes.",
    quandoUsar: "Para reportar incidentes técnicos que afetam redes ou sistemas no Brasil."
  }
]

export const SupportChannels = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>7. Recursos e Canais de Apoio: Onde Buscar Ajuda</h2>
          </CardTitle>
          <CardDescription>
            Quando o pior acontece e o usuário se torna vítima de um crime cibernético, saber onde e como denunciar é
            essencial para iniciar a recuperação e a investigação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>7.1. Onde Denunciar Crimes Cibernéticos (A Quem Recorrer)</h4>
          <p>O Brasil oferece diversos canais oficiais para registrar ocorrências e buscar apoio:</p>

          <ol>
            <li>
              <b>anais de Atendimento Geral e Direitos Humanos</b>: Os serviços gratuitos Disque 100 e Ligue 180 atendem
              denúncias de crimes digitais e violações de direitos humanos, como extorsão sexual ou ameaças.
            </li>
            <li>
              <b>Polícia Civil e Delegacias Especializadas</b>: É o canal primário para registro de crimes. Muitas
              capitais e regiões possuem Delegacias de Crimes Cibernéticos ou Núcleos especializados, como o NUCIBER no
              Paraná, que investigam fraudes, phishing, invasão de contas (e-mail, redes sociais), golpes de
              criptomoedas, perfis falsos e ransomware.
            </li>
            <li>
              <b>Registro Online</b>: A maioria das Polícias Civis permite que o Boletim de Ocorrência (B.O.) seja
              registrado online, tendo a mesma validade legal que o registro presencial.
            </li>
          </ol>

          <p>
            É fundamental notar a <b>separação de funções</b> entre a investigação e a recuperação financeira: a polícia
            investiga , mas em casos de perda financeira, o único canal que pode realizar o estorno ou cancelamento de
            transações é o <b>banco ou a operadora de cartão de crédito</b>.
          </p>
        </CardContent>
        <CardContent>
          <h4>7.2. O Protocolo de Vítima (Passos Cruciais na Hora do Golpe)</h4>

          <p>
            Em caso de ser vítima de golpe ou invasão, a vítima deve seguir um protocolo imediato para proteger seus
            direitos e facilitar a investigação:
          </p>

          <ol>
            <li>
              <b>Prioridade Financeira</b>: Imediatamente, contate seu banco ou operadora de cartão de crédito para
              bloquear contas e cartões, e para contestar quaisquer transações fraudulentas ou enganosas. A agilidade é
              crucial, pois apenas o banco pode tentar reverter o prejuízo.
            </li>
            <li>
              <b>Coleta de Provas Digitais de QualidadeColeta de Provas Digitais de Qualidade</b>: A polícia precisa de
              evidências detalhadas. A vítima deve coletar prints de conversas que incluam: dados de pagamento (chaves
              PIX, contas), trechos das ameaças e, crucialmente, informações completas dos perfis dos autores.
              <ul>
                <li>
                  <b>Atenção à URL</b>: Para que a investigação seja eficaz, a polícia exige a <b>URL completa</b> (o
                  endereço web) dos perfis de redes sociais (Instagram, Facebook) ou do site falso. <i>Prints</i>{" "}
                  tirados diretamente de telas de celular geralmente não exibem a URL completa. Recomenda-se tirar os
                  prints em um computador para capturar o endereço exato.
                </li>
              </ul>
            </li>
            <li>
              <b>Registro da Ocorrência</b>: Registre o B.O. (preferencialmente online) e prepare o material probatório
              (prints, vídeos, áudios) para apresentar à polícia. O material deve ser organizado, idealmente em formato
              PDF e em um arquivo único, para entrega em um pendrive à delegacia.
            </li>
          </ol>

          <Separator className="my-4" />
          <h4>Canais Oficiais de Denúncia no Brasil</h4>

          <Table className="hidden lg:block">
            <TableCaption>Canais Oficiais de Denúncia no Brasil</TableCaption>
            <TableHeader>
              <TableRow>
                {heads.map((head) => (
                  <TableHead key={head}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i.toString()}>
                  <TableCell>{row.finalidade}</TableCell>
                  <TableCell>{row.canais}</TableCell>
                  <TableCell>{row.quandoUsar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="block space-y-4 lg:hidden">
            {rows.map((row, i) => (
              <div key={i.toString()} className="bg-palette-secondary/20 rounded-lg border p-4">
                <p>
                  <b>O SINAL VERMELHO:</b> {row.finalidade}
                </p>
                <p>
                  <b>O que o Golpista Explora:</b> {row.canais}
                </p>
                <p>
                  <b>A AÇÃO IMEDIATA:</b> {row.quandoUsar}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardContent>
          <h4>7.3. Plataformas Educativas de Segurança Digital</h4>
          <p>
            A educação contínua é a melhor forma de defesa. O usuário deve buscar fontes de informação confiáveis e
            atualizadas:
          </p>
          <ul>
            <li>
              <b>CERT.br</b>: O Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil
              disponibiliza a <b>Cartilha de Segurança para Internet</b> , um guia didático e completo sobre diversos
              temas de segurança.
            </li>
            <li>
              <b>Outras Instituições</b>: Há instituições focadas em formação e educação em cibersegurança (como o IBSEC
              - Instituto Brasileiro de Cibersegurança ) e canais educativos mantidos pelo governo, como o Ambiente
              Virtual de Aprendizagem do Ministério da Educação (AVAMEC).
            </li>
          </ul>
        </CardContent>

        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
