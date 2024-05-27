# Build

using `npm`:

```
npm install
npm run build
```

If you get lint errors: `npm run lint`

# Dev

Run:

```
npm run dev
```

# Gotchas

Vite has it's own handling of static assets. First, see if the desired asset is in the `assetsInclude` field of
the Vite config `vite.config.ts`. This will tell Vite to resolve the url to `dist/assets`. We then import these in
`src/*.tsx` as `import staticURL from 'asset.svg` and use them as URLs. There are examples on how they're used in
the code.
