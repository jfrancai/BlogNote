## Linux Namespaces

* Linux kernel feature introduced in 2002.
* Resources may exist in multiple spaces.
* Examples of such resources are process IDs, hostnames...

> Namespaces are a fundamental aspect of containers on Linux.

The linux namespace API :
* clone : create a child process that can share execution context with the calling process
* unshare : disassociate parts of the process execution context
* setns : reassociate thread with a namespace
* proc file : ``ls -Gg /proc/$PID/ns/`` (ns stands for namespace)

More details : [Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces), [Demystifying Containers - Part I: Kernel Space](https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504)

    #linux #clone #docker #container #namespaces
