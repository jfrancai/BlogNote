## What is a Container Runtime ?

The container runtime is the software installed on a host system that allows it to isolate its resources for containers, pull down container images, and manage the lifecycle of containers.

2008 - cgroups invention
* *Linux Containers* are born (LXC) : a combination of namespaces and cgroups

2013 - Docker is born
* Docker is built on top of LXC stack. They added the concept of container images.

2015 - The [Cloud Native Computing Foundation (CNCF)](https://landscape.cncf.io/) is founded
* Kubernetes v1.0
* The [Open Container Initiative (OCI)](https://opencontainers.org/about/overview/) is founded


> runC is the result of all of Docker's work on libcontainer and the OCI. It is the de-facto standard low-level container runtime. It is written in Go and maintained under Docker's open source moby project.

* The Container Runtime Interface(CRI) : [Introducing Kubernetes CRI](https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes/)

More details : [OCI Runtime Specification](https://github.com/opencontainers/runtime-spec), [Demystifying Containers - Part II: Container Runtimes](https://medium.com/@saschagrunert/demystifying-containers-part-ii-container-runtimes-e363aa378f25), [Runtime Specification](https://github.com/opencontainers/runtime-spec), [A Comprehensive Container Runtime Comparison](https://www.capitalone.com/tech/cloud/container-runtime/), [Container Runtimes | Kubernetes Guid and Tutorial](https://www.containiq.com/post/container-runtimes)

    #container #docker #runtime #kubernetes #runc #cri #oci
