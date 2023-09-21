# Pontos de Interesse por GPS

**O desafio:** implementar um serviço para a empresa XY Inc., especializada na produção de excelentes receptores
GPS (Global Positioning System).
A diretoria está empenhada em lançar um dispositivo inovador que promete auxiliar pessoas na localização de pontos de
interesse (POIs), e precisa muito de sua ajuda.
Você foi contratado para desenvolver a plataforma que fornecerá toda a inteligência ao dispositivo. Esta plataforma deve
ser baseada em serviços REST, para flexibilizar a integração.

<details>
<summary><strong>Exemplo</strong></summary>

---

Considere a seguinte base de dados de POIs:

- 'Lanchonete' (x=27, y=12)
- 'Posto' (x=31, y=18)
- 'Joalheria' (x=15, y=12)
- 'Floricultura' (x=19, y=21)
- 'Pub' (x=12, y=8)
- 'Supermercado' (x=23, y=6)
- 'Churrascaria' (x=28, y=2)

Dado o ponto de referência (x=20, y=10) indicado pelo receptor GPS, e uma distância máxima de 10 metros, o serviço deve
retornar os seguintes POIs:

- Lanchonete
- Joalheria
- Pub
- Supermercado

</details>

### Requisitos da API

- [x] Cadastrar pontos de interesse, com 03 atributos: nome do POI, coordenada X (inteiro não negativo) e coordenada Y (inteiro não negativo).
- [x] Os POIs devem ser armazenados em uma base de dados.
- [x] Listar todos os POIs cadastrados.
- [x] Listar os POIs por proximidade. Este serviço receberá uma coordenada X e uma coordenada Y, especificando um ponto de referência, bem como uma  distância máxima (d-max) em metros. O serviço deverá retornar todos os POIs da base de dados que estejam a uma distância menor ou igual a d-max a partir do ponto de referência.

</details>

---

![version](https://img.shields.io/github/package-json/v/viniciuscosmome/points-of-interest?style=flat-square&labelColor=f2f2f2&color=white)
![license](https://img.shields.io/github/license/viniciuscosmome/points-of-interest?style=flat-square&labelColor=f2f2f2&color=white)
![main tool](https://img.shields.io/badge/Nest_JS-f2f2f2?logo=nestjs&logoColor=db1737&style=flat-square)
![Database](https://img.shields.io/badge/SQLite-3684e3?logo=sqlite&logoColor=f2f2f2&style=flat-square)

Descrição em <strong>pt-BR</strong>

## Requisitos
1. [Node.js 18.x LTS](https://nodejs.org/en) ou superior.

## Instalação

### Crie um fork e então clone

```bash
# git clone <repo-url> <dist>
git clone https://github.com/viniciuscosmome/points-of-interest points-of-interest
```

### Dependências

Depois de clonar e sempre que atualizar o repositório, execute o comando abaixo para manter as dependências atualizadas.

```bash
yarn install
```

### Migrações

O comando abaixo serve para configurar o banco de dados executando as migrações.

```bash
yarn prisma:migrate:dev
#ou
npx prisma migrate dev
```

### Seed

O arquivo `seed.ts` contém Pontos de interesse pré-configurado que você pode usar para criar dados iniciais na base de dados.

```bash
yarn prisma:seed
# ou
npx prisma db seed
```

### Inicializando a API

**Modo: desenvolvimento**

Este comando inicia o aplicativo com o servidor HTTP. Abra seu navegador e navegue até ` http://localhost:3000/ `.

```bash
yarn start
```

**Modo: desenvolvimento (--watch)**

Este comando irá monitorar seus arquivos, recompilando e recarregando automaticamente o servidor

```bash
yarn start:dev
```

**Modo: produção**

Esse comando inicia a aplicação no modo de produção.

```bash
yarn build # compila a API
yarn start:prod # inicializa a versão de produção
```

## Testes

**Unitários**
```bash
yarn test
```

## Licença

` Points Of Interest ` com [licença MIT](./profile/LICENSE).
