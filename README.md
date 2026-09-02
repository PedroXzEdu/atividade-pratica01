**Nome completo:** Pedro Eduardo de Medeiros Fonseca
**Matrícula:** 20251038060035

**Conta de Teste com o Nome**: pedro@empresa.com - 20251038060035
**Conta de Teste com o Sobrenome**: fonseca@empresa.com - 53006083015202

---

## Pré-requisitos

- Docker e Docker Compose instalados

## Configuração

1. Crie o arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

2. Defina um segredo JWT no `.env` (o valor do `.env.example` é apenas um placeholder):

```
JWT_SECRET=use-um-segredo-seguro-aqui
JWT_EXPIRES_IN_SECONDS=900
```

## Execução

```bash
# Construir a imagem
docker compose build

# Iniciar a aplicação (porta 3000)
docker compose up

# Encerrar a aplicação
docker compose down
```

A aplicação estará disponível em `http://localhost:3000`.

---

## Por que 401 e 403 são respostas diferentes?

A resposta 401 Unauthorized é retornada quando o servidor não consegue identificar o usuário, ou seja, ocorre quando não há token no cabeçalho Authorization ou quando o token é inválido/expirado. Já a 403 Forbidden é retornada quando o usuário está autenticado, mas não possui o papel necessário para acessar aquele recurso.