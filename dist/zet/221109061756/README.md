## What are Container Images?

OCI Image Specification:

* manifest

* configuration

* set of layers

* [image index]

Everything is then bundled into a ``container image``.

Container image tools:

* [Skopeo](https://github.com/containers/skopeo) is a command line utility that performs various operations on container images and image repositories. Skopeo can work with OCI images as well as the original Docker v2 images.

* [Buildah](https://github.com/containers/buildah) open source project from Red Hat.

* [Podman](https://github.com/containers/podman) wich uses Buildah under the hood.

> Docker is not the only tool which is capable of building container images. You should really take the time to look at the article below.

More details : [Demystifying Containers — Part III: Container Images](https://medium.com/@saschagrunert/demystifying-containers-part-iii-container-images-244865de6fef)

Related : [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)

    #container #image #dockerfile
