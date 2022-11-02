# Installation

## Fully Supported OS

* Debian 10 Buster (OldStable) <br /><small style="color: gray;">Update through 2024-06 or later</small>
* Debian 11 Bullseye (Stable) <br /><small style="color: gray;">Update through 2026-06 or later</small>
* Debian 12 Bookworm (Testing) <br /><small style="color: gray;">Update through 2028-06 or later</small>
* Ubuntu 18.04 Bionic (LTS) <br /><small style="color: gray;">Update through 2023-04 or later</small>
* Ubuntu 20.04 Focal (LTS) <br /><small style="color: gray;">Update through 2025-04 or later</small>
* Ubuntu 22.04 Jammy (LTS) <br /><small style="color: gray;">Update through 2027-04 or later</small>
* Ubuntu 22.10 Kinetic <br /><small style="color: gray;">Update through 2023-12 or later</small>

We support LTS and current releases of Debian and Ubuntu, as well as releases that are going to be GA soon. Running on an ARM64 platform is currently an experimental feature, but we plan to keep supporting it in the long term.

## Install via DEB

``` sh
apt install -y lsb-release ca-certificates apt-transport-https curl gnupg dpkg
curl -sS https://n.wtf/public.key | gpg --dearmor > /usr/share/keyrings/n.wtf.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/n.wtf.gpg] https://mirror-cdn.xtom.com/sb/nginx/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/n.wtf.list
apt update
apt install -y nginx-extras
```

## Install from Docker

Check out [Docker image for nginx-docker](https://github.com/u-sb/nginx-docker).

## Unsupported OS

* Debian 8 Jessie [amd64 only] <br /><small style="color: gray;">Last update 1.23.1-1nwtf+111q and no more updates</small>
* Debian 9 Stretch [amd64 only] <br /><small style="color: gray;">Last update 1.23.1-1nwtf+305 and no more updates</small>
* Ubuntu 16.04 Xenial [amd64 only] <br /><small style="color: gray;">Last update 1.23.1-1nwtf+111q and no more updates</small>
* Ubuntu 21.04 Hirsute <br /><small style="color: gray;">Last update 1.23.1-1nwtf+305 and no more updates</small>
* Ubuntu 21.10 Impish <br /><small style="color: gray;">Last update 1.23.1-1nwtf+305 and no more updates</small>

We do not provide full and long term support for legacy OS, but you can use it at your own risk. Unsupported OS will not always get the latest update and is on a best efforts basis.

``` sh
apt install -y apt-transport-https lsb-release ca-certificates curl gnupg
curl https://n.wtf/public-rsa.key | apt-key add -
curl https://n.wtf/public.key | apt-key add -
echo "deb https://mirror-cdn.xtom.com/sb/nginx/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/n.wtf.list
apt update
apt install -y nginx-extras
```

## Removed OS

* Ubuntu 14.04 Trusty
* Ubuntu 18.10 Cosmic
* Ubuntu 19.04 Disco
* Ubuntu 19.10 Eoan
* Ubuntu 20.10 Groovy

We no longer provide packages for those OS.
