# sanity-plugin-pagebuilder

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install @nuagedelait/sanity-pagebuilder
```

## Features 

- extends the (default or custom) structure by adding a base with 3 main sections
  - Settings : global website settings
  - Content : header, footer, pages, and blocks
  - Managment : authors and categories
- Page builder based on page / sections / blocks
  - You can create a page that can be devided into sections (objects)
  - Each section can contains a list of references to blocks
  - Blocks are documents so you can use them on multiple pages
  - You have basics blocks but you can add yours easely


## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import { pagebuilderTool } from '@nuagedelait/sanity-pagebuilder'

export default defineConfig({
  //...
  plugins: [pagebuilderTool()],
})
```

## Config

You can extends schemas of the plugins without the pain of handling desk structure

```ts
export default defineConfig({
  //...
  plugins: [pagebuilderTool(
    {
      addBlocksSchemas: [ 'array of blocks schemas in sections' ]
      addContentSchemas: [ 'array of content schemas like custom `posts` or `articles`' ]
      addManagmentSchemas: [ 'array of diverses schemas (used if contents)' ] 
      api: 'sanity api version, default : `v2023-08-01`'
    }
  )],
})
```


## License

[MIT](LICENSE) © nuagedelait

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
