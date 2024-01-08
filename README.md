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

  #### Settings
  ![Settings](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/settings.png)  

  #### Content
  ![Content](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/content.png)

  #### Managment
  ![Managment](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/mng.png)

  #### Menu

  Menu can contains menu items

  ![Managment](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/menu.png)

  #### Menu item

  Menu items can contains menu (as submenu)

  ![Menu item](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/menu-item.png)

  #### Pages

  Menu items can contains sections

  ![Page](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/homepage.png)

  #### Sections

  Sections can cotnains blocks

  ![Section](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/section.png)

  #### Blocks

  Blocks can be created within the page and are independants documents

  ![blocks](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/blocks.png)

  ![blocks](https://raw.githubusercontent.com/nuagedelait/sanity-pagebuilder/282a482db6fa3a93164c02f8650e39a78e022190/doc/images/blocks-2.png)

  

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
