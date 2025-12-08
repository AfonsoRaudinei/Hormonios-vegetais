# Instruções para Upload de Imagens

## Estrutura Completa Esperada

Após fazer upload de todas as imagens, a estrutura do repositório deverá estar assim:

```
Hormonios-vegetais/
├── hormonios_soja_carrossel.html
├── logo.png (60x60px)
├── qrcode.png (80x80px)
├── plants/
│   ├── ve-v2-plant.png
│   ├── v3-vn-plant.png
│   ├── r1-r3-plant.png
│   ├── r5-plant.png
│   ├── r6-r8-plant.png
│   └── practices-plant.png
└── icons/
    ├── ve-v2.png
    ├── v3-vn.png
    ├── r1-r3.png
    ├── r5.png
    ├── r6-r8.png
    ├── practices.png
    ├── ga.png
    ├── ax.png
    ├── ck.png
    ├── et.png
    └── aba.png
```

## Método 1: Upload via GitHub Web (Simples)

### Para Imagens na Raíz (logo.png, qrcode.png)

1. Vá para: `https://github.com/AfonsoRaudinei/Hormonios-vegetais`
2. Clique em "Adicionar arquivo" → "Carregar arquivos"
3. Arraste/selecione `logo.png` e `qrcode.png`
4. Faça commit com mensagem: "Adicionar logo e QR code"

### Para Imagens na Pasta `plants/`

1. Vá para: `https://github.com/AfonsoRaudinei/Hormonios-vegetais/tree/main/plants`
2. Clique em "Adicionar arquivo" → "Carregar arquivos"
3. Selecione todos os arquivos:
   - ve-v2-plant.png
   - v3-vn-plant.png
   - r1-r3-plant.png
   - r5-plant.png
   - r6-r8-plant.png
   - practices-plant.png
4. Faça commit com mensagem: "Adicionar imagens das plantas nos diferentes estádios fenológicos"

### Para Imagens na Pasta `icons/`

1. Vá para: `https://github.com/AfonsoRaudinei/Hormonios-vegetais/tree/main/icons`
2. Clique em "Adicionar arquivo" → "Carregar arquivos"
3. Selecione todos os ícones:
   - ve-v2.png
   - v3-vn.png
   - r1-r3.png
   - r5.png
   - r6-r8.png
   - practices.png
   - ga.png
   - ax.png
   - ck.png
   - et.png
   - aba.png
4. Faça commit com mensagem: "Adicionar ícones de estádios e hormônios"

## Método 2: Upload via Git CLI (Recomendado)

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/AfonsoRaudinei/Hormonios-vegetais.git
cd Hormonios-vegetais

# 2. Copie as imagens para os diretórios corretos
# Substitua /caminho/para/suas/imagens pelo caminho onde suas imagens estão armazenadas

cp /caminho/para/suas/imagens/logo.png .
cp /caminho/para/suas/imagens/qrcode.png .

cp /caminho/para/suas/imagens/plants/*.png plants/
cp /caminho/para/suas/imagens/icons/*.png icons/

# 3. Adicione todas as mudanças
git add .

# 4. Faça um commit com mensagem descritiva
git commit -m "Adicionar todas as imagens: logo, QR code, plantas e hormônios"

# 5. Faça push para o GitHub
git push origin main
```

## Especificações das Imagens

### Logo
- **Arquivo**: logo.png
- **Dimensão**: 60x60 pixels
- **Localização**: Raíz do repositório

### QR Code
- **Arquivo**: qrcode.png
- **Dimensão**: 80x80 pixels
- **Localização**: Raíz do repositório

### Plantas (6 estádios)
- **Localção**: Pasta `plants/`
- **Recomendação**: Mesmo tamanho para consistência visual
- **Formato**: PNG (fundo transparente recomendado)

### Ícones (11 no total)
- **Localização**: Pasta `icons/`
- **Dimensão Recomendada**: 32x32 ou 64x64 pixels
- **Formato**: PNG (fundo transparente recomendado)

## Troubleshooting

### Erro: Arquivo não encontrado
- Verifique se o caminho do arquivo está correto
- Use caminhos absolutos ao invés de caminhos relativos

### Erro: Tamanho do arquivo muito grande
- GitHub tem limite de 100MB por arquivo
- Comprima as imagens se necessário

### Commit não funcionou
- Configure seu Git com:
  ```bash
  git config --global user.name "Seu Nome"
  git config --global user.email "seu.email@example.com"
  ```

## Verificação Final

Após fazer upload de todas as imagens:

1. Acesse o repositório no GitHub
2. Verifique se todas as pastas contém seus respectivos arquivos
3. Teste o arquivo `hormonios_soja_carrossel.html` para garantir que as imagens carregam corretamente
