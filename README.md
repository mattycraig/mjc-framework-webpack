# Getting Started

To get started, we need to install all dependencies for our new project:

```
npm install
```

Next, let's start our local web server. Our watch task will compile all necessary files when changed (Jade, SCSS, JS, etc):

```
gulp dev
```

At build time, lets make things production ready:

```
gulp
```

To view our production files locally:

```
gulp serve:prod
```

### Individual Tasks

Rebuild only our styles

```
gulp task:styles
```

Rebuild only our scripts

```
gulp task:scripts
```

### Useful Tasks

Clean our .tmp and dist folders to start fresh:

```
gulp clean
```
