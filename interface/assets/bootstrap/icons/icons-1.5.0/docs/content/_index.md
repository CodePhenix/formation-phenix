---
---

## Install

Bootstrap Icons are published to npm, but they can also be manually downloaded if needed.

<div class="row my-4">
  <div class="col-md-4">
{{< md >}}
### npm
Install [Bootstrap Icons](https://www.npmjs.com/package/bootstrap-icons)—including SVGs, icon sprite, and icon fonts—with npm. Then, choose how you'd like to include the icons with the [usage instructions](#usage).

{{< highlight sh >}}
npm i bootstrap-icons
{{< /highlight >}}
{{< /md >}}
  </div>
  <div class="col-md-4">
{{< md >}}
### Download
[Releases are published on GitHub](https://github.com/twbs/icons/releases/) and include icon SVGs, fonts, license, and readme. Our `package.json` is also included, though our npm scripts are primarily available for our development workflows.

<a class="btn btn-outline-primary" href="https://github.com/twbs/icons/releases/latest/">Download latest ZIP</a>
{{< /md >}}
  </div>
  <div class="col-md-4">
{{< md >}}
### CDN
Include the icon fonts stylesheet—in your website `<head>` or via `@import` in CSS—from our CDN and get started in seconds. [See icon font docs](#icon-font) for examples.

{{< highlight html >}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@{{< param version >}}/font/bootstrap-icons.css">
{{< /highlight >}}

{{< highlight css >}}
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@{{< param version >}}/font/bootstrap-icons.css");
{{< /highlight >}}
{{< /