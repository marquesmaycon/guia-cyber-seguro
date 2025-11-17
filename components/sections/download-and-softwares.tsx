import Image from "next/image"

import codingImg from "@/public/coding.png"

import { LikeButton } from "../like-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.downloadAndSoftwares.htmlId

export const DownloadAndSoftwares = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="left" className="top-1/2 -translate-y-1/2 transform" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>4. Cuidados com Downloads e Software: Seu Kit de Primeiros Socorros Digital</h2>
          </CardTitle>
          <CardDescription>
            A segurança de um dispositivo começa com a forma como o usuário o equipa, selecionando criteriosamente os
            aplicativos e programas instalados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>4.1. Instalação Segura de Aplicativos e Programas</h4>
          <p>
            O ponto de partida para a segurança na instalação é o gerenciamento de permissões. Ao instalar um
            aplicativo, especialmente em smartphones, o usuário deve verificar quais permissões ele está solicitando
            (acesso à câmera, microfone, lista de contatos). Um aplicativo de lanterna, por exemplo, não tem
            justificativa para acessar sua localização ou seus contatos.
          </p>
          <p>
            Além disso, a recomendação oficial é clara: use apenas aplicativos oficiais de instituições. Isso vale para
            aplicativos de bancos, e-commerce e redes sociais. O uso de versões não oficiais ou modificadas
            frequentemente acarreta a instalação de programas maliciosos (malware) ou a captura de dados sem o
            conhecimento do usuário.
          </p>
          <p>
            É essencial também reconhecer que a segurança não está limitada ao navegador; ela abrange todos os{" "}
            <b>pontos de entrada físicos</b> do dispositivo. Por isso, a prática de desabilitar o Wi-Fi e o Bluetooth
            quando não estão em uso, conforme sugerido pelo CERT.br, é uma medida crucial de minimização de risco.
          </p>
        </CardContent>
        <CardContent>
          <div className="relative aspect-1032/300">
            <Image
              src={codingImg}
              alt="Pessoa programando em um laptop"
              fill
              className="rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
        <CardContent>
          <h4>4.2. Fontes Confiáveis de Downloads</h4>
          <p>
            A principal regra de segurança para downloads é utilizar exclusivamente lojas de aplicativos oficiais
            (Google Play Store ou Apple App Store) ou o site oficial do desenvolvedor ou fabricante. O download de
            programas a partir de sites de terceiros, não verificados ou pirateados, é um convite à instalação de
            software espião <i>(spyware)</i> ou vírus.
          </p>
          <p>
            Mesmo nas lojas oficiais, é prudente verificar sempre a reputação do desenvolvedor e as opiniões dos
            clientes.
          </p>
        </CardContent>
        <CardContent>
          <h4>4.3. A Dupla Proteção: Atualização e Antivírus</h4>
          <p>
            A segurança eficaz requer uma combinação de ferramentas ativas (antivírus) e de higiene digital passiva
            (atualizações).
          </p>
          <h4 className="mt-4">O Papel do Antivírus (O Escudo Proativo)</h4>

          <p>Um software antivírus age como um escudo digital, fornecendo múltiplas camadas de defesa:</p>
          <ul className="styled">
            <li>
              <b>Defesa Proativa</b>: Ele identifica e neutraliza ameaças antes que elas consigam comprometer o sistema.
            </li>
            <li>
              <b>Proteção em Tempo Real</b>: O antivírus funciona constantemente em segundo plano, monitorando arquivos
              e atividades online, garantindo uma defesa ativa.
            </li>
            <li>
              <b>Filtros de Segurança</b>: Muitos programas oferecem recursos de filtragem de e-mail e navegação,
              bloqueando anexos perigosos e links maliciosos que são vetores comuns de ataque.
            </li>
          </ul>

          <h4 className="mb-4">A Importância da Atualização (A Vacina Digital)</h4>

          <p>
            As atualizações de software e sistema operacional (Windows, macOS, Android, iOS) são frequentemente vistas
            como um incômodo, mas elas representam uma <b>medida de higiene digital obrigatória</b> e não opcional.
          </p>

          <p>
            A principal razão para manter tudo atualizado é a <b>correção de vulnerabilidades</b>. Novos tipos de
            malware e vírus são desenvolvidos diariamente. As atualizações:
          </p>

          <ol className="styled">
            <li>
              <b>Combatem Ameaças Emergentes</b>: Garantem que seu software, incluindo o antivírus, esteja equipado para
              detectar e combater as últimas ameaças.
            </li>
            <li>
              <b>Corrigem Brechas Conhecidas</b>: Se um software tem um &quot;buraco&quot; de segurança que é conhecido
              publicamente, os hackers tentarão explorá-lo (conhecido como ataque de vulnerabilidade conhecida). As
              atualizações corrigem essas brechas, impedindo que o usuário se torne um alvo fácil para ataques de baixa
              complexidade.
            </li>
          </ol>

          <p>
            A desatenção às atualizações transforma o usuário em um alvo fácil para invasões que poderiam ter sido
            evitadas por meio de um patch de segurança já desenvolvido pelo fabricante.
          </p>
        </CardContent>

        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
