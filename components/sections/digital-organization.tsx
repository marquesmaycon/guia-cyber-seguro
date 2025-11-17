import Image from "next/image"

import virtualDataImg from "@/public/virtual-data.png"

import { LikeButton } from "../like-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { VectorBg } from "../ui/vector-bg"
import { sections } from "./sections"

const sectionHtmlId = sections.digitalOrganization.htmlId

export const DigitalOrganization = () => {
  return (
    <section className="relative" id={sectionHtmlId}>
      <VectorBg vector="2" position="right" flipX className="top-1/2 -translate-y-1/2" />
      <Card>
        <CardHeader>
          <CardTitle>
            <h2>5. Organização Digital e Backup de Arquivos: Evitando a Perda de Memórias e Dados</h2>
          </CardTitle>
          <CardDescription>
            A organização e o backup são essenciais não apenas para a produtividade, mas para garantir a continuidade da
            vida digital em caso de incidente de segurança.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4>5.1. Estruturação de Pastas e Armazenamento em Nuvem</h4>
          <p>
            Uma organização digital eficaz exige que o acesso fácil aos arquivos (para o usuário) seja equilibrado com
            bloqueios e rastreamentos (para terceiros). Manter a ordem, a consistência e a rapidez na gestão dos
            arquivos ajuda a garantir a segurança cibernética.
          </p>
          <p>
            O <b>armazenamento em nuvem</b> (cloud storage) é, hoje, a forma mais recomendada para a maioria dos
            usuários, pois oferece uma <b>estratégia logística</b> que simplifica a segurança, que para o público leigo
            pode ser complexa.
          </p>
          <ul>
            <li>
              <b>Segurança e Automação</b>: Provedores de serviços em nuvem (como Google Cloud, Dropbox, etc.) facilitam
              a automatização e padronização de backups.
            </li>
            <li>
              <b>Criptografia</b>: Esses provedores implementam várias camadas de criptografia avançada para proteger os
              dados sensíveis, tanto quando eles estão sendo transferidos (em trânsito) quanto quando estão armazenados
              (em repouso).
            </li>
            <li>
              <b>Cuidados na Nuvem</b>: O usuário deve garantir que as configurações de acesso (APIs) estejam corretas,
              evitando acessos indevidos por terceiros.
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h4>5.2. Boas Práticas de Backup: A Cópia de Segurança</h4>
          <p>
            Backup é a prática de criar cópias de segurança de seus dados para que possam ser restauradas em caso de
            problemas, como perda, roubo do dispositivo ou ataque de vírus.
          </p>
          <p>
            A cópia de segurança deve ser frequente e testada regularmente. Testar o backup é crucial para garantir que
            os arquivos realmente possam ser recuperados quando necessário.
          </p>

          <h4 className="mt-4">A Regra 3-2-1 do Backup (Recomendação Avançada Simplificada):</h4>

          <p>
            Embora não esteja em documentos para leigos, essa é a melhor prática global e serve como um guia estruturado
            para evitar a perda de dados:
          </p>

          <ol>
            <li>
              <b>3 Cópias</b>: Mantenha três cópias dos seus dados: o arquivo original e duas cópias de segurança.
            </li>
            <li>
              <b>2 Mídias Diferentes</b>: Armazene essas cópias em dois tipos diferentes de mídia (ex: uma cópia no
              disco rígido externo e uma cópia na nuvem).
            </li>
            <li>
              <b>
                1 Local Externo: Mantenha pelo menos uma cópia fora do seu local físico (ex: na nuvem ou em um cofre),
                protegendo-se contra desastres físicos como incêndios ou roubos.
              </b>
            </li>
          </ol>
        </CardContent>
        <CardContent>
          <div className="relative aspect-1032/300">
            <Image
              src={virtualDataImg}
              alt="Virtual Data Illustration"
              fill
              className="rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </CardContent>
        <CardContent>
          <h4>5.3. Como Evitar Perda de Dados</h4>
          <p>
            A perda de dados geralmente ocorre por falha de hardware, erro humano ou ataque cibernético. O backup é o{" "}
            <b>plano de mitigação definitivo</b> contra a perda de dados.
          </p>

          <p>
            A ameaça mais relevante neste contexto é o Ransomware, um tipo de malware que sequestra e criptografa os
            dados do usuário, exigindo um resgate em troca da chave de desbloqueio.
          </p>

          <p>
            Quando um ataque de ransomware ocorre, o usuário que possui um sistema de backup robusto e automatizado
            (causa) consegue neutralizar o efeito final do ataque (perda de dados e chantagem). A capacidade de
            restaurar dados e aplicativos rapidamente, oferecida pela recuperação de desastres baseada na nuvem,
            transforma uma catástrofe digital em um inconveniente gerenciável (apenas o tempo de restauração).
          </p>
        </CardContent>

        <CardFooter>
          <LikeButton sectionHtmlId={sectionHtmlId} />
        </CardFooter>
      </Card>
    </section>
  )
}
