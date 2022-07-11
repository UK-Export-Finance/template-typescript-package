## TypeScript Package ready to be published to NPM

This is a template TypeScript Package ready to be published to NPM. It has been set up with automated tests and package publishing workflow using GitHub Actions.

The template uses [google-github-actions/release-please-action](https://github.com/google-github-actions/release-please-action) which handles the following use cases:
1. Automated releases based on conventional commits
2. Automated `CHANGELOG` generation
3. Automated version bumps based on commit messages. It does all of these by parsing the git history, it looks for [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) messages and it creates PR releases.

It uses `npm`, `TypeScript`, `Jest`, `ESLint`, `Prettier`, `Husky`, `commitlint` and `lint-staged`. The production files include CommonJS, ES Modules and TypeScript declaration files.

#### Install dependencies
Install dependencies with npm:
```bash
npm install
```

#### Write your code
1. Update the `TODO`s inside `.github/workflows/publish.yml` file
2. Make the necessary changes in package.json (name, version, description, keywords, author, etc).
3. Write your code in `src/` folder and unit test in `tests/` folder, replacing the original files.

#### Build:
To build/compile the code, simply run:
```bash
npm run build
```

This command will generate CommonJS, ES Module as well as TypeScript declaration files inside the `lib/` folder.

#### Test
Test your code with Jest:
```bash
npm run test
```

### Publish
This package is configured to use GitHub Actions CI/CD to automate the publishing of a package to `npm`.

Follow [npm's official instruction](https://docs.npmjs.com/creating-and-viewing-access-tokens) to create an npm token.

If you use 2FA, then make sure it's enabled for **authorization** only instead of **authorization and publishing** (**Edit Profile** -> **Modify 2FA**).

On the page of your newly created or existing GitHub repo, click **Settings** -> **Secrets** -> **New repository secret**, the **Name** should be `NPM_TOKEN` and the **Value** should be your npm token.


### Writing Conventional Commits
The most important prefixes you should have in mind are:

1. `fix:` which represents bug fixes, and correlates to a [SemVer](https://semver.org/) **patch**.
2. `feat:` which represents a new feature, and correlates to a [SemVer](https://semver.org/) **minor**.
3. `feat!:`, `fix!:` or `refactor!:`, etc., which represent a breaking change (indicated by the `!`) and will result in a [SemVer](https://semver.org/) **major**.