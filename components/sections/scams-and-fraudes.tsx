import { LikeButton } from "../like-button"
import { TableCard, TableCardRow } from "../table-card"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.scamAndFraudes.htmlId

const heads = ["O SINAL VERMELHO", "O que o Golpista Explora (Tática)", "A AÇÃO IMEDIATA (Seu Escudo)"]

const rows = [
  {
    sinalVermelho: 'Pedido urgente de dinheiro ou dados em um "novo número".',
    explora: "Confiança e senso de urgência.",
    acao: "Ligue para o contato antigo ou peça uma prova de identidade (chamada de vídeo, pergunta pessoal)."
  },
  {
    sinalVermelho: 'Mensagem que te pressiona a clicar "agora" ou sua conta será bloqueada.',
    explora: "Medo e ansiedade.",
    acao: "Pare, respire. Entre no site oficial da instituição (banco/serviço) digitando o endereço, nunca pelo link."
  },
  {
    sinalVermelho: "Ofertas de lucro fácil ou produtos com preços absurdamente baixos.",
    explora: "Ganância ou necessidade.",
    acao: 'Pesquise a reputação da empresa em sites de reclamações. Desconfie sempre do que é "bom demais para ser verdade."'
  },
  {
    sinalVermelho: (
      <>
        Link ou e-mail com erros de gramática ou URL estranha (ex: <code>banc0.com</code>).
      </>
    ),
    explora: "Desatenção e pressa.",
    acao: "Não clique. Se precisar acessar, digite o endereço correto no navegador."
  }
]

