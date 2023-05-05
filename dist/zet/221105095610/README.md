## How to create a chroot jail ?

chroot - run command or interactive shell with special root directory

Environment creation with binaries:
```bash
chr=/home/jfrancai/new-root
mkdir -p  $chr
mkdir -p $chr/{bin,lib,lib64}
cd $chr
cp -v /bin/{bash,touch,ls,rm} $chr/bin
```

Adding binaries' dependencies:
```bash
deps="$(ldd /bin/{bash,touch,ls,rm} | egrep -o '/lib.*\.[0-9]')"
for i in $deps; do cp -v --parents "$i" "${chr}"; done
```

Then, creating a new chroot:
```bash
sudo chroot new-root /bin/bash
```

> This is unsafe environment, demonstration purpose only. Also look at pivot_root(2).

More details : [How to Use the chroot Command on Linux](https://www.howtogeek.com/441534/how-to-use-the-chroot-command-on-linux/)

    #container
