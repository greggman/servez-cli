[![npm](https://img.shields.io/npm/v/servez.svg?style=flat-square)](https://www.npmjs.com/package/servez)
![GitHub](https://img.shields.io/github/license/greggman/servez-cli?style=flat-square)
[![Build Status](https://travis-ci.org/greggman/servez-lib.svg?branch=master)](https://travis-ci.org/greggman/servez-lib)


![](https://github.com/greggman/servez-cli/raw/master/servez.jpg)
<sup>Illustration by [Nomi](http://www.thenomi.com), [[@the_nomi](https://twitter.com/the_nomi), [mail](mailto:the_nomi@jizai.org)]</sup>

# servez: a simple command-line http server

`servez` is a simple, zero-configuration command-line http server for development and learning. Note there is also an [app version](https://greggman.github.io/servez/) for those who prefer GUIs.

# Installing globally:

Installation via `npm`:

     npm install servez -g

This will install `servez` globally so you can run it from the command line.

## Running on-demand:

Using `npx` you can run servez without installing it first:

     npx servez [options] [path]

## Usage:

     servez [options] [path] 

`[path]` defaults to the current folder. 

*You can now visit http://localhost:8080*

## Available Options:

* `-h` or `--help` for help

* `-p` or `--port` Port to use (defaults to 8080) note if port is in use will use next available port

* `--version` prints the version number

* `--scan` scan forward until an open port is found. (defaults to `true`. `--no-scan` to disable)

* `--dirs` Show folder listings (defaults to `true`, `--no-dirs` to disable)

* `--cors` Include CORS headers (defaults to `true`, `--no-cors` to disable)

* `--local` make serve only accessible from this machine. The default
is to serve publicly. (0.0.0.0 vs 127.0.0.1)

* `--index` Display index.html for folders if it exists (defaults to `true`, `--no-index` to disable)

* `--gzip` serve `somefile.gz` in place of `somefile`

* `--brotli` serve `somefile.br` in place of `somefile`

* `--robots` Provide a /robots.txt if one does not exist. (defaults to `true`. `--no-robots` to disable)

* `--hidden` Show files that start with `.`

* `--username` Username for basic authentication

* `--password` Password for basic authentication

* `-S` or `--ssl` Use https (will use a fake cert if not specified)

* `-C` or `--cert` Path to ssl cert file

* `-K` or `--key` Path to ssl key file

# Pronunciation

Cortez, Hernández, Gomez, Ramírez, and Servez walked into a bar...
