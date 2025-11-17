import { LikeButton } from "../like-button"
import { TableCard, TableCardRow } from "../table-card"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.personalDataProtection.htmlId

const heads = ["O que Fazer (Ações Práticas)", "Como Implementar a Proteção Extra", "Por que Fazer (Motivação)"]

const rows = [
  {
    oQueFazer: (
      <>
        Use uma frase longa, não uma palavra curta. Ex: <code>P@raC@saEuvou!</code>
      </>
    ),
    comoImplementar: (
      <>
        <b>Ative o 2FA (Verificação em Duas Etapas)</b> em e-mails e redes sociais.
      </>
    ),
    porque: "Dificulta que hackers invadam suas contas, mesmo que descubram uma de suas senhas."
  },
  {
    oQueFazer: (
      <>Crie um padrão de substituição para dificultar a adivinhação (ex: trocar &apos;o&apos; por &apos;0&apos;).</>
    ),
    comoImplementar: (
      <>
        <b>Use aplicativos oficiais</b> para 2FA, ou a opção nativa do app (WhatsApp, Google, etc.).
      </>
    ),
    porque: "Seus dados e sua identidade estarão protegidos contra fraudes e invasões."
  },
  {
    oQueFazer: "Use uma combinação de letras, números e símbolos (!@#$).",
    comoImplementar: "Nunca compartilhe o código de verificação ou QR Code da 2FA.",
    porque: "Garante que somente você, com seu dispositivo, possa acessar a conta."
  }
]

export const PersonalDataProtection = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>2. Proteção de Dados Pessoais: A Chave da Sua Casa Digital</h2>
          </CardTitle>
          <CardDescription>
            A proteção de dados pessoais é o alicerce da segurança online. Ao proteger as informações, o indivíduo
            minimiza a matéria-prima que os golpistas utilizam para personalizar ataques e torná-los mais convincentes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>2.1. Boas Práticas de Privacidade: Reduzindo sua Exposição</h4>
          <p>
            A regra fundamental de privacidade, conforme ensina a Cartilha de Segurança para Internet, é:{" "}
            <b>reduza a quantidade de dados que você divulga sobre si</b>. Quanto mais informações públicas (local de
            trabalho, nome de parentes, data de aniversário), mais fácil é para o golpista furtar sua identidade e mais
            convincente ele será em suas abordagens, pois pode utilizar esses dados para tentar adivinhar senhas.
          </p>
          <p>
            É necessário adotar o Princípio do Mínimo Privilégio Pessoal, operando no &quot;modo invisível&quot; sempre
            que possível. Isso significa:
          </p>
          <ul className="styled">
            <li>
              Gerenciar Aplicativos de Mensagens: Se você utiliza o aplicativo de mensagem apenas no celular, é uma boa
              prática desativar a função de download automático de fotos e vídeos recebidos. Isso evita que arquivos
              potencialmente maliciosos sejam baixados automaticamente para o seu dispositivo.
            </li>
            <li>
              Conexões Sem Fio: É altamente recomendado manter interfaces de comunicação como Wi-Fi, infravermelho e
              Bluetooth desabilitadas, ativando-as somente quando for estritamente necessário. Deixar essas interfaces
              abertas, mesmo em casa, pode ser explorado como um ponto de entrada físico para invasões.
            </li>
            <li>
              Redes Wi-Fi: Ao se conectar a redes Wi-Fi, prefira sempre aquelas que exigem autenticação. Se for usar
              redes abertas (públicas), utilize serviços que ofereçam criptografia, como HTTPS, PGP, SSH e VPN, para
              proteger a comunicação.
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h4>2.2. Criando Senhas Fortes e Inesquecíveis</h4>
          <p>
            O dilema da senha é a dificuldade de memorização versus a necessidade de complexidade. O CERT.br oferece
            métodos que resolvem essa dificuldade, priorizando a segurança sem depender de senhas curtas ou
            reutilizadas.
          </p>
          <p>
            A estratégia mais eficaz para criar uma senha forte é baseada em uma frase secreta. Em vez de uma palavra
            curta, escolha uma frase inteira e utilize um padrão para extrair os caracteres. Por exemplo, pode-se usar a
            primeira, segunda ou última letra de cada palavra da frase, adicionando caracteres especiais.
          </p>
          <ul className="styled">
            <li>
              Exemplo Prático: A frase &quot;Eu adoro acessar o fórum Adrenaline&quot; pode ser transformada na senha
              complexa <code>!EaAofA.</code>
            </li>
            <li>
              Substituição Inteligente: Para aumentar ainda mais a complexidade e dificultar ataques de dicionário,
              pode-se inventar padrões de substituição, como trocar a letra &quot;W&quot; por duas letras &quot;V&quot;
              ou letras por números (&apos;a&apos; por &apos;@&apos;, &apos;o&apos; por &apos;0&apos;).
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h4>2.3. Autenticação de Dois Fatores (2FA): A Proteção Extra</h4>
          <p>
            A Autenticação de Dois Fatores (2FA), ou verificação em duas etapas, é a camada de segurança mais robusta
            que um usuário leigo pode implementar. Ela age como uma <b>ponte de segurança</b> que protege a conta mesmo
            que o usuário cometa o erro de usar uma senha fraca ou repetida.
          </p>

          <p>
            O 2FA exige um segundo código, além da senha, para entrar na conta. Esse código geralmente é gerado por um
            aplicativo de autenticação (como Google Authenticator) ou enviado via SMS para o número de celular
            registrado.
          </p>

          <p>
            A ativação do 2FA é crucial, especialmente em aplicativos de mensagem e e-mail. Golpistas tentam obter
            senhas e códigos de verificação para invadir contas, furtar a identidade e praticar fraudes em nome da
            vítima. Ao ativar a verificação em duas etapas, mesmo que o cibercriminoso consiga a senha principal, ele
            ainda precisará do seu dispositivo físico para obter o segundo código, inviabilizando a invasão.
          </p>
        </CardContent>

        <CardContent>
          <h4>2.4. Cuidado ao Compartilhar Informações Online</h4>
          <p>
            A desconfiança deve ser a atitude padrão ao ser solicitado a compartilhar dados sensíveis. Nunca se deve
            fornecer senhas ou códigos de verificação em nenhuma circunstância. Além disso, informações pessoais
            sensíveis, como números de cartão de crédito ou dados bancários, jamais devem ser compartilhados por e-mail
            ou mensagens de texto.
          </p>

          <p>
            Se a solicitação vier de um contato conhecido pedindo ajuda ou dinheiro, a regra de ouro é a{" "}
            <b>verificação de identidade</b>. Antes de efetivar qualquer transação, desconfie de pedidos de ajuda
            financeira e contate a pessoa por outro meio de comunicação (como uma ligação para o número antigo ou uma
            videochamada) para confirmar se é realmente ela.
          </p>

          <Separator className="my-4" />

          <h4 className="mb-4">Dicas Essenciais para Senhas Fortes e 2FA</h4>

          <Table className="hidden lg:block">
            <TableCaption>Dicas Essenciais para Senhas Fortes e 2FA</TableCaption>
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
                  <TableCell>{row.oQueFazer}</TableCell>
                  <TableCell>{row.comoImplementar}</TableCell>
                  <TableCell>{row.porque}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="block space-y-4 lg:hidden">
            {rows.map((row, i) => (
              <TableCard key={i.toString()}>
                <TableCardRow title="O que Fazer:" description={row.oQueFazer} />
                <TableCardRow title="Como Implementar:" description={row.comoImplementar} />
                <TableCardRow title="Por quê:" description={row.porque} />
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
