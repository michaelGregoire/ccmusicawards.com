# ccmusicawards.com

A simple YAML/React based static site generator. Each YAML file in the `content` directory will convert to an html file.

**Please read this document thoroughly before committing/pushing any changes**

## Requirements
- Git (https://git-scm.com)
- Node: Make sure you’ve installed the version of node indicated in the .nvmrc. You’re better off installing **nvm** (https://github.com/nvm-sh/nvm), so you can easily switch to the specific version of node needed and this project doesn’t lock you into the version needed for it. Once you’ve installed it, you’re ready to follow the instructions below.*

_*This assumes you’re familiar with and comfortable using the command-line. If you’re not, then let someone who is complete the required work._
## Building / Development
### Development

You should do this before making any yaml changes so you can see your changes live in the browser as you make them. 

$ signifies system shell prompt. Not part of command.

```
$ nvm use
$ npm ci
$ npm run dev
```

End dev mode by typing **`control + c`** _(Mac)_ /  **`ctrl + c`** _(PC)_.

### To build for production after you’ve made yaml changes

This isn’t strictly necessary since it happens automatically in the pipeline when your branch is merged into master and a new deploy is kicked off.

However, it’s useful, if you’d like to serve it locally to verify your changes in a production build.

```
$ nvm use
$ npm ci
$ npm run build
```

Once you’ve got a production build, you can serve the site locally using the `serve` script:

```
$ npm run serve
```

## YAML Structure

Each page’s YAML file requires a few key pieces which we’ll cover below. However, please read the following quick overview of what YAML is:

https://dev.to/paulasantamaria/introduction-to-yaml-125f

The following is the minimum needed for a new chart page:

``` yaml
---
meta:
  title: 2020 CC Community Music Awards
  heading: 2020 Nominees & Winners
  description: The third annual CC Community Music Awards
content:
  categories:
    - name: Best Hip-Hop Album
      nominees:
        - artist: Some Artist
          title: Some Album Title
          url: https://somewebaddress.example
          winner: true
```

You’ll notice above that there are two mandatory root keys in the file:
1. meta
2. content

You’ll also notice that some fields/keys begin with a `-`. That indicates the start of a new item in an array. So above `artist` is the first key of a nominee and `winner` is the last. The next nominee would again begin with `- artist: Another artist`.

### meta

At the minimum, the `meta` object requires:
1. `title`: Used for the page’s title tag
2. `heading`: Used for the page’s h1 tag
3. `description`: Used for the meta description

However, it can optionally include:
1. `image`: Used for the social media / opengraph image meta tag.
2. `type`: Used to designate the page class. Options are none, `previous` or `archive`. This simply changes the color scheme of the page.

### content

The `content` object requires one of the following. Both can be used, but there isn’t likely going to be a need for that use.
1. `categories`: This is an array of… well… categories
2. `body`: This is freeform html as is used for `about.yaml` and `archive.yaml`. Try not to use this, unless there’s a clear need for a new page that requires some freeform content. I’d argue that there should be a discussion before you go this route.

#### categories
A category is made up of the following:
1. `name`: The name of the award category
2. `regional`: Optional field indicating whether or not the category is a regional one. Defaults to false, so you only really need to include it if setting to true like so `regional: true`.
3. `nominees`: An array of… yup, you guessed it… award nominees (including winners).

#### nominees
At minimum nominee is made up of the following:
1. `artist`: The nominee’s artist name
2. `url`: The url to the album, track or official artist website (depending on what type of award)

The following optional fields are also supported:
1. `title`: The nominee’s album, video or track title (generally required, except for regional awards)
2. `winner`: Only needed when the nominee is the winner. Set it like so `winner: true`.
3. `type`: Optional for regular album categories. Otherwise needed for track, video and regional categories. Valid values are: `track`, `video`, `region`. This controls what aria-label is added to the external links.
4. `embedUrl`: Used for video nominees. A proper embed url for YouTube or Vimeo is required. You can get those from a video by clicking the video’s share button on the video’s page and choosing embed. In the provided html snippet, you want the iframe’s `src` value.

Examples:
- YouTube: https://www.youtube.com/embed/2hS566J69WA
- Vimeo: https://player.vimeo.com/video/253094088

## Git

Don’t work directly on `main`. Always create a new branch from `main` for any work.
### Commits
Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0). 
#### Examples
Adding a new content yaml file would be something like:
```
feat: Some add new yaml file commit message
```

Fixing something would require a commit like:
```
fix: Some commit message
```

Updating something that isn’t necessarily a bug fix or a feature would require a commit like:
```
update: Some commit message
```
### Pre-Commit validation
A validation script is run on the YAML before you can complete your commit. Once you’ve successfully committed your work, push your branch up to the repo and open a PR for approval.