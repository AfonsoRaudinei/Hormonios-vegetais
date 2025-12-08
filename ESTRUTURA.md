# Estrutura do Repositório - Hormônios de Soja

## Árvore de Diretórios

```
seu-repositorio/
├── hormonios_soja_carrossel.html    # Arquivo principal com o carrossel
├── logo.png                         # Logo 60x60px
├── qrcode.png                       # QR Code 80x80px
├── plants/                          # Imagens das plantas em diferentes estádios
│   ├── ve-v2-plant.png             # Planta VE-V2
│   ├── v3-vn-plant.png             # Planta V3-VN
│   ├── r1-r3-plant.png             # Planta R1-R3
│   ├── r5-plant.png                # Planta R5
│   ├── r6-r8-plant.png             # Planta R6-R8
│   └── practices-plant.png         # Planta com práticas
└── icons/                           # Ícones de estádios e hormônios
    ├── ve-v2.png                   # Ícone do estádio VE-V2
    ├── v3-vn.png                   # Ícone do estádio V3-VN
    ├── r1-r3.png                   # Ícone do estádio R1-R3
    ├── r5.png                      # Ícone do estádio R5
    ├── r6-r8.png                   # Ícone do estádio R6-R8
    ├── practices.png               # Ícone de práticas
    ├── ga.png                      # Hormônio: Giberelinas
    ├── ax.png                      # Hormônio: Auxinas
    ├── ck.png                      # Hormônio: Citocininas
    ├── et.png                      # Hormônio: Etileno
    └── aba.png                     # Hormônio: Ácido Abscísico
```

## Descrição dos Arquivos

### Arquivo Principal
- **hormonios_soja_carrossel.html**: Página HTML interativa com carrossel de hormônios vegetais

### Imagens Raiz
- **logo.png**: Logo do projeto (60x60px)
- **qrcode.png**: QR Code para compartilhamento (80x80px)

### Pasta `plants/`
Contém as imagens das plantas de soja em diferentes estádios fenológicos:
- VE-V2: Emergência a duas folhas
- V3-VN: Três folhas até floração
- R1-R3: Início de floração até floração plena
- R5: Enchimento de vagens
- R6-R8: Final do enchimento até maturação
- Practices: Imagem ilustrando práticas recomendadas

### Pasta `icons/`
Contém dois tipos de ícones:

**Ícones de Estádios:**
- ve-v2.png, v3-vn.png, r1-r3.png, r5.png, r6-r8.png, practices.png

**Ícones de Hormônios:**
- ga.png: Giberelinas
- ax.png: Auxinas  
- ck.png: Citocininas
- et.png: Etileno
- aba.png: Ácido Abscísico

## Como Adicionar Imagens

Para adicionar as imagens PNG aos diretórios corretos:

1. Via GitHub Web:
   - Navegue até a pasta desejada
   - Clique em "Adicionar arquivo" → "Carregar arquivos"
   - Selecione os arquivos PNG

2. Via Git CLI (recomendado para múltiplos arquivos):
   ```bash
   git clone https://github.com/AfonsoRaudinei/Hormonios-vegetais.git
   cd Hormonios-vegetais
   
   # Copiar as imagens para os diretórios corretos
   cp /caminho/para/logo.png .
   cp /caminho/para/qrcode.png .
   cp /caminho/para/plants/* plants/
   cp /caminho/para/icons/* icons/
   
   # Fazer commit
   git add .
   git commit -m "Adicionar imagens de hormônios e plantas de soja"
   git push origin main
   ```

## Status Atual

✅ Estrutura de diretórios criada
✅ Arquivo HTML principal criado
⏳ Aguardando upload das imagens PNG
