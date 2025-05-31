# 3. CSR & SSR (5 Marks)

## a) Explain CSR & SSR

### Client-Side Rendering (CSR)
- CSR is a rendering pattern where the browser downloads a minimal HTML page and JavaScript
- The JavaScript code then executes in the browser to render the content dynamically
- Popular in Single Page Applications (SPAs) built with frameworks like React, Vue, or Angular
- The initial page is typically just a shell, with content populated after JavaScript loads

### Server-Side Rendering (SSR)
- SSR generates the full HTML for each page on the server
- When a user requests a page, they receive fully rendered HTML content
- The server processes the request, fetches data, and sends complete HTML to the browser

## b) Difference between CSR and SSR with advantages

### Client-Side Rendering (CSR)

**Advantages:**
1. Rich interactions and fast subsequent navigation
2. Reduced server load as rendering happens on client
3. Great for web applications with frequent updates
4. Better caching capabilities
5. Smooth transitions between pages

**Disadvantages:**
1. Slower initial page load
2. Poor SEO without additional optimization
3. Higher browser resource usage
4. May not work well with JavaScript disabled

### Server-Side Rendering (SSR)

**Advantages:**
1. Faster initial page load
2. Better SEO as content is readily available to crawlers
3. Better performance on low-powered devices
4. Works without JavaScript
5. Better accessibility

**Disadvantages:**
1. Higher server load
2. Full page reloads between pages
3. More complex development setup
4. Higher server costs
5. Potentially slower subsequent navigation

### Key Differences Table

| Aspect | CSR | SSR |
|--------|-----|-----|
| Initial Load | Slower | Faster |
| SEO | Challenging | Better |
| Server Load | Lower | Higher |
| Interactivity | More Dynamic | Less Dynamic |
| Development | Simpler | More Complex |
| Performance | Better for dynamic content | Better for static content |
| Browser Support | Requires JS | Works without JS |
| Time to Interactive | Longer | Shorter |