export const ScamAndFraudes = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="right" flipX className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>3. Reconhecendo Golpes e Fraudes: O Falso Amigo</h2>
          </CardTitle>
          <CardDescription>
            Os golpistas prosperam explorando a confiança, a desatenção e o senso de urgência. Reconhecer os sinais de
            manipulação é a defesa mais poderosa do usuário.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>3.1. Phishing e E-mails Falsos: A Pescaria de Dados</h4>
          <p>
            Phishing, que faz alusão ao termo &quot;pesca&quot; em inglês, é uma fraude que utiliza &quot;iscas&quot;
            (mensagens eletrônicas) para obter informações pessoais e financeiras do usuário, combinando meios técnicos
            e, principalmente, a chamada engenharia social. O objetivo é fazer a vítima acessar links maliciosos ou
            instalar programas espiões.
          </p>
          <p>
            Os criminosos utilizam táticas psicológicas para pressionar o usuário a agir rapidamente, sem tempo para
            pensar. Essa <b>engenharia social</b> explora sentimentos básicos, como medo (ameaças de bloqueio de conta),
            ganância (oportunidades de ganho fácil ou descontos muito grandes), ou urgência (pedidos de ação imediata).
          </p>
          <p>
            É importante notar que os golpistas demonstram uma capacidade de adaptação operacional rápida, explorando
            temas de destaque na mídia, como Imposto de Renda, eleições, promoções como Black Friday ou até mesmo crises
            e doenças graves. Se a mensagem está explorando um tema de comoção ou criando uma pressão temporal intensa,
            esse é um sinal de alerta vermelho.
          </p>
          <h4 className="mt-4">Sinais em E-mails Falsos:</h4>
          <ul className="styled">
            <li>
              <b>Urgência e Pressão</b>: Mensagens que informam que a conta será bloqueada se você não clicar
              imediatamente.
            </li>
            <li>
              <b>Inconsistência de Assunto</b>: O assunto do e-mail não corresponde à ação solicitada no corpo da
              mensagem (ex: assunto &quot;Pedido enviado,&quot; mas o corpo pede para você redefinir a senha).
            </li>
            <li>
              <b>Erros de Escrita</b>: Erros de ortografia, gramática ou traduções estranhas, que são incomuns em
              comunicações de empresas legítimas.
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h4>3.2. Golpes Via WhatsApp e Redes Sociais</h4>
          <p>
            Os aplicativos de mensagem e redes sociais são canais de alta vulnerabilidade, principalmente pelo volume de
            desinformação e pela exploração da confiança em relacionamentos próximos.
          </p>
          <p>
            O <b>Golpe da Urgência Financeira</b> é um dos mais comuns. Nele, o golpista se passa por um amigo ou
            familiar alegando ter mudado de número de telefone, muitas vezes pedindo ajuda financeira urgente para pagar
            uma conta ou realizar um investimento. Eles exploram a confiança mútua e a pressa da vítima.
          </p>
          <p>
            Outras fraudes incluem a oferta de serviços inexistentes, como o falso &quot;WhatsApp Premium&quot;, que
            promete funções exclusivas, mas apenas coleta dados de cartão de crédito ou pagamentos via PIX.
          </p>
          <p>
            A defesa contra esses golpes reside na <b>troca de canal de comunicação</b> (o princípio da
            multi-verificação de identidade). Se o contato alega ser um conhecido com um novo número , ou se pede dados
            sensíveis (CPF, senhas, dados bancários) , a vítima deve ligar para o contato antigo, usar um telefone fixo,
            ou buscar a pessoa presencialmente para confirmar a veracidade da história.{" "}
            <b>Não se deve fornecer informações sensíveis por mensagem de texto</b>.
          </p>
        </CardContent>
        <CardContent>
          <h4>3.3. Sites e Links Suspeitos: Como Não Cair na Armadilha</h4>
          <p>
            Os links e sites falsos são usados para direcionar usuários a páginas que imitam bancos, lojas ou redes
            sociais para capturar dados e cometer fraudes.
          </p>
          <h4 className="mt-4">Como Reconhecer Links e URLs Falsas:</h4>
          <ol className="styled">
            <li>
              <b>Prévia do Link</b>: Antes de clicar em qualquer link, passe o mouse sobre ele (no computador) ou toque
              e segure (no celular). O endereço real aparecerá em um canto da tela. Se o endereço (URL) parecer estranho
              ou diferente da empresa que deveria ser, não clique.
            </li>
            <li>
              <b>Verifique a Ortografia</b>: Golpistas usam URLs muito parecidas com as originais, fazendo pequenas
              substituições difíceis de notar (ex: trocar &quot;i&quot; por &quot;l&quot;, ou adicionar um sufixo como{" "}
              <code>.net</code> no lugar de <code>.com</code>).
            </li>
            <li>
              <b>Sinais de Alerta no Conteúdo do Site</b>: Sites fraudulentos frequentemente contêm erros de ortografia
              e gramática, apresentam links quebrados ou solicitam informações pessoais sensíveis (como senha ou cartão
              de crédito) sem justificativa clara.
            </li>
            <li>
              <b>Acesso Direto</b>: Se uma mensagem de e-mail ou WhatsApp informar que sua conta bancária tem um
              problema, <b>NUNCA</b> clique no link fornecido. Em vez disso, digite o endereço (URL) do site oficial
              diretamente no seu navegador. Essa é a única forma de garantir que você está acessando a página legítima
              da instituição.
            </li>
            <li>
              <b>Cadeado Não é Garantia Total</b>: O ícone do cadeado ao lado do endereço (HTTPS) indica que a conexão
              entre você e o site é criptografada e segura contra interceptação. Contudo, isso não garante que o site é
              legítimo; até sites falsos podem ter criptografia. A vigilância sobre o endereço e o conteúdo é essencial.
            </li>
          </ol>

          <Separator className="my-4" />

          <h4 className="mb-4">Checklist de Suspeita Contra Golpes (Sinais Vermelhos)</h4>

          <Table className="hidden lg:block">
            <TableCaption>Checklist de Suspeita Contra Golpes (Sinais Vermelhos)</TableCaption>
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
                  <TableCell>{row.sinalVermelho}</TableCell>
                  <TableCell>{row.explora}</TableCell>
                  <TableCell>{row.acao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="block space-y-4 lg:hidden">
            {rows.map((row, i) => (
              <TableCard key={i.toString()}>
                <TableCardRow title="O SINAL VERMELHO:" description={row.sinalVermelho} />
                <TableCardRow title="O que o Golpista Explora:" description={row.explora} />
                <TableCardRow title="A AÇÃO IMEDIATA:" description={row.acao} />
              </TableCard>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
