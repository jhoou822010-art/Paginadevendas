# Código na Prática — Pacote do site

Este pacote contém a página de vendas estática do ebook **Engenharia de Software — Do Zero à Prática**.

## Como testar localmente

Abra o arquivo `index.html` diretamente no navegador ou execute um servidor simples na pasta:

```bash
python3 -m http.server 3000
```

Depois acesse `http://localhost:3000`.

## Como hospedar

Envie todos os arquivos mantendo a estrutura de pastas:

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `public/`

O arquivo `public/` contém a capa, as ilustrações e os recortes de páginas internas.

Este pacote funciona em hospedagens estáticas como Netlify, Vercel, GitHub Pages, Hostinger, cPanel, Cloudflare Pages e similares. Para serviços com publicação por upload, envie o conteúdo do pacote para a pasta pública, normalmente chamada `public_html`, `www` ou `dist`.

## Dados comerciais atuais

- Preço exibido: **R$ 14,90**
- E-mail comercial: **melojonatha037@gmail.com**
- Forma de entrega informada: envio digital e possibilidade de envio pelo WhatsApp após a confirmação da compra.

## Antes de divulgar

1. Substitua o e-mail caso queira usar outro endereço comercial.
2. Configure um meio de pagamento real. O botão de compra atual é uma demonstração e direciona o visitante para a área de contato.
3. Defina como você receberá o número do WhatsApp do comprador.
4. Atualize o endereço do `sitemap.xml` depois de configurar o domínio.
5. Configure HTTPS no domínio.

## Observação importante

O PDF completo do ebook **não está incluído na pasta pública do site**, para evitar que o material seja baixado antes da compra. A pasta `public/previews/` contém apenas pequenos recortes de demonstração. O PDF deve ser entregue de forma controlada após a confirmação do pagamento.
