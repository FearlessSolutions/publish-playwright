# publish-playwright

Demonstration repository for publishing Playwright and code coverage reports to GitHub Pages.

The repository contains two branches, `main` and `gh-pages`, that contain code for creating the self generating reports.

See [our GitHub Pages site](https://fearlesssolutions.github.io/publish-playwright/) for an example of what the reporting dashboard will look like.

See [our wiki](https://github.com/FearlessSolutions/publish-playwright/wiki) for detailed information on how to set up publishing reports in your repository.

## main Branch

### GitHub Actions

The `main` branch contains the `.github/workflows/` directory with workflows needed to push reports to `gh-pages`.

- `push-to-gh-pages.yml` is a reusable workflow that will push 2 files to specified locations in `gh-pages`
- `playwright-report.yml` runs the Playwright tests and calls `push-to-gh-pages.yml` to push the report files
- `playwright-report-cleanup.yml` is triggered by a branch being deleted and removes those branch files from `gh-pages`
- `code-coverage-report.yml` runs the unit tests and calls `push-to-gh-pages.yml` to push the report files (OPTIONAL)
- `pr-coverage-annotation.yml` is triggered by a pull request to main and runs the unit tests and annotates the results to the pull request

### Test Configurations

The `main` branch also contains the example configurations for Playwright and vitest. The examples in the repository will work for any unit testing framework that uses Istanbul for code coverage results. If you are not using Istanbul, the code coverage examples will need to be adapted to work with your reporter.

- `playwright.config.ts` contains the reporters needed for this demonstration
- `vitest.config.ts` contains the coverage settings needed for this demonstration

## gh-pages Branch

The `gh-pages` branch contains the Jekyll configuration needed to build the demonstration site. It also contains one workflow in `.github/workflows/`.

- `publish-github-pages.yml` is triggered by pushing to `gh-pages` and rebuilds and redeploys the site

### Example Reports

The `gh-pages` branch is a working example so it contains report files that will not be needed in your site. You do not need to bring over any of these files, or you can bring them over until you have completed the set up and can use your own reports.

- `_data/coverage/coverage-summary.json`
- `_data/playwright-reports/main.json`
- `_data/playwright-reports/branches/*`
- `coverage/*`
- `playwright-reports/main.html`
- `playwright-reports/branches/*`
